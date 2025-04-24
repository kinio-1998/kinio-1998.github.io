import { useState } from "react";
import { useLanguage } from "../context/LanguajeContent";
import { techIcons } from "../obj/objIcons";
import { objProjects } from "../obj/objProjects";
import { ModalImg } from "./modalIMG";
import { motion } from "framer-motion";

export const Projects = ({ traducciones }) => {
  const [selectedPreview, setSelectedPreview] = useState(null);
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
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 hover:shadow-xl transition-shadow h-full flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain rounded-md mb-4 bg-white cursor-pointer hover:brightness-90 transition duration-200"
              onClick={() => setSelectedPreview(project.imageCode)}
            />
            <ModalImg
              image={selectedPreview}
              onClose={() => setSelectedPreview(null)}
              traducciones={traducciones}
              project={project}
            />

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
              {project.description}
            </p>

            <div className="flex gap-2 mb-4 justify-center">
              {project.techs.map((tech, index) => (
                <span key={index} className="text-xl">
                  {techIcons.iconProject[tech]}
                </span>
              ))}
            </div>

            <div className="flex justify-center mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                {traducciones.lblProject}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
