import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-gray-950 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-gray-600 text-sm mt-1">Pallavi Bahekar • SDE @ PropertyGuru</p>
        </div>

        <div className="flex items-center gap-5">
          {[
            { icon: <FiGithub size={18} />, href: personalInfo.github, label: "GitHub" },
            { icon: <FiLinkedin size={18} />, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: <FiMail size={18} />, href: `mailto:${personalInfo.email}`, label: "Email" },
            { icon: <SiLeetcode size={18} />, href: personalInfo.leetcode, label: "LeetCode" },
            { icon: <SiCodechef size={18} />, href: personalInfo.codechef, label: "CodeChef" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-gray-500 hover:text-purple-400 transition-colors duration-200"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-gray-600 text-xs text-center">
          © {new Date().getFullYear()} Pallavi Bahekar. Built with React + Vite ⚡
        </p>
      </div>
    </footer>
  );
}
