export type AccessType = 'free' | 'freemium' | 'paid';
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Companion {
  name: string;
  title: string;
  desc: string;
  image: string;
  evolvedImage: string;
  accent: string;
  color: string;
  bgLight: string;
  element?: string;
  stats?: {
    curiosity: number;
    speed: number;
    stamina: number;
  };
}

export interface ContentBlock {
  id: string;
  type: 'theory' | 'multiple-choice' | 'true-false' | 'fill-in-the-blank' | 'matching' | 'code-exercise' | 'yes-no' | string;
  title: string;
  bodyMarkdown?: string;
  statement?: string;
  correctAnswer?: boolean;
  question?: string;
  scenario?: string;
  prompt?: string;
  acceptedAnswers?: string[];
  options?: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation?: string;
  }[];
  choices?: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation?: string;
  }[];
  correctFeedback?: string;
  incorrectFeedback?: string;
  malformed?: boolean;
  [key: string]: any;
}

export interface Chapter {
  id: string;
  slug: string;
  name: string;
  description: string;
  sortOrder: number;
  emoji?: string;
  contentBlocks: ContentBlock[];
}

export interface Course {
  id: string;
  slug: string;
  name: string;
  description: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  accessType: AccessType;
  bannerSrc: string;
  bannerAlt: string;
  bannerWidth: number;
  bannerHeight: number;
  href: string;
  isFeatured: boolean;
  sortOrder: number;
  chapters: Chapter[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
  progress: number;
  maxProgress: number;
}

export interface DailyQuest {
  id: string;
  title: string;
  rewardGems: number;
  rewardXp: number;
  completed: boolean;
  progress: number;
  maxProgress: number;
}

export type LearningMode =
  | 'learn'
  | 'practice'
  | 'quiz'
  | 'doubt'
  | 'revision'
  | 'project'
  | 'interview';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  mode?: LearningMode;
  source?: string;
  status?: 'sending' | 'complete' | 'error';
  suggestedFollowups?: string[];
}

export interface UserLearningProfile {
  learningGoal: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  interests: string[];
  weakTopics: string[];
  preferredLanguage: 'English' | 'Hindi' | 'Hinglish' | 'Auto';
  learningStyle: 'Hands-on' | 'Visual' | 'Step-by-step' | 'Conceptual';
}

export interface UserState {
  isLoggedIn: boolean;
  user: {
    name: string;
    email: string;
    avatar?: string;
  } | null;
  pet: {
    companionName: string;
    customName: string;
    isEvolved: boolean;
    level: number;
    xp: number;
    maxXp: number;
    happiness: number; // 0 - 100
  };
  streak: number;
  gems: number;
  hearts: number;
  maxHearts: number;
  hasSubscription: boolean;
  enrolledCourses: string[]; // course slugs
  completedChapters: string[]; // chapter ids
  activeCourseSlug: string;
  weeklyStreakDays: {
    dayLabel: string;
    dateKey: string;
    active: boolean;
  }[];
  learningProfile?: UserLearningProfile;
  chatHistory?: ChatMessage[];
}
