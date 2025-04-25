const About = ({traducciones}) => {
    return(
        <section className="p-6" id="about">
            <h2 className="text-2xl font-bold text-center">{traducciones.title}</h2>
            <p className="mt-2">{traducciones.description}</p>
        </section>
    )
}

export default About;