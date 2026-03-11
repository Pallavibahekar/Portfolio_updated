import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { skills, education } from "../data/portfolioData";

const skillColors = {
  languages: "from-purple-500 to-violet-500",
  frameworks: "from-pink-500 to-rose-500",
  tools: "from-cyan-500 to-blue-500",
  softSkills: "from-green-500 to-teal-500",
  interests: "from-orange-500 to-yellow-500",
};

const skillLabels = {
  languages: "Languages",
  frameworks: "Frameworks & Libraries",
  tools: "Tools & Platforms",
  softSkills: "Soft Skills",
  interests: "Interests",
};

export default function About() {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.15, type: "spring", bounce: 0.5 }}
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-4"
          >About Me</motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Who <span className="gradient-text">I Am</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full origin-left"
          />
        </motion.div>

        {/* Bio + Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Bio */}
          <motion.div variants={itemVariants} className="card-glass p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">👩‍💻</span> Who I Am
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a passionate Software Development Engineer from IIIT Lucknow with a CGPA of 8.7.
              I've had the privilege of interning at <span className="text-blue-400 font-semibold">Google</span> and{" "}
              <span className="text-orange-400 font-semibold">Amazon</span>, and I'm currently building
              impactful products at <span className="text-green-400 font-semibold">PropertyGuru</span>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond work, I'm a competitive coder (LeetCode Knight, CodeChef 3★),
              a Harvard WEAmplify Scholar, and a GHC Scholar. I love leveraging AI and ML
              to build smarter solutions.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="card-glass p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">🎓</span> Education
            </h3>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-purple-500/40">
                  <p className="text-white font-semibold text-sm">{edu.institution}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{edu.degree}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-purple-400 text-xs font-mono">{edu.score}</span>
                    <span className="text-gray-600 text-xs">{edu.period}</span>
                  </div>
                  {edu.courses && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {edu.courses.map((c) => (
                        <span key={c} className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white text-center mb-8"
          >
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([key, values]) => (
              <motion.div
                key={key}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="card-glass p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className={`text-sm font-bold mb-4 bg-gradient-to-r ${skillColors[key]} bg-clip-text text-transparent uppercase tracking-wider`}>
                  {skillLabels[key]}
                </div>
                <div className="flex flex-wrap gap-2">
                  {values.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: si * 0.05, type: "spring", bounce: 0.5 }}
                      whileHover={{ scale: 1.12, y: -2 }}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/8 hover:border-purple-400/60 hover:text-purple-200 hover:bg-purple-500/10 hover:shadow-[0_0_12px_rgba(167,139,250,0.3)] transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
