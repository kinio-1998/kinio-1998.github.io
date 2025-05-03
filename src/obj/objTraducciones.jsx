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
        "Licenciado en informática con 3 años de experiencia en áreas de sistemas y análisis de datos. \n Durante este tiempo, trabajé con flujos de datos de múltiples lenguajes y bases de datos relacionales, lo que me dio una base sólida en lógica de programación y estructuras de datos. \n Actualmente, me estoy enfocando en el desarrollo web, creando proyectos por mi cuenta y fortaleciendo mis habilidades con tecnologías como HTML, CSS, JavaScript, React y MySQL. Mi objetivo es crecer profesionalmente como desarrollador front-end, aportar soluciones prácticas y seguir aprendiendo constantemente.",
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
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2">
            🎓 Educación
          </h3>
          <div className="bg-green-950/80 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold">Universidad Autónoma de Sinaloa</h4>
            <p className="text-sm text-gray-300">
              2016 - 2021 · Licenciatura en Informática
            </p>
            <p className="text-sm mt-1 text-gray-200">
              <strong>Promedio:</strong> 8.3/10
            </p>
            <p className="text-sm text-gray-200">
              <strong>Proyecto destacado:</strong> Sistema de pagos similar a
              PayPal en PHP y MySQL.
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
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              📜 Certificaciones
            </h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="border-l-4 border-green-500 pl-2">
                <strong>EF SET English Certificate</strong>
                <br />
                Jun 2024 · (59/100 - B2 Upper Intermediate)
              </li>
              <li className="border-l-4 border-green-500 pl-2">
                <strong>IBM</strong>
                <br />
                Jun 2024 · Python for Data Science
              </li>
              <li className="border-l-4 border-green-500 pl-2">
                <strong>Universidad Autónoma de Sinaloa</strong>
                <br />
                Jun 2021 · Diplomado en desarrollo web con infraestructura en la
                nube
              </li>
            </ul>
          </div>
        </div>
      ),
      aforeInfo: (
        <div className="border-l-4 border-green-500 bg-green-950/50 p-4 rounded-lg ">
          <h3 className="text-xl font-semibold text-green-300">Afore Coppel</h3>
          <p className="font-bold text-white mt-2">
            Pogramador/Analista de incidencias
          </p>
          <ul className="list-disc list-inside mt-3 text-sm text-gray-200 space-y-1">
            <li>
              Automatización de reportes en Google Sheets para la gestión
              equitativa de incidencias.
            </li>
            <li>
              Análisis de flujos de información en Python, JS, HTML, PHP, Java,
              C#, C++.
            </li>
            <li>Manejo de bases de datos en PostgreSQL e Informix.</li>
            <li>
              Resolución de incidencias críticas bajo presión y toma de
              decisiones inmediatas.
            </li>
            <li>Herramientas: VNC Viewer, Linux, Git, WinSCP, OpenShift.</li>
            <li>Supervisión de equipo como líder suplente.</li>
          </ul>
        </div>
      ),
      emyeInfo: (
        <div className="border-l-4 border-green-500 bg-green-950/50 p-4 rounded-lg ">
          <h3 className="text-xl font-semibold text-green-300">
            Equipos Musicales y Electrónica
          </h3>
          <p className="font-bold text-white mt-2">
            Administrador Web / Marketing / Atención al cliente digital
          </p>
          <ul className="list-disc list-inside mt-3 text-sm text-gray-200 space-y-1">
            <li>Automatización de archivos para control de inventario.</li>
            <li>Desarrollo de un bot de WhatsApp con WhatsApp-js.</li>
            <li>Marketing digital en redes sociales.</li>
            <li>
              Uso de Microsip ERP para ventas y facturación sin capacitación
              previa.
            </li>
            <li>Atención al cliente por redes sociales.</li>
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
    es: {
      title: "Contáctame",
      lblContact:"¿Tienes una idea o un proyecto? ¡Hablemos! Estoy disponible para colaboraciones o nuevas oportunidades laborales.",
      lblName: "Nombre",
      lblNamePlaceHolder: "Escribe tu nombre",
      lblEmail: "Correo electrónico",
      lblEmailPlaceHolder: "Escribe tu correo electrónico",
      lblMessage: "Mensaje",
      lblMessagePlaceHolder: "Escribe tu mensaje",
      lblButton: "Enviar mensaje",
      lblLocation: "Ubicación: Culiacán, Sinaloa, México",
      lblLocationChange: "(Disponible a cambio de residencia)",
      lblSugerency: "Para una contactarme de forma más rápida utiliza Whatsapp",
    },
    en: { title: "Contact" },
  },
  index: {
    es: { title: "Kinio Portafolio" },
    en: { title: "Kinio PortFolio" },
  },
};
