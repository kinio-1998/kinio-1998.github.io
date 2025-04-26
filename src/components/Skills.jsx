import { motion } from 'framer-motion'
import { techIcons } from '../obj/objIcons'

export const Skills = ({traducciones}) => {
  return (
    <section className="py-24 px-4 bg-gray-100 dark:bg-neutral-950" id="skills">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-10">{traducciones.title}</h2>
      <div className='max-h-96 overflow-y-auto'>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
        {techIcons.list.filter((icon) => icon.show).map((skill) => (
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
            <p className="text-center text-sm text-white">{skill.name}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  )
}
