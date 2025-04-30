import React, { useEffect, useRef } from "react";

export const ModalImg = ({ project, onClose, traducciones, component }) => {
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
      <div className="bg-white dark:bg-black p-4 rounded-md w-full max-w-3xl relative border border-green-600 max-h-[90vh]">
      <button className="absolute top-2 right-4 text-2xl font-bold text-green-600">
        &times;
      </button>
    
      <h2 className="text-green-500 text-2xl font-semibold text-center mb-6 border-b-4 border-green-600 uppercase">
        {traducciones.btnAcademy}
      </h2>
    
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
        <div className="sm:col-span-5 sm:col-start-2 sm:row-start-2 ">
          {traducciones.academyInfo}
        </div>
        <div className="sm:col-span-5 sm:col-start-2 sm:row-start-4 ">
          {traducciones.languageInfo}
        </div>
        <div className="sm:col-span-5 sm:col-start-7 sm:row-start-2 ">
          {traducciones.certificationInfo}
        </div>
      </div>
    </div>
    
    ),
    work: (
      <div className="bg-white dark:bg-black p-4 rounded-md max-w-6xl w-full relative border-green-600 border">
        <div className="grid grid-cols-12 grid-rows-6 gap-12 ">
          <button
            onClick={onClose}
            className="absolute top-2 right-4 text-2xl font-bold text-green-600"
          >
            &times;
          </button>
          <div className="flex justify-center col-span-10 col-start-2 border">
            <h1>{traducciones.btnAcademy}</h1>
          </div>
          <div className="col-span-5 row-span-4 col-start-2 row-start-2 border">
            2
          </div>
          <div className="col-span-5 row-span-4 col-start-7 row-start-2 border">
            3
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

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

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
      {modal[component]}
    </div>
  );
};
