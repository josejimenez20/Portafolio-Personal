import React from 'react';

const Navbar = ({ idioma, setIdioma, t }) => {
  return (
    <nav className="w-full bg-white py-5 px-8 md:px-16 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-blue-600 tracking-tight cursor-pointer">
        H<span className="text-slate-900">J</span>
      </div>

      <div className="flex items-center gap-8">
        <ul className="hidden md:flex space-x-8 text-slate-600 font-medium text-sm">
          {/* Aquí ya estamos usando la 't' dinámica */}
          <li><a href="#inicio" className="hover:text-blue-600 transition-colors duration-200">{t?.inicio}</a></li>
          <li><a href="#sobre-mi" className="hover:text-blue-600 transition-colors duration-200">{t?.sobreMi}</a></li>
          <li><a href="#habilidades" className="hover:text-blue-600 transition-colors duration-200">{t?.habilidades}</a></li>
          <li><a href="#proyectos" className="hover:text-blue-600 transition-colors duration-200">{t?.proyectos}</a></li>
          <li><a href="#contacto" className="hover:text-blue-600 transition-colors duration-200">{t?.contacto}</a></li>
        </ul>

        {/* Selector de Idioma */}
        <div className="flex items-center gap-2 border-l pl-6 border-slate-200 ml-2">
          <button 
            onClick={() => setIdioma('es')}
            className={`text-xs font-bold transition-all ${idioma === 'es' ? 'text-blue-600 scale-110' : 'text-slate-400 hover:text-slate-600'}`}
          >
            ES
          </button>
          <span className="text-slate-300 text-xs">|</span>
          <button 
            onClick={() => setIdioma('en')}
            className={`text-xs font-bold transition-all ${idioma === 'en' ? 'text-blue-600 scale-110' : 'text-slate-400 hover:text-slate-600'}`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;