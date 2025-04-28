import React, { useEffect, useRef } from "react";

export const ModalImg = ({ image, onClose, traducciones, project, component, title}) => {
  const modalRef = useRef();
  const modal = {
    img: (
      <div className="bg-white dark:bg-black p-4 rounded-md max-w-6xl w-full relative border-green-600 border">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-black dark:text-white"
          >
          &times;
        </button>
          <div className="grid uppercase text-center mt-auto text-green-600 text-3xl">{title}</div>
        <img
          src={image}
          alt="Vista previa del código"
          className="max-h-[80vh] w-auto mx-auto rounded object-contain my-5"
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

  if (!image) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }}>
      {modal[component]}
    </div>
  );
};
