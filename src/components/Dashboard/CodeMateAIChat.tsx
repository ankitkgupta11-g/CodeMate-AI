import React, { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import {
  Sparkles,
  Send,
  RotateCcw,
  Copy,
  Check,
  Trash2,
  BookOpen,
  Code,
  HelpCircle,
  Brain,
  Rocket,
  Briefcase,
  Layers,
  ChevronDown,
  X,
  Plus,
  Compass,
  AlertCircle,
  Flame,
  Gem,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { LearningMode, ChatMessage } from '../../types';

interface SkillPetAIChatProps {
  onNavigateToCourse?: (slug: string) => void;
}

const LEARNING_MODES: {
  id: LearningMode;
  label: string;
  desc: string;
  icon: React.ElementType;
  badgeBg: string;
  textColor: string;
}[] = [
  {
    id: 'learn',
    label: 'Learn',
    desc: 'Clear concept breakdowns & deep step-by-step explanations',
    icon: BookOpen,
    badgeBg: 'bg-emerald-100',
    textColor: 'text-emerald-700',
  },
  {
    id: 'practice',
    label: 'Practice',
    desc: 'Hands-on coding challenges & guided exercises',
    icon: Code,
    badgeBg: 'bg-blue-100',
    textColor: 'text-blue-700',
  },
  {
    id: 'quiz',
    label: 'Quiz',
    desc: 'Rapid interactive questions & feedback evaluation',
    icon: Brain,
    badgeBg: 'bg-purple-100',
    textColor: 'text-purple-700',
  },
  {
    id: 'doubt',
    label: 'Doubt Solver',
    desc: 'Instant answers to your specific bugs & questions',
    icon: HelpCircle,
    badgeBg: 'bg-amber-100',
    textColor: 'text-amber-700',
  },
  {
    id: 'revision',
    label: 'Revision',
    desc: 'Quick recall summaries of past topics & weak areas',
    icon: Layers,
    badgeBg: 'bg-rose-100',
    textColor: 'text-rose-700',
  },
  {
    id: 'project',
    label: 'Projects',
    desc: 'Real-world project architecture & implementation steps',
    icon: Rocket,
    badgeBg: 'bg-indigo-100',
    textColor: 'text-indigo-700',
  },
  {
    id: 'interview',
    label: 'Interview',
    desc: 'Technical mock interview Q&As & evaluation',
    icon: Briefcase,
    badgeBg: 'bg-teal-100',
    textColor: 'text-teal-700',
  },
];

const QUICK_PROMPTS = [
  { label: '📚 What should I learn today?', prompt: 'What should I learn today based on my active progress and enrolled courses?' },
  { label: '🚀 Create my AI Roadmap', prompt: 'Create a tailored step-by-step learning roadmap for me from zero to advanced AI practitioner.' },
  { label: '📝 Quiz me on Python & ML', prompt: 'Give me a quick 3-question diagnostic quiz on Python and Machine Learning fundamentals.' },
  { label: '💻 Hands-on coding challenge', prompt: 'Give me a practical coding challenge at my skill level with test cases and helpful hints.' },
  { label: '💡 Explain in Hinglish', prompt: 'Mujhe Python functions aur decorators simple Hinglish me real-life example ke sath samjhao.' },
  { label: '🔍 Review my weak areas', prompt: 'Check my recorded weak topics and give me a targeted revision plan with exercises.' },
];

export const CodeMateAIChat: React.FC<SkillPetAIChatProps> = ({ onNavigateToCourse }) => {
  const {
    state,
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
    navigateTo,
  } = useApp();

  const [inputVal, setInputVal] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showMemoryDrawer, setShowMemoryDrawer] = useState(false);
  const [newWeakTopic, setNewWeakTopic] = useState('');
  const [isEditingGoal, setIsEditingGoal] = useState(false);
  const [goalDraft, setGoalDraft] = useState(state.learningProfile?.learningGoal || 'Master AI & Machine Learning');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const companionName = state.pet.customName || state.pet.companionName;
  const companionImg = state.pet.isEvolved ? activeCompanion.evolvedImage : activeCompanion.image;

  // Auto-scroll on new message or typing
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isAiTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = inputVal.trim();
    if (!text || isAiTyping) return;
    setInputVal('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    await sendChatMessage(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleTextareaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputVal(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 180)}px`;
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddWeakTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWeakTopic.trim()) return;
    addWeakTopic(newWeakTopic.trim());
    setNewWeakTopic('');
  };

  const handleSaveGoal = () => {
    updateLearningProfile({ learningGoal: goalDraft });
    setIsEditingGoal(false);
  };

  const currentModeInfo = LEARNING_MODES.find(m => m.id === currentLearningMode) || LEARNING_MODES[0];

  return (
    <div className="relative flex flex-col lg:flex-row h-[calc(100vh-8.5rem)] min-h-[580px] bg-white rounded-3xl border border-[#102312]/10 shadow-xs overflow-hidden">
      {/* Main Chat Column */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#fafbfa]">
        {/* Chat Top Header */}
        <div className="px-5 py-3.5 bg-white border-b border-[#102312]/8 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative shrink-0">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center p-1.5 border border-black/5"
                style={{ backgroundColor: activeCompanion.bgLight || '#ebfbeb' }}
              >
                <img
                  src={companionImg}
                  alt={companionName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#25a53a] border-2 border-white" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="font-heading font-bold text-base text-[#102312] truncate">
                  {companionName}
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#3cc74f]/15 text-[#1a7f29]">
                  AI Mentor
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#5a705d]">
                  <span>•</span>
                  <span>Lv.{state.pet.level}</span>
                </span>
              </div>
              <p className="text-xs text-[#5a705d] truncate">
                {currentModeInfo.desc}
              </p>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Context/Memory Toggle */}
            <button
              onClick={() => setShowMemoryDrawer(!showMemoryDrawer)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
                showMemoryDrawer
                  ? 'bg-[#102312] text-white border-[#102312]'
                  : 'bg-white hover:bg-neutral-100 text-[#102312] border-neutral-200'
              }`}
              title="View Learner Profile & AI Context"
            >
              <Brain className="h-3.5 w-3.5 text-[#3cc74f]" />
              <span className="hidden sm:inline">Learner Memory</span>
            </button>

            {/* Clear Chat */}
            <button
              onClick={clearChat}
              className="p-2 rounded-xl text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
              title="Reset Chat Session"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mode Selector Strip */}
        <div className="px-5 py-2 bg-neutral-50/80 border-b border-[#102312]/5 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
          <span className="text-[11px] font-bold text-[#5a705d] uppercase tracking-wider mr-1 shrink-0 flex items-center gap-1">
            <Compass className="h-3 w-3" /> Mode:
          </span>
          {LEARNING_MODES.map(mode => {
            const Icon = mode.icon;
            const isSelected = currentLearningMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setChatLearningMode(mode.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-[#3cc74f] text-white shadow-xs'
                    : 'bg-white hover:bg-neutral-200 text-[#102312]/80 border border-neutral-200/60'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{mode.label}</span>
              </button>
            );
          })}
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {chatMessages.map((msg, index) => {
            const isUser = msg.role === 'user';
            const isLatestAssistant = !isUser && index === chatMessages.length - 1;

            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-3xl ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                {/* Avatar */}
                <div className="shrink-0 mt-0.5">
                  {isUser ? (
                    <div className="w-8 h-8 rounded-full bg-[#102312] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      {state.user?.name?.[0]?.toUpperCase() || 'U'}
                    </div>
                  ) : (
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center p-1 border border-black/5 shadow-xs"
                      style={{ backgroundColor: activeCompanion.bgLight || '#ebfbeb' }}
                    >
                      <img
                        src={companionImg}
                        alt={companionName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Message Bubble */}
                <div className="space-y-1 min-w-0 max-w-full">
                  <div className={`flex items-center gap-2 text-[11px] text-[#5a705d] px-1 ${isUser ? 'justify-end' : ''}`}>
                    <span className="font-bold text-[#102312]">
                      {isUser ? state.user?.name || 'You' : companionName}
                    </span>
                    <span>{msg.timestamp}</span>
                    {msg.mode && (
                      <span className="capitalize px-1.5 py-0.2 rounded text-[9px] font-bold bg-black/5 text-[#5a705d]">
                        {msg.mode}
                      </span>
                    )}
                  </div>

                  <div
                    className={`rounded-2xl p-4 sm:p-5 text-sm leading-relaxed border transition-all ${
                      isUser
                        ? 'bg-[#102312] text-white border-[#102312] rounded-tr-none'
                        : 'bg-white text-[#102312] border-neutral-200/80 rounded-tl-none shadow-xs'
                    }`}
                  >
                    {isUser ? (
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    ) : (
                      <div className="prose prose-sm max-w-none text-[#102312] prose-headings:font-heading prose-headings:font-bold prose-headings:text-[#102312] prose-p:my-1.5 prose-pre:bg-[#151c16] prose-pre:text-emerald-300 prose-pre:rounded-xl prose-pre:p-3.5 prose-code:font-mono prose-code:text-[#1a7f29] prose-code:bg-emerald-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-ul:my-2 prose-li:my-0.5">
                        <Markdown>{msg.content}</Markdown>
                      </div>
                    )}

                    {/* Follow-up suggestion buttons if provided */}
                    {msg.suggestedFollowups && msg.suggestedFollowups.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-black/5 flex flex-wrap gap-2">
                        {msg.suggestedFollowups.map((suggestion, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => sendChatMessage(suggestion)}
                            className="text-xs px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-[#3cc74f]/15 hover:text-[#1a7f29] text-[#102312] font-semibold transition-colors cursor-pointer"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Message Action Bar (Copy / Regenerate / Retry) */}
                  {!isUser && (
                    <div className="flex items-center gap-2 px-1 pt-1">
                      <button
                        onClick={() => copyToClipboard(msg.content, msg.id)}
                        className="flex items-center gap-1 text-[11px] font-semibold text-[#5a705d] hover:text-[#102312] transition-colors cursor-pointer"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>

                      {isLatestAssistant && (
                        <button
                          onClick={regenerateLastMessage}
                          disabled={isAiTyping}
                          className="flex items-center gap-1 text-[11px] font-semibold text-[#5a705d] hover:text-[#102312] transition-colors cursor-pointer disabled:opacity-40"
                        >
                          <RotateCcw className="h-3.5 w-3.5" />
                          <span>Regenerate</span>
                        </button>
                      )}

                      {msg.status === 'error' && (
                        <button
                          onClick={regenerateLastMessage}
                          className="flex items-center gap-1 text-[11px] font-bold text-rose-600 hover:text-rose-700 transition-colors cursor-pointer"
                        >
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>Retry</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isAiTyping && (
            <div className="flex gap-3 max-w-3xl mr-auto">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center p-1 border border-black/5 shrink-0"
                style={{ backgroundColor: activeCompanion.bgLight || '#ebfbeb' }}
              >
                <img
                  src={companionImg}
                  alt={companionName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-4 border border-neutral-200/80 shadow-xs flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#3cc74f] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#3cc74f] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#3cc74f] animate-bounce [animation-delay:0.4s]" />
                </div>
                <span className="text-xs font-semibold text-[#5a705d]">
                  {companionName} is formulating personalized guidance...
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-5 py-2 bg-neutral-50/70 border-t border-[#102312]/5 overflow-x-auto scrollbar-none flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#5a705d] whitespace-nowrap">
            Suggestions:
          </span>
          {QUICK_PROMPTS.map((qp, i) => (
            <button
              key={i}
              onClick={() => sendChatMessage(qp.prompt)}
              disabled={isAiTyping}
              className="px-3 py-1.5 bg-white hover:bg-[#3cc74f]/15 hover:border-[#3cc74f] text-[#102312] text-xs font-bold rounded-xl border border-neutral-200/70 transition-all cursor-pointer whitespace-nowrap shadow-2xs shrink-0 disabled:opacity-50"
            >
              {qp.label}
            </button>
          ))}
        </div>

        {/* Input Bar Form */}
        <div className="p-4 bg-white border-t border-[#102312]/8 shrink-0">
          <form onSubmit={handleSend} className="space-y-2">
            <div className="relative flex items-end gap-2 bg-[#f4f7f4] rounded-2xl border border-neutral-200 p-2 focus-within:border-[#3cc74f] focus-within:ring-2 focus-within:ring-[#3cc74f]/20 transition-all">
              <textarea
                ref={textareaRef}
                value={inputVal}
                onChange={handleTextareaInput}
                onKeyDown={handleKeyDown}
                placeholder={`Ask ${companionName} anything in English, Hindi, or Hinglish...`}
                rows={1}
                className="flex-1 bg-transparent border-none outline-none text-sm text-[#102312] placeholder:text-[#5a705d]/60 resize-none py-1.5 px-2 max-h-36"
              />

              <button
                type="submit"
                disabled={!inputVal.trim() || isAiTyping}
                className="h-10 w-10 rounded-xl bg-[#3cc74f] hover:bg-[#34b244] disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all cursor-pointer shadow-xs shrink-0"
                title="Send Message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center justify-between px-1 text-[11px] text-[#5a705d]">
              <span className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-[#3cc74f]" />
                Press <kbd className="px-1 py-0.5 bg-neutral-100 border border-neutral-200 rounded font-mono text-[10px]">Enter</kbd> to send, <kbd className="px-1 py-0.5 bg-neutral-100 border border-neutral-200 rounded font-mono text-[10px]">Shift+Enter</kbd> for new line
              </span>
              <span className="hidden sm:inline">
                Personalized for {state.user?.name || 'Learner'}
              </span>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column / Drawer: Learner Memory & Context */}
      {showMemoryDrawer && (
        <div className="w-full lg:w-80 bg-white border-t lg:border-t-0 lg:border-l border-[#102312]/10 p-5 overflow-y-auto space-y-6 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-[#3cc74f]" />
              <h3 className="font-heading font-bold text-sm text-[#102312]">
                AI Learning Memory
              </h3>
            </div>
            <button
              onClick={() => setShowMemoryDrawer(false)}
              className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="text-xs text-[#5a705d] leading-relaxed">
            {companionName} utilizes these parameters to personalize explanations, recommend roadmaps, and adapt teaching difficulty.
          </p>

          {/* Learning Goal */}
          <div className="space-y-2 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/70">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#102312]">Learning Goal</span>
              <button
                onClick={() => setIsEditingGoal(!isEditingGoal)}
                className="text-[11px] font-bold text-[#1a7f29] hover:underline cursor-pointer"
              >
                {isEditingGoal ? 'Cancel' : 'Edit'}
              </button>
            </div>

            {isEditingGoal ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={goalDraft}
                  onChange={e => setGoalDraft(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-neutral-300 rounded-xl outline-none focus:border-[#3cc74f]"
                  placeholder="e.g. Master AI & ML with Python"
                />
                <button
                  onClick={handleSaveGoal}
                  className="w-full py-1.5 rounded-xl bg-[#3cc74f] text-white text-xs font-bold hover:bg-[#34b244] transition-colors cursor-pointer"
                >
                  Save Goal
                </button>
              </div>
            ) : (
              <p className="text-xs text-[#5a705d] font-semibold">
                {state.learningProfile?.learningGoal || 'Master AI & Machine Learning with Python'}
              </p>
            )}
          </div>

          {/* Skill Level & Language */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-[#102312] mb-1">
                Current Level
              </label>
              <select
                value={state.learningProfile?.skillLevel || 'Beginner'}
                onChange={e =>
                  updateLearningProfile({
                    skillLevel: e.target.value as 'Beginner' | 'Intermediate' | 'Advanced',
                  })
                }
                className="w-full px-3 py-2 text-xs bg-white border border-neutral-200 rounded-xl font-semibold outline-none focus:border-[#3cc74f]"
              >
                <option value="Beginner">Beginner (Clear analogies, step-by-step)</option>
                <option value="Intermediate">Intermediate (Core principles & code)</option>
                <option value="Advanced">Advanced (Deep math & architecture)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#102312] mb-1">
                Preferred Language
              </label>
              <select
                value={state.learningProfile?.preferredLanguage || 'Auto'}
                onChange={e =>
                  updateLearningProfile({
                    preferredLanguage: e.target.value as 'English' | 'Hindi' | 'Hinglish' | 'Auto',
                  })
                }
                className="w-full px-3 py-2 text-xs bg-white border border-neutral-200 rounded-xl font-semibold outline-none focus:border-[#3cc74f]"
              >
                <option value="Auto">Auto-Detect (Seamless)</option>
                <option value="English">English</option>
                <option value="Hinglish">Hinglish (Casual & friendly)</option>
                <option value="Hindi">Hindi (Shuddh Hindi)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#102312] mb-1">
                Learning Style
              </label>
              <select
                value={state.learningProfile?.learningStyle || 'Step-by-step'}
                onChange={e =>
                  updateLearningProfile({
                    learningStyle: e.target.value as 'Hands-on' | 'Visual' | 'Step-by-step' | 'Conceptual',
                  })
                }
                className="w-full px-3 py-2 text-xs bg-white border border-neutral-200 rounded-xl font-semibold outline-none focus:border-[#3cc74f]"
              >
                <option value="Step-by-step">Step-by-step guidance</option>
                <option value="Hands-on">Hands-on coding first</option>
                <option value="Conceptual">Conceptual & intuition</option>
                <option value="Visual">Visual diagrams & mental models</option>
              </select>
            </div>
          </div>

          {/* Weak Topics Tracking */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#102312]">Weak Topics Focus</span>
              <span className="text-[10px] text-[#5a705d]">
                {state.learningProfile?.weakTopics?.length || 0} topics
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 min-h-8">
              {state.learningProfile?.weakTopics && state.learningProfile.weakTopics.length > 0 ? (
                state.learningProfile.weakTopics.map(topic => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/80"
                  >
                    <span>{topic}</span>
                    <button
                      onClick={() => removeWeakTopic(topic)}
                      className="hover:text-rose-900 cursor-pointer"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))
              ) : (
                <span className="text-xs text-[#5a705d] italic">
                  No weak topics tagged yet.
                </span>
              )}
            </div>

            <form onSubmit={handleAddWeakTopic} className="flex gap-1.5 pt-1">
              <input
                type="text"
                value={newWeakTopic}
                onChange={e => setNewWeakTopic(e.target.value)}
                placeholder="Add weak topic (e.g. Recursion)"
                className="flex-1 px-3 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#3cc74f]"
              />
              <button
                type="submit"
                disabled={!newWeakTopic.trim()}
                className="p-1.5 rounded-xl bg-neutral-100 hover:bg-[#3cc74f] hover:text-white text-[#102312] transition-colors cursor-pointer disabled:opacity-40"
              >
                <Plus className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Live Progress Stats for Context */}
          <div className="p-3.5 rounded-2xl bg-[#ebfbeb] border border-[#3cc74f]/20 space-y-2">
            <span className="text-xs font-bold text-[#1a7f29] block">
              Live Progress Context
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1.5 text-[#102312] font-semibold">
                <Flame className="h-3.5 w-3.5 text-amber-500" />
                <span>{state.streak} Day Streak</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#102312] font-semibold">
                <Gem className="h-3.5 w-3.5 text-blue-500" />
                <span>{state.gems} Gems</span>
              </div>
              <div className="col-span-2 text-[11px] text-[#5a705d]">
                <span>Enrolled: </span>
                <span className="font-bold text-[#102312]">
                  {state.enrolledCourses.length} course(s)
                </span>
                <span> • Completed: </span>
                <span className="font-bold text-[#102312]">
                  {state.completedChapters.length} chapter(s)
                </span>
              </div>
            </div>

            <button
              onClick={() => navigateTo('dashboard', { tab: 'courses' })}
              className="w-full mt-2 py-1.5 rounded-xl bg-white hover:bg-neutral-50 text-[#1a7f29] border border-[#3cc74f]/30 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              <span>Browse All Courses</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const SkillPetAIChat = CodeMateAIChat;
