import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { COURSES } from '../../data/courses';
import {
  Zap,
  ArrowRight,
  Sparkles,
  Heart,
  Smile,
  Cookie,
  Trophy,
  CheckCircle2,
  CirclePlay,
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const {
    state,
    activeCompanion,
    feedPet,
    petCompanion,
    togglePetEvolution,
    navigateTo,
  } = useApp();

  const [pettingFeedback, setPettingFeedback] = useState(false);
  const [feedFeedback, setFeedFeedback] = useState(false);

  const activeCourse = COURSES.find(c => c.slug === state.activeCourseSlug) || COURSES[0];
  const nextChapter = activeCourse.chapters[0];
  const recommendedCourses = COURSES.filter(c => c.slug !== activeCourse.slug);

  const handlePet = () => {
    petCompanion();
    setPettingFeedback(true);
    setTimeout(() => setPettingFeedback(false), 1200);
  };

  const handleFeed = () => {
    feedPet();
    setFeedFeedback(true);
    setTimeout(() => setFeedFeedback(false), 1200);
  };

  const userName = state.user?.name || (state.user?.email ? state.user.email.split('@')[0] : 'Learner');

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 pb-6 animate-fade-in">
      {/* 1. Header Greeting Section */}
      <div className="relative overflow-hidden px-2 py-2 sm:px-3 sm:py-3">
        <div className="absolute -top-20 right-8 h-56 w-56 rounded-full bg-[#3cc74f]/12 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-[#61d48c]/12 blur-3xl pointer-events-none" />

        <div className="relative grid items-center gap-4 lg:grid-cols-[minmax(0,1.35fr)_240px] lg:gap-6">
          <div className="max-w-3xl">
            <p className="text-base font-medium tracking-[-0.03em] text-[#53607e] sm:text-lg">
              Good Morning, <span className="font-semibold text-[#1b2559]">{userName}</span>
            </p>
            <h1 className="mt-2 max-w-xl text-3xl font-semibold tracking-[-0.06em] text-[#16214d] sm:text-[2.6rem] sm:leading-[1.08]">
              Let's learn something amazing today.
            </h1>
          </div>

          <div className="mx-auto flex w-full max-w-[240px] justify-center lg:justify-end">
            <div className="relative flex h-[190px] w-full items-end justify-center p-1">
              <img
                src={state.pet.isEvolved ? activeCompanion.evolvedImage : activeCompanion.image}
                alt={activeCompanion.name}
                className="h-auto max-h-[190px] w-auto object-contain drop-shadow-[0_18px_28px_rgba(60,199,79,0.18)] transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Top Metric Cards: Daily Streak + Continue Learning */}
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        {/* Daily Streak Card */}
        <section className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_26px_80px_-54px_rgba(34,46,84,0.45)] backdrop-blur flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xl font-semibold tracking-[-0.04em] text-[#18224d]">Daily Streak</p>
                <p className="mt-2 text-sm leading-6 text-[#697391]">
                  A day counts toward your streak after you make progress in a course.
                </p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eef9f0] text-[#25a53a] shrink-0 shadow-sm">
                <Zap className="h-7 w-7 fill-current" />
              </div>
            </div>

            <div className="mt-6 flex items-end gap-3">
              <span className="text-5xl font-semibold tracking-[-0.08em] text-[#25a53a]">
                {state.streak}
              </span>
              <span className="pb-2 text-sm font-medium text-[#66708f]">
                days completed this week
              </span>
            </div>
          </div>

          {/* Weekly Streak Calendar */}
          <div className="mt-8 grid grid-cols-7 gap-2 sm:gap-3">
            {state.weeklyStreakDays.map(day => (
              <div key={day.dateKey} className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full transition-all ${
                    day.active
                      ? 'bg-[#eef9f0] shadow-[0_12px_28px_-20px_rgba(60,199,79,0.45)]'
                      : 'bg-[#f3f4f7]'
                  }`}
                >
                  {day.active ? (
                    <img
                      src="/streak.png"
                      alt={`${day.dayLabel} streak complete`}
                      className="w-[22px] h-[22px] object-contain"
                    />
                  ) : (
                    <Zap className="h-5 w-5 text-[#b8bfce]" />
                  )}
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-[#505a78]">{day.dayLabel}</p>
                  <p className="mt-0.5 text-xs text-[#8a92ac]">{day.active ? 'Active' : 'Idle'}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Continue Learning Card */}
        <section className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_26px_80px_-54px_rgba(34,46,84,0.45)] backdrop-blur flex flex-col justify-between">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xl font-semibold tracking-[-0.04em] text-[#18224d]">
              Continue Learning
            </p>
            <button
              onClick={() => navigateTo('dashboard', { tab: 'courses' })}
              className="text-sm font-medium text-[#25a53a] hover:text-[#1e8830] transition cursor-pointer"
            >
              See all
            </button>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-[180px_minmax(0,1fr)] items-center">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(160deg,rgba(236,249,239,0.96)_0%,rgba(227,244,229,0.92)_50%,rgba(242,249,240,0.95)_100%)] p-5 flex items-center justify-center h-44">
              <div className="absolute right-0 bottom-0 h-20 w-20 rounded-full bg-[#3cc74f]/12 blur-2xl" />
              <img
                src={activeCourse.bannerSrc}
                alt={activeCourse.name}
                className="relative mx-auto h-auto max-h-[140px] w-auto object-contain drop-shadow-sm"
              />
            </div>

            <div className="flex min-w-0 flex-col justify-center">
              <p className="text-2xl font-semibold tracking-[-0.05em] text-[#18224d]">
                {activeCourse.name}
              </p>
              <p className="mt-1.5 text-sm font-medium text-[#25a53a]">
                {activeCourse.difficulty} • {activeCourse.estimatedMinutes || 45} min
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#697391] line-clamp-2">
                {activeCourse.description}
              </p>
              <div className="mt-5">
                <button
                  onClick={() =>
                    navigateTo('chapter-runner', {
                      courseSlug: activeCourse.slug,
                      chapterSlug: nextChapter.slug,
                    })
                  }
                  className="h-11 rounded-2xl bg-[#eef9f0] px-5 font-semibold text-[#25a53a] hover:bg-[#e2f5e5] inline-flex items-center gap-2 cursor-pointer transition-all shadow-xs"
                >
                  <CirclePlay className="h-4 w-4" />
                  <span>Explore Course</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3. Companion Sanctuary & Daily Quests */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Companion Interactive Sanctuary (7 cols) */}
        <section className="lg:col-span-7 bg-white/85 border border-white/70 rounded-[1.75rem] p-6 sm:p-8 shadow-[0_26px_80px_-54px_rgba(34,46,84,0.35)] backdrop-blur flex flex-col justify-between relative overflow-hidden">
          {/* Status Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="px-3.5 py-1 rounded-full text-xs font-bold"
                style={{
                  backgroundColor: activeCompanion.bgLight,
                  color: activeCompanion.accent,
                }}
              >
                {activeCompanion.element} Companion
              </span>
              <span className="text-xs font-mono font-semibold text-[#5a705d]">
                Level {state.pet.level}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
              <Smile className="h-3.5 w-3.5" />
              <span>{state.pet.happiness}% Happy</span>
            </div>
          </div>

          {/* Center Pet Avatar */}
          <div className="my-6 flex flex-col items-center justify-center relative">
            {pettingFeedback && (
              <div className="absolute -top-4 text-sm font-bold text-rose-500 animate-bounce">
                ❤️ +5 Happiness!
              </div>
            )}
            {feedFeedback && (
              <div className="absolute -top-4 text-sm font-bold text-emerald-600 animate-bounce">
                ⭐ +25 XP!
              </div>
            )}

            <div
              className="relative w-48 h-48 rounded-full border-4 border-white shadow-inner flex items-center justify-center overflow-hidden transition-all duration-300"
              style={{ backgroundColor: activeCompanion.bgLight }}
            >
              <img
                src={state.pet.isEvolved ? activeCompanion.evolvedImage : activeCompanion.image}
                alt={state.pet.customName}
                className="w-40 h-40 object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="mt-3 text-2xl font-bold font-heading text-[#102312]">
              {state.pet.customName}
            </h3>
            <p className="text-xs text-[#5a705d]">
              {state.pet.isEvolved ? 'Cyber Sentinel Evolution' : 'Base Companion Form'}
            </p>

            {/* Experience Meter */}
            <div className="w-full max-w-sm mt-4">
              <div className="flex justify-between text-xs font-mono text-[#5a705d] mb-1">
                <span>Experience Level</span>
                <span>
                  {state.pet.xp} / {state.pet.maxXp} XP
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-black/5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#3cc74f] to-[#25a53a] rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(100, Math.round((state.pet.xp / state.pet.maxXp) * 100))}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-[#102312]/5">
            <button
              onClick={() => navigateTo('dashboard', { tab: 'ai-tutor' })}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-[#102312] to-[#1f3f22] hover:from-[#3cc74f] hover:to-[#25a53a] text-white text-xs font-bold transition-all cursor-pointer shadow-xs group"
            >
              <Sparkles className="h-4 w-4 text-[#3cc74f] group-hover:text-white transition-colors" />
              <span>Study & Chat with {activeCompanion.name} AI</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <button
                onClick={handlePet}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-2xl bg-[#fff5f5] hover:bg-[#ffebeb] text-rose-600 text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
                <span>Pet</span>
              </button>
              <button
                onClick={handleFeed}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-2xl bg-[#eef9f0] hover:bg-[#e2f5e5] text-[#25a53a] text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                <Cookie className="h-4 w-4" />
                <span>Feed (+25 XP)</span>
              </button>
              <button
                onClick={togglePetEvolution}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-2xl bg-neutral-100 hover:bg-[#3cc74f] hover:text-white text-[#102312] text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                <Sparkles className="h-4 w-4" />
                <span>{state.pet.isEvolved ? 'Revert' : 'Evolve'}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Daily Quests Card (5 cols) */}
        <section className="lg:col-span-5 bg-white/85 border border-white/70 rounded-[1.75rem] p-6 shadow-[0_26px_80px_-54px_rgba(34,46,84,0.35)] backdrop-blur flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Trophy className="h-4.5 w-4.5 text-amber-600" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#102312]">Daily Quests</h3>
              </div>
              <span className="text-xs font-mono text-[#5a705d] bg-neutral-100 px-2.5 py-0.5 rounded-full">
                Resets in 14h
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-white border border-[#102312]/5 flex items-center justify-between shadow-xs">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-[#102312]">Complete 1 Chapter Lesson</p>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#25a53a] font-semibold">
                    <img src="/gems.png" alt="Gems" className="w-3.5 h-3.5 object-contain" />
                    <span>+25 Gems</span>
                  </div>
                </div>
                <CheckCircle2 className="h-5 w-5 text-[#3cc74f]" />
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#102312]/5 flex items-center justify-between shadow-xs">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-[#102312]">Pet your AI Companion</p>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#25a53a] font-semibold">
                    <img src="/gems.png" alt="Gems" className="w-3.5 h-3.5 object-contain" />
                    <span>+10 Gems</span>
                  </div>
                </div>
                <CheckCircle2 className="h-5 w-5 text-[#3cc74f]" />
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#102312]/5 flex items-center justify-between shadow-xs">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-[#102312]">Answer Exercise Checkpoint</p>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#25a53a] font-semibold">
                    <img src="/gems.png" alt="Gems" className="w-3.5 h-3.5 object-contain" />
                    <span>+30 Gems</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#5a705d] bg-neutral-50 px-2 py-0.5 rounded">
                  In Progress
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#102312]/5 flex items-center justify-between text-xs text-[#5a705d]">
            <span>Quest Rewards Earned Today:</span>
            <span className="font-bold text-[#25a53a] font-mono">+35 Gems</span>
          </div>
        </section>
      </div>

      {/* 4. Recommended For You Section */}
      <section className="rounded-[1.75rem] border border-white/70 bg-white/75 p-6 shadow-[0_26px_80px_-56px_rgba(34,46,84,0.32)] backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xl font-semibold tracking-[-0.04em] text-[#18224d]">
              Recommended For You
            </p>
            <p className="mt-1 text-sm leading-6 text-[#697391]">
              Short, practical AI courses chosen to keep your momentum up.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recommendedCourses.map(course => (
            <article
              key={course.id}
              className="flex h-full min-h-[340px] flex-col rounded-[1.5rem] border border-[#edf0f6] bg-white/95 p-5 shadow-[0_20px_60px_-54px_rgba(34,46,84,0.45)] hover:shadow-md transition-all"
            >
              <div className="relative overflow-hidden rounded-[1.35rem] bg-[#f7faf3] p-4 flex items-center justify-center h-40">
                <div className="absolute top-3 right-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#25a53a] shadow-xs">
                  AI
                </div>
                <img
                  src={course.bannerSrc}
                  alt={course.name}
                  className="mx-auto h-[120px] w-auto object-contain drop-shadow-sm"
                />
              </div>

              <div className="mt-5 flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-xl font-semibold tracking-[-0.05em] text-[#18224d]">
                    {course.name}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#25a53a]">
                    {course.difficulty} • {course.estimatedMinutes || 45} min
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#697391] line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <button
                  onClick={() =>
                    navigateTo('chapter-runner', {
                      courseSlug: course.slug,
                      chapterSlug: course.chapters[0]?.slug,
                    })
                  }
                  className="mt-5 h-11 rounded-2xl bg-[#eef9f0] hover:bg-[#e2f5e5] px-4 font-semibold text-[#25a53a] text-sm inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Explore Course</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};
