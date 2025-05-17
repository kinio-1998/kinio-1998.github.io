import { useState } from "react";
import { ModalWrapper } from "./modals/ModalWrapper";
import { objButtonsAbout } from "../obj/objButtonsAbout";
import { useLanguage } from "../context/LanguajeContent";

const About = ({ traducciones }) => {
  const [selectedPreview, setSelectedPreview] = useState(null);
  const {language} = useLanguage();
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-10 bg-black text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-8 text-center">
        {traducciones.title}
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        <div className="w-full md:w-1/4 flex justify-start">
          <img
            src="/img/logotipo.png"
            alt="Mi Foto"
            className="rounded-3xl shadow-lg w-64 h-64 object-cover"
          />
        </div>
        <div className="w-full md:w-3/4 md:text-left ">
          <p className="text-lg text-gray-300 mb-6 text-justify whitespace-pre-line leading-tight">
            {traducciones.description}
          </p>
          <p className="text-lg text-gray-300  text-justify whitespace-pre-line leading-tight" >
            {traducciones.text}
          </p>
        </div>
      </div>
 
      <div className="mt-10 w-full flex flex-col items-center">
        <h3 className="text-2xl font-semibold text-green-600 mb-4 text-center">
          {traducciones.lblSkills}
        </h3>
        <ul className="list-disc list-outside text-gray-300 grid grid-cols-1 sm:grid-cols-4 gap-2 gap-x-10">
          {traducciones.skills.map((skill,i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
  {objButtonsAbout.map((btn, i) => (
    <a
      key={i}
      onClick={() =>
        setSelectedPreview({
          type: btn.name,
          data: language === "es" ? btn.lblButton.es : btn.lblButton.en,
        })
      }
      className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-300 hover:text-white transition cursor-pointer"
    >
      {language === "es" ? btn.lblButton.es : btn.lblButton.en}
    </a>
  ))}
</div>

      {selectedPreview && (
        <ModalWrapper
          project={selectedPreview.data}
          onClose={() => setSelectedPreview(null)}
          isModalOpen={selectedPreview !== null}
          traducciones={traducciones}
          component={selectedPreview.type}
        />
      )}
    </section>
  );
};

export default About;
