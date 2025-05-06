import React, { useEffect, useRef } from "react";

export const ModalImg = ({ project, onClose,isModalOpen, traducciones, component }) => {
  const modalRef = useRef();
  const modal = {
    img: (
      <div className="bg-white dark:bg-black p-4 rounded-md max-w-6xl w-full relative border-green-600 border">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-green-600"
        >
          &times;
        </button>
        <div className="grid uppercase text-center mt-auto text-green-600 text-3xl">
          {project.title}
        </div>
        <img
          src={project.image}
          alt="Vista previa del código"
          className="max-h-[70vh] w-auto mx-auto rounded object-contain my-5"
        />
        <div className="flex justify-center mt-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-300 hover:text-white transition"
          >
            {traducciones.lblProject}
          </a>
        </div>
      </div>
    ),
    academy: (
      <div className="bg-white dark:bg-black p-4 rounded-md w-full max-w-3xl relative border border-green-600 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-green-600"
        >
          &times;
        </button>

        <h2 className="text-green-500 text-2xl font-semibold text-center mb-6 border-b-4 border-green-600">
          {traducciones.btnAcademy}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
          <div className="sm:col-span-5 sm:col-start-2 sm:row-start-2 mr-3">
            {traducciones.academyInfo}
            <div className="sm:col-span-5 sm:col-start-2 sm:row-start-4 mt-10">
              {traducciones.languageInfo}
            </div>
          </div>
          <div className="sm:col-span-5 sm:col-start-7 sm:row-start-2 ">
            {traducciones.certificationInfo}
          </div>
        </div>
      </div>
    ),
    work: (
      <div className="bg-white dark:bg-black p-4 rounded-md w-full max-w-3xl relative border border-green-600 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-green-600"
        >
          &times;
        </button>

        <div className="bg-black/80 p-6 rounded-xl shadow-xl max-w-5xl mx-auto text-white">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-8 border-b-4 border-green-400 pb-2">
            {traducciones.btnLaboral}
          </h2>

          <div className="grid grid-cols-1  gap-4">
           {traducciones.workExperience}
          </div>
        </div>
      </div>
    ),
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
  
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen, onClose]);
  

  if (component === "img" && !project.image) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex gap-4 items-stretch">{modal[component]}</div>
    </div>
  );
};
