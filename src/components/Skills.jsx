import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiVite } from 'react-icons/si'
import { motion } from 'framer-motion'

const skills = [
  { id: 1, name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
  { id: 2, name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
  { id: 3, name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { id: 4, name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { id: 5, name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
  { id: 6, name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { id: 7, name: 'Vite', icon: <SiVite className="text-purple-400" /> },
]

export const Skills = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-neutral-900" id="skills">
      <h2 className="text-3xl font-bold text-center mb-10">Habilidades</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: skill.id * 0.1 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-center text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
