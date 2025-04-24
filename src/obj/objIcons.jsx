import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt,FaNodeJs,FaWhatsapp, FaPython   } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiGooglesheets, SiGoogleappsscript, SiPostgresql,SiMysql  } from "react-icons/si";
export const techIcons = {
  list: [
    {
      id: 1,
      name: "HTML",
      icon: <FaHtml5 className="text-orange-600" />,
    },
    {
      id: 2,
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-600" />,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      id: 4,
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      id: 5,
      name: "Tailwind",
      icon: <SiTailwindcss className="text-sky-400" />,
    },
    {
      id: 6,
      name: "Git",
      icon: <FaGitAlt className="text-red-500" />,
    },
    {
      id: 7,
      name: "Vite",
      icon: <SiVite className="text-purple-400" />,
    },
    {
      id: 8,
      name: "Apps Script",
      icon: <SiGoogleappsscript className="text-green-800" />,
    },
    {
      id: 9,
      name: "Google Sheets",
      icon: <SiGooglesheets className="text-green-800" />,
    },
    {
      id: 10,
      name: "Node",
      icon: <FaNodeJs className="text-green-900" />,
    },
    {
      id: 11,
      name: "Whatsapp-js",
      icon: <FaWhatsapp className="text-green-500" />,
    },
    {
      id: 12,
      name: "Python",
      icon: <FaPython   className="text-orange-500" />,
    },
    {
      id: 13,
      name: "PostgreSql",
      icon: <SiPostgresql  className="text-blue-500" />,
    },
    {
      id: 14,
      name: "MySql",
      icon: <SiMysql   className="text-blue-500" />,
    },
  ],

  getIconByName(name) {
    return this.list.find((item) => item.name === name)?.icon || null;
  },
};

