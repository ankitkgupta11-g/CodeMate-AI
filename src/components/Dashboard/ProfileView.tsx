import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { COMPANIONS } from '../../data/companions';
import { User, Check, Edit2, Sparkles, HeartHandshake, Trash2, AlertTriangle, X } from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { state, setCompanion, renamePet, deleteAccount } = useApp();
  const [customName, setCustomName] = useState(state.pet.customName);
  const [savedNameAlert, setSavedNameAlert] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [confirmInput, setConfirmInput] = useState('');

  const handleSavePetName = (e: React.FormEvent) => {
    e.preventDefault();
    if (customName.trim()) {
      renamePet(customName.trim());
      setSavedNameAlert(true);
      setTimeout(() => setSavedNameAlert(false), 2000);
    }
  };

  const handleDeleteAccount = () => {
    deleteAccount();
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#102312]">
          Profile & Companions
        </h1>
        <p className="text-xs sm:text-sm text-[#5a705d] mt-1">
          Customize your learning companion and manage personal preferences.
        </p>
      </div>

      {/* User Info Card */}
      <div className="bg-white/80 border border-white/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6">
        <div className="h-20 w-20 rounded-full bg-[#3cc74f]/10 border-2 border-[#3cc74f]/30 flex items-center justify-center text-[#25a53a]">
          <User className="h-10 w-10" />
        </div>
        <div className="space-y-1 text-center sm:text-left flex-1">
          <h3 className="font-heading font-bold text-xl text-[#102312]">
            {state.user?.name || 'Explorer'}
          </h3>
          <p className="text-xs font-mono text-[#5a705d]">{state.user?.email || 'learner@codemate.ai'}</p>
          <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
            <span className="text-[11px] font-bold bg-amber-50 border border-amber-200 text-amber-700 px-2.5 py-0.5 rounded-full">
              🔥 {state.streak} Day Streak
            </span>
            <span className="text-[11px] font-bold bg-emerald-50 border border-emerald-200 text-emerald-700 px-2.5 py-0.5 rounded-full">
              💎 {state.gems} Gems
            </span>
            <span className="text-[11px] font-bold bg-purple-50 border border-purple-200 text-purple-700 px-2.5 py-0.5 rounded-full">
              {state.hasSubscription ? 'CodeMate Plus ✨' : 'Free Member'}
            </span>
          </div>
        </div>
      </div>

      {/* Rename Active Companion */}
      <div className="bg-white/80 border border-white/80 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h3 className="font-heading font-bold text-lg text-[#102312] mb-1">
          Rename Your Companion
        </h3>
        <p className="text-xs text-[#5a705d] mb-4">
          Give your companion pet a personalized nickname that appears during lessons.
        </p>

        <form onSubmit={handleSavePetName} className="flex gap-3 max-w-md">
          <input
            type="text"
            value={customName}
            onChange={e => setCustomName(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-2xl bg-white border border-neutral-200 text-sm font-semibold text-[#102312] outline-none focus:border-[#3cc74f]"
            placeholder="Pet nickname..."
          />
          <button
            type="submit"
            className="px-5 py-2.5 bg-[#3cc74f] hover:bg-[#2fa840] text-white font-bold text-xs rounded-2xl transition-colors cursor-pointer shrink-0"
          >
            {savedNameAlert ? 'Saved ✓' : 'Save Name'}
          </button>
        </form>
      </div>

      {/* Companion Sanctuary: Switch active pet */}
      <div className="bg-white/80 border border-white/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <h3 className="font-heading font-bold text-lg text-[#102312]">
            Available Companions
          </h3>
          <p className="text-xs text-[#5a705d]">
            Switch your active companion anytime. Your level, XP, and streak remain saved!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMPANIONS.map(comp => {
            const isCurrent = state.pet.companionName.toLowerCase() === comp.name.toLowerCase();
            return (
              <div
                key={comp.name}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-white border-[#3cc74f] ring-2 ring-[#3cc74f]/20 shadow-sm'
                    : 'bg-white/60 border-black/5 hover:bg-white hover:border-black/10'
                }`}
              >
                <div>
                  <div
                    className="h-28 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: comp.bgLight }}
                  >
                    <img
                      src={state.pet.isEvolved && isCurrent ? comp.evolvedImage : comp.image}
                      alt={comp.name}
                      className="h-20 w-20 object-contain drop-shadow-xs"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-base text-[#102312]">
                      {comp.name}
                    </h4>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: comp.bgLight, color: comp.accent }}
                    >
                      {comp.element}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#25a53a] mt-0.5">{comp.title}</p>
                  <p className="text-[11px] text-[#5a705d] mt-2 line-clamp-2">{comp.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-black/5">
                  {isCurrent ? (
                    <span className="flex items-center justify-center gap-1 text-xs font-bold text-[#25a53a]">
                      <Check className="h-4 w-4" />
                      <span>Active Companion</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => setCompanion(comp.name)}
                      className="w-full py-2 bg-neutral-100 hover:bg-[#3cc74f] hover:text-white text-[#102312] text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Adopt {comp.name}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Danger Zone: Account Deletion */}
      <div className="rounded-3xl border border-rose-200/80 bg-rose-50/40 p-6 sm:p-8 backdrop-blur-sm shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-rose-600">
              <AlertTriangle className="h-5 w-5" />
              <h3 className="font-heading font-bold text-lg text-rose-950">Danger Zone</h3>
            </div>
            <p className="text-xs text-rose-900/70 max-w-xl leading-relaxed">
              Permanently delete your account, enrolled courses, pet companion progress, XP, gems, and learning streaks. This action cannot be undone.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setConfirmInput('');
              setShowDeleteConfirm(true);
            }}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs shrink-0"
          >
            <Trash2 className="h-4 w-4" />
            <span>Delete Account</span>
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-200/80 space-y-5">
            <div className="flex items-start justify-between">
              <div className="h-12 w-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <Trash2 className="h-6 w-6" />
              </div>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="h-9 w-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-xl font-bold text-[#102312]">
                Are you absolutely sure?
              </h3>
              <p className="text-xs text-[#5a705d] leading-relaxed">
                This will permanently delete your user account (<span className="font-semibold text-[#102312]">{state.user?.email || 'learner@codemate.ai'}</span>), active companion stats, streak records, and reset all course progress.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-100 text-rose-900 text-xs leading-relaxed">
              ⚠️ Please type <span className="font-mono font-bold text-rose-700">DELETE</span> below to confirm permanent deletion.
            </div>

            <input
              type="text"
              value={confirmInput}
              onChange={e => setConfirmInput(e.target.value)}
              placeholder="Type DELETE to confirm"
              className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm font-semibold outline-none focus:border-rose-500 font-mono"
            />

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-3 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold text-xs transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={confirmInput.trim() !== 'DELETE'}
                onClick={handleDeleteAccount}
                className="flex-1 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs transition-all cursor-pointer shadow-xs"
              >
                Permanently Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
