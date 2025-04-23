import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";
import { useLanguage } from "./context/LanguajeContent";
import { objTraducciones } from "./obj/objTraducciones";


function App() {
  const {language, toggleLanguage} = useLanguage();
  return (
    <>
      <Navbar traducciones={objTraducciones.nav[language]} toggleLanguage={toggleLanguage} language={language}/>
      <Hero traducciones={objTraducciones.hero[language]}/>
      <About  traducciones={objTraducciones.about[language]}/>
      <Projects traducciones={objTraducciones.projects[language]}/>
      <Skills/>
    </>
  );
}


export default App
