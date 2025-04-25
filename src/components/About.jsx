const About = ({traducciones}) => {
    return(
        <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10 bg-black text-white">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/img/logotipo.png" // Aquí luego reemplazas por tu foto
            alt="Mi Foto"
            className="rounded-3xl shadow-lg w-64 h-64 object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-500 mb-4">
            Sobre Mí
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Soy Carlos Daniel Duarte León, Licenciado en Informática con experiencia como desarrollador web y analista técnico. Apasionado por la tecnología, la automatización de procesos y la creación de soluciones útiles para las personas. 
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Me destaco por mi compromiso, la mejora continua, el trabajo en equipo y la resolución de problemas. Disfruto aprender constantemente y participar en proyectos donde pueda combinar creatividad y lógica para obtener resultados que impacten de manera positiva.
          </p>
      
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Soft Skills</h3>
            <ul className="list-disc list-inside text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li>Comunicación asertiva</li>
              <li>Trabajo en equipo</li>
              <li>Pensamiento analítico</li>
              <li>Adaptabilidad</li>
              <li>Empatía</li>
              <li>Gestión del tiempo</li>
            </ul>
          </div>
        </div>
      </section>
      
    )
}

export default About;