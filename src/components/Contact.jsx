export const Contact = ({traduccion}) => {
  return(
        <section id="contact" className="py-16 bg-gray-50 dark:bg-neutral-900">
            <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Contáctame
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
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
                className="p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
                <input
                type="email"
                name="email"
                placeholder="Tu correo"
                required
                className="p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
                <textarea
                name="mensaje"
                rows="5"
                placeholder="Tu mensaje"
                required
                className="p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                ></textarea>
                <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-all"
                >
                Enviar mensaje
                </button>
            </form>

            <div className="mt-10 space-y-2 text-sm text-gray-500 dark:text-gray-400">
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
