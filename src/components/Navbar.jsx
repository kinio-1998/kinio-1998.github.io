import { useState } from "react";

const Navbar = ({traducciones,toggleLanguage,language}) => {
  const [open, setOpen] = useState(false);


  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-xl">Kinio</div>
        
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <ul className={`md:flex space-x-6 ${open ? 'block' : 'hidden'} md:block`}>
          <li><a href="#home" className="hover:text-blue-500">{traducciones.home}</a></li>
          <li><a href="#about" className="hover:text-blue-500">{traducciones.about}</a></li>
          <li><a href="#skills" className="hover:text-blue-500">{traducciones.skills}</a></li>
          <li><a href="#projects" className="hover:text-blue-500">{traducciones.projects}</a></li>
          <li><a href="#contact" className="hover:text-blue-500">{traducciones.contact}</a></li>
          <li>
            <button onClick={toggleLanguage} className="ml-2 text-sm px-2 py-1 border rounded">
              {language === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 