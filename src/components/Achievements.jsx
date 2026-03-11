import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { achievements } from "../data/portfolioData";
import { useEffect } from "react";

function CountUp({ to, duration = 1.5, suffix = "" }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    suffix === "." ? v.toFixed(1) + suffix.slice(1) : Math.floor(v) + suffix
  );
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      const controls = animate(count, parseFloat(to), { duration });
      return controls.stop;
    }
  }, [inView, to, count, duration]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const STATS = [
  { value: "1000", suffix: "+", label: "Problems Solved", color: "text-purple-400" },
  { value: "1911", suffix: "", label: "LeetCode Max Rating", color: "text-yellow-400" },
  { value: "1630", suffix: "", label: "CodeChef Max Rating", color: "text-orange-400" },
  { value: "8", suffix: ".7", label: "CGPA at IIIT-L", color: "text-cyan-400" },
];

export default function Achievements() {
  const [ref, inView] = useInView();

  return (
    <section id="achievements" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, type: "spring", bounce: 0.5 }}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 mb-4"
          >Achievements</motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Stats &amp; <span className="gradient-text">Milestones</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full origin-left"
          />
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.12, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.06, y: -4 }}
              className="card-glass p-5 text-center relative overflow-hidden group"
            >
              {/* shimmer sweep on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(105deg, transparent 40%, rgba(167,139,250,0.12) 50%, transparent 60%)" }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <p className={`text-3xl font-black ${stat.color}`}>
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="card-glass p-5 flex gap-4 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="text-3xl flex-shrink-0">{ach.icon}</div>
              <div>
                <h4 className="text-white font-semibold text-sm group-hover:text-purple-300 transition-colors">
                  {ach.title}
                </h4>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">{ach.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Find me on competitive coding platforms</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "LeetCode – pal_2103", href: "https://leetcode.com/pal_2103", color: "from-yellow-500 to-orange-500" },
              { label: "CodeChef – pal_krish", href: "https://www.codechef.com/users/pal_krish", color: "from-orange-500 to-red-500" },
              { label: "GitHub – Pallavibahekar", href: "https://github.com/Pallavibahekar", color: "from-gray-500 to-gray-700" },
            ].map((p) => (
              <motion.a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className={`px-5 py-2 rounded-full bg-gradient-to-r ${p.color} text-white text-sm font-medium shadow-md`}
              >
                {p.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
