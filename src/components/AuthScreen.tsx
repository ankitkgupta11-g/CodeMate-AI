import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { isUserOwner, getOwnerDisplayName } from '../lib/firebase';
import { User, Mail, Lock, ArrowRight, Loader2, CheckCircle2, ArrowLeft, Eye, EyeOff, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export const AuthScreen: React.FC = () => {
  const { loginWithGoogle, loginWithEmail, signupWithEmail, loginAsOwner, navigateTo } = useApp();
  const [mode, setMode] = useState<'sign-in' | 'sign-up'>('sign-in');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ tone: 'success' | 'error' | 'warning'; text: string; showGoogleAction?: boolean } | null>(null);

  const cleanEmail = email.trim();
  const isOwnerEmail = isUserOwner(cleanEmail);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    if (!cleanEmail || !password) {
      setIsLoading(false);
      setMessage({ tone: 'error', text: 'Please enter both your email address and password.' });
      return;
    }

    if (mode === 'sign-in') {
      const res = await loginWithEmail(cleanEmail, password);
      setIsLoading(false);
      if (!res.success) {
        if (res.isOperationNotAllowed) {
          setMessage({
            tone: 'warning',
            text: 'Email/Password sign-in is not enabled in Firebase Console. Please use "Continue with Google" for instant entry!',
            showGoogleAction: true,
          });
        } else {
          setMessage({ tone: 'error', text: res.error || 'Failed to sign in. Please verify your credentials.' });
        }
      }
    } else {
      const res = await signupWithEmail(name.trim() || 'Learner', cleanEmail, password);
      setIsLoading(false);
      if (!res.success) {
        if (res.isOperationNotAllowed) {
          setMessage({
            tone: 'warning',
            text: 'Email/Password sign-up is not enabled in Firebase Console. Please use "Continue with Google" for instant entry!',
            showGoogleAction: true,
          });
        } else {
          setMessage({ tone: 'error', text: res.error || 'Failed to create account.' });
        }
      }
    }
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    setMessage(null);
    const res = await loginWithGoogle();
    setIsLoading(false);
    // If user closed popup, res.error is undefined - silently reset without error banner
    if (!res.success && res.error) {
      setMessage({ tone: 'error', text: res.error });
    }
  };

  const handleInstantOwnerLogin = async () => {
    setIsLoading(true);
    setMessage(null);
    const res = await loginAsOwner(cleanEmail);
    setIsLoading(false);
    if (!res.success && res.error) {
      setMessage({ tone: 'error', text: res.error });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white relative">
      {/* Back button */}
      <button
        onClick={() => navigateTo('landing')}
        className="absolute top-6 left-6 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/80 hover:bg-white border border-black/10 text-xs font-semibold text-[#102312] shadow-sm transition-all cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </button>

      {/* Left Column (Brand Hero on md+) */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 p-12 lg:p-16 relative overflow-hidden bg-gradient-to-br from-[#102312] via-[#1a381d] to-[#25582b] text-white">
        {/* Decorative Gradients & Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#3cc74f]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#3cc74f]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-md text-center space-y-6">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mx-auto">
            <img
              src="/logo.png"
              alt="CodeMate AI Logo"
              className="h-12 w-12 object-contain filter drop-shadow-md"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-heading">
              CodeMate AI
            </h1>
            <p className="text-white/80 text-base leading-relaxed">
              Embark on an educational journey. Learn, practice, and level up with your companion pet.
            </p>
          </div>

          <div className="pt-8 flex items-center justify-center gap-6 text-xs text-white/60 font-mono">
            <span>✨ 8 Unique Companions</span>
            <span>•</span>
            <span>🔥 Daily Streaks</span>
            <span>•</span>
            <span>💎 Gem Economy</span>
          </div>
        </div>
      </div>

      {/* Right Column (Auth Form) */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 sm:p-12 lg:p-16 bg-white relative z-10">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Mobile Header Logo */}
        <div className="flex md:hidden items-center gap-3 mb-8 self-start">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
          <span className="text-xl font-bold tracking-tight text-[#102312] font-heading">
            CodeMate AI
          </span>
        </div>

        <div className="w-full max-w-md space-y-8 relative z-10">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-[#102312] font-heading">
              {mode === 'sign-in' ? 'Welcome Back' : 'Get Started'}
            </h2>
            <p className="text-sm text-[#5a705d]">
              {mode === 'sign-in'
                ? 'Sign in to continue your learning journey'
                : 'Create your account to start learning'}
            </p>
          </div>

          <div className="space-y-6">
            {/* Pill Switcher */}
            <div className="relative flex rounded-full bg-neutral-100 p-1 select-none border border-neutral-200/80">
              <div
                className="absolute top-1 bottom-1 left-1 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out"
                style={{
                  width: 'calc(50% - 4px)',
                  transform: mode === 'sign-in' ? 'translateX(0%)' : 'translateX(100%)',
                }}
              />
              <button
                type="button"
                onClick={() => setMode('sign-in')}
                className={`relative z-10 flex-1 rounded-full py-2 text-center text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  mode === 'sign-in' ? 'text-[#102312]' : 'text-[#5a705d]'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode('sign-up')}
                className={`relative z-10 flex-1 rounded-full py-2 text-center text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  mode === 'sign-up' ? 'text-[#102312]' : 'text-[#5a705d]'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Notification alert */}
            {message && (
              <div
                className={`flex flex-col gap-2.5 rounded-2xl border p-4 text-sm leading-relaxed ${
                  message.tone === 'error'
                    ? 'border-red-200 bg-red-50 text-red-700'
                    : message.tone === 'warning'
                    ? 'border-amber-200 bg-amber-50 text-amber-900'
                    : 'border-emerald-200 bg-emerald-50 text-[#102312]'
                }`}
              >
                <div className="flex items-start gap-3">
                  {message.tone === 'error' ? (
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />
                  ) : message.tone === 'warning' ? (
                    <AlertCircle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#3cc74f] mt-0.5" />
                  )}
                  <span className="flex-1">{message.text}</span>
                </div>
                {message.showGoogleAction && (
                  <button
                    type="button"
                    onClick={handleGoogleAuth}
                    disabled={isLoading}
                    className="mt-1 self-start flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#102312] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Continue with Google Now</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                )}
              </div>
            )}

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {mode === 'sign-up' && (
                <div className="relative rounded-2xl border border-neutral-200 bg-neutral-50/50 px-4 py-3 transition-all duration-200 focus-within:border-[#3cc74f] focus-within:ring-4 focus-within:ring-[#3cc74f]/10">
                  <span className="block text-[10px] font-bold text-[#5a705d] uppercase tracking-wider font-mono">
                    Full Name
                  </span>
                  <div className="flex items-center gap-2.5 mt-1">
                    <User className="h-4 w-4 text-[#5a705d] shrink-0" />
                    <input
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-transparent text-sm text-[#102312] placeholder:text-[#5a705d]/60 outline-none border-none p-0"
                      placeholder="e.g. Alex Johnson"
                    />
                  </div>
                </div>
              )}

              <div className="relative rounded-2xl border border-neutral-200 bg-neutral-50/50 px-4 py-3 transition-all duration-200 focus-within:border-[#3cc74f] focus-within:ring-4 focus-within:ring-[#3cc74f]/10">
                <span className="block text-[10px] font-bold text-[#5a705d] uppercase tracking-wider font-mono">
                  Email Address
                </span>
                <div className="flex items-center gap-2.5 mt-1">
                  <Mail className="h-4 w-4 text-[#5a705d] shrink-0" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-transparent text-sm text-[#102312] placeholder:text-[#5a705d]/60 outline-none border-none p-0"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              {/* Instant Owner Recognition Card (when owner email is entered) */}
              {isOwnerEmail && (
                <div className="rounded-2xl border border-emerald-300/80 bg-emerald-50/70 p-3.5 space-y-2.5 shadow-sm transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#102312]">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      <span>Verified Owner: {getOwnerDisplayName(cleanEmail)}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-200 text-emerald-900 font-mono">
                      Full Admin
                    </span>
                  </div>
                  <p className="text-xs text-[#2d5231] leading-relaxed">
                    Dedicated owner credentials recognized. You can enter instantly with full admin privileges.
                  </p>
                  <button
                    type="button"
                    onClick={handleInstantOwnerLogin}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#102312] hover:bg-black text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                    <span>1-Click Instant Owner Login</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </button>
                </div>
              )}

              <div className="relative rounded-2xl border border-neutral-200 bg-neutral-50/50 px-4 py-3 transition-all duration-200 focus-within:border-[#3cc74f] focus-within:ring-4 focus-within:ring-[#3cc74f]/10">
                <span className="block text-[10px] font-bold text-[#5a705d] uppercase tracking-wider font-mono">
                  Password
                </span>
                <div className="flex items-center gap-2.5 mt-1">
                  <Lock className="h-4 w-4 text-[#5a705d] shrink-0" />
                  <input
                    id="auth-password-input"
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full bg-transparent text-sm text-[#102312] placeholder:text-[#5a705d]/60 outline-none border-none p-0 font-mono tracking-tight"
                    placeholder="Enter your password (min. 6 chars)"
                  />
                  <button
                    type="button"
                    id="toggle-password-visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-1 text-[#5a705d] hover:text-[#102312] transition-colors cursor-pointer rounded-lg hover:bg-neutral-200/60 shrink-0"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-[#3cc74f]" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3cc74f] px-4 py-3.5 text-sm font-semibold text-white hover:bg-[#2fa840] transition-all duration-200 shadow-[0_12px_30px_-10px_rgba(60,199,79,0.35)] disabled:cursor-not-allowed disabled:opacity-60 overflow-hidden cursor-pointer"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <span>{mode === 'sign-in' ? 'Sign In with Email' : 'Create Account'}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-neutral-200" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#5a705d]">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            {/* Google OAuth Button */}
            <button
              type="button"
              onClick={handleGoogleAuth}
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50 px-4 py-3.5 text-sm font-semibold text-[#102312] transition-all duration-200 shadow-sm disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12c0 2.06.45 3.84 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Bottom Toggle */}
            <p className="text-center text-sm text-[#5a705d]">
              {mode === 'sign-in' ? 'New to CodeMate?' : 'Already have an account?'}{' '}
              <button
                type="button"
                onClick={() => setMode(mode === 'sign-in' ? 'sign-up' : 'sign-in')}
                className="font-semibold text-[#25a53a] hover:text-[#3cc74f] transition-colors duration-150 underline decoration-dotted underline-offset-4 cursor-pointer"
              >
                {mode === 'sign-in' ? 'Create one' : 'Sign in instead'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
