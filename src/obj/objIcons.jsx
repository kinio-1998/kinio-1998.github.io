import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiGooglesheets,
  SiGoogleappsscript,
} from "react-icons/si";
export const techIcons = {
  skills: [
    { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { id: 4, name: "React", icon: <FaReact className="text-cyan-400" /> },
    {
      id: 5,
      name: "Tailwind",
      icon: <SiTailwindcss className="text-sky-400" />,
    },
    { id: 6, name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { id: 7, name: "Vite", icon: <SiVite className="text-purple-400" /> },
  ],
  iconProject: {
    HTML: <FaHtml5 className="text-orange-600" />,
    CSS: <FaCss3Alt className="text-blue-600" />,
    JavaScript: <FaJs className="text-yellow-400" />,
    React: <FaReact className="text-cyan-400" />,
    Tailwind: <SiTailwindcss className="text-sky-400" />,
    Git: <FaGitAlt className="text-red-500" />,
    Vite: <SiVite className="text-purple-400" />,
    "Apps Script": <SiGoogleappsscript className="text-green-800" />,
    "Google Sheets": <SiGooglesheets className="text-green-800" />,
  },
};
