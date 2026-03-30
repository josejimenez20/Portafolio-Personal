import React, { memo, useState, useEffect, useRef } from 'react';

// ─── Iconos Extraídos ────────────────────────────────────────────
const MonitorIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const ServerIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
);

const CodeIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

// ─── Hook: Intersection Observer ─────────────────────────────────
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

// ─── Hook: Barra animada con porcentaje ──────────────────────────
const useAnimatedWidth = (percentage, isInView) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setWidth(percentage), 300);
    return () => clearTimeout(timer);
  }, [percentage, isInView]);

  return width;
};

// ─── Datos de Categorías de Skills ───────────────────────────────
// Modificado para aceptar 't' y traducir los títulos
const getSkillCategories = (t, darkMode) => [
  {
    id: 'frontend',
    title: t?.frontend || 'Frontend',
    icon: MonitorIcon,
    color: {
      bg: 'bg-blue-500',
      hoverBorder: darkMode ? 'hover:border-blue-500/40' : 'hover:border-blue-300/80',
      hoverText: darkMode ? 'group-hover/card:text-blue-400' : 'group-hover/card:text-blue-600',
      glow: darkMode ? 'from-blue-500/5 to-blue-600/5' : 'from-blue-400/10 to-blue-500/10',
      gradient: { from: '#3B82F6', to: '#6366F1' },
    },
    skills: [
      { name: 'React', percentage: 90 },
      { name: 'Tailwind CSS', percentage: 95 },
      { name: 'HTML5 / CSS3', percentage: 98 },
      { name: 'JavaScript', percentage: 85 },
      { name: 'Bootstrap', percentage: 85 },
    ],
  },
  {
    id: 'backend',
    title: t?.backend || 'Backend',
    icon: ServerIcon,
    color: {
      bg: 'bg-emerald-500',
      hoverBorder: darkMode ? 'hover:border-emerald-500/40' : 'hover:border-emerald-300/80',
      hoverText: darkMode ? 'group-hover/card:text-emerald-400' : 'group-hover/card:text-emerald-600',
      glow: darkMode ? 'from-emerald-500/5 to-emerald-600/5' : 'from-emerald-400/10 to-emerald-500/10',
      gradient: { from: '#10B981', to: '#059669' },
    },
    skills: [
      { name: 'Python', percentage: 90 },
      { name: 'Java', percentage: 85 },
      { name: 'C#', percentage: 80 },
      { name: 'PHP', percentage: 80 },
      { name: 'Laravel', percentage: 80 },
    ],
  },
  {
    id: 'tools',
    title: t?.herramientas || 'Herramientas',
    icon: CodeIcon,
    color: {
      bg: 'bg-purple-500',
      hoverBorder: darkMode ? 'hover:border-purple-500/40' : 'hover:border-purple-300/80',
      hoverText: darkMode ? 'group-hover/card:text-purple-400' : 'group-hover/card:text-purple-600',
      glow: darkMode ? 'from-purple-500/5 to-purple-600/5' : 'from-purple-400/10 to-purple-500/10',
      gradient: { from: '#8B5CF6', to: '#7C3AED' },
    },
    skills: [
      { name: 'Git / GitHub', percentage: 90 },
      { name: 'VS Code', percentage: 90 },
      { name: 'Linux', percentage: 75 },
    ],
  },
];

// ─── Componente Principal ────────────────────────────────────────
const Skills = ({ t, darkMode }) => {
  const [sectionRef, isInView] = useInView();
  // Se pasa 't' a la función de categorías
  const SKILL_CATEGORIES = getSkillCategories(t, darkMode);

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      className={`
        relative w-full overflow-hidden py-20 lg:py-32 transition-colors duration-700
        ${darkMode
          ? 'bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]'
          : 'bg-gradient-to-br from-slate-50 via-white to-blue-50/30'
        }
      `}
    >
      <BackgroundDecoration darkMode={darkMode} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader isInView={isInView} t={t} darkMode={darkMode} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              isInView={isInView}
              delay={index * 150}
              darkMode={darkMode}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Sub-componentes ─────────────────────────────────────────────

const BackgroundDecoration = ({ darkMode }) => (
  <>
    <div
      className={`
        absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full
        blur-3xl pointer-events-none transition-colors duration-700
        ${darkMode ? 'bg-blue-500/[0.03]' : 'bg-blue-100/20'}
      `}
    />
    <div
      className={`
        absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full
        blur-3xl pointer-events-none transition-colors duration-700
        ${darkMode ? 'bg-purple-500/[0.03]' : 'bg-purple-100/20'}
      `}
    />
    <div
      className="absolute inset-0 pointer-events-none transition-opacity duration-700"
      style={{
        opacity: darkMode ? 0.03 : 0.02,
        backgroundImage: darkMode
          ? 'radial-gradient(circle, rgba(148,163,184,0.3) 1px, transparent 1px)'
          : 'radial-gradient(circle, #334155 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    />
  </>
);

const SectionHeader = ({ isInView, t, darkMode }) => (
  <div
    className={`
      text-center mb-14 lg:mb-20 transition-all duration-1000 ease-out
      ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
    `}
  >
    {/* Badge */}
    <div
      className={`
        inline-flex items-center gap-2.5 backdrop-blur-sm shadow-sm
        px-5 py-2.5 rounded-full border mb-5 transition-all duration-700
        ${darkMode
          ? 'bg-white/[0.05] border-white/[0.08]'
          : 'bg-white/90 border-slate-200/80'
        }
      `}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping" />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`} />
      </span>
      <span className={`
        text-sm font-semibold tracking-wide transition-colors duration-700
        ${darkMode ? 'text-slate-300' : 'text-slate-700'}
      `}>
        {t?.etiqueta || 'Mis Habilidades'}
      </span>
    </div>

    {/* Título */}
    <h2
      className={`
        text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight
        bg-clip-text text-transparent transition-all duration-700
        ${darkMode
          ? 'bg-gradient-to-r from-white via-slate-200 to-slate-300'
          : 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700'
        }
      `}
    >
      {t?.titulo || 'Lo que mejor sé hacer'}
    </h2>

    {/* Subtítulo */}
    <p className={`
      mt-4 text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-700
      ${darkMode ? 'text-slate-400' : 'text-slate-500'}
    `}>
      {t?.subtitulo || 'Tecnologías y herramientas con las que trabajo día a día'}
    </p>
  </div>
);

const SkillCard = ({ category, isInView, delay, darkMode, t }) => {
  const { title, icon: Icon, color, skills } = category;

  return (
    <div
      className={`
        group/card relative backdrop-blur-sm rounded-2xl p-6 lg:p-8
        border shadow-sm transition-all duration-500 ease-out
        hover:-translate-y-2 hover:shadow-2xl overflow-hidden
        ${color.hoverBorder}
        ${darkMode
          ? 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.05]'
          : 'bg-white/80 border-slate-200/60'
        }
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: isInView ? `${delay + 200}ms` : '0ms' }}
    >
      {/* Glow de fondo al hover */}
      <div
        className={`
          absolute -inset-1 bg-gradient-to-br ${color.glow}
          rounded-2xl blur-xl opacity-0 group-hover/card:opacity-100
          transition-opacity duration-500 -z-10
        `}
      />

      {/* Línea decorativa superior */}
      <div
        className={`
          absolute top-0 left-6 right-6 h-1 ${color.bg} rounded-b-full
          opacity-0 group-hover/card:opacity-100
          scale-x-0 group-hover/card:scale-x-100
          transition-all duration-500 origin-left
        `}
      />

      {/* Cabecera */}
      <CardHeader title={title} Icon={Icon} color={color} darkMode={darkMode} />

      {/* Skills */}
      <div className="space-y-4 relative z-10">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            gradient={color.gradient}
            isInView={isInView}
            delay={delay + 300 + index * 100}
            darkMode={darkMode}
          />
        ))}
      </div>

      {/* Total - Traducido con t.conteo */}
      <div className={`
        mt-6 pt-4 border-t relative z-10 transition-colors duration-700
        ${darkMode ? 'border-white/[0.06]' : 'border-slate-100'}
      `}>
        <span className={`
          text-xs font-medium tracking-wide transition-colors duration-700
          ${darkMode ? 'text-slate-500' : 'text-slate-400'}
        `}>
          {skills.length} {t?.conteo || 'habilidades'}
        </span>
      </div>
    </div>
  );
};

const CardHeader = ({ title, Icon, color, darkMode }) => (
  <div className="flex items-center gap-3.5 mb-7 relative z-10">
    <div
      className={`
        ${color.bg} text-white p-3 rounded-xl shadow-lg
        transition-all duration-300
        group-hover/card:scale-110 group-hover/card:shadow-xl group-hover/card:rotate-3
      `}
    >
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className={`
        text-lg lg:text-xl font-bold transition-colors duration-300
        ${color.hoverText}
        ${darkMode ? 'text-white' : 'text-slate-900'}
      `}>
        {title}
      </h3>
    </div>
  </div>
);

const SkillBar = ({ name, percentage, gradient, isInView, delay, darkMode }) => {
  const animatedWidth = useAnimatedWidth(percentage, isInView);

  return (
    <div
      className={`
        transition-all duration-700 ease-out
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
      `}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className={`
          text-sm font-semibold transition-colors duration-700
          ${darkMode ? 'text-slate-300' : 'text-slate-700'}
        `}>
          {name}
        </span>
        <span className={`
          text-xs font-bold px-2 py-0.5 rounded-full transition-all duration-500
          ${animatedWidth > 0
            ? darkMode
              ? 'bg-white/[0.06] text-slate-400'
              : 'bg-slate-100 text-slate-600'
            : darkMode
              ? 'bg-transparent text-slate-600'
              : 'bg-transparent text-slate-400'
          }
        `}>
          {percentage}%
        </span>
      </div>

      {/* Track */}
      <div className={`
        w-full h-2.5 rounded-full overflow-hidden shadow-inner transition-colors duration-700
        ${darkMode ? 'bg-white/[0.06]' : 'bg-slate-100'}
      `}>
        <div
          className="h-full rounded-full relative overflow-hidden shadow-sm"
          style={{
            width: `${animatedWidth}%`,
            background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`,
            transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ animation: 'shimmer 2.5s ease-in-out infinite' }}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Skills);