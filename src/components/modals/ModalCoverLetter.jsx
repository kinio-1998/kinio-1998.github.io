import { useLanguage } from "../../context/LanguajeContent";

export const ModalCoverLetter = () => {
  const { language } = useLanguage();

  const text =
    language === "es"
      ? {
          p: `Estimado/a reclutador/a:

Mi nombre es Carlos Daniel Duarte León, soy Licenciado en Informática con una sólida base técnica y una verdadera pasión por el desarrollo web. A lo largo de mi trayectoria profesional y personal, he descubierto que lo que realmente me motiva es construir soluciones funcionales y comprender a fondo cómo funciona cada parte de un sistema.

Me considero una persona autodidacta, proactiva y adaptable, cualidades que me han permitido aprender tecnologías como HTML, CSS, JavaScript, React, Firebase y Google Apps Script, entre otras. De hecho, desarrollé mi portafolio web (https://kinio-1998.github.io) desde cero con React y Firebase, aplicando buenas prácticas tanto del frontend como del backend.

Además de mi formación, he trabajado en proyectos personales centrados en la automatización de procesos, utilizando principalmente Apps Script y Python. También tuve experiencia como analista de incidentes, donde manipulaba bases de datos y analizaba el flujo de sistemas desde el frontend hasta el backend, desarrollando una comprensión más profunda del ciclo completo del desarrollo.

Aunque mi enfoque principal es el desarrollo web, también tengo un gran interés en el análisis de datos y la ciencia de datos. No me cierro a nuevas áreas si me permiten seguir aprendiendo y creciendo profesionalmente.

Estoy buscando una oportunidad remota o presencial, dentro del país, donde pueda aportar valor real, aprender en equipo y seguir evolucionando como profesional del desarrollo.

Gracias por su tiempo y consideración.
Quedo atento a cualquier oportunidad o proceso en el que pueda participar.`,
          btn: `Descargar Carta de Presentación`,
          last: `Atentamente,`, 
          carrer: `Licenciado en Informática`, 
          docLink:"/./docs/cartaPresentacion.pdf"
        }
      : {
          p: `Dear Recruiter,

My name is Carlos Daniel Duarte León, and I hold a Bachelor's degree in Computer Science with a strong technical foundation and a genuine passion for web development. Throughout my professional and personal journey, I've discovered that what truly drives me is building functional solutions and understanding how each layer of a system works.

I consider myself a self-taught, proactive, and adaptable person, which has allowed me to learn technologies such as HTML, CSS, JavaScript, React, Firebase, and Google Apps Script, among others. I built my personal portfolio (https://kinio-1998.github.io) from scratch using React and Firebase, applying best practices in both frontend and backend development.

Beyond my formal education, I’ve worked on personal projects focused on task automation using Apps Script and Python. I also have experience as an incident analyst, where I handled databases and analyzed full-stack system flows, which gave me a broader understanding of how software works end to end.

While my main focus is web development, I am also deeply interested in data analysis and data science. I am open to exploring new technologies or disciplines that help me grow and contribute meaningfully to any team.

I am currently seeking a remote or in-person opportunity anywhere in the country, where I can bring value, collaborate effectively, and continue to grow as a developer.

Thank you for your time and consideration.
I look forward to the opportunity to contribute and learn with your team.`,
          btn: "Download Cover Letter",
          last:  "Sincerely,",
          carrer:"B.Sc. in Computer Science",
          docLink:"/./docs/coverLetter.pdf"
        };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto font-serif text-gray-800 leading-relaxed text-justify">
        
        <p className="whitespace-pre-line leading-tight">{text.p}</p>

        <p className="mt-6 font-medium">
          {text.last}
        </p>
        <p className="font-bold">Carlos Daniel Duarte León</p>
        <p className="italic">{text.carrer}</p>

        <div className="flex justify-center mt-6">
          <a
            href={text.docLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition text-sm"
          >
            {text.btn}
          </a>
        </div>
      </div>
    </div>
  );
};
