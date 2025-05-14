export const ModalImg = ({ project, traducciones }) => { 
  if (!project) return null;
  return (
    <div className="bg-white dark:bg-black p-4 rounded-md max-w-6xl w-full  border-green-600">
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
  );
};
