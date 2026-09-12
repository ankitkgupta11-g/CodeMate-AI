import React from 'react';
import { useApp } from '../../context/AppContext';
import { COURSES } from '../../data/courses';
import {
  Flame,
  Award,
  Zap,
  TrendingUp,
  CheckCircle2,
  Clock,
  BookOpen,
} from 'lucide-react';

export const ProgressView: React.FC = () => {
  const { state } = useApp();

  const totalChaptersCompleted = state.completedChapters.length;
  const totalCourses = COURSES.length;

  const weeklyActivity = [
    { day: 'Mon', xp: 120, height: '60%' },
    { day: 'Tue', xp: 180, height: '80%' },
    { day: 'Wed', xp: 90, height: '45%' },
    { day: 'Thu', xp: 220, height: '100%' },
    { day: 'Fri', xp: 140, height: '65%' },
    { day: 'Sat', xp: 160, height: '75%' },
    { day: 'Sun', xp: 110, height: '55%' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#102312]">
          Learning Analytics
        </h1>
        <p className="text-xs sm:text-sm text-[#5a705d] mt-1">
          Review your skill growth, consistency streaks, and quiz retention rate.
        </p>
      </div>

      {/* Top 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white/80 border border-white/80 rounded-3xl p-5 shadow-xs">
          <div className="h-10 w-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
            <Flame className="h-5 w-5" />
          </div>
          <p className="text-xs font-mono uppercase text-[#5a705d]">Streak Days</p>
          <p className="text-2xl font-bold font-heading text-[#102312] mt-1">
            {state.streak} Days
          </p>
        </div>

        <div className="bg-white/80 border border-white/80 rounded-3xl p-5 shadow-xs">
          <div className="h-10 w-10 rounded-2xl bg-emerald-50 text-[#25a53a] flex items-center justify-center mb-3">
            <Award className="h-5 w-5" />
          </div>
          <p className="text-xs font-mono uppercase text-[#5a705d]">Chapters Done</p>
          <p className="text-2xl font-bold font-heading text-[#102312] mt-1">
            {totalChaptersCompleted} / 25
          </p>
        </div>

        <div className="bg-white/80 border border-white/80 rounded-3xl p-5 shadow-xs">
          <div className="h-10 w-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
            <Zap className="h-5 w-5" />
          </div>
          <p className="text-xs font-mono uppercase text-[#5a705d]">Accuracy Rate</p>
          <p className="text-2xl font-bold font-heading text-[#102312] mt-1">94%</p>
        </div>

        <div className="bg-white/80 border border-white/80 rounded-3xl p-5 shadow-xs">
          <div className="h-10 w-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
            <TrendingUp className="h-5 w-5" />
          </div>
          <p className="text-xs font-mono uppercase text-[#5a705d]">Total XP</p>
          <p className="text-2xl font-bold font-heading text-[#102312] mt-1">
            {state.pet.xp + 850} XP
          </p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Weekly Activity Bar Graph */}
        <div className="lg:col-span-7 bg-white/80 border border-white/80 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-heading text-lg font-bold text-[#102312]">
                Weekly XP Momentum
              </h3>
              <p className="text-xs text-[#5a705d]">Experience gained over the past 7 days</p>
            </div>
            <span className="text-xs font-mono text-[#25a53a] bg-[#3cc74f]/10 px-2.5 py-1 rounded-full font-bold">
              +1,020 XP this week
            </span>
          </div>

          <div className="h-48 flex items-end justify-between gap-3 pt-6 border-b border-black/5">
            {weeklyActivity.map(item => (
              <div key={item.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <span className="text-[10px] font-mono text-[#5a705d]">{item.xp}</span>
                <div
                  className="w-full max-w-[40px] rounded-t-xl bg-gradient-to-t from-[#3cc74f] to-[#5fe071] transition-all duration-500 hover:brightness-105"
                  style={{ height: item.height }}
                />
                <span className="text-xs font-semibold text-[#102312]">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Mastery Levels */}
        <div className="lg:col-span-5 bg-white/80 border border-white/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
          <h3 className="font-heading text-lg font-bold text-[#102312]">
            Subject Mastery
          </h3>
          <p className="text-xs text-[#5a705d]">Skill proficiency across curriculum modules</p>

          <div className="space-y-4 pt-2">
            <div>
              <div className="flex justify-between text-xs font-semibold text-[#102312] mb-1">
                <span>AI Prompt Engineering</span>
                <span>85%</span>
              </div>
              <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
                <div className="h-full bg-[#3cc74f] rounded-full" style={{ width: '85%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-[#102312] mb-1">
                <span>Neural Foundations</span>
                <span>70%</span>
              </div>
              <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
                <div className="h-full bg-emerald-600 rounded-full" style={{ width: '70%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-[#102312] mb-1">
                <span>Data Pipelines & Math</span>
                <span>55%</span>
              </div>
              <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '55%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-[#102312] mb-1">
                <span>Supervised Learning</span>
                <span>40%</span>
              </div>
              <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '40%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
