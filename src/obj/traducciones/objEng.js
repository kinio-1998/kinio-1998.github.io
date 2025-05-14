/*import { archiviements } from "./objArchievements";
import { certifications } from "./objCertifications";
import { experiences } from "./objExperience";
import { techIcons } from "./objIcons";*/

export const objEng = {
  nav: {
    home: "Home",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    introduce: "Hi, I'm,",
    title: "Junior Web Developer | Passionate about Automation",
    description:
      "I'm a developer focused on improving processes, creating modern web experiences, and building useful tools for businesses and people. I love self-learning, automating tasks, and taking on new challenges.",
    link: "/./public/cv/Cv_Li.Duarte_en.pdf",
    btnDownload: "Download Resume",
    btnContact: "Get in touch with me",
  },
  about: {
    title: "About me",
    description:
      "I'm Carlos Daniel Duarte León, a Computer Science graduate with experience as a web developer and technical analyst. Passionate about technology, process automation, and creating useful solutions for people.",
    text: "I'm known for my commitment, continuous improvement, teamwork, and problem-solving. I enjoy constantly learning and participating in projects where I can combine creativity and logic to achieve results that make a positive impact.",
    skills: [
      "Analytical thinking",
      "Fast learner",
      "Data management",
      "Teamwork",
      "Leadership",
      "Organization and planning",
      "Adaptability",
      "Resilience",
      "Critical thinking",
      "Solving complex problems",
      "Risk assessment",
      "Working under pressure",
    ],
    lblAcademy: "Academic Background",
    lblLaboral: "Work Experience",
    lblArchievements: "Notable Achievements",
    /*academyInfo: (
      <div>
        <h3 className="text-xl font-semibold text-green-400 mb-2">
          🎓 Education
        </h3>
        <div className="bg-green-950/30 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="font-bold">Universidad Autónoma de Sinaloa</h4>
          <p className="text-sm text-gray-300">
            2016 - 2021 · Bachelor's Degree in Computer Science
          </p>
          <p className="text-sm mt-1 text-gray-200">
            <strong>GPA:</strong> 8.3/10
          </p>
          <p className="text-sm text-gray-200">
            <strong>Highlighted project:</strong> Payment system similar to
            PayPal using PHP and MySQL.
          </p>
        </div>
      </div>
    ),
    languageInfo: (
      <div>
        <h3 className="text-green-500 text-xl font-semibold border-b border-green-500 pb-1 mb-4">
          🌐 Languages
        </h3>
        <ul className="list-disc list-inside pb-20">
          <li>Spanish - Native</li>
          <li>English - B2</li>
        </ul>
      </div>
    ),
    certificationInfo: (
      <div className="mb-8">
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2">
            📜 Certifications
          </h3>
          <ul className="space-y-3 text-sm text-gray-200">
            {certifications.es.map((cert) => (
              <li
                key={cert.id}
                className="border-l-4 border-green-500 pl-2 rounded-lg"
              >
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-4">
                    <h4 className="text-green-600 font-semibold">
                      {cert.institution}
                    </h4>
                    <p className="text-white text-sm">{cert.title}</p>
                    <p className="text-gray-400 text-xs">{cert.date}</p>
                  </div>
                  <div className="col-span-1 flex items-center justify-end">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-300"
                      title="Ver certificado"
                    >
                      <i className="text-xl flex ">
                        {techIcons.getIconByName("File")}
                      </i>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
    workExperience: experiences.en.map((exp) => (
      <div
        className="border-l-4 border-green-500 bg-green-950/30 p-4 rounded-lg"
        key={exp.id}
      >
        <h3 className="text-lg font-semibold text-green-300">{exp.company}</h3>
        <p className="text-sm text-gray-400">{exp.date}</p>
        <p className="font-bold text-white mt-2">{exp.title}</p>
        <ul className="list-disc list-inside mt-3 text-xs text-gray-200 space-y-1">
          {exp.activities.map((act, i) => (
            <li key={i}>{act}</li>
          ))}
        </ul>
      </div>
    )),
    archiviements: (
      <div className="mb-8">
        <div>
          <ul className="space-y-3 text-sm text-gray-200">
            {archiviements.en.map((arc, i) => (
              <li key={i} className="  border-green-500 list-disc ">
                <div className="col-span-4">
                  <h4 className="text-white font-semibold text-base  ">
                    {arc}
                  </h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),*/
  },
  projects: { title: "Projects", lblProject: "Code" },
  skills: { title: "Skills" },
  contact: {
    title: "Contact",
    lblContact:
      "Do you have an idea or a project? Let's talk! I'm available for collaborations or new job opportunities.",
    lblName: "Name",
    lblNamePlaceHolder: "Enter your name",
    lblEmail: "Email",
    lblEmailPlaceHolder: "Enter your email",
    lblMessage: "Message",
    lblMessagePlaceHolder: "Enter your message",
    lblButton: "Send Message",
    lblLocation: "Location: Culiacán, Sinaloa, Mexico",
    lblLocationChange: "(Willing to relocate)",
    lblSugerency: "For faster contact, use WhatsApp",
    counter: "Visit count: ",
  },
};
