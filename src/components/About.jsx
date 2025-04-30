import { useState } from "react";
import { ModalImg } from "./modalIMG";

const About = ({ traducciones }) => {
  const [selectedPreview, setSelectedPreview] = useState(null);
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-10 bg-black text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-8 text-center">
        {traducciones.title}
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        <div className="w-full md:w-1/3 flex justify-start">
          <img
            src="/img/logotipo.png"
            alt="Mi Foto"
            className="rounded-3xl shadow-lg w-64 h-64 object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {traducciones.description}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            {traducciones.text}
          </p>
        </div>
      </div>

      {/* Soft Skills abajo */}
      <div className="mt-10 w-full flex flex-col items-center">
        <h3 className="text-2xl font-semibold text-green-600 mb-4 text-center">
          {traducciones.lblSkills}
        </h3>
        <ul className="list-disc list-outside text-gray-300 grid grid-cols-1 sm:grid-cols-4 gap-2 gap-x-10">
          {traducciones.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between gap-10">
        <a
          onClick={() => setSelectedPreview({ type: "academy", data: traducciones })}
          className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-300 hover:text-white transition"
        >
          {traducciones.btnAcademy}
        </a>
        <a
          onClick={() => setSelectedPreview({ type: "work", data: traducciones })}
          className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-300 hover:text-white transition"
        >
          {traducciones.btnLaboral}
        </a>
      </div>
      {selectedPreview && (
        <ModalImg
          project={selectedPreview.data}
          onClose={() => setSelectedPreview(null)}
          traducciones={traducciones}
          component={selectedPreview.type}
        />
      )}
    </section>
  );
};

export default About;
