import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import './App.css';
import { contenido } from './components/traducciones';

function App() {
  const [idioma, setIdioma] = useState('es');
  const t = contenido[idioma];
  
  // Estado para controlar la visibilidad del modal de contacto
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Dark mode: Inicializar el estado a partir de localStorage o usar true por defecto
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    return true; 
  });

  // Guardar el estado del modo oscuro en localStorage y actualizar las clases del documento
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      className={`
        min-h-screen font-sans transition-colors duration-700
        ${darkMode ? 'bg-[#0a0a0a] text-slate-100' : 'bg-slate-50 text-slate-900'}
      `}
    >
      <Navbar
        idioma={idioma}
        setIdioma={setIdioma}
        t={t.nav}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      
      <Hero 
        t={t.hero} 
        darkMode={darkMode} 
        openModal={() => setIsModalOpen(true)} 
      />
      
      <About t={t.about} darkMode={darkMode} />
      
      <Skills t={t.skills} darkMode={darkMode} />
      
      <Projects t={t.projects} darkMode={darkMode} />
      
      {/* Nueva sección de Certificados */}
      <Certificates t={t.certificates} darkMode={darkMode} />
      
      <Footer 
        t={t.footer} 
        darkMode={darkMode} 
        openModal={() => setIsModalOpen(true)} 
      />
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        darkMode={darkMode} 
      />
    </div>
  );
}

export default App;