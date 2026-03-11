import React from 'react';

const About = ({ t }) => {
  return (
    <section id="sobre-mi" className="w-full max-w-7xl mx-auto px-7 md:px-13 py-20 bg-slate-50">
      <div className="flex flex-col md:flex-row items-center gap-16">

       {/* Foto de sobre mi (Sombra mejorada) */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform -rotate-1 hover:rotate-0 transition-all duration-500">
            <img
              src="/Laptop.jpeg" 
              alt="Espacio de trabajo desarrollando código"
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

          {/* Cuadrícula de Educación e Intereses (MEJORADA) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 w-full border-t border-slate-200 pt-8">
            
            {/* Educación */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
                <h3 className="font-bold text-slate-900">{t?.educacionTitulo}</h3>
              </div>
              <p className="text-sm text-slate-700 font-semibold">{t?.educacionCarrera}</p>
              <p className="text-sm text-slate-500 mt-1">{t?.educacionUni}</p>
            </div>

            {/* Intereses / Stack (Ahora con estilo de etiquetas 'Pills') */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                <h3 className="font-bold text-slate-900">{t?.interesesTitulo}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {/* Estas son las etiquetas (pills) para tus tecnologías */}
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs rounded-lg font-semibold border border-blue-100">
                  {t?.intereses1}
                </span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs rounded-lg font-semibold border border-blue-100">
                  {t?.intereses2}
                </span>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;