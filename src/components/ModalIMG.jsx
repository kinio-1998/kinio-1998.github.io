import React from "react";

export const ModalImg = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-md max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-black dark:text-white"
        >
          &times;
        </button>
        <img src={image} alt="Vista previa del código" className="w-full rounded" />
      </div>
    </div>
  );
};