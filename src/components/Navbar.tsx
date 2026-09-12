import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { state, navigateTo } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigateTo('landing');
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <nav className="flex items-center justify-between bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl px-6 py-4 shadow-[0_8px_30px_rgb(16,35,18,0.03)] transition-all duration-300">
        {/* Brand */}
        <button
          onClick={() => navigateTo('landing')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="relative h-9 w-9 bg-[#3cc74f] rounded-xl flex items-center justify-center text-white shadow-[0_4px_12px_rgba(60,199,79,0.3)] transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-[#102312]">
            CodeMate <span className="text-[#3cc74f]">AI</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('features')}
            className="text-sm font-semibold text-[#5a705d] hover:text-[#102312] transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('companions')}
            className="text-sm font-semibold text-[#5a705d] hover:text-[#102312] transition-colors cursor-pointer"
          >
            Companions
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-sm font-semibold text-[#5a705d] hover:text-[#102312] transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-sm font-semibold text-[#5a705d] hover:text-[#102312] transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {state.isLoggedIn ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateTo('dashboard', { tab: 'home' })}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#3cc74f] text-white font-semibold text-sm rounded-2xl hover:bg-[#25a53a] shadow-[0_8px_20px_-6px_rgba(60,199,79,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigateTo('landing')}
                className="inline-flex items-center justify-center px-4 py-2.5 bg-white border border-[#102312]/10 text-[#5a705d] hover:text-[#102312] font-semibold text-sm rounded-2xl hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => navigateTo('login')}
                className="text-sm font-semibold text-[#5a705d] hover:text-[#102312] px-4 py-2 transition-colors cursor-pointer"
              >
                Sign In
              </button>
              <button
                onClick={() => navigateTo('login')}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#3cc74f] text-white font-semibold text-sm rounded-2xl hover:bg-[#25a53a] shadow-[0_8px_20px_-6px_rgba(60,199,79,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Adopt a Pet Free
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          {state.isLoggedIn && (
            <button
              onClick={() => navigateTo('dashboard')}
              className="px-3 py-1.5 bg-[#3cc74f] text-white text-xs font-semibold rounded-xl"
            >
              Dashboard
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#102312] hover:bg-black/5 rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl space-y-3">
          <button
            onClick={() => scrollToSection('features')}
            className="w-full text-left py-2 px-3 text-sm font-medium text-[#102312] hover:bg-black/5 rounded-xl"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('companions')}
            className="w-full text-left py-2 px-3 text-sm font-medium text-[#102312] hover:bg-black/5 rounded-xl"
          >
            Companions
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="w-full text-left py-2 px-3 text-sm font-medium text-[#102312] hover:bg-black/5 rounded-xl"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="w-full text-left py-2 px-3 text-sm font-medium text-[#102312] hover:bg-black/5 rounded-xl"
          >
            FAQ
          </button>

          <div className="pt-2 border-t border-black/5 flex flex-col gap-2">
            {state.isLoggedIn ? (
              <button
                onClick={() => {
                  setMobileOpen(false);
                  navigateTo('dashboard');
                }}
                className="w-full py-3 bg-[#3cc74f] text-white text-center font-semibold rounded-xl text-sm"
              >
                Go to Dashboard
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    navigateTo('login');
                  }}
                  className="w-full py-2.5 border border-black/10 text-center font-semibold rounded-xl text-sm text-[#102312]"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    navigateTo('login');
                  }}
                  className="w-full py-3 bg-[#3cc74f] text-white text-center font-semibold rounded-xl text-sm shadow-md"
                >
                  Adopt Your Pet Free
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
