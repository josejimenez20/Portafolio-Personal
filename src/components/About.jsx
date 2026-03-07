import React from 'react';

const About = () => {
  return (
    <section id="sobre-mi" className="w-full max-w-7xl mx-auto px-8 md:px-16 py-20 bg-slate-50">
      <div className="flex flex-col md:flex-row items-center gap-16">

       {/*  Fotos de sobre mi  */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000"
              alt="Espacio de trabajo"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      
        <div className="w-full md:w-1/2 flex flex-col items-start">

          {/* Título con la línea azul lateral idéntica a tu diseño */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Sobre mí</h2>
          </div>

          {/* Párrafos */}
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Mi nombre es José Heinar Jiménez, me especializo en desarrollo web y me enfoco en crear soluciones tecnológicas, asi como tabien diseños atractivos y funcionales.
            </p>
            <p>
              Mi pasión por la tecnología me ha llevado a explorar diversas áreas, desde el desarrollo hasta la arquitectura de software, siempre buscando aprender y mejorar mis habilidades para ofrecer lo mejor en cada proyecto.
            </p>
          </div>

          {/* Cuadrícula de Educación e Intereses */}
          <div className="grid grid-cols-2 gap-8 mt-10 w-full border-t border-slate-200 pt-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Educación</h3>
              <p className="text-sm text-slate-600 font-medium">Ingeniería en Sistemas y Redes Informaticas</p>
              <p className="text-xs text-slate-500 mt-1">Universidad Gerardo Barrios</p>
            </div>
            <div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Intereses</h3>
                <p className="text-sm text-slate-600 font-medium">Arquitectura Web, UI/UX</p>
                <p className="text-xs text-slate-500 mt-1">Ecosistema React & Tailwind CSS</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;