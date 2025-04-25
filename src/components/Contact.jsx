export const Contact = ({traduccion}) => {
  return(
        <section id="contact" className="py-16 bg-gray-50 dark:bg-neutral-950">
            <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold  text-green-600 mb-4">
                Contáctame
            </h2>
            <p className="text-green-600 mb-8">
                ¿Tienes una idea o un proyecto? ¡Hablemos! Estoy disponible para
                colaboraciones o nuevas oportunidades laborales.
            </p>

            <form
                action="https://formspree.io/f/{tu-id}" // reemplaza con tu endpoint de Formspree o similar
                method="POST"
                className="grid grid-cols-1 gap-6"
            >
                <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
                className="p-3 rounded-md border border-green-600 dark:bg-green-950/90 dark:text-white"
                />
                <input
                type="email"
                name="email"
                placeholder="Tu correo"
                required
                className="p-3 rounded-md border border-green-600 dark:bg-green-950/90 dark:text-white"
                />
                <textarea
                name="mensaje"
                rows="5"
                placeholder="Tu mensaje"
                required
                className="p-3 rounded-md border border-green-600 dark:bg-green-950/90 dark:text-white"
                ></textarea>
                <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 transition"
                >
                Enviar mensaje
                </button>
            </form>

            <div className="mt-10 space-y-2 text-sm text-green-600">
                <p>
                Email:{" "}
                <a href="mailto:tucorreo@gmail.com" className="">
                    li.carlosduarte98@gmail.com
                </a>
                </p>
                <p>
                Teléfono:{" "}
                <a href="tel:+5216678192130" className="">
                    +52 1 6678192130
                </a>
                </p>
                <p>Ubicación: Culiacán, Sinaloa, México (Disponible a cambio de residencia)</p>
            </div>
            </div>
        </section>
  )
};
