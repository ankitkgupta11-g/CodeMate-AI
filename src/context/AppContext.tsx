import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserState, Companion, ChatMessage, LearningMode, UserLearningProfile } from '../types';
import { COMPANIONS } from '../data/companions';
import { COURSES } from '../data/courses';

export interface AppContextType {
  state: UserState;
  currentView: 'landing' | 'login' | 'dashboard' | 'chapter-runner';
  dashboardTab: 'home' | 'courses' | 'progress' | 'achievements' | 'billing' | 'profile' | 'ai-tutor';
  activeCourseSlug: string;
  activeChapterSlug: string;
  activeCompanion: Companion;
  chatMessages: ChatMessage[];
  isAiTyping: boolean;
  currentLearningMode: LearningMode;
  setChatLearningMode: (mode: LearningMode) => void;
  sendChatMessage: (content: string, overrideMode?: LearningMode) => Promise<void>;
  regenerateLastMessage: () => Promise<void>;
  clearChat: () => void;
  updateLearningProfile: (profile: Partial<UserLearningProfile>) => void;
  addWeakTopic: (topic: string) => void;
  removeWeakTopic: (topic: string) => void;
  login: (email: string, name?: string) => void;
  signup: (name: string, email: string) => void;
  logout: () => void;
  deleteAccount: () => void;
  setCompanion: (name: string) => void;
  renamePet: (name: string) => void;
  togglePetEvolution: () => boolean; // returns true if successful
  feedPet: () => void;
  petCompanion: () => void;
  consumeHeart: () => boolean; // returns true if had hearts left
  refillHearts: () => boolean;
  completeChapter: (courseSlug: string, chapterId: string, earnedGems?: number, earnedXp?: number) => void;
  enrollCourse: (slug: string) => void;
  toggleSubscription: (enabled?: boolean) => void;
  navigateTo: (
    view: 'landing' | 'login' | 'dashboard' | 'chapter-runner',
    opts?: {
      tab?: 'home' | 'courses' | 'progress' | 'achievements' | 'billing' | 'profile' | 'ai-tutor';
      courseSlug?: string;
      chapterSlug?: string;
    }
  ) => void;
}

const STORAGE_KEY = 'skillpet_app_state_v1';

const DEFAULT_WEEKLY_STREAK = [
  { dayLabel: 'Mon', dateKey: 'mon', active: true },
  { dayLabel: 'Tue', dateKey: 'tue', active: true },
  { dayLabel: 'Wed', dateKey: 'wed', active: true },
  { dayLabel: 'Thu', dateKey: 'thu', active: true },
  { dayLabel: 'Fri', dateKey: 'fri', active: true },
  { dayLabel: 'Sat', dateKey: 'sat', active: true },
  { dayLabel: 'Sun', dateKey: 'sun', active: true },
];

const DEFAULT_LEARNING_PROFILE: UserLearningProfile = {
  learningGoal: 'Master AI & Machine Learning with Python',
  skillLevel: 'Beginner',
  interests: ['Artificial Intelligence', 'Python Programming', 'Machine Learning'],
  weakTopics: ['Recursion & Nested Loops'],
  preferredLanguage: 'Auto',
  learningStyle: 'Step-by-step',
};

const createWelcomeMessage = (companionName: string, userName: string): ChatMessage => ({
  id: 'welcome-msg',
  role: 'assistant',
  content: `Hey ${userName || 'Learner'}! **${companionName}** here 🐾 What are we learning or building today?`,
  timestamp: 'Just now',
  mode: 'learn',
  suggestedFollowups: [
    '📚 What should I learn next?',
    '🚀 Build my roadmap',
    '📝 Quick quiz',
    '💡 Explain in Hinglish',
  ],
});

const DEFAULT_STATE: UserState = {
  isLoggedIn: false,
  user: null,
  pet: {
    companionName: 'Byte',
    customName: 'Byte',
    isEvolved: false,
    level: 3,
    xp: 240,
    maxXp: 500,
    happiness: 95,
  },
  streak: 12,
  gems: 450,
  hearts: 5,
  maxHearts: 5,
  hasSubscription: false,
  enrolledCourses: ['ai-fundamentals'],
  completedChapters: ['m36jevqcelf0qvtfm7d2a12r'],
  activeCourseSlug: 'ai-fundamentals',
  weeklyStreakDays: DEFAULT_WEEKLY_STREAK,
  learningProfile: DEFAULT_LEARNING_PROFILE,
  chatHistory: [],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<UserState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return DEFAULT_STATE;
  });

  const [currentView, setCurrentView] = useState<'landing' | 'login' | 'dashboard' | 'chapter-runner'>('landing');
  const [dashboardTab, setDashboardTab] = useState<'home' | 'courses' | 'progress' | 'achievements' | 'billing' | 'profile' | 'ai-tutor'>('home');
  const [activeCourseSlug, setActiveCourseSlug] = useState<string>('ai-fundamentals');
  const [activeChapterSlug, setActiveChapterSlug] = useState<string>('ai-fundamentals-01');
  const [currentLearningMode, setChatLearningMode] = useState<LearningMode>('learn');
  const [isAiTyping, setIsAiTyping] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    if (state.chatHistory && state.chatHistory.length > 0) {
      if (state.chatHistory.length === 1 && state.chatHistory[0].id === 'welcome-msg') {
        return [createWelcomeMessage(state.pet.customName || state.pet.companionName, state.user?.name || 'Learner')];
      }
      return state.chatHistory;
    }
    return [createWelcomeMessage(state.pet.customName || state.pet.companionName, state.user?.name || 'Learner')];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  // Keep chatHistory in sync with chatMessages
  useEffect(() => {
    setState(prev => ({
      ...prev,
      chatHistory: chatMessages,
    }));
  }, [chatMessages]);

  const updateLearningProfile = (updated: Partial<UserLearningProfile>) => {
    setState(prev => ({
      ...prev,
      learningProfile: {
        ...(prev.learningProfile || DEFAULT_LEARNING_PROFILE),
        ...updated,
      },
    }));
  };

  const addWeakTopic = (topic: string) => {
    if (!topic.trim()) return;
    setState(prev => {
      const current = prev.learningProfile?.weakTopics || [];
      if (current.includes(topic.trim())) return prev;
      return {
        ...prev,
        learningProfile: {
          ...(prev.learningProfile || DEFAULT_LEARNING_PROFILE),
          weakTopics: [...current, topic.trim()],
        },
      };
    });
  };

  const removeWeakTopic = (topic: string) => {
    setState(prev => ({
      ...prev,
      learningProfile: {
        ...(prev.learningProfile || DEFAULT_LEARNING_PROFILE),
        weakTopics: (prev.learningProfile?.weakTopics || []).filter(t => t !== topic),
      },
    }));
  };

  const clearChat = () => {
    const welcome = createWelcomeMessage(state.pet.customName || state.pet.companionName, state.user?.name || 'Learner');
    setChatMessages([welcome]);
  };

  const sendChatMessage = async (content: string, overrideMode?: LearningMode) => {
    const mode = overrideMode || currentLearningMode;
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode,
      status: 'complete',
    };

    const newHistory = [...chatMessages, userMsg];
    setChatMessages(newHistory);
    setIsAiTyping(true);

    const activeCourseObj = COURSES.find(c => c.slug === state.activeCourseSlug);
    const activeCourseName = activeCourseObj?.name || 'Python for AI & Data';

    const payloadContext = {
      user: state.user,
      pet: state.pet,
      streak: state.streak,
      gems: state.gems,
      enrolledCourses: state.enrolledCourses,
      completedChapters: state.completedChapters,
      activeCourse: activeCourseName,
      currentMode: mode,
      learningGoal: state.learningProfile?.learningGoal || DEFAULT_LEARNING_PROFILE.learningGoal,
      skillLevel: state.learningProfile?.skillLevel || DEFAULT_LEARNING_PROFILE.skillLevel,
      weakTopics: state.learningProfile?.weakTopics || DEFAULT_LEARNING_PROFILE.weakTopics,
      preferredLanguage: state.learningProfile?.preferredLanguage || DEFAULT_LEARNING_PROFILE.preferredLanguage,
      learningStyle: state.learningProfile?.learningStyle || DEFAULT_LEARNING_PROFILE.learningStyle,
    };

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newHistory.map(m => ({ role: m.role, content: m.content })),
          context: payloadContext,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const data = await res.json();
      const aiReply: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: data.reply || 'I am right here with you! What would you like to learn next?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mode,
        source: data.source,
        status: 'complete',
      };

      setChatMessages(prev => [...prev, aiReply]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: 'I had trouble connecting. You can click Retry or check your network connection.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mode,
        status: 'error',
      };
      setChatMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsAiTyping(false);
    }
  };

  const regenerateLastMessage = async () => {
    if (chatMessages.length < 2) return;
    const lastUserIndex = [...chatMessages].reverse().findIndex(m => m.role === 'user');
    if (lastUserIndex === -1) return;
    const actualIndex = chatMessages.length - 1 - lastUserIndex;
    const lastUserMsg = chatMessages[actualIndex];

    const trimmed = chatMessages.slice(0, actualIndex + 1);
    setChatMessages(trimmed);
    setIsAiTyping(true);

    const activeCourseObj = COURSES.find(c => c.slug === state.activeCourseSlug);
    const activeCourseName = activeCourseObj?.name || 'Python for AI & Data';

    const payloadContext = {
      user: state.user,
      pet: state.pet,
      streak: state.streak,
      gems: state.gems,
      enrolledCourses: state.enrolledCourses,
      completedChapters: state.completedChapters,
      activeCourse: activeCourseName,
      currentMode: lastUserMsg.mode || currentLearningMode,
      learningGoal: state.learningProfile?.learningGoal || DEFAULT_LEARNING_PROFILE.learningGoal,
      skillLevel: state.learningProfile?.skillLevel || DEFAULT_LEARNING_PROFILE.skillLevel,
      weakTopics: state.learningProfile?.weakTopics || DEFAULT_LEARNING_PROFILE.weakTopics,
      preferredLanguage: state.learningProfile?.preferredLanguage || DEFAULT_LEARNING_PROFILE.preferredLanguage,
      learningStyle: state.learningProfile?.learningStyle || DEFAULT_LEARNING_PROFILE.learningStyle,
    };

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: trimmed.map(m => ({ role: m.role, content: m.content })),
          context: payloadContext,
        }),
      });

      const data = await res.json();
      const aiReply: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: data.reply || 'I am ready to help! What is next on your list?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mode: lastUserMsg.mode || currentLearningMode,
        source: data.source,
        status: 'complete',
      };
      setChatMessages(prev => [...prev, aiReply]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: 'Failed to regenerate response. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mode: lastUserMsg.mode || currentLearningMode,
        status: 'error',
      };
      setChatMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsAiTyping(false);
    }
  };

  const activeCompanion = COMPANIONS.find(c => c.name.toLowerCase() === state.pet.companionName.toLowerCase()) || COMPANIONS[0];

  const navigateTo: AppContextType['navigateTo'] = (view, opts) => {
    if (opts?.tab) {
      setDashboardTab(opts.tab);
    }
    if (opts?.courseSlug) {
      setActiveCourseSlug(opts.courseSlug);
    }
    if (opts?.chapterSlug) {
      setActiveChapterSlug(opts.chapterSlug);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const login = (email: string, name?: string) => {
    setState(prev => ({
      ...prev,
      isLoggedIn: true,
      user: {
        name: name || email.split('@')[0] || 'Learner',
        email,
      },
    }));
    navigateTo('dashboard', { tab: 'home' });
  };

  const signup = (name: string, email: string) => {
    setState(prev => ({
      ...prev,
      isLoggedIn: true,
      user: {
        name: name || 'Learner',
        email,
      },
    }));
    navigateTo('dashboard', { tab: 'home' });
  };

  const logout = () => {
    setState(prev => ({
      ...prev,
      isLoggedIn: false,
      user: null,
    }));
    navigateTo('landing');
  };

  const deleteAccount = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setState({
      ...DEFAULT_STATE,
      isLoggedIn: false,
      user: null,
      completedChapters: [],
      streak: 0,
      gems: 100,
      hearts: 5,
    });
    setDashboardTab('home');
    navigateTo('landing');
  };

  const setCompanion = (name: string) => {
    setState(prev => ({
      ...prev,
      pet: {
        ...prev.pet,
        companionName: name,
        customName: name,
      },
    }));
  };

  const renamePet = (name: string) => {
    setState(prev => ({
      ...prev,
      pet: {
        ...prev.pet,
        customName: name,
      },
    }));
  };

  const togglePetEvolution = () => {
    if (state.pet.isEvolved) {
      setState(prev => ({
        ...prev,
        pet: { ...prev.pet, isEvolved: false },
      }));
      return true;
    }

    if (state.gems >= 100 || state.hasSubscription) {
      setState(prev => ({
        ...prev,
        gems: state.hasSubscription ? prev.gems : prev.gems - 100,
        pet: { ...prev.pet, isEvolved: true },
      }));
      return true;
    }
    return false;
  };

  const feedPet = () => {
    setState(prev => {
      const newXp = prev.pet.xp + 25;
      let newLevel = prev.pet.level;
      let maxXp = prev.pet.maxXp;
      if (newXp >= maxXp) {
        newLevel += 1;
        maxXp = Math.round(maxXp * 1.5);
      }
      return {
        ...prev,
        pet: {
          ...prev.pet,
          happiness: Math.min(100, prev.pet.happiness + 10),
          xp: newXp,
          level: newLevel,
          maxXp,
        },
      };
    });
  };

  const petCompanion = () => {
    setState(prev => ({
      ...prev,
      pet: {
        ...prev.pet,
        happiness: Math.min(100, prev.pet.happiness + 5),
      },
    }));
  };

  const consumeHeart = () => {
    if (state.hasSubscription) return true; // unlimited
    if (state.hearts <= 0) return false;
    setState(prev => ({
      ...prev,
      hearts: Math.max(0, prev.hearts - 1),
    }));
    return true;
  };

  const refillHearts = () => {
    if (state.hasSubscription) {
      setState(prev => ({ ...prev, hearts: prev.maxHearts }));
      return true;
    }
    if (state.gems >= 50) {
      setState(prev => ({
        ...prev,
        gems: prev.gems - 50,
        hearts: prev.maxHearts,
      }));
      return true;
    }
    return false;
  };

  const completeChapter = (courseSlug: string, chapterId: string, earnedGems = 25, earnedXp = 50) => {
    setState(prev => {
      const alreadyCompleted = prev.completedChapters.includes(chapterId);
      const newCompleted = alreadyCompleted ? prev.completedChapters : [...prev.completedChapters, chapterId];

      const newXp = prev.pet.xp + (alreadyCompleted ? 10 : earnedXp);
      let newLevel = prev.pet.level;
      let maxXp = prev.pet.maxXp;
      if (newXp >= maxXp) {
        newLevel += 1;
        maxXp = Math.round(maxXp * 1.4);
      }

      return {
        ...prev,
        gems: prev.gems + (alreadyCompleted ? 5 : earnedGems),
        completedChapters: newCompleted,
        pet: {
          ...prev.pet,
          xp: newXp,
          level: newLevel,
          maxXp,
          happiness: Math.min(100, prev.pet.happiness + 15),
        },
      };
    });
  };

  const enrollCourse = (slug: string) => {
    setState(prev => {
      if (prev.enrolledCourses.includes(slug)) return prev;
      return {
        ...prev,
        enrolledCourses: [...prev.enrolledCourses, slug],
      };
    });
  };

  const toggleSubscription = (enabled?: boolean) => {
    setState(prev => ({
      ...prev,
      hasSubscription: enabled !== undefined ? enabled : !prev.hasSubscription,
      hearts: prev.maxHearts,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        state,
        currentView,
        dashboardTab,
        activeCourseSlug,
        activeChapterSlug,
        activeCompanion,
        chatMessages,
        isAiTyping,
        currentLearningMode,
        setChatLearningMode,
        sendChatMessage,
        regenerateLastMessage,
        clearChat,
        updateLearningProfile,
        addWeakTopic,
        removeWeakTopic,
        login,
        signup,
        logout,
        deleteAccount,
        setCompanion,
        renamePet,
        togglePetEvolution,
        feedPet,
        petCompanion,
        consumeHeart,
        refillHearts,
        completeChapter,
        enrollCourse,
        toggleSubscription,
        navigateTo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
