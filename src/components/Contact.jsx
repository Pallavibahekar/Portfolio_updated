import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { FiMail, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const contactLinks = [
  { icon: <FiMail size={20} />, label: "Email", value: "bahekarpallavi883@gmail.com", href: "mailto:bahekarpallavi883@gmail.com", color: "from-red-500 to-orange-500" },
  { icon: <FiLinkedin size={20} />, label: "LinkedIn", value: "pallavibahekar", href: "https://linkedin.com/in/pallavibahekar", color: "from-blue-500 to-cyan-500" },
  { icon: <FiGithub size={20} />, label: "GitHub", value: "Pallavibahekar", href: "https://github.com/Pallavibahekar", color: "from-gray-500 to-gray-700" },
  { icon: <SiLeetcode size={20} />, label: "LeetCode", value: "pal_2103", href: "https://leetcode.com/pal_2103", color: "from-yellow-500 to-orange-500" },
  { icon: <SiCodechef size={20} />, label: "CodeChef", value: "pal_krish", href: "https://www.codechef.com/users/pal_krish", color: "from-orange-600 to-red-600" },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = "bahekarpallavi883@gmail.com";
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`,
      "_blank"
    );
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
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
          >Contact</motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            Open to full-time roles, collaborations, and interesting conversations. Let's build something great together!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            className="space-y-4"
          >
            <h3 className="text-white font-bold text-lg mb-6">Find me here</h3>
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", bounce: 0.3 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="flex items-center gap-4 card-glass p-4 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  className={`w-10 h-10 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center text-white flex-shrink-0`}
                >
                  {link.icon}
                </motion.div>
                <div>
                  <p className="text-gray-500 text-xs">{link.label}</p>
                  <p className="text-gray-200 text-sm font-medium group-hover:text-purple-300 transition-colors">{link.value}</p>
                </div>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  className="ml-auto text-gray-600 group-hover:text-purple-400 transition-colors text-lg"
                >→</motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
            className="card-glass p-8"
          >
            <h3 className="text-white font-bold text-lg mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email"].map((field, i) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <label className="text-gray-500 text-xs block mb-1">{field === "name" ? "Your Name" : "Your Email"}</label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    placeholder={field === "name" ? "John Doe" : "john@example.com"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all"
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <label className="text-gray-500 text-xs block mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Hi Pallavi, I'd love to connect..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all resize-none"
                />
              </motion.div>
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.03, boxShadow: sent ? "none" : "0 0 25px rgba(167,139,250,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  sent
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30"
                }`}
              >
                {sent ? (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.6 }}>
                    ✓ Message Sent!
                  </motion.span>
                ) : (
                  <><FiSend size={16} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

