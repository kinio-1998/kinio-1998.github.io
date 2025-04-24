const Hero = ({traducciones}) =>{
    return (
        <section className="h-screen flex flex-col justify-center items-center px-4 ng-gradient-to-b from-white to-gray-100">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Carlos Daniel Duarte León</h1>
            <h2 className="text-4xl md:text-2xl mt-4 text-gray-600">{traducciones.title}</h2>
            <p className="mt-6 text-gray-500 text-lg max-w-xl">{traducciones.description}</p>
            <a href={traducciones.link} download className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-2x1 shadow-md hover:bg-blue-700 transition">{traducciones.btn}</a>
          </section>
    )
}       
export default Hero;