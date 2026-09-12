export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "What is CodeMate AI?",
    answer: "CodeMate AI combines proven micro-learning principles with an interactive virtual pet companion. As you complete lessons in AI, machine learning, prompt engineering, and data science, your pet gains experience, learns new tricks, and unlocks visual evolutions.",
  },
  {
    question: "How does pet evolution work?",
    answer: "Every quiz you answer correctly and chapter you complete awards XP and Gems. When your companion reaches milestone levels (or when you spend earned gems), they undergo a transformation from their base form into an advanced, cyber-evolved state with enhanced abilities and animations.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer: "Yes! Our curriculum is carefully tiered from Beginner to Advanced. Foundational courses like AI Fundamentals and Prompt Engineering assume zero prior technical background, breaking complex concepts into 5-minute interactive theory and quiz blocks.",
  },
  {
    question: "What happens if I break my learning streak?",
    answer: "Streaks track consecutive days with at least one completed lesson. If you miss a day, your streak counter resets—unless you use a Streak Freeze purchased with Gems earned from your daily quests.",
  },
  {
    question: "Can I switch my companion pet later?",
    answer: "Absolutely. You can adopt and switch between any of the 8 unique pets (Byte, Hedge, Kumo, Milo, Nimbus, Pip, Rexi, Uni) at any time through your Profile dashboard without losing your overall course progress.",
  },
  {
    question: "Is CodeMate free to use?",
    answer: "Yes, our core tracks and beginner chapters are 100% free forever. CodeMate Plus is an optional upgrade that unlocks unlimited hearts, all advanced chapters, and exclusive companion evolutions.",
  },
];
