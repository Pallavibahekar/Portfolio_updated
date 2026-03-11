import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/portfolioData";
import { FiGithub, FiChevronDown, FiCpu, FiCode, FiMaximize2, FiX } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// ── Timewise: Real Screenshot Carousel ───────────────────────────────────────
function TimewisePreview() {
  const [active, setActive] = useState(0);
  const images = [
    { src: new URL("../assets/timewise/front1.jpg", import.meta.url).href, label: "Home Screen" },
    { src: new URL("../assets/timewise/front2.jpg", import.meta.url).href, label: "Dashboard" },
    { src: new URL("../assets/timewise/front3.jpg", import.meta.url).href, label: "Features" },
    { src: new URL("../assets/timewise/ui1.jpg", import.meta.url).href, label: "Grocery Listing" },
    { src: new URL("../assets/timewise/ui2.jpg", import.meta.url).href, label: "Cart System" },
    { src: new URL("../assets/timewise/ui3.jpg", import.meta.url).href, label: "Recipes" },
    { src: new URL("../assets/timewise/ui4.jpg", import.meta.url).href, label: "Health Alerts" },
    { src: new URL("../assets/timewise/ui5.jpg", import.meta.url).href, label: "Seller Dashboard" },
    { src: new URL("../assets/timewise/ui7.jpg", import.meta.url).href, label: "Sentiment Reviews" },
    { src: new URL("../assets/timewise/ui8.jpg", import.meta.url).href, label: "Food News" },
    { src: new URL("../assets/timewise/ui9.jpg", import.meta.url).href, label: "YouTube Suggestions" },
  ];

  return (
    <div className="relative h-64 overflow-hidden rounded-t-2xl bg-gradient-to-br from-purple-950 via-gray-950 to-gray-950 group/preview">
      {/* Sliding images */}
      <AnimatePresence mode="wait">
        <motion.img
          key={active}
          src={images[active].src}
          alt={images[active].label}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover object-top"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </AnimatePresence>

      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />

      {/* Slide dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 flex-wrap justify-center max-w-[180px]">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-5 bg-purple-400" : "w-1.5 bg-white/30 hover:bg-white/60"}`}
          />
        ))}
      </div>

      {/* Left chevron — always visible */}
      <button
        onClick={() => setActive((active + images.length - 1) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-purple-600/80 transition-all z-10 shadow-lg"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button
        onClick={() => setActive((active + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-purple-600/80 transition-all z-10 shadow-lg"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      {/* Badge */}
      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-purple-400/30 text-purple-300 text-[9px] font-semibold z-10">
        Flutter + Firebase
      </div>
      {/* Slide label */}
      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-gray-400 text-[9px] z-10">
        {images[active].label}
      </div>
      {/* Counter */}
      <div className="absolute bottom-3 right-3 text-[9px] text-white/40 z-10">{active + 1} / {images.length}</div>
    </div>
  );
}

// ── Portfolio: Live iframe screenshot ────────────────────────────────────────
function PortfolioPreview() {
  return (
    <div className="relative h-64 overflow-hidden rounded-t-2xl bg-gray-950 group/preview">
      {/* Scaled-down live iframe of the portfolio itself */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <iframe
          src="/"
          title="Portfolio Preview"
          className="w-[200%] h-[200%] origin-top-left scale-50 border-none"
          scrolling="no"
          tabIndex={-1}
        />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-gray-950/60 to-transparent pointer-events-none" />
      {/* Badge */}
      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 text-[9px] font-semibold z-10">
        React + Vite + NLP
      </div>
      {/* Live indicator */}
      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-green-400/30 text-green-400 text-[9px] z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        live
      </div>
    </div>
  );
}

// ── Preview map by project title ──────────────────────────────────────────────
const PREVIEWS = {
  "TimeWise — Smart Grocery App": <TimewisePreview />,
  "AI-Powered Portfolio": <PortfolioPreview />,
};

// ── Preview Modal ─────────────────────────────────────────────────────────────
function PreviewModal({ title, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
        >
          <FiX size={14} />
        </button>
        <div className="overflow-hidden rounded-t-2xl">{PREVIEWS[title]}</div>
        <div className="bg-gray-950 px-5 py-3 border-t border-white/8">
          <p className="text-white font-semibold text-sm">{title}</p>
          <p className="text-gray-500 text-xs mt-0.5">App Preview Mockup</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ proj, index, inView }) {
  const [showWalkthrough, setShowWalkthrough] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const hasPreview = !!PREVIEWS[proj.title];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="card-glass flex flex-col group hover:border-purple-500/30 transition-all duration-300"
      >
        {/* ── Preview Banner ── */}
        {hasPreview && (
          <div className="relative cursor-pointer" onClick={() => setShowModal(true)}>
            {PREVIEWS[proj.title]}
            {/* Expand hint */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-sm text-white/60 text-[9px] hover:text-white transition-colors">
              <FiMaximize2 size={9} /> expand
            </div>
          </div>
        )}

        {/* Top section */}
        <div className="p-7 flex flex-col flex-1">
          {/* Badge + Title + GitHub */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${proj.color} text-white mb-3`}>
                {proj.badge}
              </span>
              <h3 className="text-white font-bold text-xl group-hover:text-purple-300 transition-colors">
                {proj.title}
              </h3>
            </div>
            <motion.a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-500 hover:text-white transition-colors mt-1"
              title="GitHub"
            >
              <FiGithub size={20} />
            </motion.a>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-5">{proj.description}</p>

          {/* Features */}
          <ul className="space-y-2 mb-6 flex-1">
            {proj.features.map((f, j) => (
              <li key={j} className="flex gap-2 text-gray-400 text-sm">
                <span className="text-pink-400 mt-0.5 flex-shrink-0">✦</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
            {proj.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-purple-300 border border-purple-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* AI Walkthrough Toggle */}
        {proj.aiSnippet && (
          <div className="border-t border-white/8">
            <button
              onClick={() => setShowWalkthrough(!showWalkthrough)}
              className="w-full flex items-center justify-between px-7 py-4 text-sm font-semibold text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all group/btn"
            >
              <div className="flex items-center gap-2">
                <FiCpu size={15} />
                <span>AI Project Walkthrough</span>
                <span className="text-xs font-normal text-gray-600 group-hover/btn:text-gray-500">
                  — how AI assisted this
                </span>
              </div>
              <motion.span animate={{ rotate: showWalkthrough ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <FiChevronDown size={16} />
              </motion.span>
            </button>

            <AnimatePresence>
              {showWalkthrough && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-7 pb-6 space-y-4">
                    <div className="rounded-xl overflow-hidden border border-white/8">
                      <div className="flex items-center justify-between px-4 py-2 bg-white/4 border-b border-white/8">
                        <div className="flex items-center gap-2">
                          <FiCode size={13} className="text-purple-400" />
                          <span className="text-xs font-mono text-gray-400">code-snippet.js</span>
                        </div>
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                        </div>
                      </div>
                      <SyntaxHighlighter
                        language="javascript"
                        style={vscDarkPlus}
                        customStyle={{ margin: 0, background: "rgba(0,0,0,0.4)", fontSize: "12px", padding: "1rem" }}
                      >
                        {proj.aiSnippet.code}
                      </SyntaxHighlighter>
                    </div>

                    <button
                      onClick={() => setShowExplanation(!showExplanation)}
                      className="flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 transition-colors font-medium"
                    >
                      <FiCpu size={12} />
                      {showExplanation ? "Hide" : "Show"} AI Explanation
                    </button>

                    <AnimatePresence>
                      {showExplanation && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 text-sm text-gray-400 leading-relaxed"
                        >
                          <p className="text-purple-400 font-semibold text-xs uppercase tracking-wider mb-2">🤖 AI Involvement</p>
                          {proj.aiSnippet.explanation}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && <PreviewModal title={proj.title} onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-4">Projects</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 text-xs mb-12 flex items-center justify-center gap-2"
        >
          <FiCpu size={12} className="text-cyan-500" />
          Click <span className="text-cyan-400 font-medium">AI Project Walkthrough</span> on each card · Click preview to expand
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <ProjectCard key={i} proj={proj} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
