import { useLanguage } from "../../context/LanguajeContent";
import { experiences } from "../../obj/objExperience";

export const ModalWork = (traducciones) => {
  const { language } = useLanguage();
  console.log(traducciones);
  return (
    <div className="grid grid-cols-1  gap-4">
      {language === "es"
        ? experiences.es.map((exp) => (
            <div
              className="border-l-4 border-green-500 bg-green-950/30 p-4 rounded-lg"
              key={exp.id}
            >
              <h3 className="text-lg font-semibold text-green-300">
                {exp.company}
              </h3>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <p className="font-bold text-white mt-2">{exp.title}</p>
              <ul className="list-disc list-inside mt-3 text-xs text-gray-200 space-y-1">
                {exp.activities.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            </div>
          ))
        : experiences.en.map((exp) => (
            <div
              className="border-l-4 border-green-500 bg-green-950/30 p-4 rounded-lg"
              key={exp.id}
            >
              <h3 className="text-lg font-semibold text-green-300">
                {exp.company}
              </h3>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <p className="font-bold text-white mt-2">{exp.title}</p>
              <ul className="list-disc list-inside mt-3 text-xs text-gray-200 space-y-1">
                {exp.activities.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            </div>
          ))}
    </div>
  );
};
