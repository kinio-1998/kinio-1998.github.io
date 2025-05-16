import { techIcons } from "../obj/objIcons";
import { Counter } from "./Counter";
import toast from "react-hot-toast";
import { useState } from "react";

export const Contact = ({ traducciones }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqaqpwzy", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Mensaje enviado correctamente ✅");
        form.reset();
      } else {
        toast.error("Error al enviar el mensaje ❌");
      }
    } catch (error) {
      toast.error("Error de red. Intenta más tarde ⚠️");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-10">{traducciones.title}</h2>
        <p className="text-green-600 mb-8">{traducciones.lblContact}</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <label htmlFor="nombre" className="sr-only">{traducciones.lblName}</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder={traducciones.lblNamePlaceHolder}
            required
            className="p-3 rounded-md border border-green-600 bg-green-950/90 dark:text-white  placeholder:italic placeholder:text-green-700  focus:border-2 focus:border-green-400 focus:outline-none"
          />

          <label htmlFor="email" className="sr-only">{traducciones.lblEmail}</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={traducciones.lblEmailPlaceHolder}
            required
            className="p-3 rounded-md border border-green-600 bg-green-950/90 dark:text-white  placeholder:italic placeholder:text-green-700  focus:border-2 focus:border-green-400 focus:outline-none"
          />

          <label htmlFor="mensaje" className="sr-only">{traducciones.lblMessage}</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            placeholder={traducciones.lblMessagePlaceHolder}
            required
            className="p-3 rounded-md border border-green-600 bg-green-950/90 dark:text-white placeholder:italic placeholder:text-green-700  focus:border-2 focus:border-green-400 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-6 py-3 rounded shadow-md hover:bg-green-700 hover:scale-105 transition-transform duration-200 disabled:opacity-50"
          >
            {loading ? "Enviando..." : traducciones.lblButton}
          </button>
        </form>

        <div className="mt-10 space-y-2 text-sm text-green-600">
          <p>{traducciones.lblLocation}</p>
          <p className="text-xs">{traducciones.lblLocationChange}</p>
        </div>
      </div>

      <div className="flex justify-center text-4xl gap-6 mt-3">
        <div className="relative group">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=li.carlosduarte98@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Correo Gmail"
          >
            {techIcons.getIconByName("Gmail")}
          </a>
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 pointer-events-none">
            li.carlosduarte98@gmail.com
          </div>
        </div>

        <a
          href="https://github.com/kinio-1998"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          {techIcons.getIconByName("GitHub")}
        </a>

        <a
          href="https://linkedin.com/in/licarlosduarte"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          {techIcons.getIconByName("LinkedIn")}
        </a>

        <div className="relative group">
          <a
            href="https://wa.me/526678192130"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            {techIcons.getIconByName("Whatsapp-js")}
          </a>
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 pointer-events-none">
            +52 667 819 2130
          </div>
        </div>
      </div>

      <p className="mt-2 text-xs text-green-600 italic text-center">
        {traducciones.lblSugerency}
      </p>

      <Counter lblCounter={traducciones.counter}/>
    </section>
  );
};
