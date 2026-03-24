import React, { useState, useEffect, useRef } from 'react';

const portfolioProjects = [
  {
    id: 1,
    category: "App",
    title: "Tienda Online Móvil",
    description: "Solución integral de comercio electrónico para dispositivos móviles que permite la gestión automatizada de inventarios y clientes. El sistema garantiza la integridad de la información mediante una arquitectura de persistencia de datos local, optimizando la experiencia de usuario con una interfaz intuitiva y tiempos de respuesta inmediatos.",
    tech: ["Android Studio", "Java", "SQLite"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800"
  },
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

// ─── Componente Principal ────────────────────────────────────────
const Projects = ({ t, darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
        relative w-full py-28 overflow-hidden transition-colors duration-700
        ${darkMode ? 'bg-[#0a0a0a]' : 'bg-[#fafbff]'}
      `}
    >
      <BackgroundDecoration darkMode={darkMode} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* ═══ Encabezado ═══ */}
        <div
          className={`
            text-center mb-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className={`
            inline-flex items-center gap-2 border px-4 py-2 rounded-full
            text-xs font-bold tracking-widest uppercase mb-6 transition-all duration-700
            ${darkMode
              ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
              : 'bg-blue-50 border-blue-100 text-blue-600'
            }
          `}>
            <FolderIcon className="w-4 h-4" />
            Mi Portafolio
          </div>

          <h2 className={`
            text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 tracking-tight transition-colors duration-700
            ${darkMode ? 'text-white' : 'text-slate-900'}
          `}>
            Proyectos{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>

          <p className={`
            max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium transition-colors duration-700
            ${darkMode ? 'text-slate-400' : 'text-slate-500'}
          `}>
            Una selección de mis trabajos más recientes. Cada proyecto representa un desafío único y una solución escalable.
          </p>
        </div>

        {/* ═══ Grid de Proyectos ═══ */}
        <div className={`
          grid grid-cols-1 ${portfolioProjects.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8
        `}>
          {portfolioProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
              darkMode={darkMode}
            />
          ))}
        </div>

        {/* ═══ Enlace a GitHub ═══ */}
        <div
          className={`
            mt-20 text-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <a
            href="https://github.com/josejimenez20?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative inline-flex items-center gap-3 font-semibold
              py-4 px-8 rounded-2xl transition-all duration-500
              shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 overflow-hidden
              ${darkMode
                ? 'bg-white text-black hover:bg-slate-100 shadow-white/10 hover:shadow-white/20'
                : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20 hover:shadow-slate-900/30'
              }
            `}
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <GithubIcon className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Ver más en GitHub</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── Tarjeta de Proyecto ─────────────────────────────────────────
const ProjectCard = ({ project, index, isVisible, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
      className={`
        group relative rounded-3xl overflow-hidden border flex flex-col
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:shadow-2xl hover:-translate-y-2
        ${darkMode
          ? 'bg-white/[0.03] border-white/[0.06] hover:border-blue-500/30 hover:shadow-blue-500/5'
          : 'bg-white border-slate-200/80 hover:shadow-blue-500/10 hover:border-blue-200/50'
        }
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
    >
      {/* ═══ Imagen ═══ */}
      <div className={`
        relative h-56 overflow-hidden
        ${darkMode ? 'bg-white/[0.02]' : 'bg-slate-100'}
      `}>
        <img
          src={project.image}
          alt={project.title}
          className={`
            w-full h-full object-cover transition-all duration-700 ease-out
            ${isHovered ? 'scale-110 blur-[1px]' : 'scale-100'}
            ${darkMode ? 'brightness-75' : 'brightness-100'}
          `}
        />

        <div
          className={`
            absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent
            transition-opacity duration-500
            ${isHovered ? 'opacity-100' : darkMode ? 'opacity-40' : 'opacity-0'}
          `}
        />

        {/* Categoría */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`
            inline-flex items-center gap-1.5 backdrop-blur-xl px-4 py-1.5
            rounded-xl text-xs font-bold shadow-lg border
            ${darkMode
              ? 'bg-white/10 text-white border-white/10 shadow-black/20'
              : 'bg-white/95 text-slate-700 border-white/50 shadow-slate-900/5'
            }
          `}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            {project.category}
          </span>
        </div>

        {/* Número */}
        <div
          className={`
            absolute bottom-4 right-4 z-10 text-5xl font-black text-white/20
            transition-all duration-500
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          {String(project.id).padStart(2, '0')}
        </div>
      </div>

      {/* ═══ Contenido ═══ */}
      <div className="p-7 flex flex-col flex-grow">
        <h3 className={`
          text-xl font-bold mb-3 transition-colors duration-300
          ${darkMode
            ? 'text-white group-hover:text-blue-400'
            : 'text-slate-900 group-hover:text-blue-600'
          }
        `}>
          {project.title}
        </h3>

        <p className={`
          text-sm leading-relaxed mb-6 flex-grow transition-colors duration-700
          ${darkMode ? 'text-slate-400' : 'text-slate-500'}
        `}>
          {project.description}
        </p>

        {/* Separador */}
        <div className={`
          w-full h-px mb-5 transition-colors duration-700
          ${darkMode
            ? 'bg-gradient-to-r from-transparent via-white/[0.06] to-transparent'
            : 'bg-gradient-to-r from-transparent via-slate-200 to-transparent'
          }
        `} />

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((item, i) => (
            <span
              key={i}
              className={`
                inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5
                rounded-lg border transition-all duration-300
                ${darkMode
                  ? 'bg-white/[0.04] text-slate-400 border-white/[0.06] group-hover:border-blue-500/20 group-hover:bg-blue-500/[0.06] group-hover:text-blue-400'
                  : 'bg-slate-50 text-slate-600 border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 group-hover:text-blue-700'
                }
              `}
            >
              <span className="w-1 h-1 rounded-full bg-current opacity-40" />
              {item}
            </span>
          ))}
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