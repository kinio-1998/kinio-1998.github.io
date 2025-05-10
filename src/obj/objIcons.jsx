import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt,FaNodeJs,FaWhatsapp, FaPython,FaGithub,FaLinkedin, FaGoogle, FaFileAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiGooglesheets, SiGoogleappsscript, SiPostgresql,SiMysql, SiFirebase  } from "react-icons/si";
export const techIcons = {
  list: [
    {
      id: 1,
      name: "HTML",
      icon: <FaHtml5 className="text-orange-600" />,
      show:true
    },
    {
      id: 2,
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-600" />,
      show:true
    },
    {
      id: 3,
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" />,
      show:true
    },
    {
      id: 4,
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
      show:true
    },
    {
      id: 5,
      name: "Tailwind",
      icon: <SiTailwindcss className="text-sky-400" />,
      show:true
    },
    {
      id: 6,
      name: "Git",
      icon: <FaGitAlt className="text-red-500" />,
      show:true
    },
    {
      id: 7,
      name: "Vite",
      icon: <SiVite className="text-purple-400" />,
      show:true
    },
    {
      id: 8,
      name: "Apps Script",
      icon: <SiGoogleappsscript className="text-green-800" />,
      show:true
    },
    {
      id: 9,
      name: "Google Sheets",
      icon: <SiGooglesheets className="text-green-800" />,
      show:true
    },
    {
      id: 10,
      name: "Node",
      icon: <FaNodeJs className="text-green-900" />,
      show:true
    },
    {
      id: 11,
      name: "Whatsapp-js",
      icon: <FaWhatsapp className="text-green-500" />,
      show:true
    },
    {
      id: 12,
      name: "Python",
      icon: <FaPython   className="text-orange-500" />,
      show:true
    },
    {
      id: 13,
      name: "PostgreSql",
      icon: <SiPostgresql  className="text-blue-500" />,
      show:true
    },
    {
      id: 14,
      name: "MySql",
      icon: <SiMysql   className="text-blue-500" />,
      show:true
    },
    {
      id: 15,
      name: "GitHub",
      icon: <FaGithub    className="text-white" />,
      show:true
    },
    {
      id: 16,
      name: "LinkedIn",
      icon: <FaLinkedin  className="text-linkedin" />,
      show:false
    },
    {
      id: 17,
      name: "Gmail",
      icon: <FaGoogle  className="text-red-600" />,
      show:false
    },
    {
      id: 18,
      name: "File",
      icon: <FaFileAlt  className="text-green-600" />,
      show:false
    },
    {
      id: 19,
      name: "Firebase",
      icon: <SiFirebase  className="text-red-600" />,
      show:true
    },
  ],

  getIconByName(name) {
    return this.list.find((item) => item.name === name)?.icon || null;
  },
};

