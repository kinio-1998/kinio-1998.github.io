import About from "./components/About";
import { Contact } from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {Projects} from "./components/Projects";
import { Skills } from "./components/Skills";
import { useLanguage } from "./context/LanguajeContent";
import { objTraducciones } from "./obj/objTraducciones";


function App() {
  const {language, toggleLanguage} = useLanguage();
  return (
   <div className="min-h-screen bg-[url('/./img/background.avif)] bg-cover bg-center bg-no-repeat bg-fixed">
    <>
      <Navbar traducciones={objTraducciones.nav[language]} toggleLanguage={toggleLanguage} language={language}/>
      <Hero traducciones={objTraducciones.hero[language]}/>
      <About  traducciones={objTraducciones.about[language]}/>
      <Skills traducciones={objTraducciones.skills[language]}/>
      <Projects traducciones={objTraducciones.projects[language]}/>
      <Contact traducciones={objTraducciones.contact[language]}/>
    </>
    </div>
  );
}


export default App
