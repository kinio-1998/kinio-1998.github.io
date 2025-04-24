const Hero = ({ traducciones }) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-4 ng-gradient-to-b from-white to-gray-100">
      <h1 className="text-4xl sm:text-5xl font-bold text-center">
        ¡Hola! Soy{" "}
        <span className="text-green-600">Carlos Daniel Duarte León</span>
      </h1>
      <h2 className="text-2xl sm:text-3xl font-medium text-center mt-4 text-gray-700 dark:text-green-500">
        {traducciones.title}
      </h2>
      <p className="mt-4 text-center max-w-xl mx-auto text-black dark:text-gray-400">
        {traducciones.description}
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a
          href={traducciones.link}
          download
          className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
        >
          {traducciones.btnDownload}
        </a>
        <a
          href="#contacto"
          className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-300 hover:text-white transition"
        >
          {traducciones.btnContact}
        </a>
      </div>
    </section>
  );
};
export default Hero;
