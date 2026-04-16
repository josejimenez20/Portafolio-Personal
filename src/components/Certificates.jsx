import React from 'react';

const Certificates = ({ t, darkMode }) => {
  const certificados = [
    {
      id: 1,
      titulo: "Ingeniería en Sistemas y Redes (En curso)",
      institucion: "Universidad Gerardo Barrios",
      fecha: "2023 - Presente",
      descripcion: "Formacion en programacion, con énfasis en desarrollo web.",
      imagen: "/public/UGB_INSTITUCION.jpg",
      
    },

    {
      id: 2,
      titulo: "Desarrollo Web Full Stack",
      institucion: "Platzi",
      fecha: "2022 - 2023",
      descripcion: "Curso completo de desarrollo web, abarcando frontend y backend.",
      imagen: "/public/UGB_INSTITUCION.jpg",
    },

    {
      id: 3,
      titulo: "Certificación en JavaScript Moderno",
      institucion: "Platzi",  
      fecha: "2023",
      descripcion: "Certificación que avala mis habilidades en JavaScript moderno.",
      imagen: "/public/UGB_INSTITUCION.jpg",
    },

    {
      id: 4,
      titulo: "Certificación en React.js",
      institucion: "Platzi",
      fecha: "2023",
      descripcion: "Certificación que respalda mis conocimientos en React.js.",
      imagen: "/public/UGB_INSTITUCION.jpg",
    }

    
  ];

  return (
    <section id="certificados" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Encabezado */}
        <div className="mb-16">
          <span className={`inline-block py-1 px-3 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${
            darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
          }`}>
            {t.etiqueta}
          </span>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {t.titulo}
          </h2>
          <p className={`max-w-2xl text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.subtitulo}
          </p>
        </div>

        {/* Grid de Certificados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificados.map((cert) => (
            <div 
              key={cert.id}
              className={`group p-6 rounded-[2rem] border transition-all duration-500 flex flex-col ${
                darkMode 
                  ? 'bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] hover:border-blue-500/50' 
                  : 'bg-white border-slate-200 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30'
              }`}
            >
              {/* Contenedor de la Imagen */}
              <div className="relative w-full h-56 sm:h-64 mb-6 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img 
                  src={cert.imagen} 
                  alt={`Certificado de ${cert.titulo}`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                {/* Overlay sutil para la imagen */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl"></div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                    darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {cert.fecha}
                  </span>
                </div>
                
                <h3 className={`text-xl font-bold mb-2 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {cert.titulo}
                </h3>
                
                <p className={`text-sm font-semibold mb-3 ${darkMode ? 'text-blue-400/80' : 'text-blue-600/80'}`}>
                  {cert.institucion}
                </p>
                
                <p className={`text-sm leading-relaxed mt-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {cert.descripcion}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;