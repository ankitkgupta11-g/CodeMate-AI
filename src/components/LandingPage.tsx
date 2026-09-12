import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Navbar } from './Navbar';
import {
  Flame,
  ArrowRight,
  Sparkles,
  Check,
  Star,
  HelpCircle,
} from 'lucide-react';

interface CompanionItem {
  name: string;
  title: string;
  desc: string;
  image: string;
  evolvedImage: string;
  accent: string;
  color: string;
  specializedCourses: string[];
}

const LANDING_COMPANIONS: CompanionItem[] = [
  {
    name: 'Byte',
    title: 'The Cyber Pup',
    desc: 'Enjoys debugging code and eating bits of data. Perfect for beginner developers.',
    image: '/characters/Byte_1.png',
    evolvedImage: '/characters/Byte.png',
    accent: 'bg-[#eef9f0] border-[#3cc74f]/20 text-[#25a53a]',
    color: '#3cc74f',
    specializedCourses: ['Intro to Python', 'Data Structures', 'SQL Queries'],
  },
  {
    name: 'Hedge',
    title: 'The Prickly Coder',
    desc: 'Loves structured logic and optimization. A tough exterior but deep algorithmic core.',
    image: '/characters/Hedge_1.png',
    evolvedImage: '/characters/Hedge.png',
    accent: 'bg-[#fff5ea] border-[#f3a850]/20 text-[#c87618]',
    color: '#f3a850',
    specializedCourses: ['Boolean Logic', 'Algorithms', 'Code Optimization'],
  },
  {
    name: 'Kumo',
    title: 'The Cloud Kitty',
    desc: 'Dreamy and fluffy, specializes in scalable systems and network engineering.',
    image: '/characters/Kumo_1.png',
    evolvedImage: '/characters/Kumo.png',
    accent: 'bg-[#f4f7ff] border-[#5b8cff]/20 text-[#2c5ebd]',
    color: '#5b8cff',
    specializedCourses: ['Cloud Computing', 'APIs & Microservices', 'DevOps Basics'],
  },
  {
    name: 'Milo',
    title: 'The Logic Monkey',
    desc: 'Full of energy! Loves math puzzles, boolean algebra, and sorting algorithms.',
    image: '/characters/Milo_1.png',
    evolvedImage: '/characters/Milo.png',
    accent: 'bg-[#fff2f2] border-[#ff6b6b]/20 text-[#c92a2a]',
    color: '#ff6b6b',
    specializedCourses: ['Math for CS', 'Sorting Drills', 'Algorithmic Puzzles'],
  },
  {
    name: 'Nimbus',
    title: 'The Wise Storm Owl',
    desc: 'Highly intellectual. Guides you through machine learning, AI, and neural networks.',
    image: '/characters/Nimbus_1.png',
    evolvedImage: '/characters/Nimbus.png',
    accent: 'bg-[#f9f2ff] border-[#a855f7]/20 text-[#701a75]',
    color: '#a855f7',
    specializedCourses: ['Machine Learning', 'Neural Networks', 'AI Ethics'],
  },
  {
    name: 'Pip',
    title: 'The Scripting Penguin',
    desc: 'Playful and fast. A master of Python scripting, data scraping, and automation.',
    image: '/characters/Pip_1.png',
    evolvedImage: '/characters/pip.png',
    accent: 'bg-[#e6fcf5] border-[#0ca678]/20 text-[#097959]',
    color: '#0ca678',
    specializedCourses: ['Python Automation', 'Web Scraping', 'Data Pipelines'],
  },
  {
    name: 'Rexi',
    title: 'The Data Dino',
    desc: 'Ancient and incredibly robust. Specializes in SQL, big data, and data warehouses.',
    image: '/characters/Rexi_1.png',
    evolvedImage: '/characters/Rexi.png',
    accent: 'bg-[#fff9db] border-[#fcc419]/20 text-[#947000]',
    color: '#fcc419',
    specializedCourses: ['Database Schema', 'SQL Mastery', 'Data Warehouses'],
  },
  {
    name: 'Uni',
    title: 'The Creative Unicorn',
    desc: 'Sparkly and design-oriented. A master of UI/UX, CSS layouts, and frontend art.',
    image: '/characters/Uni_1.png',
    evolvedImage: '/characters/Uni.png',
    accent: 'bg-[#fff0f6] border-[#e64980]/20 text-[#a61e4d]',
    color: '#e64980',
    specializedCourses: ['Modern CSS & Layout', 'UI/UX Design', 'Frontend Art'],
  },
];

const TESTIMONIALS = [
  {
    stars: 5,
    quote:
      '“I used to struggle with code syntax drills. Having Milo celebrate when I write correct algorithms makes maintaining my 30-day streak so addictive.”',
    initials: 'SL',
    initialsColor: 'text-[#25a53a]',
    name: 'Sarah Lin',
    role: 'Junior Frontend Engineer',
  },
  {
    stars: 5,
    quote:
      '“Adopting Kumo helped me scale my API knowledge. The cloud cat evolves when I answer system structure questions, which helps me visualize abstract networking concepts.”',
    initials: 'MK',
    initialsColor: 'text-[#2ca949]',
    name: 'Marcus K.',
    role: 'Self-taught Web Developer',
  },
  {
    stars: 5,
    quote:
      '“Highly recommend CodeMate Plus! The unlimited hearts mean I can explore buggy solutions and get custom AI diagnostics feedback without feeling discouraged.”',
    initials: 'DB',
    initialsColor: 'text-[#c87618]',
    name: 'Devon Brooks',
    role: 'CS Undergraduate Student',
  },
];

const FAQS = [
  {
    question: 'What is CodeMate AI?',
    answer:
      'CodeMate AI is an interactive learning platform that blends gamification with technical education. As you complete lessons in coding, math, and artificial intelligence, your chosen companion pet levels up, earns rewards, and evolves to guide you on more advanced learning quests.',
  },
  {
    question: 'How does the pet evolution work?',
    answer:
      'Every time you complete a chapter, answer questions correctly, and maintain your daily streak, you earn Experience Points (XP) and Gems. Once your pet reaches a certain XP threshold, you can use your Gems to trigger their evolution, transforming them from their base avatar into their fully realized evolved forms.',
  },
  {
    question: 'Can I switch or adopt more than one pet?',
    answer:
      'When you sign up, you adopt your first base pet for free. As you progress and accumulate gems, you can unlock other companions and choose who joins you on your daily dashboard shell to cheer you on.',
  },
  {
    question: 'How does the subscription plan work?',
    answer:
      'Our Free Tier gives you full access to introductory chapters of all courses with a daily limit of 3 hearts. Upgrading to the CodeMate Plus tier (Monthly or Yearly) removes the heart limit entirely, provides unlimited AI-powered hints and review sheets, and grants access to exclusive premium pet skins and achievements.',
  },
  {
    question: 'How are the courses formatted?',
    answer:
      'Lessons are designed as bite-sized, interactive chapters containing code editors, multiple choice cards, and AI-powered checkpoints. They are structured to take just 5-10 minutes a day, fitting perfectly into your busy routine.',
  },
];

export const LandingPage: React.FC = () => {
  const { state, navigateTo, setCompanion, toggleSubscription } = useApp();
  const [heroEvolved, setHeroEvolved] = useState(false);
  const [selectedPet, setSelectedPet] = useState<CompanionItem>(LANDING_COMPANIONS[0]);
  const [companionEvolvedPreview, setCompanionEvolvedPreview] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleAdoptPet = (petName: string) => {
    setCompanion(petName);
    if (state.isLoggedIn) {
      navigateTo('dashboard', { tab: 'home' });
    } else {
      navigateTo('login');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#eef4e6] text-[#102312] overflow-x-hidden selection:bg-[#3cc74f]/30">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-bg-landing pointer-events-none z-0" />

      {/* Header / Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#3cc74f]/20 bg-[#3cc74f]/8 px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#25a53a]">
                <Flame className="h-4 w-4 animate-pulse" />
                <span>Next-Gen Gamified Learning</span>
              </div>

              <div className="space-y-4">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#102312] leading-[1.05]">
                  Master Tech Skills. <br className="hidden sm:inline" />
                  Evolve Your{' '}
                  <span className="text-[#3cc74f] underline decoration-wavy decoration-[#3cc74f]/30 underline-offset-4">
                    AI Companion
                  </span>
                </h1>
                <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-[#5a705d] leading-relaxed">
                  Adopt a customizable AI pet that journeys with you. Maintain streaks, earn gems, and complete hands-on interactive courses on coding, AI, machine learning, and data science.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {state.isLoggedIn ? (
                  <button
                    onClick={() => navigateTo('dashboard', { tab: 'home' })}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3cc74f] hover:bg-[#25a53a] text-white font-bold rounded-2xl shadow-[0_12px_30px_-6px_rgba(60,199,79,0.4)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer"
                  >
                    <span>Enter Dashboard</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => navigateTo('login')}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3cc74f] hover:bg-[#25a53a] text-white font-bold rounded-2xl shadow-[0_12px_30px_-6px_rgba(60,199,79,0.4)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer"
                    >
                      <span>Adopt Your Pet Free</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => {
                        if (state.isLoggedIn) {
                          navigateTo('dashboard', { tab: 'courses' });
                        } else {
                          navigateTo('login');
                        }
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white border border-[#102312]/10 hover:border-[#102312]/20 hover:bg-[#fcfdfa] text-[#102312] font-bold rounded-2xl transition-all cursor-pointer"
                    >
                      Browse Courses
                    </button>
                  </>
                )}
              </div>

              {/* Metrics */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#102312]/10 max-w-md mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-heading text-[#102312]">10k+</p>
                  <p className="text-xs text-[#5a705d]">Active Learners</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-heading text-[#102312]">8</p>
                  <p className="text-xs text-[#5a705d]">Unique Pets</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-heading text-[#102312]">25+</p>
                  <p className="text-xs text-[#5a705d]">Bite-sized Chapters</p>
                </div>
              </div>
            </div>

            {/* Right Column (Pet Simulator) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] aspect-square bg-gradient-to-tr from-[#3cc74f]/10 to-transparent rounded-[2.5rem] p-6 flex flex-col justify-center items-center">
                {/* Floating Streak Badge */}
                <div className="absolute top-6 left-6 bg-white/95 border border-white/50 rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2.5 animate-float select-none z-20">
                  <div className="h-8 w-8 rounded-lg bg-[#fff5ea] flex items-center justify-center">
                    <img src="/streak.png" alt="Streak" className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#5a705d] uppercase tracking-wider font-mono">Streak</p>
                    <p className="text-xs font-bold text-[#102312]">12 Days Active</p>
                  </div>
                </div>

                {/* Floating Gems Badge */}
                <div
                  className="absolute bottom-10 right-6 bg-white/95 border border-white/50 rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2.5 animate-float select-none z-20"
                  style={{ animationDelay: '2.5s' }}
                >
                  <div className="h-8 w-8 rounded-lg bg-[#eef9f0] flex items-center justify-center">
                    <img src="/gems.png" alt="Gems" className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#5a705d] uppercase tracking-wider font-mono">Gems Wallet</p>
                    <p className="text-xs font-bold text-[#25a53a]">450 Gems</p>
                  </div>
                </div>

                {/* Inner Pet Card */}
                <div className="w-full bg-white/90 border border-white/80 rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_50px_rgba(16,35,18,0.08)] backdrop-blur-md relative overflow-hidden flex flex-col items-center z-10">
                  <div className="w-full flex items-center justify-between border-b border-[#102312]/5 pb-3 mb-5">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest bg-black/[0.04] px-2 py-0.5 rounded border border-[#102312]/5">
                      Pet Evolution Simulator
                    </span>
                  </div>

                  <div className="relative w-44 h-44 bg-gradient-to-b from-[#eef9f0] to-white rounded-full border-4 border-white shadow-inner flex items-center justify-center overflow-hidden transition-all duration-300">
                    <img
                      src={heroEvolved ? '/characters/Byte.png' : '/characters/Byte_1.png'}
                      alt="Byte Companion"
                      className="w-36 h-36 object-contain transition-all duration-500 hover:scale-105 filter drop-shadow-md"
                    />
                  </div>

                  <div className="text-center mt-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eef9f0] px-3 py-1 text-xs font-semibold text-[#2ca949]">
                      <Sparkles className="h-3 w-3" />
                      {heroEvolved ? 'Evolved Form: Cyber Sentinel' : 'Base Form: Byte Pup'}
                    </span>
                    <h4 className="mt-2 text-xl font-bold font-heading text-[#102312]">Byte</h4>
                    <p className="mt-1 text-xs text-[#5a705d] max-w-[280px]">
                      {heroEvolved
                        ? 'Has mastered conditional loops and asynchronous states. Ready for production.'
                        : 'Learning basic data types and simple operations. Feed him correct answers to level up!'}
                    </p>
                  </div>

                  <button
                    onClick={() => setHeroEvolved(!heroEvolved)}
                    className="mt-5 flex items-center justify-center gap-2 w-full py-3 bg-[#102312] text-white hover:bg-[#3cc74f] font-semibold text-sm rounded-xl transition-all shadow-md group relative overflow-hidden cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-[#3cc74f] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
                    <span className="relative z-10 flex items-center gap-2">
                      <img src="/gems.png" alt="Gems" className="w-4 h-4 object-contain" />
                      {heroEvolved ? 'Revert to Base Form' : 'Evolve Pet (Spend 100 Gems)'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Features ("How it Works") */}
      <section id="features" className="py-20 sm:py-28 bg-[#f5f9f0] border-y border-[#102312]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#3cc74f]">
              How it Works
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#102312]">
              Learning is better with a companion
            </h2>
            <p className="text-base text-[#5a705d]">
              We have dismantled complex technology curricula and rebuilt them into addictively simple, game-driven checkpoints that reward daily effort.
            </p>
          </div>

          {/* 3 Step Cards Grid */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 01 */}
            <div className="relative bg-white border border-[#102312]/8 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[#eef9f0] flex items-center justify-center text-[#25a53a] font-bold font-mono border border-[#3cc74f]/10 shadow-sm">
                  01
                </div>
                <h3 className="mt-6 text-xl font-bold font-heading text-[#102312]">
                  Adopt Your AI Pet
                </h3>
                <p className="mt-3 text-sm text-[#5a705d] leading-relaxed">
                  Pick one of 8 adorable AI companions. Each companion has their own unique personality and area of technical expertise (e.g., frontend, cloud, backend data).
                </p>
              </div>
              <div className="mt-8 border-t border-[#102312]/5 pt-4 flex items-center gap-1.5 text-xs font-semibold text-[#25a53a]">
                Choose your companion pet
              </div>
            </div>

            {/* Step 02 */}
            <div className="relative bg-white border border-[#102312]/8 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[#fff5ea] flex items-center justify-center text-[#c87618] font-bold font-mono border border-[#f3a850]/10 shadow-sm">
                  02
                </div>
                <h3 className="mt-6 text-xl font-bold font-heading text-[#102312]">
                  Solve Interactive Quests
                </h3>
                <p className="mt-3 text-sm text-[#5a705d] leading-relaxed">
                  Tackle lessons, multiple choice checkpoint cards, and actual programming syntax tasks designed to feel like bite-sized micro-puzzles.
                </p>
              </div>
              <div className="mt-8 border-t border-[#102312]/5 pt-4 flex items-center gap-1.5 text-xs font-semibold text-[#c87618]">
                Earn points and build streaks
              </div>
            </div>

            {/* Step 03 */}
            <div className="relative bg-white border border-[#102312]/8 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[#f4f7ff] flex items-center justify-center text-[#2c5ebd] font-bold font-mono border border-[#5b8cff]/10 shadow-sm">
                  03
                </div>
                <h3 className="mt-6 text-xl font-bold font-heading text-[#102312]">
                  Unlock Evolution Stages
                </h3>
                <p className="mt-3 text-sm text-[#5a705d] leading-relaxed">
                  As you gain XP and gems, level up your pet and spend gems to trigger structural evolutions. Witness their visual transformation as they learn with you!
                </p>
              </div>
              <div className="mt-8 border-t border-[#102312]/5 pt-4 flex items-center gap-1.5 text-xs font-semibold text-[#2c5ebd]">
                Grow together through coding
              </div>
            </div>
          </div>

          {/* App Highlight Card */}
          <div className="mt-20 border border-white/50 bg-white/60 backdrop-blur rounded-[2.5rem] p-6 sm:p-10 shadow-sm grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#3cc74f] bg-[#eef9f0] px-3.5 py-1.5 rounded-full border border-[#3cc74f]/15">
                App Highlight
              </span>
              <h3 className="font-heading text-3xl font-bold tracking-tight text-[#102312]">
                Stay motivated with a gamified wallet & streaks
              </h3>
              <p className="text-sm leading-relaxed text-[#5a705d]">
                Just like your favorite languages and apps, CodeMate keeps you coming back daily with an elegant status panel. Use gems to purchase premium items, hearts to recover from mistakes, and streaks to prove your consistency.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3 text-sm text-[#102312]">
                  <div className="h-5 w-5 rounded-full bg-[#eef9f0] border border-[#3cc74f]/20 flex items-center justify-center text-[#25a53a]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>Daily streaks build strong, permanent learning habits</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#102312]">
                  <div className="h-5 w-5 rounded-full bg-[#eef9f0] border border-[#3cc74f]/20 flex items-center justify-center text-[#25a53a]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>Earn gems and buy exclusive accessories for your pets</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[#102312]">
                  <div className="h-5 w-5 rounded-full bg-[#eef9f0] border border-[#3cc74f]/20 flex items-center justify-center text-[#25a53a]">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>Achievements board showcases your programming badges</span>
                </li>
              </ul>
            </div>

            {/* Right: Dashboard Wallet Preview */}
            <div className="bg-[#eef4e6] border border-[#102312]/5 rounded-[2rem] p-6 sm:p-8 flex flex-col gap-5 select-none relative overflow-hidden">
              <div className="absolute -right-12 -top-12 h-36 w-36 bg-[#3cc74f]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-between">
                <h5 className="font-heading font-bold text-[#102312] text-sm">Dashboard Wallet</h5>
                <span className="text-[10px] font-bold text-[#5a705d] uppercase tracking-wider font-mono">
                  Current Status
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white border border-[#102312]/5 rounded-2xl p-4 flex flex-col items-center shadow-sm">
                  <img src="/gems.png" alt="Gems" width={24} height={24} className="object-contain" />
                  <span className="mt-2 text-base font-bold text-[#102312]">340</span>
                  <span className="text-[9px] font-bold text-[#5a705d] uppercase tracking-wider font-mono">Gems</span>
                </div>
                <div className="bg-white border border-[#102312]/5 rounded-2xl p-4 flex flex-col items-center shadow-sm">
                  <img src="/heart.png" alt="Hearts" width={24} height={24} className="object-contain" />
                  <span className="mt-2 text-base font-bold text-[#102312]">5 / 5</span>
                  <span className="text-[9px] font-bold text-[#5a705d] uppercase tracking-wider font-mono">Hearts</span>
                </div>
                <div className="bg-white border border-[#102312]/5 rounded-2xl p-4 flex flex-col items-center shadow-sm">
                  <img src="/streak.png" alt="Streak" width={24} height={24} className="object-contain" />
                  <span className="mt-2 text-base font-bold text-[#102312]">15</span>
                  <span className="text-[9px] font-bold text-[#5a705d] uppercase tracking-wider font-mono">Streak</span>
                </div>
              </div>

              <div className="bg-white border border-[#102312]/5 rounded-2xl p-4 space-y-3 shadow-sm">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#102312]">Next Level Progress</span>
                  <span className="font-mono text-[#5a705d]">80% (800 / 1000 XP)</span>
                </div>
                <div className="w-full h-3 bg-[#eef4e6] rounded-full overflow-hidden p-[1px]">
                  <div className="h-full bg-gradient-to-r from-[#3cc74f] to-[#25a53a] rounded-full" style={{ width: '80%' }} />
                </div>
                <p className="text-[10px] text-[#5a705d] leading-relaxed">
                  Earn 200 more XP to evolve to Level 2 and unlock custom badges!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Companions */}
      <section id="companions" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#3cc74f]">
              The Companions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#102312]">
              Choose your partner in learning
            </h2>
            <p className="text-base text-[#5a705d]">
              Click on any pet to preview their appearance, character traits, and specialties. Meet the cast of characters waiting to support your education!
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Pet List Selector */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3 max-h-[500px] overflow-y-auto pr-1">
              {LANDING_COMPANIONS.map(pet => {
                const isSelected = selectedPet.name === pet.name;
                return (
                  <button
                    key={pet.name}
                    onClick={() => {
                      setSelectedPet(pet);
                      setCompanionEvolvedPreview(false);
                    }}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#3cc74f] shadow-md scale-[1.02]'
                        : 'bg-white/50 border-[#102312]/5 hover:bg-white'
                    }`}
                  >
                    <div className="h-11 w-11 rounded-xl bg-[#eef4e6] flex items-center justify-center shrink-0 overflow-hidden">
                      <img src={pet.image} alt={pet.name} className="h-9 w-9 object-contain" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-heading font-bold text-sm text-[#102312] truncate">
                        {pet.name}
                      </h4>
                      <p className="text-[11px] text-[#5a705d] truncate">{pet.title}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Companion Showcase Card */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-[#102312]/8 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden grid md:grid-cols-2 gap-8 items-center">
                {/* Dynamic Aura Background */}
                <div
                  className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: selectedPet.color }}
                />

                {/* Left of Card: Avatar Stage */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-56 h-56 bg-neutral-50/50 rounded-full border border-neutral-100 flex items-center justify-center overflow-hidden transition-all duration-300">
                    <img
                      src={companionEvolvedPreview ? selectedPet.evolvedImage : selectedPet.image}
                      alt={selectedPet.name}
                      className="w-40 h-40 object-contain filter drop-shadow-md transition-all duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Switch Pill */}
                  <div className="mt-6 inline-flex p-1 bg-neutral-100 rounded-full border border-neutral-200/60 text-xs font-semibold">
                    <button
                      onClick={() => setCompanionEvolvedPreview(false)}
                      className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                        !companionEvolvedPreview
                          ? 'bg-white text-[#102312] shadow-sm font-bold'
                          : 'text-[#5a705d] hover:text-[#102312]'
                      }`}
                    >
                      Base Avatar
                    </button>
                    <button
                      onClick={() => setCompanionEvolvedPreview(true)}
                      className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                        companionEvolvedPreview
                          ? 'bg-white text-[#102312] shadow-sm font-bold'
                          : 'text-[#5a705d] hover:text-[#102312]'
                      }`}
                    >
                      Evolved Avatar ✨
                    </button>
                  </div>
                </div>

                {/* Right of Card: Details */}
                <div className="space-y-5">
                  <div className="space-y-2">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${selectedPet.accent}`}
                    >
                      <Sparkles className="h-3 w-3" />
                      {selectedPet.title}
                    </span>
                    <h3 className="text-3xl font-bold font-heading text-[#102312]">
                      {selectedPet.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#5a705d] leading-relaxed">{selectedPet.desc}</p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#5a705d] uppercase tracking-wider font-mono">
                      Specialized Courses
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedPet.specializedCourses.map(course => (
                        <span
                          key={course}
                          className="bg-neutral-100 text-[#102312] border border-neutral-200/50 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleAdoptPet(selectedPet.name)}
                    className="mt-4 inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#3cc74f] hover:bg-[#25a53a] text-white font-bold text-sm rounded-xl transition-all shadow-[0_8px_20px_-6px_rgba(60,199,79,0.3)] cursor-pointer"
                  >
                    <span>Adopt {selectedPet.name} Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Simple Pricing */}
      <section id="pricing" className="py-20 sm:py-28 bg-[#f5f9f0] border-y border-[#102312]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#3cc74f]">
              Simple Pricing
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#102312]">
              Choose the learning speed that fits you
            </h2>
            <p className="text-base text-[#5a705d]">
              Start for free with standard lessons and daily hearts, or upgrade to Plus to unlock infinite resources and exclusive companions.
            </p>

            {/* Toggle */}
            <div className="pt-6 flex justify-center items-center gap-3">
              <span
                className={`text-sm font-semibold cursor-pointer ${
                  billingCycle === 'monthly' ? 'text-[#102312]' : 'text-[#5a705d]'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative h-6 w-11 bg-[#3cc74f] rounded-full p-0.5 transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle Billing Cycle"
              >
                <div
                  className={`h-5 w-5 rounded-full bg-white transition-transform duration-200 ${
                    billingCycle === 'yearly' ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span
                className={`text-sm font-semibold cursor-pointer ${
                  billingCycle === 'yearly' ? 'text-[#102312]' : 'text-[#5a705d]'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly
              </span>
              <span className="bg-[#eef9f0] text-[#25a53a] border border-[#3cc74f]/20 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                Save 30%
              </span>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <article className="bg-white border border-[#102312]/8 p-8 rounded-[2.5rem] shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#5a705d]">Free Tier</p>
                <div className="mt-4 flex items-baseline">
                  <span className="font-heading text-5xl font-bold text-[#102312]">$0</span>
                  <span className="ml-2 text-sm text-[#5a705d]">/ forever</span>
                </div>
                <p className="mt-4 text-sm text-[#5a705d]">
                  Essential technical practice, basic lesson chapters, and one companion pet.
                </p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3 text-sm text-[#102312]">
                    <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center text-[#5a705d]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Access to 3 introductory chapters</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#102312]">
                    <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center text-[#5a705d]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>1 adopted companion pet</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#102312]">
                    <div className="h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center text-[#5a705d]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>3 Daily Hearts (lesson attempts)</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400 line-through">
                    <span>Unlimited hearts & review quests</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-400 line-through">
                    <span>Exclusive premium pet evolution paths</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => navigateTo('login')}
                className="mt-8 inline-flex items-center justify-center py-3.5 bg-neutral-100 hover:bg-neutral-200 text-[#102312] font-bold text-sm rounded-2xl transition-colors cursor-pointer"
              >
                Start Learning Free
              </button>
            </article>

            {/* Plus Tier */}
            <article className="bg-white border-2 border-[#3cc74f] p-8 rounded-[2.5rem] shadow-[0_12px_40px_rgba(60,199,79,0.06)] relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 bg-[#3cc74f] text-white font-mono text-[9px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl">
                Most Popular
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#2ca949] flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4" />
                  <span>CodeMate Plus</span>
                </p>

                <div className="mt-4 flex items-baseline">
                  <span className="font-heading text-5xl font-bold text-[#102312]">
                    {billingCycle === 'monthly' ? '$5.99' : '$4.16'}
                  </span>
                  <span className="ml-2 text-sm text-[#5a705d]">
                    / month {billingCycle === 'yearly' && '(billed annually)'}
                  </span>
                </div>

                <p className="mt-4 text-sm text-[#5a705d]">
                  Unlock the full educational catalog, unlimited daily hearts, and advanced AI evolutions.
                </p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3 text-sm text-[#102312]">
                    <div className="h-5 w-5 rounded-full bg-[#eef9f0] border border-[#3cc74f]/20 flex items-center justify-center text-[#25a53a]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-semibold">Unlock all courses & chapters</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#102312]">
                    <div className="h-5 w-5 rounded-full bg-[#eef9f0] border border-[#3cc74f]/20 flex items-center justify-center text-[#25a53a]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Adopt & switch unlimited companion pets</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#102312]">
                    <div className="h-5 w-5 rounded-full bg-[#eef9f0] border border-[#3cc74f]/20 flex items-center justify-center text-[#25a53a]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-semibold">Unlimited daily hearts (never wait to retry)</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#102312]">
                    <div className="h-5 w-5 rounded-full bg-[#eef9f0] border border-[#3cc74f]/20 flex items-center justify-center text-[#25a53a]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Instant cyber evolution unlocks</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-[#102312]">
                    <div className="h-5 w-5 rounded-full bg-[#eef9f0] border border-[#3cc74f]/20 flex items-center justify-center text-[#25a53a]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>Certificate of Completion badges</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  toggleSubscription(true);
                  if (state.isLoggedIn) {
                    navigateTo('dashboard', { tab: 'billing' });
                  } else {
                    navigateTo('login');
                  }
                }}
                className="mt-8 inline-flex items-center justify-center py-3.5 bg-[#3cc74f] hover:bg-[#25a53a] text-white font-bold text-sm rounded-2xl shadow-[0_8px_20px_-6px_rgba(60,199,79,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                {state.hasSubscription ? 'Subscription Active ✓' : 'Go Plus Today'}
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#3cc74f]">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#102312]">
              Loved by junior engineers and designers
            </h2>
            <p className="text-base text-[#5a705d]">
              Read how our gamified companions make building technical consistency fun and simple.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#102312]/5 rounded-[2rem] p-6 space-y-5 shadow-sm"
              >
                <div className="flex gap-1 text-[#fcc419]">
                  {[0, 1, 2, 3, 4].map(s => (
                    <Star key={s} className="h-4.5 w-4.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[#5a705d]">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div
                    className={`h-10 w-10 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-xs ${t.initialsColor}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h6 className="text-xs font-bold text-[#102312]">{t.name}</h6>
                    <p className="text-[10px] text-[#5a705d]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section id="faq" className="py-20 sm:py-28 bg-[#f5f9f0] border-t border-[#102312]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#3cc74f]">
              Got Questions?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#102312]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-white border border-[#102312]/5 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="flex justify-between items-center w-full px-6 py-5 font-semibold text-left text-sm sm:text-base text-[#102312] hover:bg-neutral-50/50 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-4.5 w-4.5 text-[#3cc74f] shrink-0" />
                      {faq.question}
                    </span>
                    <span className="font-mono text-[#5a705d] text-lg shrink-0 ml-4 font-normal">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-250 ease-in-out border-[#102312]/5 px-6 overflow-hidden text-xs sm:text-sm text-[#5a705d] leading-relaxed ${
                      isOpen ? 'max-h-48 py-4 border-t' : 'max-h-0 py-0'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#102312]/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-[#3cc74f] rounded-lg flex items-center justify-center text-white font-bold">
              <Sparkles className="h-4.5 w-4.5" />
            </div>
            <span className="font-heading font-bold text-sm text-[#102312]">CodeMate AI</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#5a705d]">
            <a href="#" className="hover:text-[#102312] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#102312] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#102312] transition-colors">
              Contact Support
            </a>
          </div>

          <p className="text-xs text-[#5a705d]">
            © {new Date().getFullYear()} CodeMate AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
