import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'CodeMate AI Server', time: new Date().toISOString() });
});

// Lazy-initialized Gemini client
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!geminiClient) {
    geminiClient = new GoogleGenAI({ apiKey });
  }
  return geminiClient;
}

// System prompt builder utilizing user learning context
function buildSystemInstruction(context: any): string {
  const companionName = context?.pet?.customName || context?.pet?.companionName || 'Byte';
  const userName = context?.user?.name || 'Learner';
  const activeCourse = context?.activeCourse || 'Python for AI & Data';
  const streak = context?.streak ?? 0;
  const gems = context?.gems ?? 0;
  const mode = context?.currentMode || 'learn';
  const enrolled = Array.isArray(context?.enrolledCourses) ? context.enrolledCourses.join(', ') : 'None';
  const completed = Array.isArray(context?.completedChapters) ? `${context.completedChapters.length} chapters completed` : 'None';
  const weakTopics = Array.isArray(context?.weakTopics) && context.weakTopics.length > 0 ? context.weakTopics.join(', ') : 'None identified yet';
  const preferredLanguage = context?.preferredLanguage || 'auto-detect (English, Hindi, or Hinglish)';

  return `You are CodeMate AI, the personalized AI learning companion and study mentor inside the CodeMate educational platform.
You are currently manifesting through the learner's active companion pet "${companionName}".
You speak with warmth, intellect, and encouraging mentorship to "${userName}".

### Core Persona & Philosophy:
1. You are a personal teacher + mentor + study partner, NOT a generic corporate chatbot.
2. Adapt to the learner's skill level:
   - For beginners: Use clear analogies, step-by-step breakdowns, gentle guidance, and minimal unexplained jargon.
   - For advanced learners: Provide architectural depth, edge cases, math intuition, and production considerations.
3. Socratic Teaching: If the learner makes a mistake or asks for a solution to an exercise/puzzle, explain WHY and give intelligent hints rather than spoiling the whole solution immediately.
4. Natural Language Flexibility:
   - Understand English, Hindi, and Hinglish naturally!
   - If the learner asks in Hinglish (e.g. "Bhai mujhe Python functions samajh nahi aa rahe"), respond warmly in relatable, beginner-friendly Hinglish with clear code examples.
   - Match the learner's tone and preferred language naturally (${preferredLanguage}).
5. Current Learning Context & Live Memory:
   - Active Companion: ${companionName}
   - Current Learning Mode: ${mode.toUpperCase()} (Modes: Learn, Practice, Quiz, Doubt, Revision, Project, Interview)
   - Active Course: ${activeCourse}
   - Enrolled Courses: ${enrolled}
   - Completed Chapters: ${completed}
   - Streak: ${streak} days
   - Gems: ${gems}
   - Stored Weak Topics: ${weakTopics}
6. Platform Awareness:
   - CodeMate has courses in: "Python for AI & Data", "Machine Learning Foundations", "Deep Learning & Neural Nets", "Generative AI & LLMs", "Computer Vision Mastery", "Natural Language Processing", "Prompt Engineering & AI Agents", "Data Structures & Algorithms".
   - It has interactive quizzes, practice checkpoints, daily streak calendars, heart/hint systems, gem rewards, and companion sanctuary evolutions.
   - When appropriate, guide the user to the relevant dashboard section (e.g. Courses, Progress, Chapter Runner, Profile).
   - NEVER invent nonexistent platform features or false progress. Be completely honest and motivating!`;
}

// Contextual fallback response generator when API key is not yet set
function generateFallbackResponse(userMessage: string, context: any): string {
  const companion = context?.pet?.customName || 'Byte';
  const lower = userMessage.toLowerCase();
  const userName = context?.user?.name || 'Learner';
  const mode = context?.currentMode || 'learn';

  if (lower.includes('hindi') || lower.includes('hinglish') || lower.includes('samjha') || lower.includes('bhai') || lower.includes('kya')) {
    if (lower.includes('roadmap') || lower.includes('kahan se shuru') || lower.includes('seekhna')) {
      return `Hey ${userName}! Main hoon tumhara AI companion **${companion}** 🐾\n\nAgar tumhe AI & Machine Learning seekhna hai, toh ye step-by-step roadmap follow karo:\n\n1. **Python Fundamentals**: Variables, Loops, Functions, aur OOP basics.\n2. **Data Handling**: NumPy & Pandas se datasets ko clean aur manipulate karna.\n3. **Math & Stats**: Linear Algebra, Probability, aur Calculus fundamentals.\n4. **Classical Machine Learning**: Scikit-Learn se Regression, Classification & Clustering.\n5. **Deep Learning & Neural Networks**: PyTorch / TensorFlow se CNNs aur Transformers.\n6. **GenAI & LLMs**: Prompt Engineering, Embeddings, aur LangChain/Agents.\n\nCodeMate ke **"Python for AI & Data"** course se shuru karo. Batao, pehle kis topic me doubt hai?`;
    }
    return `Arre ${userName}! Main hoon **${companion}**, tumhara study partner 🚀\n\nMain tumhare queries samajh sakta hoon. Tum Python, Machine Learning, Data Science, ya Coding ka koi bhi concept mujhse pooch sakte ho. Main Hinglish aur English dono me step-by-step samjhaunga!\n\nBatao, aaj kya revise ya practice karna chahte ho?`;
  }

  if (lower.includes('roadmap') || lower.includes('where to start') || lower.includes('python')) {
    return `Hey ${userName}! Here is your personalized CodeMate AI Roadmap based on your active progress 🗺️:\n\n### Recommended Path:\n1. **Python for AI & Data**: Master basic syntax, data structures, and functional programming.\n2. **NumPy & Pandas**: Array manipulations and tabular data wrangling.\n3. **Machine Learning Foundations**: Supervised vs. unsupervised models, loss functions, and evaluation metrics.\n4. **Deep Learning & Transformers**: Building neural nets and fine-tuning state-of-the-art models.\n5. **Hands-on Capstone Project**: Deploying an intelligent AI agent with Gemini API.\n\nYou can access your enrolled courses directly in the **Courses** tab! Would you like a quick quiz or an explanation on any specific concept?`;
  }

  if (mode === 'quiz' || lower.includes('quiz') || lower.includes('test')) {
    return `Here is a quick knowledge checkpoint for you, ${userName}! 🎯\n\n**Question**: In Python, what is the primary difference between a \`list\` and a \`tuple\`?\n\n**Options**:\nA) Lists are immutable, while tuples are mutable.\nB) Lists are mutable (can be changed), while tuples are immutable (read-only once created).\nC) Tuples can only store numbers, while lists store any data type.\nD) There is no difference; they are aliases.\n\nReply with your answer and reasoning, and I will evaluate it!`;
  }

  if (mode === 'practice' || lower.includes('practice') || lower.includes('code') || lower.includes('exercise')) {
    return `Let's practice some code together, ${userName}! 💻\n\n**Challenge**: Write a Python function \`find_maximum(numbers: list[int]) -> int\` that returns the largest number in a list without using the built-in \`max()\` function.\n\n**Hint**: Start by assuming the first element is the largest, then loop through the rest of the elements and update your tracker if you find a larger value.\n\nTry writing your solution and paste it here!`;
  }

  return `Hello ${userName}! I'm **${companion}**, your personal AI study partner and mentor at CodeMate 🌟\n\nI'm tracking your learning in **${context?.activeCourse || 'AI Foundations'}** with a **${context?.streak ?? 0}-day streak**!\n\nHere is how I can assist you right now:\n- 📚 **Explain Concepts**: Ask me to break down any coding or AI topic in simple terms or Hinglish.\n- 📝 **Interactive Quizzes**: Test your knowledge on recent chapters.\n- 💡 **Code Reviews & Debugging**: Paste error messages or snippets to debug together.\n- 🗺️ **Learning Roadmaps**: Get personalized step-by-step study plans tailored to your goals.\n\nWhat would you like to explore today?`;
}

// Chat API Route
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, context } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    const lastMessage = messages[messages.length - 1];
    const userPrompt = lastMessage.content;
    const client = getGeminiClient();

    if (!client) {
      // Return high-quality contextual response if GEMINI_API_KEY is not yet supplied in env
      const fallbackReply = generateFallbackResponse(userPrompt, context);
      return res.json({
        reply: fallbackReply,
        source: 'smart-fallback',
        note: 'To activate live Gemini-powered inference, add GEMINI_API_KEY in your environment settings.',
      });
    }

    const systemInstruction = buildSystemInstruction(context);

    // Format chat history for Gemini multi-turn
    const contents = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    let replyText = '';
    let usedModel = 'gemini-3.8-flash';

    try {
      const response = await client.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });
      replyText = response.text || '';
    } catch (primaryError: any) {
      console.warn('Primary model gemini-3.8-flash failed, attempting fallback to gemini-3.1-pro-preview:', primaryError?.message);
      const fallbackModelResp = await client.models.generateContent({
        model: 'gemini-3.1-pro-preview',
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });
      replyText = fallbackModelResp.text || '';
      usedModel = 'gemini-3.1-pro-preview';
    }

    if (!replyText) {
      replyText = 'I am thinking through this concept, but could not generate a response right now. Please try asking again!';
    }

    return res.json({
      reply: replyText,
      source: usedModel,
    });
  } catch (error: any) {
    console.error('Error in /api/chat handler:', error);
    // Fallback gracefully so the UI is never broken
    const fallbackReply = generateFallbackResponse(req.body?.messages?.slice(-1)[0]?.content || '', req.body?.context);
    return res.json({
      reply: fallbackReply,
      source: 'error-fallback',
      errorDetails: error?.message || 'Inference error',
    });
  }
});

// Setup Vite middleware in dev or static files in prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
