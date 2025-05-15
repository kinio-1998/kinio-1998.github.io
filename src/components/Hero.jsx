const Hero = ({ traducciones }) => {
  return (
    <section
      className="relative h-[100vh] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('../img/background.png')" }}
      id="home"
    >
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-4/6 bg-black/90 text-white p-10 rounded-lg text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            {traducciones.introduce}{" "}
            <span className="text-green-600">Carlos Daniel Duarte León</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium mt-4 dark:text-green-600">
            {traducciones.title}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-200">
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
              href="#contact"
              className="border border-green-600 text-green-600 px-6 py-3 rounded hover:bg-green-300 hover:text-white transition"
            >
              {traducciones.btnContact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
