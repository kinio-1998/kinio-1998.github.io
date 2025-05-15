import { useEffect } from "react";
import { ModalImg } from "./ModalIMG";
import { ModalAcademy } from "./ModalAcademy";
import { ModalWork } from "./ModalWork";
import { ModalArchievements } from "./ModalArchievements";
import { useLanguage } from "../../context/LanguajeContent";

export const ModalWrapper = ({  project,  onClose,  isModalOpen,  traducciones,  component,}) => {
  let modal = [];
  let lblModal = [];
  const {language} = useLanguage()
  switch (component) {
    case "img":
      modal = <ModalImg traducciones={traducciones} project={project}/>;
      if(language === "es" ? lblModal = project.translations.es.title : lblModal = project.translations.en.title)
      break;
    case "academy":
      modal = <ModalAcademy traducciones={traducciones} />;
      lblModal = traducciones.lblAcademy;

      break;
    case "work":
      modal = <ModalWork traducciones={traducciones} />;
      lblModal = traducciones.lblLaboral;
      break;
    case "archiviements":
      modal = <ModalArchievements />;
      lblModal = traducciones.lblArchievements;
      break;

    default:
      break;
  }
  console.log(modal);
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
      <div className="bg-black p-4 rounded-md w-full max-w-3xl relative border border-green-600 max-h-[90vh] overflow-y-auto">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8 border-b-4 border-green-600 pb-2">
          {lblModal}
        </h2>
            <button
              onClick={onClose}
              className="absolute top-2 right-4 text-2xl font-bold text-green-600"
            >
              &times;
            </button>
        <div className="flex gap-4 items-stretch">
          <div className="bg-black p-4 rounded-md w-full max-w-3xl border-green-600 max-h-[90vh] overflow-y-auto">
            {modal}
          </div>
        </div>
      </div>
    </div>
  );
};
