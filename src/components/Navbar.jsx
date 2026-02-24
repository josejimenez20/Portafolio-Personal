import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white py-5 px-8 md:px-16 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-blue-600 tracking-tight cursor-pointer">
        Portafolio.
      </div>

      <ul className="hidden md:flex space-x-8 text-slate-600 font-medium text-sm">
        <li><a href="#inicio" className="hover:text-blue-600 transition-colors duration-200">Inicio</a></li>
        <li><a href="#sobre-mi" className="hover:text-blue-600 transition-colors duration-200">Sobre mí</a></li>
        <li><a href="#habilidades" className="hover:text-blue-600 transition-colors duration-200">Habilidades</a></li>
        <li><a href="#proyectos" className="hover:text-blue-600 transition-colors duration-200">Proyectos</a></li>
        <li><a href="#contacto" className="hover:text-blue-600 transition-colors duration-200">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;