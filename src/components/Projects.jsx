import { useLanguage } from "../context/LanguajeContent";
import { techIcons } from "../obj/objIcons";
import { objProjects } from "../obj/objProjects";
import { motion } from "framer-motion";
 

const Projects = ({ traducciones }) => {
  const { language } = useLanguage();
  return (
    <section id="projects" className="py-10 px-5 bg-gray-100 dark:bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">
        {traducciones.title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {objProjects[language].map((project, index) => (
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 hover:shadow-xl transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex gap-2 mt-4">
              {project.techs.map((tech, index) => (
                <span key={index} className="text-xl">
                  {techIcons[tech]}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {traducciones.lblProject}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
