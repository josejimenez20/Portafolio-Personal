import React, { memo, useEffect, useRef, useState } from 'react';

// ─── Iconos Extraídos ────────────────────────────────────────────
const EducationIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083
         12.083 0 01.665 6.479A11.952 11.952 0 0012
         20.055a11.952 11.952 0 00-6.824-2.998 12.078
         12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
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

// ─── Datos de tarjetas de información ────────────────────────────
const getInfoCards = (t, darkMode) => [
  {
    id: 'education',
    icon: EducationIcon,
    iconBg: darkMode ? 'bg-blue-500/10' : 'bg-blue-100',
    iconColor: darkMode ? 'text-blue-400' : 'text-blue-600',
    accentColor: 'from-blue-500 to-blue-600',
    title: t?.educacionTitulo || 'Educación',
    content: (
      <>
        <p className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          {t?.educacionCarrera || 'Ingeniería en Sistemas'}
        </p>
        <p className={`text-sm mt-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          {t?.educacionUni || 'Universidad Nacional'}
        </p>
      </>
    ),
  },
  {
    id: 'interests',
    icon: CodeIcon,
    iconBg: darkMode ? 'bg-emerald-500/10' : 'bg-emerald-100',
    iconColor: darkMode ? 'text-emerald-400' : 'text-emerald-600',
    accentColor: 'from-emerald-500 to-emerald-600',
    title: t?.interesesTitulo || 'Me apasiona',
    content: null,
    tags: [
      {
        text: t?.intereses1 || 'React / Next.js',
        gradient: 'from-blue-500 to-indigo-600',
      },
      {
        text: t?.intereses2 || 'Node.js / TS',
        gradient: 'from-emerald-500 to-teal-600',
      },
    ],
  },
];

// ─── Componente Principal ────────────────────────────────────────
const About = ({ t, darkMode }) => {
  const [sectionRef, isInView] = useInView();

  const infoCards = getInfoCards(t, darkMode);

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className={`
        relative w-full overflow-hidden transition-colors duration-700
        ${darkMode
          ? 'bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]'
          : 'bg-gradient-to-br from-slate-50 via-white to-blue-50/30'
        }
      `}
    >
      <BackgroundDecoration darkMode={darkMode} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <ImageColumn isInView={isInView} darkMode={darkMode} />
          <ContentColumn
            t={t}
            isInView={isInView}
            infoCards={infoCards}
            darkMode={darkMode}
          />
        </div>
      </div>
    </section>
  );
};

// ─── Sub-componentes ─────────────────────────────────────────────

const BackgroundDecoration = ({ darkMode }) => (
  <>
    {/* ═══ Orbe superior derecho ═══ */}
    <div
      className={`
        absolute top-20 -right-40 w-[500px] h-[500px] rounded-full
        blur-3xl pointer-events-none transition-colors duration-700
        ${darkMode ? 'bg-blue-500/[0.04]' : 'bg-blue-100/30'}
      `}
    />
    {/* ═══ Orbe inferior izquierdo ═══ */}
    <div
      className={`
        absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full
        blur-3xl pointer-events-none transition-colors duration-700
        ${darkMode ? 'bg-indigo-500/[0.03]' : 'bg-indigo-100/20'}
      `}
    />
    {/* ═══ Grid pattern ═══ */}
    <div
      className="absolute inset-0 pointer-events-none transition-opacity duration-700"
      style={{
        opacity: darkMode ? 0.03 : 0.02,
        backgroundImage: `
          linear-gradient(${darkMode ? 'rgba(148,163,184,.2)' : 'rgba(51,65,85,.3)'} 1px, transparent 1px),
          linear-gradient(90deg, ${darkMode ? 'rgba(148,163,184,.2)' : 'rgba(51,65,85,.3)'} 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
  </>
);

const ImageColumn = ({ isInView, darkMode }) => (
  <div
    className={`
      w-full lg:w-1/2 flex justify-center
      transition-all duration-1000 ease-out
      ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
    `}
  >
    <div className="relative group">
      {/* ═══ Glow ═══ */}
      <div
        className={`
          absolute -inset-4 rounded-3xl blur-2xl
          opacity-0 group-hover:opacity-100 transition-opacity duration-700
          ${darkMode
            ? 'bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-purple-500/10'
            : 'bg-gradient-to-tr from-blue-400/15 via-indigo-400/15 to-purple-400/15'
          }
        `}
      />

      {/* ═══ Borde decorativo ═══ */}
      <div
        className={`
          absolute -inset-3 rounded-3xl border-2 border-dashed
          transition-all duration-700 group-hover:-inset-4
          ${darkMode
            ? 'border-blue-500/15 group-hover:border-blue-400/30'
            : 'border-blue-200/40 group-hover:border-blue-300/60'
          }
        `}
      />

      {/* ═══ Imagen principal ═══ */}
      <div
        className={`
          relative rounded-3xl overflow-hidden shadow-2xl
          transform -rotate-2 transition-all duration-700 ease-out
          group-hover:rotate-0 group-hover:scale-[1.02]
          ${darkMode ? 'shadow-blue-500/5' : 'shadow-slate-300/50'}
        `}
      >
        <img
          src="/Laptop.jpeg"
          alt="Espacio de trabajo profesional desarrollando código React y Node.js"
          loading="lazy"
          className={`
            w-full h-[420px] lg:h-[500px] object-cover
            transition-all duration-700
            ${darkMode
              ? 'brightness-90 group-hover:brightness-100'
              : 'brightness-105 group-hover:brightness-110'
            }
          `}
        />

        {/* Overlay gradiente */}
        <div
          className={`
            absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
            ${darkMode
              ? 'bg-gradient-to-t from-black/30 via-transparent to-blue-500/5'
              : 'bg-gradient-to-t from-slate-900/20 via-transparent to-white/5'
            }
          `}
        />

        {/* ═══ Etiqueta flotante ═══ */}
        <div
          className={`
            absolute bottom-4 left-4 backdrop-blur-sm px-4 py-2 rounded-xl
            shadow-lg border opacity-0 group-hover:opacity-100
            translate-y-4 group-hover:translate-y-0
            transition-all duration-500 delay-100
            ${darkMode
              ? 'bg-white/10 border-white/10'
              : 'bg-white/90 border-white/50'
            }
          `}
        >
          <span
            className={`
              text-sm font-semibold flex items-center gap-2
              ${darkMode ? 'text-white' : 'text-slate-700'}
            `}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Estas listo para hacer tus ideas realidad?
          </span>
        </div>
      </div>
    </div>
  </div>
);

const ContentColumn = ({ t, isInView, infoCards, darkMode }) => (
  <div
    className={`
      w-full lg:w-1/2 flex flex-col items-start space-y-8
      transition-all duration-1000 ease-out delay-200
      ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
    `}
  >
    <SectionHeader title={t?.titulo || 'Sobre Mí'} darkMode={darkMode} />
    <TextContent paragraph1={t?.parrafo1} paragraph2={t?.parrafo2} darkMode={darkMode} />
    <InfoCardsGrid cards={infoCards} isInView={isInView} darkMode={darkMode} />
  </div>
);

const SectionHeader = ({ title, darkMode }) => (
  <div className="flex items-center gap-4">
    <div className="w-1.5 h-12 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full shadow-lg shadow-blue-500/30" />
    <div>
      <p className={`
        text-sm font-semibold tracking-widest uppercase mb-1
        ${darkMode ? 'text-blue-400' : 'text-blue-600'}
      `}>
        Conóceme
      </p>
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
        {title}
      </h2>
    </div>
  </div>
);

const TextContent = ({ paragraph1, paragraph2, darkMode }) => (
  <div className="space-y-5 max-w-2xl">
    <p
      className={`
        text-lg font-medium leading-relaxed pl-4 border-l-4 transition-colors duration-700
        ${darkMode
          ? 'text-slate-300 border-blue-500/40'
          : 'text-slate-600 border-blue-200'
        }
      `}
    >
      {paragraph1 || 'Descripción profesional...'}
    </p>
    <p
      className={`
        leading-relaxed transition-colors duration-700
        ${darkMode ? 'text-slate-400' : 'text-slate-500'}
      `}
    >
      {paragraph2 || 'Más sobre experiencia...'}
    </p>
  </div>
);

const InfoCardsGrid = ({ cards, isInView, darkMode }) => (
  <div
    className={`
      grid grid-cols-1 lg:grid-cols-2 gap-6 w-full pt-8 border-t transition-colors duration-700
      ${darkMode ? 'border-white/[0.06]' : 'border-slate-200/80'}
    `}
  >
    {cards.map((card, index) => (
      <InfoCard
        key={card.id}
        card={card}
        isInView={isInView}
        delay={index * 150}
        darkMode={darkMode}
      />
    ))}
  </div>
);

const InfoCard = ({ card, isInView, delay, darkMode }) => {
  const { icon: Icon, iconBg, iconColor, title, content, tags } = card;

  return (
    <div
      className={`
        group p-5 rounded-2xl backdrop-blur-sm border
        transition-all duration-500
        shadow-sm hover:shadow-lg
        ${darkMode
          ? 'bg-white/[0.03] border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05]'
          : 'bg-white/70 border-slate-100 hover:border-slate-200 hover:bg-white'
        }
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
      style={{
        transitionDelay: isInView ? `${delay + 400}ms` : '0ms',
      }}
    >
      {/* ═══ Cabecera ═══ */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`
            p-2.5 rounded-xl ${iconBg}
            group-hover:scale-110 transition-transform duration-300
          `}
        >
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <h3 className={`
          text-lg font-bold transition-colors duration-700
          ${darkMode ? 'text-white' : 'text-slate-900'}
        `}>
          {title}
        </h3>
      </div>

      {/* ═══ Contenido o Tags ═══ */}
      {content && <div>{content}</div>}

      {tags && (
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <span
              key={tag.text}
              className={`
                inline-flex items-center gap-1.5 px-4 py-2
                bg-gradient-to-r ${tag.gradient}
                text-white text-sm rounded-xl font-semibold
                shadow-lg hover:shadow-xl
                hover:scale-105 hover:-translate-y-0.5
                transition-all duration-300 cursor-default
              `}
            >
              <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
              {tag.text}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(About);