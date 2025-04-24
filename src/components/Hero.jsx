const Hero = ({ traducciones }) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-4 ng-gradient-to-b from-white to-gray-100">
      <h1 className="text-4xl sm:text-5xl font-bold text-center">
        ¡Hola! Soy{" "}
        <span className="text-green-600">Carlos Daniel Duarte León</span>
      </h1>
      <h2 className="text-2xl sm:text-3xl font-medium text-center mt-4 text-gray-700 dark:text-green-500">
        Desarrollador Web Jr | Apasionado por la Automatización
      </h2>
      <p className="mt-4 text-center max-w-xl mx-auto text-black dark:text-gray-400">
        Soy un desarrollador con enfoque en mejorar procesos, crear experiencias web modernas y construir herramientas útiles para empresas y personas.  Me encanta aprender por mi cuenta, automatizar tareas, y enfrentar  nuevos retos.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a
          href="/cv.pdf"
          download
          className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          Descargar CV
        </a>
        <a
          href="#contacto"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Contáctame
        </a>
      </div>
    </section>
  );
};
export default Hero;
