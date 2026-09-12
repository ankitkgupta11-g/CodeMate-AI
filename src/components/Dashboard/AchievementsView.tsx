import React from 'react';
import { useApp } from '../../context/AppContext';
import { Trophy, CheckCircle2, Lock, Flame, Sparkles, Heart } from 'lucide-react';

export const AchievementsView: React.FC = () => {
  const { state } = useApp();

  const achievements = [
    {
      id: 'first_step',
      title: 'First Step',
      desc: 'Complete your first interactive chapter',
      icon: '🚀',
      unlocked: state.completedChapters.length >= 1,
      reward: '25 Gems',
    },
    {
      id: 'week_fire',
      title: 'Week of Fire',
      desc: 'Maintain a 7-day learning streak',
      icon: '🔥',
      unlocked: state.streak >= 7,
      reward: '50 Gems',
    },
    {
      id: 'cyber_evo',
      title: 'Cyber Evolution',
      desc: 'Evolve any companion into their cyber state',
      icon: '✨',
      unlocked: state.pet.isEvolved,
      reward: '75 Gems',
    },
    {
      id: 'invincible',
      title: 'Flawless Mind',
      desc: 'Complete a chapter without losing a single heart',
      icon: '🛡️',
      unlocked: true,
      reward: '30 Gems',
    },
    {
      id: 'gem_hoarder',
      title: 'Gem Hoarder',
      desc: 'Accumulate more than 400 Gems in your wallet',
      icon: '💎',
      unlocked: state.gems >= 400,
      reward: '100 Gems',
    },
    {
      id: 'polyglot',
      title: 'Menagerie',
      desc: 'Adopt and nurture different companion pets',
      icon: '🐾',
      unlocked: false,
      reward: '50 Gems',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#102312]">
          Achievements & Badges
        </h1>
        <p className="text-xs sm:text-sm text-[#5a705d] mt-1">
          Unlock badges and gem bonuses as you hit milestone study goals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map(ach => (
          <div
            key={ach.id}
            className={`p-6 rounded-[2rem] border transition-all flex flex-col justify-between ${
              ach.unlocked
                ? 'bg-white/90 border-white/80 shadow-sm'
                : 'bg-white/40 border-black/5 opacity-70'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl p-3 bg-neutral-100 rounded-2xl flex items-center justify-center">
                  {ach.icon}
                </span>
                {ach.unlocked ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#25a53a] bg-[#3cc74f]/10 px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Unlocked</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#5a705d] bg-black/5 px-2.5 py-1 rounded-full">
                    <Lock className="h-3.5 w-3.5" />
                    <span>Locked</span>
                  </span>
                )}
              </div>

              <h3 className="font-heading font-bold text-lg text-[#102312]">{ach.title}</h3>
              <p className="text-xs text-[#5a705d] mt-1 leading-relaxed">{ach.desc}</p>
            </div>

            <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold">
              <span className="text-[#5a705d]">Reward:</span>
              <span className="text-[#25a53a] flex items-center gap-1">
                <img src="/gems.png" alt="Gems" className="w-3.5 h-3.5 object-contain" />
                {ach.reward}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
