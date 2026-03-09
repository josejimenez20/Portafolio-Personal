import React from 'react';

// 1. Recibimos 't' como propiedad
const About = ({ t }) => {
  return (
    <section id="sobre-mi" className="w-full max-w-7xl mx-auto px-7 md:px-13 py-20 bg-slate-50">
      <div className="flex flex-col md:flex-row items-center gap-16">

       {/* Fotos de sobre mi  */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src="/Laptop.jpeg" 
              alt="Espacio de trabajo"
              className="w-full aspect-[4/5] md:aspect-square object-cover"
            />
          </div>
        </div>

      
        <div className="w-full md:w-1/2 flex flex-col items-start">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t?.titulo}</h2>
          </div>

          {/* Párrafos */}
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>{t?.parrafo1}</p>
            <p>{t?.parrafo2}</p>
          </div>

          {/* Cuadrícula de Educación e Intereses */}
          <div className="grid grid-cols-2 gap-8 mt-10 w-full border-t border-slate-200 pt-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">{t?.educacionTitulo}</h3>
              <p className="text-sm text-slate-600 font-medium">{t?.educacionCarrera}</p>
              <p className="text-xs text-slate-500 mt-1">{t?.educacionUni}</p>
            </div>
            <div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">{t?.interesesTitulo}</h3>
                <p className="text-sm text-slate-600 font-medium">{t?.intereses1}</p>
                <p className="text-xs text-slate-500 mt-1">{t?.intereses2}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;