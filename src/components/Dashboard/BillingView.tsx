import React from 'react';
import { useApp } from '../../context/AppContext';
import { Check, Heart, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export const BillingView: React.FC = () => {
  const { state, toggleSubscription, refillHearts } = useApp();

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#102312]">
          Subscription & Economy
        </h1>
        <p className="text-xs sm:text-sm text-[#5a705d] mt-1">
          Manage your CodeMate Plus membership and in-game resources.
        </p>
      </div>

      {/* Quick Refill Section */}
      <div className="bg-white/80 border border-white/80 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
            <Heart className="h-6 w-6 fill-red-500 text-red-500" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-base text-[#102312]">Hearts Refill</h3>
            <p className="text-xs text-[#5a705d]">
              Current hearts: {state.hasSubscription ? 'Unlimited (Plus)' : `${state.hearts} / ${state.maxHearts}`}
            </p>
          </div>
        </div>

        <button
          onClick={refillHearts}
          disabled={state.hasSubscription || state.hearts >= state.maxHearts || state.gems < 50}
          className="px-5 py-2.5 bg-[#3cc74f] hover:bg-[#2fa840] disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-2 cursor-pointer"
        >
          <img src="/gems.png" alt="Gems" className="w-4 h-4 object-contain" />
          <span>Refill to Full (50 Gems)</span>
        </button>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Current / Free Plan */}
        <div
          className={`rounded-[2rem] p-8 border transition-all flex flex-col justify-between ${
            !state.hasSubscription
              ? 'bg-white/95 border-[#3cc74f] shadow-md'
              : 'bg-white/70 border-white/80 opacity-80'
          }`}
        >
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#102312]">Free Starter</h3>
                <p className="text-xs text-[#5a705d]">Essential learning tools</p>
              </div>
              <span className="font-mono text-3xl font-bold text-[#102312]">$0</span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-[#102312]">
                <Check className="h-4 w-4 text-[#3cc74f]" />
                <span>Byte companion included</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#102312]">
                <Check className="h-4 w-4 text-[#3cc74f]" />
                <span>5 daily hearts (replenish over time)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#102312]">
                <Check className="h-4 w-4 text-[#3cc74f]" />
                <span>Foundational chapters</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-black/5">
            {!state.hasSubscription ? (
              <span className="text-xs font-bold text-[#25a53a] block text-center">
                Current Active Plan
              </span>
            ) : (
              <button
                onClick={() => toggleSubscription(false)}
                className="w-full py-3 bg-neutral-100 hover:bg-neutral-200 text-[#102312] text-xs font-bold rounded-xl cursor-pointer"
              >
                Downgrade to Free
              </button>
            )}
          </div>
        </div>

        {/* CodeMate Plus */}
        <div
          className={`rounded-[2rem] p-8 border-2 transition-all relative flex flex-col justify-between ${
            state.hasSubscription
              ? 'bg-white/95 border-[#3cc74f] shadow-xl'
              : 'bg-gradient-to-b from-white to-[#f5fbf0] border-[#3cc74f] shadow-md'
          }`}
        >
          {state.hasSubscription && (
            <span className="absolute -top-3 right-8 bg-[#3cc74f] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Active Member
            </span>
          )}

          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#102312]">CodeMate Plus</h3>
                <p className="text-xs text-[#5a705d]">Unlimited learning & companion power</p>
              </div>
              <div className="text-right">
                <span className="font-mono text-3xl font-bold text-[#102312]">$5.99</span>
                <span className="text-xs text-[#5a705d] block">/month</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-[#102312]">
                <Check className="h-4 w-4 text-[#3cc74f]" />
                <span className="font-semibold">Unlimited Hearts (zero cooldowns)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#102312]">
                <Check className="h-4 w-4 text-[#3cc74f]" />
                <span className="font-semibold">All 8 Companion Pets unlocked</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#102312]">
                <Check className="h-4 w-4 text-[#3cc74f]" />
                <span>Instant Cyber Evolutions</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#102312]">
                <Check className="h-4 w-4 text-[#3cc74f]" />
                <span>Streak Freeze protection shields</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#102312]">
                <Check className="h-4 w-4 text-[#3cc74f]" />
                <span>Official Course Certificate badges</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-black/5">
            <button
              onClick={() => toggleSubscription()}
              className="w-full py-3.5 bg-[#3cc74f] hover:bg-[#2fa840] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              {state.hasSubscription ? 'Manage Subscription' : 'Upgrade to Plus ($5.99/mo)'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
