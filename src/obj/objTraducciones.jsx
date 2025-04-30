import { div } from "framer-motion/client";

export const objTraducciones = {
  nav: {
    es: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    en: {
      home: "Home",
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
  },
  hero: {
    es: {
      introduce: "Hola, Soy",
      title: "Desarrollador Web Jr | Apasionado por la Automatización",
      description:
        "Soy un desarrollador con enfoque en mejorar procesos, crear experiencias web modernas y construir herramientas útiles para empresas y personas.  Me encanta aprender por mi cuenta, automatizar tareas, y enfrentar  nuevos retos.",
      link: "../../public/cv/cv-es.pdf",
      btnDownload: "Descargar CV",
      btnContact: "Contáctame",
    },
    en: {
      introduce: "Hi, I'm,",
      title: "Junior Web Developer | Passionate about Automation",
      description:
        "I'm a developer focused on improving processes, creating modern web experiences, and building useful tools for businesses and people. I love self-learning, automating tasks, and taking on new challenges.",
      link: "../../public/cv/cv-en.pdf",
      btnDownload: "Download Resume",
      btnContact: "Get in touch with me",
    },
  },
  about: {
    es: {
      title: "Sobre Mí",
      description:
        "Soy Carlos Daniel Duarte León, Licenciado en Informática con experiencia como desarrollador web y analista técnico. Apasionado por la tecnología, la automatización de procesos y la creación de soluciones útiles para las personas.",
      text: "Me destaco por mi compromiso, la mejora continua, el trabajo en equipo y la resolución de problemas. Disfruto aprender constantemente y participar en proyectos donde pueda combinar creatividad y lógica para obtener resultados que impacten de manera positiva.",
      lblSkills: "Habilidades Blandas",
      skills: [
        "Pensamiento analítico",
        "Aprendizaje rápido ",
        "Gestión de datos",
        "Trabajo en equipo",
        "Liderazgo",
        "Organización y planificación",
        "Adaptabilidad ",
        "Resiliencia",
        "Pensamiento crítico",
        "Resolución de problemas complejos",
        "Evaluación de riesgos",
      ],
      btnAcademy: "Formación Académica",
      btnLaboral: "Experiencia Laboral",
      academyInfo: (
        <div className="mb-8">
          <h3 className="text-green-500 text-xl font-semibold border-b border-green-500 pb-1 mb-4">
            🎓 Educación
          </h3>
          <div>
            <h4 className="text-lg font-bold flex justify-between">
              Universidad Autónoma de Sinaloa
            </h4>
            <span className="text-sm font-normal text-gray-400">2016 - 2021</span>
            <p>Licenciatura en Informática</p>
            <p>
              <span className="font-semibold">Promedio:</span> 8.3/10
            </p>
            <p>
              <span className="font-semibold">Proyecto destacado:</span> Desarrollo
              de sistema de pagos similar a PayPal en PHP y MySQL.
            </p>
          </div>
        </div>
      ),
      languageInfo: (
        <div>
          <h3 className="text-green-500 text-xl font-semibold border-b border-green-500 pb-1 mb-4">
            🌐 Idiomas
          </h3>
          <ul className="list-disc list-inside pb-20">
            <li>Español - Nativo</li>
            <li>Inglés - B2</li>
          </ul>
        </div>
      ),
      certificationInfo: (
        <div className="mb-8">
          <h3 className="text-green-500 text-xl font-semibold border-b border-green-500 pb-1 mb-4">
            📜 Certificaciones
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">EF SET English Certificate</span>{" "}
              <br />
              <span className="text-sm font-normal text-gray-400 pl-6">
                Jun 2024
              </span>{" "}
              <br />
              <span className="pl-6">(59/100 - B2 Upper Intermediate) </span>
            </li>
            <li>
              <span className="font-semibold">IBM</span> <br />
              <span className="text-sm font-normal text-gray-400 pl-6">
                Jun 2024
              </span>
              <br /> <span className="pl-6">Python for Data Science </span>
            </li>
            <li>
              <span className="font-semibold">Universidad Autónoma de Sinaloa</span>{" "}
              <br />
              <span className="text-sm font-normal text-gray-400 pl-6">
                Jun 2021
              </span>
              <br />
              <span className="pl-6">
                Diplomado en Desarrollo web con Infraestructura de servicios y
                multiservicios en la nube.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    en: {
      title: "About Me",
      description: "I´m a web developer",
      text: "",
      skills: [
        "Pensamiento analítico",
        "Aprendizaje rápido ",
        "Gestión de datos",
        "Trabajo en equipo",
        "Liderazgo",
        "Organización y planificación",
        "Adaptabilidad ",
        "Resiliencia",
        "Pensamiento crítico",
        "Resolución de problemas complejos",
        "Evaluación de riesgos",
      ],
      lblSkills: "Soft Skills",
      btnAcademy: "Formación Académica",
      btnLaboral: "Experiencia Laboral",
    },
  },
  projects: {
    es: { title: "Proyectos", lblProject: "Ver Código" },
    en: { title: "Projects", lblProject: "Code" },
  },
  skills: {
    es: { title: "Habilidades" },
    en: { title: "Skills" },
  },
  contact: {
    es: { title: "Contáctame" },
    en: { title: "Contact" },
  },
  index: {
    es: { title: "Kinio Portafolio" },
    en: { title: "Kinio PortFolio" },
  },
};
