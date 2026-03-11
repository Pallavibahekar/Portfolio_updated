import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";
import { useEffect, useState } from "react";
import meImage from "../assets/me.jpeg";

// Floating particle
function Particle({ x, y, size, color, duration, delay }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color, filter: "blur(1px)" }}
      animate={{ y: ["-20px", "20px", "-20px"], x: ["-10px", "10px", "-10px"], opacity: [0.15, 0.5, 0.15] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 3,
  color: ["#a78bfa", "#f472b6", "#22d3ee", "#818cf8"][i % 4],
  duration: Math.random() * 4 + 4,
  delay: Math.random() * 3,
}));

const roles = [
  "Software Development Engineer",
  "Full-Stack Developer",
  "Competitive Coder",
  "Machine Learning Enthusiast",
];

function TypeWriter({ texts }) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setIdx((i) => (i + 1) % texts.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts]);

  return (
    <span className="gradient-text font-bold">
      {display}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const socials = [
    { icon: <FiGithub size={20} />, href: personalInfo.github, label: "GitHub" },
    { icon: <FiLinkedin size={20} />, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: <FiMail size={20} />, href: `mailto:${personalInfo.email}`, label: "Email" },
    { icon: <SiLeetcode size={20} />, href: personalInfo.leetcode, label: "LeetCode" },
    { icon: <SiCodechef size={20} />, href: personalInfo.codechef, label: "CodeChef" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => <Particle key={p.id} {...p} />)}
        {/* Soft blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/8 rounded-full blur-3xl animate-pulse" style={{animationDelay:"1s"}} />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Profile image + text side by side on large screens */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex-shrink-0"
        >
          <div className="relative w-48 h-48 lg:w-56 lg:h-56">
            {/* Spinning gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{ background: "conic-gradient(from 0deg, #a78bfa, #f472b6, #22d3ee, #a78bfa)", padding: "3px" }}
            >
              <div className="w-full h-full rounded-full bg-gray-950" />
            </motion.div>
            <img
              src={meImage}
              alt="Pallavi Bahekar"
              className="absolute inset-[4px] w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover object-top"
              onError={(e) => { e.target.style.display="none"; }}
            />
            {/* Glow pulse */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="text-center lg:text-left">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Pallavi</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-10"
        >
          <TypeWriter texts={roles} />
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          🎓 B.Tech CS &amp; AI · IIIT Lucknow &nbsp;|&nbsp; 💼 SDE @ PropertyGuru
          <br />
          <span className="inline-flex items-center gap-3 mt-2 flex-wrap justify-center lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <img src="/google-logo.png" alt="Google" className="w-4 h-4 object-contain" />
              <span className="text-gray-300 text-base font-medium">Google &apos;25 Intern</span>
            </span>
            <span className="text-gray-600">&nbsp;|&nbsp;</span>
            <span className="inline-flex items-center gap-1.5">
              <img src="/amazon-logo.png" alt="Amazon" className="w-10 h-4 object-contain" />
              <span className="text-gray-300 text-base font-medium">Amazon&apos;24 Intern</span>
            </span>
          </span>
          <br />⚔️ LeetCode Knight &nbsp;|&nbsp; 🎓 Harvard Scholar
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(167,139,250,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { window.history.pushState(null, "", "#projects"); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            View Projects
          </motion.button>
          <motion.a
            href="/Pallavi_Bahekar_Resume.pdf"
            download
            whileHover={{ scale: 1.05, borderColor: "rgba(167,139,250,0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-white/20 text-gray-200 font-semibold hover:border-purple-400 hover:text-purple-300 transition-all flex items-center gap-2"
          >
            <FiDownload size={16} /> Download Resume
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.2, y: -2 }}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-all"
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        </div>{/* end text content */}
        </div>{/* end flex row */}
      </div>{/* end max-w container */}


    </section>
  );
}
