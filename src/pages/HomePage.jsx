// src/pages/HomePage.jsx
import About from "../components/About";
import { Contact } from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { useLanguage } from "../context/LanguajeContent";
import { objTraducciones } from "../obj/objTraducciones";
import { Toaster } from "react-hot-toast";
import VisitorTracker from "../components/VisitorTracker";
import { AnimatePresence, motion } from "framer-motion";

export default function HomePage() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <>
      <VisitorTracker />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1F2937",
            color: "#fff",
          },
        }}
      />
      <Navbar
        traducciones={objTraducciones.nav[language]}
        toggleLanguage={toggleLanguage}
        language={language}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0, backgroundColor: "rgba(0,0,0,0)" }}
          animate={{ opacity: 1, backgroundColor: "rgba(5, 46, 22, 0.3)" }}
          exit={{ opacity: 0, backgroundColor: "rgba(0,0,0,0)" }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-[url('/./img/background.avif')] bg-cover bg-center bg-no-repeat bg-fixed scroll-smooth"
        >
          <Hero traducciones={objTraducciones.hero[language]} />
          <About traducciones={objTraducciones.about[language]} />
          <Skills traducciones={objTraducciones.skills[language]} />
          <Projects traducciones={objTraducciones.projects[language]} />
          <Contact traducciones={objTraducciones.contact[language]} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
