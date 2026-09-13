import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HomeView } from './HomeView';
import { CoursesView } from './CoursesView';
import { ProgressView } from './ProgressView';
import { AchievementsView } from './AchievementsView';
import { BillingView } from './BillingView';
import { ProfileView } from './ProfileView';
import { CodeMateAIChat } from './CodeMateAIChat';
import {
  Home,
  BookOpen,
  BarChart3,
  Award,
  CreditCard,
  User,
  LogOut,
  Heart,
  Menu,
  X,
  Sparkles,
  Flame,
  Bot,
} from 'lucide-react';

export const DashboardShell: React.FC = () => {
  const { state, dashboardTab, activeCompanion, navigateTo, logout, refillHearts } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'ai-tutor', label: 'CodeMate AI', icon: Bot, isAi: true },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'profile', label: 'Profile', icon: User },
  ] as const;

  const renderActiveView = () => {
    switch (dashboardTab) {
      case 'home':
        return <HomeView />;
      case 'ai-tutor':
        return <CodeMateAIChat onNavigateToCourse={(slug) => navigateTo('chapter-runner', { courseSlug: slug })} />;
      case 'courses':
        return <CoursesView />;
      case 'progress':
        return <ProgressView />;
      case 'achievements':
        return <AchievementsView />;
      case 'billing':
        return <BillingView />;
      case 'profile':
        return <ProfileView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex bg-[radial-gradient(circle_at_top_left,#fbfff7_0%,#edf5e6_42%,#e5efde_100%)] text-[#102312] selection:bg-[#3cc74f]/30">
      {/* Desktop Sidebar */}
      <aside className="w-64 shrink-0 hidden md:flex flex-col border-r border-[#102312]/10 bg-white/75 backdrop-blur-xl min-h-screen sticky top-0 h-screen z-20">
        {/* Brand Header */}
        <div className="py-4 px-4 border-b border-[#102312]/5">
          <button
            onClick={() => navigateTo('dashboard', { tab: 'home' })}
            className="flex items-center gap-3 rounded-2xl p-1.5 hover:bg-[#102312]/5 transition cursor-pointer w-full text-left"
          >
            <img
              src="/logo.png"
              alt="CodeMate AI"
              className="h-10 w-10 object-contain shrink-0"
            />
            <div className="min-w-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#102312]/55">
                Learn Mode
              </p>
              <h1 className="font-heading text-2xl leading-none tracking-[-0.05em] text-[#102312] font-bold">
                CodeMate
              </h1>
            </div>
          </button>
        </div>

        {/* Nav Items */}
        <div className="py-4 px-3 flex-1 flex flex-col gap-1.5 overflow-y-auto">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = dashboardTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigateTo('dashboard', { tab: item.id })}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-all cursor-pointer w-full text-left ${
                  isActive
                    ? 'bg-[#3cc74f] text-white shadow-[0_8px_20px_-6px_rgba(60,199,79,0.35)] font-semibold'
                    : 'text-[#102312]/75 hover:bg-[#102312]/5 hover:text-[#102312] font-medium'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="text-base">{item.label}</span>
                </div>
                {'isAi' in item && item.isAi && (
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/25 text-white' : 'bg-[#3cc74f]/15 text-[#1a7f29]'
                    }`}
                  >
                    AI
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Sidebar Upgrade Banner & Sign Out */}
        <div className="p-3 mt-auto border-t border-[#102312]/5 space-y-3">
          <div className="rounded-[1.5rem] border border-[#102312]/10 bg-[linear-gradient(180deg,rgba(232,255,230,0.95),rgba(213,245,212,0.95))] text-[#102312] shadow-[0_18px_40px_-28px_rgba(16,35,18,0.35)] p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-[#25a53a]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-heading text-base font-bold tracking-[-0.04em] text-[#102312]">
                  {state.hasSubscription ? 'CodeMate Plus' : 'Upgrade to Pro'}
                </p>
                <p className="mt-1 text-xs leading-4 text-[#102312]/70">
                  {state.hasSubscription
                    ? 'Unlimited hearts & full course library active.'
                    : 'Unlock the full CodeMate catalog and premium lessons.'}
                </p>
                {!state.hasSubscription && (
                  <button
                    onClick={() => navigateTo('dashboard', { tab: 'billing' })}
                    className="mt-3.5 h-9 rounded-xl bg-[#3cc74f] hover:bg-[#25a53a] px-3.5 text-xs font-semibold text-white transition-all cursor-pointer w-full"
                  >
                    View plans
                  </button>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2.5 rounded-2xl px-4 py-2.5 text-sm font-medium text-[#d9383a] hover:bg-rose-50/70 transition-colors cursor-pointer w-full text-left"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Column */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-30 w-full border-b border-[#102312]/10 bg-[rgba(238,244,230,0.85)] backdrop-blur-xl">
          <div className="flex min-h-20 items-center justify-between gap-4 px-4 py-4 md:px-8">
            {/* Left Header Title / Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden h-11 w-11 rounded-full border border-[#102312]/10 bg-white/80 text-[#102312] shadow-sm hover:bg-white flex items-center justify-center cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#5a705d]">
                  Dashboard
                </p>
                <p className="font-heading text-2xl tracking-[-0.05em] text-[#102312] font-bold leading-tight">
                  CodeMate
                </p>
              </div>
            </div>

            {/* Right Resource Badges & Profile */}
            <div className="flex items-center justify-end gap-2 sm:gap-3">
              {/* Streak Badge with Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-full border border-[#102312]/10 bg-white/80 px-3 shadow-[0_14px_34px_-26px_rgba(16,35,18,0.32)] cursor-pointer hover:bg-white hover:scale-102 transition-all"
                >
                  <img src="/streak.png" alt="Streak icon" className="h-5 w-5 object-contain" />
                  <span className="text-sm font-semibold text-[#102312]">{state.streak}</span>
                </button>
                <div className="absolute right-0 top-full mt-2 w-80 p-5 rounded-2xl bg-white/95 border border-[#102312]/10 shadow-[0_20px_50px_rgba(16,35,18,0.15)] backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="flex flex-col gap-3 text-left">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#102312]/10">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                        <Flame className="h-5 w-5 fill-orange-500 text-orange-500" />
                      </div>
                      <h3 className="font-heading text-base tracking-[-0.03em] font-bold text-[#102312]">
                        Daily Streak
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[#5a705d]">
                      Complete at least one chapter every day to keep your streak going!
                    </p>
                    <div className="rounded-xl bg-orange-50/70 border border-orange-100/70 p-3 text-xs text-orange-800 leading-relaxed font-medium">
                      ⚠️ If you miss a day, your streak will reset to 0. Keep it active!
                    </div>
                  </div>
                </div>
              </div>

              {/* Gems Badge with Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-full border border-[#102312]/10 bg-white/80 px-3 shadow-[0_14px_34px_-26px_rgba(16,35,18,0.32)] cursor-pointer hover:bg-white hover:scale-102 transition-all"
                >
                  <img src="/gems.png" alt="Gems icon" className="h-5 w-5 object-contain" />
                  <span className="text-sm font-semibold text-[#102312]">{state.gems}</span>
                </button>
                <div className="absolute right-0 top-full mt-2 w-80 p-5 rounded-2xl bg-white/95 border border-[#102312]/10 shadow-[0_20px_50px_rgba(16,35,18,0.15)] backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="flex flex-col gap-3 text-left">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#102312]/10">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                        <img src="/gems.png" alt="Gems" className="h-5 w-5 object-contain" />
                      </div>
                      <h3 className="font-heading text-base tracking-[-0.03em] font-bold text-[#102312]">
                        Your Gems
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[#5a705d]">
                      Gems are premium rewards granted for practice and complete exercises.
                    </p>
                    <div className="rounded-xl bg-purple-50/70 border border-purple-100/70 p-3 text-xs text-purple-800 leading-relaxed font-medium">
                      💎 Each chapter exercise you finish earns you gems!
                    </div>
                  </div>
                </div>
              </div>

              {/* Hearts Badge with Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  onClick={refillHearts}
                  title="Click to refill hearts with 50 gems"
                  className="flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-full border border-[#102312]/10 bg-white/80 px-3 shadow-[0_14px_34px_-26px_rgba(16,35,18,0.32)] cursor-pointer hover:bg-white hover:scale-102 transition-all"
                >
                  <Heart className="h-5 w-5 fill-[#ea4f74] text-[#ea4f74]" />
                  <span className="text-sm font-semibold text-[#102312]">
                    {state.hasSubscription ? '∞' : state.hearts}
                  </span>
                </button>
                <div className="absolute right-0 top-full mt-2 w-80 p-5 rounded-2xl bg-white/95 border border-[#102312]/10 shadow-[0_20px_50px_rgba(16,35,18,0.15)] backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none group-hover:pointer-events-auto">
                  <div className="flex flex-col gap-3 text-left">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#102312]/10">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
                        <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />
                      </div>
                      <h3 className="font-heading text-base tracking-[-0.03em] font-bold text-[#102312]">
                        Hearts & Hints
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[#5a705d]">
                      Hearts allow you to request hints when stuck on tricky exercise questions.
                    </p>
                    <div className="rounded-xl bg-rose-50/70 border border-rose-100/70 p-3 text-xs text-rose-800 leading-relaxed font-medium">
                      ❤️ Click to refill hearts (costs 50 gems) or upgrade to Plus for unlimited hearts!
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Avatar Button with Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#102312]/10 bg-white/80 shadow-[0_18px_40px_-28px_rgba(16,35,18,0.32)] cursor-pointer hover:bg-white hover:scale-102 transition-all"
                >
                  <img
                    src={activeCompanion.image}
                    alt={state.user?.name || 'Selected companion avatar'}
                    className="h-9 w-9 object-contain"
                  />
                </button>
                <div className="absolute right-0 top-full mt-2 w-64 p-3 rounded-2xl bg-white/95 border border-[#102312]/10 shadow-[0_20px_50px_rgba(16,35,18,0.15)] backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none group-hover:pointer-events-auto space-y-1">
                  <div className="px-3 py-2 border-b border-[#102312]/10">
                    <p className="text-xs font-bold text-[#102312] truncate">
                      {state.user?.name || 'Learner'}
                    </p>
                    <p className="text-[11px] text-[#5a705d] truncate">
                      {state.user?.email || 'user@codemate.ai'}
                    </p>
                  </div>
                  <button
                    onClick={() => navigateTo('dashboard', { tab: 'profile' })}
                    className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-[#102312] hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <User className="h-4 w-4 text-[#5a705d]" />
                    <span>Account Settings</span>
                  </button>
                  <button
                    onClick={() => navigateTo('dashboard', { tab: 'billing' })}
                    className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-[#102312] hover:bg-slate-50 transition-colors text-left cursor-pointer"
                  >
                    <CreditCard className="h-4 w-4 text-[#5a705d]" />
                    <span>Billing & Plan</span>
                  </button>
                  <div className="h-px bg-[#102312]/10 my-1" />
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium text-[#d9383a] hover:bg-rose-50/50 transition-colors text-left cursor-pointer"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-[#102312]/10 bg-white/95 backdrop-blur-xl px-4 py-4 space-y-1 animate-fade-in shadow-lg">
              {navItems.map(item => {
                const Icon = item.icon;
                const isActive = dashboardTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      navigateTo('dashboard', { tab: item.id });
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-semibold transition-all cursor-pointer text-left ${
                      isActive
                        ? 'bg-[#3cc74f] text-white shadow-sm'
                        : 'text-[#5a705d] hover:bg-neutral-100 hover:text-[#102312]'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              <div className="pt-2 border-t border-[#102312]/10 mt-2">
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-semibold text-[#d9383a] hover:bg-rose-50 transition-colors text-left cursor-pointer"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </header>

        {/* Main Content Area */}
        <main className="flex-1 px-4 pb-8 pt-4 md:px-8 md:pb-10 md:pt-5">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-6">
            {renderActiveView()}
          </div>
        </main>

        {/* Floating Companion AI Launcher (when not on ai-tutor tab) */}
        {dashboardTab !== 'ai-tutor' && (
          <div className="fixed bottom-6 right-6 z-40">
            <button
              onClick={() => navigateTo('dashboard', { tab: 'ai-tutor' })}
              className="group flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-full bg-[#102312] hover:bg-[#1a331d] text-white shadow-[0_16px_36px_-10px_rgba(16,35,18,0.5)] border border-[#3cc74f]/40 hover:scale-105 transition-all cursor-pointer"
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center p-1 border border-white/20 relative"
                style={{ backgroundColor: activeCompanion.bgLight || '#ebfbeb' }}
              >
                <img
                  src={state.pet.isEvolved ? activeCompanion.evolvedImage : activeCompanion.image}
                  alt={activeCompanion.name}
                  className="w-full h-full object-contain"
                />
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#3cc74f] border-2 border-[#102312] animate-pulse" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#3cc74f]">Study Partner</p>
                <p className="text-xs font-heading font-bold text-white">Ask {state.pet.customName || activeCompanion.name}</p>
              </div>
              <Sparkles className="h-4 w-4 text-[#3cc74f] group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
