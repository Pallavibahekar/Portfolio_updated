import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend, FiCpu, FiActivity, FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { chatbotKnowledge } from "../data/portfolioData";

// ─── NLP ENGINE ──────────────────────────────────────────────────────────────

/** Tokenize: lowercase, strip punctuation, split */
function tokenize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
}

/** Stop words to ignore */
const STOP_WORDS = new Set([
  "a","an","the","is","are","was","were","be","been","being","have","has","had",
  "do","does","did","will","would","could","should","may","might","shall","can",
  "i","me","my","you","your","she","her","he","his","they","their","we","our",
  "what","who","where","when","how","why","tell","about","please","can","me",
  "and","or","but","in","on","at","to","for","of","with","by","from",
]);

/** TF-IDF style scoring: count matching non-stop tokens between query and keywords */
function tfidfScore(queryTokens, keywords) {
  const keyTokens = keywords.flatMap((kw) => tokenize(kw));
  const keySet = new Set(keyTokens);
  let matches = 0;
  for (const t of queryTokens) {
    if (!STOP_WORDS.has(t) && keySet.has(t)) matches++;
  }
  return matches;
}

/** Partial match score: does any keyword appear as substring in the full query? */
function partialScore(query, keywords) {
  return keywords.some((kw) => query.includes(kw.toLowerCase())) ? 1 : 0;
}

/** Main NLP function: find best-matching intent with confidence */
function nlpGetResponse(input) {
  const query = input.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
  const tokens = tokenize(query).filter((t) => !STOP_WORDS.has(t));

  let bestScore = 0;
  let bestEntry = null;

  for (const entry of chatbotKnowledge) {
    const score = tfidfScore(tokens, entry.keywords) * 2 + partialScore(query, entry.keywords);
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  const confidence = Math.min(100, bestScore * 20);

  if (bestScore === 0 || !bestEntry) {
    return {
      text: "I'm Pallavi's portfolio-specific AI — I only know about Pallavi! 😊\n\nTry asking about her **skills**, **Google internship**, **Amazon internship**, **projects**, **achievements**, **education**, or **contact** info.\n\nFor anything outside Pallavi's profile, try Google! 🔍",
      confidence: 0,
      intent: "unknown",
    };
  }

  return { text: bestEntry.response, confidence, intent: bestEntry.keywords[0] };
}

// ─── SENTIMENT ANALYSIS (NLP Demo) ───────────────────────────────────────────

const POSITIVE_WORDS = [
  // General sentiment
  "good","great","amazing","excellent","impressive","talented","skilled","best","love","nice",
  "fantastic","outstanding","brilliant","smart","creative","awesome","recommend","hire","perfect","strong",
  // Achievement / accomplishment context
  "scholar","scholarship","selected","achieved","achievement","accomplished","won","winner","ranked",
  "rank","award","awarded","recognised","recognition","accepted","top","leading","distinguished",
  "mentee","mentor","featured","honoured","honored","invited","certified","qualified","merit",
  "promoted","published","contributed","built","launched","shipped","led","managed","designed",
  "solved","optimised","optimized","improved","increased","delivered","earned","completed",
  "knight","star","global","finalist","shortlisted","selected",
];
const NEGATIVE_WORDS = ["bad","poor","weak","average","boring","mediocre","unimpressive","lacking","slow","difficult","hard","complicated","confusing","issue","problem","fail","no","not"];

function analyzeSentiment(text) {
  const tokens = tokenize(text);
  let pos = 0, neg = 0;
  const matched = { positive: [], negative: [] };
  for (const t of tokens) {
    if (POSITIVE_WORDS.includes(t)) { pos++; matched.positive.push(t); }
    if (NEGATIVE_WORDS.includes(t)) { neg++; matched.negative.push(t); }
  }
  const total = pos + neg;
  if (total === 0) return { label: "Neutral 😐", score: 50, pos: 0, neg: 0, matched };
  const score = Math.round((pos / total) * 100);
  const label = score >= 70 ? "Positive 😊" : score <= 30 ? "Negative 😞" : "Neutral 😐";
  return { label, score, pos, neg, matched };
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

// Build a grounded system prompt from the knowledge base
function buildSystemPrompt() {
  const facts = chatbotKnowledge.map((e) => e.response).join("\n\n");
  return `You are an AI assistant for Pallavi Bahekar's portfolio website.

STRICT RULES:
- Answer ONLY the specific thing the user asked about. Do NOT dump all related information.
- If they ask "what is X", explain only X in 2-4 lines. Do not explain Y and Z unless asked.
- Be concise and direct. Max 4-5 lines unless the user asks for full details.
- Use emojis sparingly — only 1-2 per response.
- Never make up information. Only use the facts provided below.
- If the question is not covered by the facts, say "I don't have that info — try asking about her skills, internships, or projects!"

--- PALLAVI'S PORTFOLIO DATA ---
${facts}
--- END OF DATA ---`;
}

/** Call Gemini API — returns response text or null on failure */
async function geminiGetResponse(userMessage) {
  if (!GEMINI_API_KEY) return null;
  try {
    const res = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: buildSystemPrompt() }] },
        contents: [{ role: "user", parts: [{ text: userMessage }] }],
        generationConfig: { maxOutputTokens: 350, temperature: 0.4 },
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? null;
  } catch {
    return null;
  }
}

const WELCOME = {
  from: "bot",
  text: "Hey! 👋 I'm Pallavi's **Gemini-powered** AI assistant.\n\nI use **Google Gemini** to understand your questions naturally, with a **TF-IDF fallback** engine built from scratch. Ask me anything about her skills, experience, projects, or achievements!",
  confidence: null,
  engine: "gemini",
};

function Message({ msg }) {
  const isBot = msg.from === "bot";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isBot ? "justify-start" : "justify-end"} mb-3 gap-2`}
    >
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs flex-shrink-0 mt-1">
          🤖
        </div>
      )}
      <div className="flex flex-col gap-1 max-w-[82%]">
        <div
          className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
            isBot
              ? "bg-white/6 text-gray-200 rounded-tl-sm border border-white/8"
              : "bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-tr-sm"
          }`}
          dangerouslySetInnerHTML={{
            __html: msg.text
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-purple-300">$1</strong>')
              .replace(/\n/g, "<br/>"),
          }}
        />
        {/* Engine badge for bot messages */}
        {isBot && msg.engine && (
          <div className="flex items-center gap-1.5 ml-1">
            {msg.engine === "gemini" ? (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20 font-medium">✨ Gemini AI</span>
            ) : msg.confidence !== null && msg.confidence !== undefined ? (
              <div className="flex items-center gap-1">
                <FiActivity size={9} className="text-gray-600" />
                <div className="h-1 rounded-full bg-white/5 w-16 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      msg.confidence >= 70 ? "bg-green-500" : msg.confidence >= 40 ? "bg-yellow-500" : "bg-red-400"
                    }`}
                    style={{ width: `${msg.confidence}%` }}
                  />
                </div>
                <span className="text-gray-600 text-[10px]">{msg.confidence}% match</span>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function SentimentDemo() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const run = () => {
    if (!text.trim()) return;
    setResult(analyzeSentiment(text));
  };

  return (
    <div className="border-t border-white/8 p-3 bg-white/2">
      <div className="flex items-center gap-1.5 mb-2">
        <FiCpu size={11} className="text-cyan-400" />
        <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">Live Sentiment Analyzer</span>
      </div>
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && run()}
          placeholder="Type any sentence..."
          className="flex-1 text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-500/40"
        />
        <button
          onClick={run}
          className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 text-xs font-medium hover:bg-cyan-500/30 transition-colors border border-cyan-500/20"
        >
          Analyze
        </button>
      </div>
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 p-2.5 rounded-lg bg-white/4 border border-white/8"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-white">{result.label}</span>
              <span className="text-xs text-gray-500">{result.score}% positive</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden mb-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${result.score}%` }}
                transition={{ duration: 0.6 }}
                className={`h-full rounded-full ${result.score >= 70 ? "bg-green-500" : result.score <= 30 ? "bg-red-400" : "bg-yellow-500"}`}
              />
            </div>
            <div className="flex gap-3 text-[10px] text-gray-500">
              {result.matched.positive.length > 0 && (
                <span>✅ {result.matched.positive.join(", ")}</span>
              )}
              {result.matched.negative.length > 0 && (
                <span>❌ {result.matched.negative.join(", ")}</span>
              )}
              {result.matched.positive.length === 0 && result.matched.negative.length === 0 && (
                <span className="text-gray-600">No sentiment keywords detected</span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MAIN CHATBOT ─────────────────────────────────────────────────────────────

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [tab, setTab] = useState("chat"); // "chat" | "nlp"
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    // Try Gemini first, fall back to TF-IDF
    const geminiText = await geminiGetResponse(trimmed);
    if (geminiText) {
      setMessages((prev) => [...prev, { from: "bot", text: geminiText, confidence: null, engine: "gemini" }]);
    } else {
      const { text: responseText, confidence } = nlpGetResponse(trimmed);
      setMessages((prev) => [...prev, { from: "bot", text: responseText, confidence, engine: "tfidf" }]);
    }
    setTyping(false);
  };

  const suggested = [
    "Where does she work?",
    "Google internship details",
    "What are her skills?",
    "Tell me her achievements",
    "Show me her projects",
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(true)}
        animate={open ? { scale: 0, opacity: 0, pointerEvents: "none" } : { scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl shadow-purple-900/40"
      >
        <FiMessageSquare size={22} className="text-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-gray-950 animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 24, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 24 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className={`fixed z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/30 border border-white/10 transition-all duration-300 ${
              maximized
                ? "bottom-0 right-0 w-full h-full rounded-none"
                : "bottom-6 right-6 w-[340px] sm:w-[380px]"
            }`}
            style={{ height: maximized ? "100dvh" : "540px", background: "rgba(8,8,18,0.97)", backdropFilter: "blur(24px)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-700/70 to-pink-700/70 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-sm">🤖</div>
                <div>
                  <p className="text-white font-semibold text-sm leading-none">Pallavi's AI Assistant</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <FiCpu size={9} className="text-cyan-400" />
                    <span className="text-cyan-300 text-[10px]">Gemini AI · TF-IDF Fallback</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMaximized((m) => !m)}
                  className="text-white/50 hover:text-white transition-colors p-1"
                  title={maximized ? "Minimize" : "Maximize"}
                >
                  {maximized ? <FiMinimize2 size={15} /> : <FiMaximize2 size={15} />}
                </button>
                <button onClick={() => { setOpen(false); setMaximized(false); }} className="text-white/50 hover:text-white transition-colors p-1">
                  <FiX size={17} />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/8 flex-shrink-0">
              {[{ id: "chat", label: "💬 Chat" }, { id: "nlp", label: "🧠 NLP Demo" }].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex-1 py-2 text-xs font-semibold transition-all ${
                    tab === t.id
                      ? "text-purple-300 border-b-2 border-purple-500 bg-purple-500/5"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {tab === "chat" ? (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3.5 space-y-0.5 min-h-0" style={{ scrollbarWidth: "thin", scrollbarColor: "#3f3f5f transparent" }}>
                  {messages.map((msg, i) => (
                    <Message key={i} msg={msg} />
                  ))}
                  {typing && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2 mb-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs flex-shrink-0 mt-1">🤖</div>
                      <div className="bg-white/6 border border-white/8 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                        {[0, 0.18, 0.36].map((d, i) => (
                          <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.65, delay: d }} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                  <div ref={bottomRef} />
                </div>

                {/* Suggested chips */}
                {messages.length <= 2 && (
                  <div className="px-3 pb-2 flex flex-wrap gap-1.5 flex-shrink-0">
                    {suggested.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-purple-300 hover:border-purple-400/30 transition-all"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="px-3 py-3 border-t border-white/8 flex gap-2 flex-shrink-0">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
                    placeholder="Ask about Pallavi..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500/40 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => sendMessage()}
                    disabled={!input.trim()}
                    className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center disabled:opacity-30 transition-opacity flex-shrink-0"
                  >
                    <FiSend size={13} className="text-white" />
                  </motion.button>
                </div>
              </>
            ) : (
              /* NLP Demo Tab */
              <div className="flex-1 overflow-y-auto min-h-0">
                <div className="p-4 space-y-4">
                  <div className="card-glass p-4">
                    <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                      <FiCpu className="text-purple-400" /> How the NLP Engine Works
                    </h4>
                    <div className="space-y-2.5">
                      {[
                        { step: "1. Gemini AI", desc: "User message sent to Google Gemini with portfolio data as system context" },
                        { step: "2. Grounded", desc: "System prompt constrains Gemini to only answer from Pallavi's portfolio facts" },
                        { step: "3. TF-IDF Fallback", desc: "If Gemini is unavailable, custom TF-IDF keyword scoring takes over" },
                        { step: "4. Tokenize", desc: "Fallback: input lowercased, stop words removed, tokens scored against intents" },
                        { step: "5. Best Intent", desc: "Fallback: highest-scoring intent returns response with confidence %" },
                      ].map((item) => (
                        <div key={item.step} className="flex gap-3 text-xs">
                          <span className="text-purple-400 font-semibold flex-shrink-0 w-24">{item.step}</span>
                          <span className="text-gray-400">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card-glass p-4">
                    <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                      <span>📊</span> Live Sentiment Analysis
                    </h4>
                    <p className="text-gray-500 text-xs mb-3">
                      Based on Pallavi's Timewise project — type any sentence to analyze its sentiment using keyword-based NLP scoring.
                    </p>
                    <SentimentDemo />
                  </div>

                  <div className="card-glass p-4">
                    <h4 className="text-white font-semibold text-sm mb-2">📚 Pallavi's NLP Experience</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Pallavi built <strong className="text-purple-300">Timewise</strong>, a grocery app with real-time
                      <strong className="text-cyan-300"> sentiment analysis</strong> on product reviews,{" "}
                      <strong className="text-pink-300">NLP-driven purchase suggestions</strong>, and
                      ML-based recipe recommendations — using Python, Firebase, and Flutter.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
