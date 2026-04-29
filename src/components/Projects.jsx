import React, { useState, useEffect, useRef } from 'react';

const portfolioProjects = [
   {
    id: 1,
    category: "Desarrollo Web",
    title: "Alba's Salon",
    description: "Enfocado en la digitalización operativa de un salón de belleza. El sistema centraliza la reserva de citas y la venta de productos, respaldado por una base de datos relacional y lógica de servidor construida íntegramente desde cero.",
    role: "Desarrollador Backend",
    competencies: "Diseño y Gestión de Base de Datos Relacional, Lógica de Servidor, Integración de Funcionalidades Transaccionales",
    results: "Implementación exitosa de toda la arquitectura de la base de datos (relaciones, citas, productos) y la lógica interna que hace funcionar el sistema.",
    tech: ["Python", "Flask", "SQLAlchemy", "SQLite", "HTML/CSS/JS"],
    image: "/alba.png", 
    link: "https://github.com/josejimenez20/prograiii-cii"
},
{
    id: 2,
    category: "Desarrollo Móvil",
    title: "Marketplace de Vehículos",
    description: "Aplicación móvil diseñada para digitalizar y facilitar la compra y venta de automóviles. Proporciona a los usuarios un catálogo interactivo y seguro desde sus teléfonos, conectando a vendedores y compradores a través de una experiencia de navegación intuitiva.",
    role: "Desarrollador Frontend y Backend",
    competencies: "Desarrollo de Aplicaciones Móviles, Diseño de Experiencia de Usuario, Integración de Lógica de Negocio, Gestión de Datos",
    results: "Entrega de un producto digital que agiliza la comercialización de vehículos, brindando al cliente final una herramienta accesible, rápida y fácil de utilizar directamente en su dispositivo móvil.",
    tech: ["Java", "Android Studio", "XML"],
    image: "/marke.png", 
    link: "https://github.com/GersonRivas19/Proyecto_Final_Progra.git"
},
    {
    id: 3,
    category: "Desarrollo Web",
    title: "Sistema de Gestión Empresarial",
    description: "Plataforma integral construida desde cero para centralizar la gestión operativa de una empresa. El sistema incluye módulos robustos y seguros para el control de contabilidad (partidas de diario), procesamiento de nóminas y facturación.",
    role: "Desarrollador Principal",
    competencies: "Diseño de Arquitectura de Software, Lógica de Negocios (Contabilidad), Desarrollo Backend",
    results: "Diseño y despliegue de una solución escalable y automatizada, demostrando la capacidad de liderar y ejecutar técnicamente un proyecto de software complejo en su totalidad.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Vite", "Blade"],
    image: "/conta.jpeg", 
    link: "https://github.com/josejimenez20/sistema-empresarial"
},
{
    id: 4,
    category: "Desarrollo Web",
    title: "FLORGAERFRA - Tu Diario Digital de Plantas",
    description: "Una aplicación creada para los amantes de la naturaleza. Permite llevar un registro detallado del crecimiento de tus plantas, guardar tus especies favoritas y recibir ayuda para cuidarlas mejor, todo guardado de forma segura en la nube.",
    role: "Desarrollador Backend",
    competencies: "Creación de aplicaciones completas, Manejo de información segura, Almacenamiento de fotos en internet, Diseño de experiencias fáciles de usar.",
    results: "Logramos una plataforma donde los usuarios pueden organizar su jardín digital de forma sencilla, permitiéndoles subir fotos de sus avances y acceder a su información desde cualquier lugar.",
    tech: ["NestJS", "React", "MongoDB", "TypeScript"],
    image: "/planta.png", 
    link: "https://github.com/josejimenez20/codetitans7"
}
];

// ─── Iconos ──────────────────────────────────────────────────────
const ArrowUpRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const FolderIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const CodeIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const TargetIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// ─── Componente Principal ────────────────────────────────────────
const Projects = ({ t, darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Lógica de traducción: Usa los proyectos de traducciones.js si existen, si no usa los locales
  const proyectosRender = t?.listaProyectos || portfolioProjects;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className={`
        relative w-full py-24 overflow-hidden transition-colors duration-700
        ${darkMode ? 'bg-[#0a0a0a]' : 'bg-[#fafbff]'}
      `}
    >
      <BackgroundDecoration darkMode={darkMode} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* ═══ Encabezado ═══ */}
        <div
          className={`
            text-center mb-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className={`
            inline-flex items-center gap-2 border px-4 py-1.5 rounded-full
            text-[11px] font-bold tracking-widest uppercase mb-6 transition-all duration-700
            ${darkMode
              ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
              : 'bg-blue-50 border-blue-100 text-blue-600'
            }
          `}>
            <FolderIcon className="w-3.5 h-3.5" />
            {t?.etiqueta || "Casos de Éxito"}
          </div>

          <h2 className={`
            text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight transition-colors duration-700
            ${darkMode ? 'text-white' : 'text-slate-900'}
          `}>
            {t?.tituloP1 || "Proyectos "}{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {t?.tituloP2 || "Destacados"}
            </span>
          </h2>

          <p className={`
            max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium transition-colors duration-700
            ${darkMode ? 'text-slate-400' : 'text-slate-500'}
          `}>
            {t?.descripcion || "Una selección de mis trabajos documentados bajo criterios de excelencia técnica, metodologías ágiles y resultados tangibles."}
          </p>
        </div>

        {/* ═══ Grid de Proyectos ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {proyectosRender.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
              darkMode={darkMode}
              t={t}
            />
          ))}
        </div>

        {/* ═══ Enlace a GitHub ═══ */}
        <div
          className={`
            mt-16 text-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <a
            href="https://github.com/josejimenez20?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative inline-flex items-center gap-3 font-semibold
              py-3 px-6 rounded-xl transition-all duration-500
              shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 overflow-hidden
              ${darkMode
                ? 'bg-white text-black hover:bg-slate-100 shadow-white/10 hover:shadow-white/20'
                : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20 hover:shadow-slate-900/30'
              }
            `}
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <GithubIcon className="w-4 h-4 relative z-10" />
            <span className="relative z-10 text-sm">{t?.botonGithub || "Ver todos en GitHub"}</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── Tarjeta de Proyecto ─────────────────────────────────────────
const ProjectCard = ({ project, index, isVisible, darkMode, t }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
      className={`
        group relative rounded-2xl overflow-hidden border flex flex-col
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:shadow-xl hover:-translate-y-1.5
        ${darkMode
          ? 'bg-white/[0.02] border-white/[0.08] hover:border-blue-500/40 hover:shadow-blue-500/5'
          : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-blue-500/10'
        }
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {/* ═══ Imagen ═══ */}
      <div className={`
        relative h-40 overflow-hidden flex-shrink-0
        ${darkMode ? 'bg-white/[0.02]' : 'bg-slate-100'}
      `}>
        <img
          src={project.image}
          alt={project.title}
          className={`
            w-full h-full object-cover transition-transform duration-700 ease-out
            ${isHovered ? 'scale-105' : 'scale-100'}
            ${darkMode ? 'brightness-75 group-hover:brightness-90' : 'brightness-100'}
          `}
        />

        {/* Overlay sutil */}
        <div className={`absolute inset-0 ring-1 ring-inset ${darkMode ? 'ring-white/10' : 'ring-black/5'} rounded-2xl`}></div>

        {/* Categoría */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`
            px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border
            ${darkMode
              ? 'bg-black/50 text-blue-300 border-white/10 shadow-black/20'
              : 'bg-white/90 text-blue-700 border-blue-100 shadow-slate-900/5'
            }
          `}>
            {project.category}
          </span>
        </div>
      </div>

      {/* ═══ Contenido ═══ */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`
          text-lg font-bold mb-2 transition-colors duration-300
          ${darkMode
            ? 'text-white group-hover:text-blue-400'
            : 'text-slate-900 group-hover:text-blue-600'
          }
        `}>
          {project.title}
        </h3>

        <p className={`
          text-[13px] leading-relaxed mb-5 flex-grow transition-colors duration-700
          ${darkMode ? 'text-slate-400' : 'text-slate-500'}
        `}>
          {project.description}
        </p>

        {/* ═══ Requerimientos de Rúbrica ═══ */}
        <div className="space-y-2.5 mb-5 mt-auto">
          <div className="flex items-start gap-2">
            <UserIcon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <p className={`text-[12px] leading-tight ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <span className="font-bold block mb-0.5">{t?.rolLabel || "Rol Desempeñado:"}</span> {project.role}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CodeIcon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <p className={`text-[12px] leading-tight ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <span className="font-bold block mb-0.5">{t?.competenciasLabel || "Competencias Técnicas:"}</span> {project.competencies}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <TargetIcon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <p className={`text-[12px] leading-tight ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <span className="font-bold block mb-0.5">{t?.resultadosLabel || "Resultados:"}</span> {project.results}
            </p>
          </div>
        </div>

        {/* Separador */}
        <div className={`
          w-full h-px mb-4 transition-colors duration-700
          ${darkMode
            ? 'bg-gradient-to-r from-transparent via-white/[0.06] to-transparent'
            : 'bg-gradient-to-r from-transparent via-slate-200 to-transparent'
          }
        `} />

        {/* Tecnologías */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((item, i) => (
              <span
                key={i}
                className={`
                  px-2 py-0.5 rounded text-[10px] font-semibold transition-colors
                  ${darkMode
                    ? 'bg-white/5 text-slate-400 group-hover:bg-blue-500/10 group-hover:text-blue-300'
                    : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700'
                  }
                `}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Botón de Evidencia */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              w-full py-2 rounded-xl text-[13px] font-bold text-center transition-all duration-300
              ${darkMode
                ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/30'
                : 'bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 border border-blue-100'
              }
            `}
          >
            {t?.botonEvidencia || "Ver Evidencia"}
          </a>
        </div>
      </div>

      {/* Borde inferior gradiente */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 h-1
          bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500
          transition-all duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </div>
  );
};

// ─── Fondo decorativo ────────────────────────────────────────────
const BackgroundDecoration = ({ darkMode }) => (
  <>
    <div
      className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none transition-opacity duration-700"
      style={{
        background: darkMode
          ? 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        opacity: darkMode ? 0.6 : 0.2,
      }}
    />
    <div
      className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none transition-opacity duration-700"
      style={{
        background: darkMode
          ? 'radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
        opacity: darkMode ? 0.5 : 0.15,
      }}
    />
    <div
      className="absolute inset-0 pointer-events-none transition-opacity duration-700"
      style={{
        opacity: darkMode ? 0.02 : 0.015,
        backgroundImage: `
          linear-gradient(${darkMode ? 'rgba(148,163,184,0.3)' : 'rgba(59,130,246,0.5)'} 1px, transparent 1px),
          linear-gradient(90deg, ${darkMode ? 'rgba(148,163,184,0.3)' : 'rgba(59,130,246,0.5)'} 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
    {/* Línea decorativa superior */}
    <div className={`
      absolute top-0 left-0 right-0 h-px transition-colors duration-700
      ${darkMode
        ? 'bg-gradient-to-r from-transparent via-white/[0.06] to-transparent'
        : 'bg-gradient-to-r from-transparent via-slate-200 to-transparent'
      }
    `} />
  </>
);

export default Projects;