import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { experience } from "../data/portfolioData";

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-4"
          >Experience</motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full origin-left"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 opacity-40 hidden md:block origin-top -translate-x-1/2"
          />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.18, type: "spring", bounce: 0.3 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card — takes half width */}
                <div className="w-full md:w-[calc(50%-2rem)]">

                {/* Animated timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.18, type: "spring", bounce: 0.6 }}
                  className={`absolute left-1/2 top-6 w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} hidden md:flex items-center justify-center shadow-lg z-10 -translate-x-1/2`}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                  {/* Ripple */}
                  <motion.div
                    animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color}`}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ x: 4, borderColor: "rgba(167,139,250,0.4)" }}
                  className="card-glass p-7 transition-all duration-300 group cursor-default"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg overflow-hidden p-1.5 ${exp.logoBg || "bg-white"}`}
                      >
                        {exp.logo.startsWith("/") || exp.logo.startsWith("http") ? (
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className={`${exp.logoSize || "w-10 h-10"} object-contain`}
                          />
                        ) : (
                          <span className={`font-black text-white text-lg bg-gradient-to-br ${exp.color} w-full h-full flex items-center justify-center rounded-lg`}>{exp.logo}</span>
                        )}
                      </motion.div>
                      <div>
                        <h3 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className={`font-semibold text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm font-mono">{exp.period}</p>
                      <p className="text-gray-500 text-xs">{exp.location}</p>
                      <span className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.tech.map((t, ti) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + i * 0.18 + ti * 0.04, type: "spring" }}
                        whileHover={{ scale: 1.1, color: "#67e8f9" }}
                        className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/5 text-cyan-300 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    {exp.points.map((point, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + i * 0.18 + j * 0.06 }}
                        className="flex gap-3 text-gray-400 text-sm leading-relaxed"
                      >
                        <motion.span
                          animate={{ color: ["#a78bfa", "#f472b6", "#a78bfa"] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                          className="mt-1 flex-shrink-0"
                        >▸</motion.span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                </div>{/* end half-width card */}

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
