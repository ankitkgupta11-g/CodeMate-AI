# 🐾 CodeMate AI

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Gemini API](https://img.shields.io/badge/Powered_by-Google_Gemini-4285F4?logo=google)](https://ai.google.dev/)
[![Vercel Ready](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

> **Your Gamified, Context-Aware AI Coding & Technology Learning Companion.**

🔗 **Live Demo:** https://code-mate-ai-two.vercel.app/

**CodeMate AI** combines an interactive gamified learning platform with an intelligent AI study mentor. Instead of struggling through dry documentation or disconnected chat interfaces, learners study through guided roadmaps, bite-sized chapters, interactive practice quizzes, evolvable AI companions, and real-time doubt solving in English, Hindi, and Hinglish.

---

## 🌟 Key Features

### 🤖 Live AI Companion & Study Mentor

* **Powered by Google Gemini**: Natural conversation, live Socratic explanations, and structured debugging.
* **Multilingual & Hinglish Support**: Ask questions in English, Hindi, or conversational Hinglish (*"Bhai Python loops easy way me samjha de"*).
* **Multiple Learning Modes**:

  * 📖 **Learn**: Core conceptual walkthroughs and analogies.
  * 🧩 **Practice**: Real coding exercises and algorithmic challenges.
  * 📝 **Quiz**: Knowledge checkpoints with instant evaluation and hints.
  * 💡 **Doubt**: Step-by-step problem breakdown.
  * 🔄 **Revision**: Review previously flagged weak areas.
  * 🚀 **Project**: Guidance on building real-world AI & software applications.
  * 🎯 **Interview**: Technical mock interview questions.
* **Smart Fallback Engine**: If an API key is missing or quotas are hit, built-in intelligent offline fallbacks ensure the learner is never stuck.

### 🎮 Gamified Learning Ecosystem

* **Evolvable Companions (Sanctuary)**: Choose companions like *Byte*, *Nova*, *Sage*, and *Pyra* that gain XP, level up, and evolve as you complete lessons.
* **Interactive Chapter Runner**: Theory blocks, multiple-choice questions, fill-in-the-blanks, code exercises, and instant feedback.
* **Streaks & Currency**: Earn daily streak multipliers, collect gems, and unlock companion customizations.
* **Dynamic Quests & Achievements**: Daily study challenges and milestones.

### 🛡️ Authentication & Cloud Persistence

* **Dual Authentication**: Google 1-Click Sign-In (OAuth popup) and secure Email/Password Sign-In / Sign-Up.
* **Role-Based Access Control (RBAC)**: Distinct permissions for **Owner / Admin** and **Student / Learner** roles.
* **Cloud Sync with Firestore**: Automatically syncs user streaks, gems, chapter completion states, notes, and sanctuary pet levels across devices.
* **Zero-Trust Security**: Server-enforced `firestore.rules` ensure users can only read and write their own authorized records.

### 🗺️ Curated Courses & Learning Roadmaps

* **Python for AI & Data**: Syntax, data structures, and functional patterns.
* **Machine Learning Foundations**: Supervised and unsupervised algorithms, math intuition.
* **Deep Learning & Neural Nets**: CNNs, RNNs, and Transformers.
* **Generative AI & LLMs**: Prompt engineering, RAG, and AI agent architectures.
* **Computer Vision & NLP**: Image processing, embeddings, and tokenization.
* **Data Structures & Algorithms**: Arrays, trees, graphs, and dynamic programming.

---

## 🛠️ Tech Stack

* **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations & Icons**: [Motion](https://motion.dev/), [Lucide React](https://lucide.dev/)
* **AI Model**: [Google Gen AI SDK (`@google/genai`)](https://www.npmjs.com/package/@google/genai) — Gemini 2.5 Flash / Gemini 3.8 Flash
* **Authentication & Database**:
  * [Firebase Authentication](https://firebase.google.com/docs/auth) (Google 1-Click Popup + Email/Password sign-in)
  * [Cloud Firestore](https://firebase.google.com/docs/firestore) (Real-time cloud database for persistent progress, streaks, gems, and companion evolutions)
  * Role-Based Access Control (RBAC) with Owner/Admin controls & Zero-Trust Firestore Security Rules (`firestore.rules`)
* **Backend & Server**:

  * **Node.js + Express**: Full-stack bundled server (`server.ts`) for containers / Cloud Run / Railway / Docker.
  * **Vercel Serverless Function**: Serverless chat endpoint (`/api/chat.ts`) for zero-config Vercel deployment.
* **Bundler**: [Vite](https://vitejs.dev/) + [esbuild](https://esbuild.github.io/)

---

## 📁 Project Architecture

```text
CodeMate-AI/
├── api/
│   └── chat.ts                     # Vercel Serverless API handler (Gemini + fallback)
├── public/                         # Public assets & companion artwork
├── src/
│   ├── components/
│   │   ├── AuthScreen.tsx          # Login & onboarding screens
│   │   ├── LandingPage.tsx         # Showcase & feature landing view
│   │   └── Dashboard/
│   │       ├── CodeMateAIChat.tsx   # Live conversational AI companion chat
│   │       ├── ChapterRunner.tsx   # Interactive lesson runner with quiz engine
│   │       ├── CourseCatalog.tsx   # Course exploration and enrollment
│   │       ├── DashboardShell.tsx  # Main dashboard layout and sidebar
│   │       ├── PetSanctuary.tsx    # Companion XP, evolutions, and customization
│   │       ├── ProfileView.tsx     # User progress, stats, and achievements
│   │       └── ProgressTracker.tsx # Topic breakdown, streak calendar, weak areas
│   ├── context/
│   │   └── AppContext.tsx          # Global reactive state (courses, user, companions)
│   ├── data/
│   │   ├── courses.ts              # Course curriculum and chapter content
│   │   └── companions.ts            # Companion characters and evolution trees
│   ├── types.ts                    # TypeScript interfaces & domain models
│   ├── App.tsx                     # Top-level view router
│   ├── main.tsx                    # React DOM root entry
│   └── index.css                   # Global Tailwind CSS styles
├── firestore.rules                 # Cloud Firestore Zero-Trust security rules
├── server.ts                       # Express + Vite production & dev server
├── package.json                    # Dependencies & build scripts
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite build and Tailwind setup
└── .env.example                    # Environment variable template
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ankitkgupta11-g/CodeMate-AI.git
cd CodeMate-AI
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Add your Gemini API key (optional for local fallback, required for live AI responses):

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

> Get your API key for free from [Google AI Studio](https://aistudio.google.com/).

### 4. Run Locally

```bash
npm run dev
```

Open your browser at **http://localhost:3000**.

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)

🔗 **Live Demo:** https://code-mate-ai-two.vercel.app/

1. Push your repository to **GitHub**.
2. Go to [Vercel](https://vercel.com) and click **Add New Project** → Import your repository.
3. Build Settings will be auto-detected:

   * **Framework Preset**: Vite
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
4. Under **Environment Variables**, add:

   * `GEMINI_API_KEY`: *Your Google Gemini API Key*
5. Click **Deploy**. Both the Vite frontend and `/api/chat` serverless function will be active.

### Deploying to Docker / Cloud Run / Railway / Render

The project includes a production Node/Express server (`server.ts` compiled to `dist/server.cjs`):

```bash
# 1. Build client and server
npm run build

# 2. Start production server
npm start
```

Bind the container to port `3000` and supply the `GEMINI_API_KEY` environment variable.

---

## 🔑 Environment Variables

| Variable         | Description                                         | Required?                             |
| :--------------- | :-------------------------------------------------- | :------------------------------------ |
| `GEMINI_API_KEY` | Google Gemini API key for real-time model inference | Optional (has smart offline fallback) |
| `PORT`           | Server listening port (defaults to `3000`)          | Optional                              |

---

## 🤝 Contributing

Contributions and feedback are welcome!

1. Fork the repo (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'feat: add amazing-feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

```
This project is open-source and available under the [MIT License](https://github.com/ankitkgupta11-g/CodeMate-AI/blob/main/LICENSE).
```
