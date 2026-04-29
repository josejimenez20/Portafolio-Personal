import React from 'react';

const Certificates = ({ t, darkMode }) => {
  const certificados = [
    {
      id: 1,
      titulo: "Diploma del Curso de Introducción a la Web: Historia y Funcionamiento de Internet",
      institucion: "Platzi",
      fecha: "2026",
      descripcion: "Certifico el dominio de los fundamentos de la arquitectura web, comprendiendo desde la gestión de protocolos de red (HTTP/HTTPS) y sistemas de resolución de nombres (DNS), hasta el ciclo de vida de renderizado en el navegador (DOM, CSSOM y Render Tree).",
      imagen: "/funcion.png",
      
    },

    {
      id: 2,
      titulo: "Staff Organizador | FLISOL 2026 | Universidad Gerardo Barrios",
      institucion: "Universidad Gerardo Barrios",
      fecha: "2026",
      descripcion: "Orgulloso de haber formado parte del Staff Organizador del 22° Festival Latinoamericano de Instalación de Software Libre (FLISOL 2026) en la Universidad Gerardo Barrios, campus Usulután.",
      imagen: "flisol.png",
    },

    {
      id: 3,
      titulo: "Certificación Técnica en Reparación de Motores de Combustión Interna",
      institucion: "Insaforp",  
      fecha: "2022",
      descripcion: "Capacitación especializada en el diagnóstico, mantenimiento y reparación de sistemas de motores de combustión.",
      imagen: "/insaforp.jpeg",
    },

    {
      id: 4,
      titulo: "Especialista en Principios de Arduino",
      institucion: "Universidad Gerardo Barrios",
      fecha: "2022",
      descripcion: "Este proyecto, coordinado por la Facultad de Ciencia y Tecnología de la UGB, me permitió integrar la lógica de programación con el control de componentes electrónicos, sentando las bases para mi transición hacia el desarrollo de software profesional.",
      imagen: "/ugb.jpeg",
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