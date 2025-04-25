import { useState } from "react";

const Navbar = ({traducciones,toggleLanguage,language}) => {
  const [open, setOpen] = useState(false);


  return (
    <nav className="bg-neutral-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="rounded-full overflow-hidden h-12 w-12">
          <img src="/img/logotipo.png"  alt="Logo Kinio" className="h-full w-full object-cover"/>
        </div>
  <span className="text-2xl font-bold text-green-600">Kinio</span>
</div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <ul className={`md:flex space-x-6 ${open ? 'block' : 'hidden'} md:block`}>
          <li><a href="#home" className="hover:text-white text-green-600">{traducciones.home}</a></li>
          <li><a href="#about" className="hover:text-white text-green-600">{traducciones.about}</a></li>
          <li><a href="#skills" className="hover:text-white text-green-600">{traducciones.skills}</a></li>
          <li><a href="#projects" className="hover:text-white text-green-600">{traducciones.projects}</a></li>
          <li><a href="#contact" className="hover:text-white text-green-600">{traducciones.contact}</a></li>
          <li>
            <button onClick={toggleLanguage} className="ml-2 text-sm px-2 py-1 border rounded text-green-600 border-green-600">
              {language === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 