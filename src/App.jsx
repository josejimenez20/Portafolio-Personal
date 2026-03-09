import React, { useState } from 'react'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer'; 
import './App.css';
import { contenido } from './components/traducciones'; 

function App() {
  const [idioma, setIdioma] = useState('es');
  const t = contenido[idioma]; 

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar idioma={idioma} setIdioma={setIdioma} t={t.nav} />
      <Hero t={t.hero} />
      <About t={t.about} />
      <Skills t={t.skills} />
      <Projects t={t.projects} />
      <Footer /> 
    </div>
  );
}

export default App;