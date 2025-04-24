import React from "react";

export const ModalImg = ({ image, onClose ,traducciones, project}) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-md max-w-6xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-black dark:text-white"
        >
          &times;
        </button>
        <img src={image} alt="Vista previa del código" className="w-full rounded" />
        <div className="flex justify-center mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
              >
                {traducciones.lblProject}
              </a>
            </div>
      </div>
    </div>
  );
};