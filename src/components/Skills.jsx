import React, { memo, useState, useEffect, useRef } from 'react';

// ─── Iconos Extraídos ────────────────────────────────────────────
const MonitorIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5
         17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2
         0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const ServerIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0
         012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5
         12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0
         002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
);

const CodeIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
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
const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: MonitorIcon,
    color: {
      bg: 'bg-blue-500',
      hoverBorder: 'hover:border-blue-300/80',
      hoverText: 'group-hover/card:text-blue-600',
      glow: 'from-blue-400/10 to-blue-500/10',
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
    title: 'Backend',
    icon: ServerIcon,
    color: {
      bg: 'bg-emerald-500',
      hoverBorder: 'hover:border-emerald-300/80',
      hoverText: 'group-hover/card:text-emerald-600',
      glow: 'from-emerald-400/10 to-emerald-500/10',
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
    title: 'Herramientas',
    icon: CodeIcon,
    color: {
      bg: 'bg-purple-500',
      hoverBorder: 'hover:border-purple-300/80',
      hoverText: 'group-hover/card:text-purple-600',
      glow: 'from-purple-400/10 to-purple-500/10',
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
const Skills = ({ t }) => {
  const [sectionRef, isInView] = useInView();

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      className="
        relative w-full overflow-hidden
        bg-gradient-to-br from-slate-50 via-white to-blue-50/30
        py-20 lg:py-32
      "
    >
      {/* ── Decoración de fondo ── */}
      <BackgroundDecoration />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Encabezado ── */}
        <SectionHeader isInView={isInView} t={t} />

        {/* ── Grid de tarjetas ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              isInView={isInView}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Sub-componentes ─────────────────────────────────────────────

/** Decoración de fondo */
const BackgroundDecoration = () => (
  <>
    <div
      className="
        absolute top-0 left-1/4
        w-[600px] h-[600px]
        bg-blue-100/20 rounded-full
        blur-3xl pointer-events-none
      "
    />
    <div
      className="
        absolute bottom-0 right-1/4
        w-[500px] h-[500px]
        bg-purple-100/20 rounded-full
        blur-3xl pointer-events-none
      "
    />
    {/* Dot pattern */}
    <div
      className="absolute inset-0 opacity-[0.02] pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(circle, #334155 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    />
  </>
);

/** Encabezado de sección */
const SectionHeader = ({ isInView, t }) => (
  <div
    className={`
      text-center mb-14 lg:mb-20
      transition-all duration-1000 ease-out
      ${isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'}
    `}
  >
    {/* Badge */}
    <div
      className="
        inline-flex items-center gap-2.5
        bg-white/90 backdrop-blur-sm
        shadow-sm px-5 py-2.5 rounded-full
        border border-slate-200/80
        mb-5
      "
    >
      <span className="relative flex h-2 w-2">
        <span
          className="
            absolute inline-flex h-full w-full
            rounded-full bg-blue-500 opacity-75
            animate-ping
          "
        />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
      </span>
      <span className="text-sm font-semibold text-slate-700 tracking-wide">
        {t?.etiqueta || 'Mis Habilidades'}
      </span>
    </div>

    {/* Título */}
    <h2
      className="
        text-3xl sm:text-4xl lg:text-5xl
        font-bold leading-tight
        bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700
        bg-clip-text text-transparent
      "
    >
      {t?.titulo || 'Lo que mejor sé hacer'}
    </h2>

    {/* Subtítulo */}
    <p
      className="
        mt-4 text-slate-500 text-lg
        max-w-2xl mx-auto leading-relaxed
      "
    >
      {t?.subtitulo || 'Tecnologías y herramientas con las que trabajo día a día'}
    </p>
  </div>
);

/** Tarjeta de categoría de skills */
const SkillCard = ({ category, isInView, delay }) => {
  const { title, icon: Icon, color, skills } = category;

  return (
    <div
      className={`
        group/card relative
        bg-white/80 backdrop-blur-sm
        rounded-2xl p-6 lg:p-8
        border border-slate-200/60
        shadow-sm
        hover:shadow-2xl ${color.hoverBorder}
        transition-all duration-500 ease-out
        hover:-translate-y-2
        overflow-hidden
        ${isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'}
      `}
      style={{
        transitionDelay: isInView ? `${delay + 200}ms` : '0ms',
      }}
    >
      {/* Glow de fondo al hover */}
      <div
        className={`
          absolute -inset-1
          bg-gradient-to-br ${color.glow}
          rounded-2xl blur-xl
          opacity-0 group-hover/card:opacity-100
          transition-opacity duration-500
          -z-10
        `}
      />

      {/* Línea decorativa superior */}
      <div
        className={`
          absolute top-0 left-6 right-6 h-1
          ${color.bg} rounded-b-full
          opacity-0 group-hover/card:opacity-100
          scale-x-0 group-hover/card:scale-x-100
          transition-all duration-500
          origin-left
        `}
      />

      {/* Cabecera */}
      <CardHeader
        title={title}
        Icon={Icon}
        color={color}
      />

      {/* Lista de skills */}
      <div className="space-y-4 relative z-10">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            gradient={color.gradient}
            isInView={isInView}
            delay={delay + 300 + index * 100}
          />
        ))}
      </div>

      {/* Total de skills badge */}
      <div
        className="
          mt-6 pt-4 border-t border-slate-100
          relative z-10
        "
      >
        <span className="text-xs font-medium text-slate-400 tracking-wide">
          {skills.length} {skills.length === 1 ? 'habilidad' : 'habilidades'}
        </span>
      </div>
    </div>
  );
};

/** Cabecera de la tarjeta */
const CardHeader = ({ title, Icon, color }) => (
  <div className="flex items-center gap-3.5 mb-7 relative z-10">
    <div
      className={`
        ${color.bg} text-white
        p-3 rounded-xl shadow-lg
        transition-all duration-300
        group-hover/card:scale-110
        group-hover/card:shadow-xl
        group-hover/card:rotate-3
      `}
    >
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3
        className={`
          text-lg lg:text-xl font-bold
          text-slate-900
          ${color.hoverText}
          transition-colors duration-300
        `}
      >
        {title}
      </h3>
    </div>
  </div>
);

/** Barra de progreso individual */
const SkillBar = ({ name, percentage, gradient, isInView, delay }) => {
  const animatedWidth = useAnimatedWidth(percentage, isInView);

  return (
    <div
      className={`
        transition-all duration-700 ease-out
        ${isInView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-3'}
      `}
      style={{
        transitionDelay: isInView ? `${delay}ms` : '0ms',
      }}
    >
      {/* Nombre y porcentaje */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-slate-700">
          {name}
        </span>
        <span
          className={`
            text-xs font-bold px-2 py-0.5
            rounded-full
            transition-all duration-500
            ${animatedWidth > 0
              ? 'bg-slate-100 text-slate-600'
              : 'bg-transparent text-slate-400'}
          `}
        >
          {percentage}%
        </span>
      </div>

      {/* Track de la barra */}
      <div
        className="
          w-full h-2.5 rounded-full
          bg-slate-100
          overflow-hidden
          shadow-inner
        "
      >
        {/* Barra de progreso */}
        <div
          className="
            h-full rounded-full
            relative overflow-hidden
            shadow-sm
          "
          style={{
            width: `${animatedWidth}%`,
            background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`,
            transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Efecto shimmer */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r from-transparent
              via-white/30 to-transparent
            "
            style={{
              animation: 'shimmer 2.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Skills);