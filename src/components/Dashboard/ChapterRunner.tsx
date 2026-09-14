import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { COURSES } from '../../data/courses';
import { ContentBlock, Chapter, Course } from '../../types';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Heart,
  RotateCcw,
  BookOpen,
  Trophy,
  HelpCircle,
  Flame,
} from 'lucide-react';

export const ChapterRunner: React.FC = () => {
  const {
    state,
    activeCourseSlug,
    activeChapterSlug,
    activeCompanion,
    consumeHeart,
    refillHearts,
    completeChapter,
    navigateTo,
    petCompanion,
  } = useApp();

  const course: Course =
    COURSES.find(c => c.slug === activeCourseSlug) || COURSES[0];
  const chapter: Chapter =
    course.chapters.find(ch => ch.slug === activeChapterSlug) ||
    course.chapters[0] || {
      id: 'fallback',
      slug: 'fallback',
      name: 'Chapter 1',
      description: 'Introduction',
      sortOrder: 1,
      contentBlocks: [],
    };

  const blocks: ContentBlock[] = chapter.contentBlocks || [];
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);

  // User answers per block
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [selectedBool, setSelectedBool] = useState<boolean | null>(null);
  const [fillAnswer, setFillAnswer] = useState<string>('');
  const [matchingSelections, setMatchingSelections] = useState<Record<string, string>>({});

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [earnedBlockXp, setEarnedBlockXp] = useState(0);

  const [isChapterFinished, setIsChapterFinished] = useState(false);
  const [outOfHeartsModal, setOutOfHeartsModal] = useState(false);
  const [petReaction, setPetReaction] = useState<'neutral' | 'happy' | 'oops'>('neutral');

  // Reset block state on slide
  useEffect(() => {
    setSelectedChoiceId(null);
    setSelectedBool(null);
    setFillAnswer('');
    setMatchingSelections({});
    setHasSubmitted(false);
    setIsCorrect(null);
    setPetReaction('neutral');
  }, [currentBlockIndex]);

  const currentBlock = blocks[currentBlockIndex] || {
    id: 'placeholder',
    type: 'theory',
    title: 'Welcome to this Chapter',
    bodyMarkdown: 'Study materials are loaded.',
  };

  const isTheory = currentBlock.type === 'theory';

  const checkAnswer = () => {
    if (isTheory) {
      handleNext();
      return;
    }

    if (!state.hasSubscription && state.hearts <= 0) {
      setOutOfHeartsModal(true);
      return;
    }

    let correct = false;

    if (currentBlock.type === 'true-false') {
      correct = selectedBool === currentBlock.correctAnswer;
    } else if (currentBlock.type === 'multiple-choice') {
      const selected = currentBlock.choices?.find(c => c.id === selectedChoiceId);
      correct = !!selected?.isCorrect;
    } else if (currentBlock.type === 'fill-in-the-blank') {
      const val = fillAnswer.trim().toLowerCase();
      const accepted = currentBlock.acceptedAnswers?.map(a => a.toLowerCase()) || [];
      const optionCorrect = currentBlock.options?.find(o => o.isCorrect)?.text.toLowerCase();
      correct = accepted.includes(val) || (optionCorrect && optionCorrect === val) || false;
    } else if (currentBlock.type === 'matching') {
      // In sample data mode: options array where isCorrect is true
      const correctOption = currentBlock.options?.find(o => o.isCorrect);
      correct = selectedChoiceId === correctOption?.id;
    }

    setHasSubmitted(true);
    setIsCorrect(correct);

    if (correct) {
      setEarnedBlockXp(prev => prev + 15);
      setPetReaction('happy');
      petCompanion();
    } else {
      setPetReaction('oops');
      const hadHeart = consumeHeart();
      if (!state.hasSubscription && (!hadHeart || state.hearts <= 1)) {
        setOutOfHeartsModal(true);
      }
    }
  };

  const handleNext = () => {
    if (currentBlockIndex < blocks.length - 1) {
      setCurrentBlockIndex(prev => prev + 1);
    } else {
      // Finish chapter!
      completeChapter(course.slug, chapter.id, 25, 50);
      setIsChapterFinished(true);
    }
  };

  const handlePrevious = () => {
    if (currentBlockIndex > 0) {
      setCurrentBlockIndex(prev => prev - 1);
    }
  };

  const progressPercent = blocks.length > 0 ? Math.round(((currentBlockIndex + 1) / blocks.length) * 100) : 100;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#fbfff7_0%,#edf5e6_42%,#e5efde_100%)] flex flex-col justify-between">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-black/5 px-4 sm:px-8 py-3.5">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={() => navigateTo('dashboard', { tab: 'courses' })}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#2a9f44] hover:text-[#228037] transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Courses</span>
            <span className="sm:hidden">Exit</span>
          </button>

          {/* Progress Bar in Header */}
          <div className="flex-1 max-w-md mx-4">
            <div className="flex justify-between items-center text-[11px] font-mono text-[#5a705d] mb-1">
              <span className="truncate max-w-[200px]">{chapter.name}</span>
              <span>
                {currentBlockIndex + 1} / {Math.max(1, blocks.length)}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-black/5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#3cc74f] to-[#25a53a] transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Top Indicators: Hearts & Gems */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fef2f2] border border-red-200 text-xs font-bold text-red-600">
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              <span>{state.hasSubscription ? '∞' : state.hearts}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0fdf4] border border-emerald-200 text-xs font-bold text-emerald-700">
              <img src="/gems.png" alt="Gems" className="w-4 h-4 object-contain" />
              <span>{state.gems}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-8 sm:py-12 flex flex-col justify-center">
        <div className="bg-white/90 border border-white/80 rounded-[2rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(16,35,18,0.06)] backdrop-blur-md relative overflow-hidden">
          {/* Block Type Eyebrow */}
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#3cc74f]/10 text-[#25a53a]">
              {isTheory ? <BookOpen className="h-3 w-3" /> : <Sparkles className="h-3 w-3" />}
              {currentBlock.type.replace('-', ' ')}
            </span>
            <span className="text-xs font-mono text-[#5a705d]">
              Block {currentBlockIndex + 1}
            </span>
          </div>

          {/* Block Title */}
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#102312] mb-6">
            {currentBlock.title}
          </h2>

          {/* Render based on block type */}
          {/* 1. Theory */}
          {isTheory && (
            <div className="space-y-4 text-base sm:text-lg text-[#3d4b40] leading-relaxed">
              <p className="whitespace-pre-line">{currentBlock.bodyMarkdown}</p>
            </div>
          )}

          {/* 2. True / False */}
          {currentBlock.type === 'true-false' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-[#f5faee] border border-[#3cc74f]/20 text-base sm:text-lg font-medium text-[#102312] leading-relaxed">
                "{currentBlock.statement}"
              </div>

              <div className="grid grid-cols-2 gap-4">
                {(() => {
                  let trueStyle = 'border-neutral-200 bg-white hover:bg-neutral-50 text-[#102312]';
                  let falseStyle = 'border-neutral-200 bg-white hover:bg-neutral-50 text-[#102312]';

                  if (hasSubmitted) {
                    if (currentBlock.correctAnswer === true) {
                      trueStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-semibold';
                      if (selectedBool === false) {
                        falseStyle = 'border-red-400 bg-red-50 text-red-700';
                      }
                    } else {
                      falseStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-semibold';
                      if (selectedBool === true) {
                        trueStyle = 'border-red-400 bg-red-50 text-red-700';
                      }
                    }
                  } else {
                    if (selectedBool === true) {
                      trueStyle = 'border-[#3cc74f] bg-[#3cc74f]/10 text-[#25a53a] shadow-sm';
                    } else if (selectedBool === false) {
                      falseStyle = 'border-[#3cc74f] bg-[#3cc74f]/10 text-[#25a53a] shadow-sm';
                    }
                  }

                  return (
                    <>
                      <button
                        disabled={hasSubmitted}
                        onClick={() => setSelectedBool(true)}
                        className={`py-4 px-6 rounded-2xl font-heading font-bold text-base border-2 transition-all cursor-pointer ${trueStyle}`}
                      >
                        True
                      </button>
                      <button
                        disabled={hasSubmitted}
                        onClick={() => setSelectedBool(false)}
                        className={`py-4 px-6 rounded-2xl font-heading font-bold text-base border-2 transition-all cursor-pointer ${falseStyle}`}
                      >
                        False
                      </button>
                    </>
                  );
                })()}
              </div>
            </div>
          )}

          {/* 3. Multiple Choice */}
          {currentBlock.type === 'multiple-choice' && (
            <div className="space-y-6">
              <p className="text-lg font-semibold text-[#102312]">
                {currentBlock.question}
              </p>

              <div className="space-y-3">
                {currentBlock.choices?.map(choice => {
                  const isSelected = selectedChoiceId === choice.id;
                  let style = 'border-neutral-200 bg-white hover:bg-neutral-50 text-[#102312]';

                  if (hasSubmitted) {
                    if (choice.isCorrect) {
                      style = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-semibold';
                    } else if (isSelected && !choice.isCorrect) {
                      style = 'border-red-400 bg-red-50 text-red-700';
                    }
                  } else if (isSelected) {
                    style = 'border-[#3cc74f] bg-[#3cc74f]/10 text-[#25a53a] font-semibold';
                  }

                  return (
                    <button
                      key={choice.id}
                      disabled={hasSubmitted}
                      onClick={() => setSelectedChoiceId(choice.id)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${style}`}
                    >
                      <span className="text-sm sm:text-base">{choice.text}</span>
                      {hasSubmitted && choice.isCorrect && (
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                      )}
                      {hasSubmitted && isSelected && !choice.isCorrect && (
                        <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 4. Fill in the blank */}
          {currentBlock.type === 'fill-in-the-blank' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-[#f5faee] border border-[#3cc74f]/20 text-base sm:text-lg font-medium text-[#102312]">
                {currentBlock.prompt}
              </div>

              {currentBlock.options && currentBlock.options.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentBlock.options.map(opt => {
                    const isSelected = fillAnswer === opt.text;
                    let style = 'border-neutral-200 bg-white hover:bg-neutral-50 text-[#102312]';

                    if (hasSubmitted) {
                      if (opt.isCorrect) {
                        style = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-semibold';
                      } else if (isSelected && !opt.isCorrect) {
                        style = 'border-red-400 bg-red-50 text-red-700 font-semibold';
                      }
                    } else if (isSelected) {
                      style = 'border-[#3cc74f] bg-[#3cc74f]/10 text-[#25a53a] font-bold';
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={hasSubmitted}
                        onClick={() => {
                          setFillAnswer(opt.text);
                          setSelectedChoiceId(opt.id);
                        }}
                        className={`p-3.5 rounded-2xl font-medium text-sm border-2 text-center transition-all cursor-pointer ${style}`}
                      >
                        {opt.text}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <input
                    type="text"
                    disabled={hasSubmitted}
                    value={fillAnswer}
                    onChange={e => setFillAnswer(e.target.value)}
                    placeholder="Type your answer here..."
                    className="w-full p-4 rounded-2xl border-2 border-neutral-200 focus:border-[#3cc74f] outline-none text-base bg-white"
                  />
                </div>
              )}
            </div>
          )}

          {/* 5. Matching */}
          {currentBlock.type === 'matching' && (
            <div className="space-y-6">
              <p className="text-base sm:text-lg font-medium text-[#102312]">
                {currentBlock.question || currentBlock.scenario}
              </p>

              <div className="space-y-3">
                {currentBlock.options?.map(opt => {
                  const isSelected = selectedChoiceId === opt.id;
                  let style = 'border-neutral-200 bg-white hover:bg-neutral-50 text-[#102312]';

                  if (hasSubmitted) {
                    if (opt.isCorrect) {
                      style = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-semibold';
                    } else if (isSelected && !opt.isCorrect) {
                      style = 'border-red-400 bg-red-50 text-red-700';
                    }
                  } else if (isSelected) {
                    style = 'border-[#3cc74f] bg-[#3cc74f]/10 text-[#25a53a] font-semibold';
                  }

                  return (
                    <button
                      key={opt.id}
                      disabled={hasSubmitted}
                      onClick={() => setSelectedChoiceId(opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${style}`}
                    >
                      <span className="text-sm sm:text-base">{opt.text}</span>
                      {hasSubmitted && opt.isCorrect && (
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                      )}
                      {hasSubmitted && isSelected && !opt.isCorrect && (
                        <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Feedback banner when submitted */}
          {hasSubmitted && isCorrect !== null && (
            <div
              className={`mt-6 p-4 rounded-2xl border flex items-start gap-3 text-sm leading-relaxed ${
                isCorrect
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                  : 'bg-red-50/80 border-red-200 text-red-900'
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p className="font-bold">
                  {isCorrect ? 'Correct! Well done.' : 'Not quite right.'}
                </p>
                <p className="mt-1">
                  {isCorrect
                    ? currentBlock.correctFeedback || 'Great work mastering this takeaway!'
                    : currentBlock.incorrectFeedback || 'Review the clue and keep going!'}
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentBlockIndex === 0}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-black/10 text-xs font-semibold text-[#5a705d] hover:bg-neutral-50 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            {!isTheory && !hasSubmitted ? (
              <button
                onClick={checkAnswer}
                disabled={
                  (currentBlock.type === 'true-false' && selectedBool === null) ||
                  (currentBlock.type === 'multiple-choice' && !selectedChoiceId) ||
                  (currentBlock.type === 'fill-in-the-blank' && !fillAnswer) ||
                  (currentBlock.type === 'matching' && !selectedChoiceId)
                }
                className="flex items-center gap-2 px-8 py-3.5 bg-[#3cc74f] hover:bg-[#2fa840] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm rounded-2xl shadow-md transition-all cursor-pointer"
              >
                <span>Check Answer</span>
                <Sparkles className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-8 py-3.5 bg-[#3cc74f] hover:bg-[#2fa840] text-white font-bold text-sm rounded-2xl shadow-md transition-all cursor-pointer"
              >
                <span>{currentBlockIndex === blocks.length - 1 ? 'Complete Chapter' : 'Continue'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Floating Pet Companion in corner cheering */}
      <div className="fixed bottom-6 right-6 z-20 hidden sm:flex items-center gap-3 bg-white/90 border border-white/80 rounded-2xl p-3 shadow-xl backdrop-blur-md">
        <div className="relative w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center overflow-hidden border border-[#3cc74f]/20">
          <img
            src={state.pet.isEvolved ? activeCompanion.evolvedImage : activeCompanion.image}
            alt={state.pet.customName}
            className={`w-10 h-10 object-contain transition-transform duration-300 ${
              petReaction === 'happy' ? 'scale-110 -rotate-6' : ''
            }`}
          />
        </div>
        <div className="text-xs">
          <p className="font-bold font-heading text-[#102312]">{state.pet.customName}</p>
          <p className="text-[#5a705d]">
            {petReaction === 'happy'
              ? 'Awesome job! 🎉'
              : petReaction === 'oops'
              ? 'You got this! ❤️'
              : 'Learning with you...'}
          </p>
          <button
            onClick={() => navigateTo('dashboard', { tab: 'ai-tutor' })}
            className="text-[10px] font-bold text-[#1a7f29] hover:underline flex items-center gap-1 mt-0.5 cursor-pointer"
          >
            <span>Ask AI Tutor</span>
            <Sparkles className="h-2.5 w-2.5" />
          </button>
        </div>
      </div>

      {/* Out of Hearts Modal */}
      {outOfHeartsModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full text-center space-y-4 shadow-2xl border border-black/10">
            <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-500 mx-auto flex items-center justify-center">
              <Heart className="h-8 w-8 fill-red-500" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#102312]">Out of Hearts!</h3>
            <p className="text-xs text-[#5a705d]">
              Refill your hearts with 50 Gems or upgrade to CodeMate Plus for unlimited retries.
            </p>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  const success = refillHearts();
                  if (success) setOutOfHeartsModal(false);
                }}
                disabled={state.gems < 50}
                className="w-full py-3 bg-[#3cc74f] hover:bg-[#2fa840] disabled:opacity-40 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <img src="/gems.png" alt="Gems" className="w-4 h-4 object-contain" />
                <span>Refill Hearts (50 Gems)</span>
              </button>
              <button
                onClick={() => {
                  setOutOfHeartsModal(false);
                  navigateTo('dashboard', { tab: 'billing' });
                }}
                className="w-full py-3 bg-neutral-100 hover:bg-neutral-200 text-[#102312] text-xs font-bold rounded-xl cursor-pointer"
              >
                Upgrade to Plus (Unlimited)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chapter Completion Modal */}
      {isChapterFinished && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 max-w-md w-full text-center space-y-6 shadow-2xl border border-black/10 relative overflow-hidden">
            {/* Celebration Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#3cc74f]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="w-24 h-24 rounded-full bg-emerald-50 border-4 border-emerald-200 mx-auto flex items-center justify-center shadow-inner">
                <img
                  src={state.pet.isEvolved ? activeCompanion.evolvedImage : activeCompanion.image}
                  alt={state.pet.customName}
                  className="w-20 h-20 object-contain animate-bounce"
                />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#25a53a] bg-[#3cc74f]/10 px-3 py-1 rounded-full">
                  Chapter Complete!
                </span>
                <h3 className="font-heading text-3xl font-bold text-[#102312] mt-2">
                  Leveling Up!
                </h3>
                <p className="text-xs sm:text-sm text-[#5a705d] mt-1">
                  You conquered <span className="font-semibold">{chapter.name}</span> with{' '}
                  {state.pet.customName}.
                </p>
              </div>

              {/* Rewards Box */}
              <div className="grid grid-cols-3 gap-3 bg-[#f5faee] rounded-2xl p-4 border border-[#3cc74f]/20">
                <div>
                  <p className="text-[10px] font-mono uppercase text-[#5a705d]">XP Earned</p>
                  <p className="text-lg font-bold font-heading text-[#102312]">+50 XP</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-[#5a705d]">Gems</p>
                  <p className="text-lg font-bold font-heading text-[#25a53a] flex items-center justify-center gap-1">
                    <img src="/gems.png" alt="Gems" className="w-4 h-4 object-contain" />
                    +25
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-[#5a705d]">Streak</p>
                  <p className="text-lg font-bold font-heading text-amber-600 flex items-center justify-center gap-1">
                    <img src="/streak.png" alt="Streak" className="w-4 h-4 object-contain" />
                    {state.streak}d
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => navigateTo('dashboard', { tab: 'courses' })}
                  className="w-full py-4 bg-[#3cc74f] hover:bg-[#2fa840] text-white font-bold text-sm rounded-2xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  Continue to Next Chapter
                </button>
                <button
                  onClick={() => navigateTo('dashboard', { tab: 'home' })}
                  className="w-full py-3 bg-neutral-100 hover:bg-neutral-200 text-[#102312] font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
