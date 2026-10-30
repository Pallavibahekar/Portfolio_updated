# 🚀 Pallavi Bahekar — Portfolio

A modern, animated developer portfolio built with **React + Vite + Tailwind CSS**. It features an NLP-powered chatbot with a Gemini API layer and a from-scratch TF-IDF fallback engine, plus project walkthroughs with syntax-highlighted code.

## 👩‍💻 About

I'm Pallavi Bahekar, a Software Development Engineer at **PropertyGuru** with internships at **Google** and **Amazon**. This portfolio showcases my work, skills, and the AI-powered projects I've built.

- 🎓 B.Tech CS & AI, IIIT Lucknow (CGPA 8.7/10)
- 💼 SDE @ PropertyGuru — backend services, Elasticsearch migrations, LLM tooling
- 🏆 LeetCode Knight | Harvard WEAmplify Scholar | GHC Scholar
- 🤖 Interested in distributed systems, LLM applications, and multi-agent systems

## ✨ Features

### 🤖 AI-Powered Chatbot

- Gemini 2.0 Flash when `VITE_GEMINI_API_KEY` is set
- Custom TF-IDF NLP engine as an offline fallback — tokenization, stop-word filtering, partial matching, confidence scoring
- Live sentiment analyzer demo
- Grounded strictly in the portfolio knowledge base (`src/data/portfolioData.js`)

### 📱 Projects

- **Oracle-MAS** — LangGraph multi-agent system with FastMCP retrieval tools, Qdrant, Tavily, and AWS Bedrock
- **Dev-Link-Hub** — React + Node.js + MongoDB resource manager with JWT auth and auto-tagging
- **TimeWise** — Flutter + Firebase grocery app with ML shelf-life pricing
- **AI-Powered Portfolio** — this site
- Each card includes a preview, tech badges, and a code walkthrough

### 🎨 UI/UX

- Framer Motion scroll and hover animations
- Glassmorphism dark theme with gradient accents
- Fully responsive layout

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4
- **Libraries:** Framer Motion, React Icons, React Syntax Highlighter
- **AI/NLP:** Gemini 2.0 Flash (optional), custom TF-IDF engine, keyword sentiment scoring

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/Pallavibahekar/Portfolio_updated.git
cd Portfolio_updated
npm install
npm run dev    # or: npm start
```

The app runs at **http://localhost:5173**.

### Optional: enable Gemini

```bash
echo "VITE_GEMINI_API_KEY=your_key_here" > .env
```

Without a key, the chatbot falls back to the built-in TF-IDF engine.

### Build for Production

```bash
npm run build
npm run preview
```

## 📂 Project Structure

```
Portfolio_updated/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx        # previews + code walkthroughs
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Chatbot.jsx         # Gemini + TF-IDF engine + sentiment demo
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js    # single source of truth
│   ├── hooks/useInView.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   ├── previews/               # screenshots used in project cards
│   └── Pallavi_Bahekar_Resume.pdf
└── index.html
```

## 📫 Connect

- Email: [pallavibahekar34@gmail.com](mailto:pallavibahekar34@gmail.com)
- LinkedIn: [linkedin.com/in/pallavi-bahekar-9b904922a](https://www.linkedin.com/in/pallavi-bahekar-9b904922a/)
- GitHub: [github.com/Pallavibahekar](https://github.com/Pallavibahekar)
- LeetCode: [pal_2103](https://leetcode.com/pal_2103)
- CodeChef: [pal_krish](https://www.codechef.com/users/pal_krish)

## 📝 License

Released under the [MIT License](LICENSE).
