import React, { useEffect, useState, useRef } from 'react';

// ─── Componentes de Iconos ─────────────────────────────────────
const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const DownloadIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

// ─── Datos ───────────────────────────────────────────────────────
const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/josejimenez20', icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/josé-heinar-jiménez-reyes-0597aa3b2', icon: LinkedInIcon },
  { name: 'Email', href: 'mailto:jimenezheinar8@gmail.com', icon: MailIcon },
];

// ─── Componente Principal ────────────────────────────────────────
const Hero = ({ t, darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fullText = t?.subtitulo || '';
    let index = 0;
    setTypedText('');
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [t?.subtitulo]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className={`
        relative w-full h-screen overflow-hidden flex items-center justify-center
        transition-colors duration-700
        ${darkMode ? 'bg-[#0a0a0a]' : 'bg-[#fafbff]'}
      `}
    >
      <BackgroundDecoration mousePos={mousePos} darkMode={darkMode} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-16">

        {/* Columna Izquierda */}
        <div
          className={`
            w-full lg:w-[55%] flex flex-col items-center lg:items-start
            text-center lg:text-left space-y-5
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
        >
          <Badge text={t?.etiqueta} darkMode={darkMode} />
          <Heading saludo={t?.saludo} typedText={typedText} darkMode={darkMode} />
          <Description text={t?.descripcion} darkMode={darkMode} />
          <ActionButtons contactText={t?.botonContacto} cvText={t?.botonCv} darkMode={darkMode} />
          <SocialLinks darkMode={darkMode} />
        </div>

        {/* Columna Derecha */}
        <div
          className={`
            w-full lg:w-[45%] flex justify-center lg:justify-end
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300
            ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
          `}
        >
          <ProfileImage mousePos={mousePos} darkMode={darkMode} />
        </div>
      </div>

      <ScrollIndicator darkMode={darkMode} />
    </section>
  );
};

// ─── Sub-componentes ─────────────────────────────────────────────

const BackgroundDecoration = ({ mousePos, darkMode }) => (
  <>
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* ═══ Orbe superior derecho ═══ */}
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full transition-opacity duration-700"
        style={{
          background: darkMode
            ? 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          opacity: darkMode ? 0.6 : 0.3,
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out, opacity 0.7s ease',
        }}
      />
      {/* ═══ Orbe inferior izquierdo ═══ */}
      <div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full transition-opacity duration-700"
        style={{
          background: darkMode
            ? 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          opacity: darkMode ? 0.5 : 0.25,
          transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
          transition: 'transform 0.3s ease-out, opacity 0.7s ease',
        }}
      />
      {/* ═══ Orbe central ═══ */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: darkMode
            ? 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 60%)'
            : 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 60%)',
          opacity: darkMode ? 0.15 : 0.1,
        }}
      />
    </div>

    {/* ═══ Grid de fondo ═══ */}
    <div
      className="absolute inset-0 pointer-events-none transition-opacity duration-700"
      style={{
        opacity: darkMode ? 0.03 : 0.02,
        backgroundImage: `
          linear-gradient(${darkMode ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.5)'} 1px, transparent 1px),
          linear-gradient(90deg, ${darkMode ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.5)'} 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />

    {/* ═══ Partículas flotantes ═══ */}
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className={`
          absolute w-1 h-1 rounded-full pointer-events-none transition-colors duration-700
          ${darkMode ? 'bg-blue-400/30' : 'bg-blue-400/20'}
        `}
        style={{
          top: `${15 + i * 15}%`,
          left: `${10 + i * 16}%`,
          animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
          animationDelay: `${i * 0.3}s`,
        }}
      />
    ))}

    <style>{`
      @keyframes float {
        0% { transform: translateY(0px) scale(1); opacity: 0.3; }
        100% { transform: translateY(-20px) scale(1.5); opacity: 0.6; }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes typing-cursor {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    `}</style>
  </>
);

const Badge = ({ text, darkMode }) => (
  <div
    className={`
      inline-flex items-center gap-2.5 backdrop-blur-xl px-5 py-2 rounded-full
      text-sm font-semibold tracking-wide shadow-lg border transition-all duration-700
      ${darkMode
        ? 'bg-white/[0.06] text-blue-400 shadow-blue-500/5 border-blue-500/20'
        : 'bg-white/90 text-blue-700 shadow-blue-500/5 border-blue-100/80'
      }
    `}
  >
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping" />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`} />
    </span>
    {text}
  </div>
);

const Heading = ({ saludo, typedText, darkMode }) => (
  <div className="space-y-1">
    <h1
      className={`
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight
        transition-colors duration-700
        ${darkMode ? 'text-white' : 'text-slate-900'}
      `}
    >
      {saludo}{' '}
      <span className="relative inline-block">
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Heinar
        </span>
        <svg
          className="absolute -bottom-1.5 left-0 w-full"
          viewBox="0 0 200 8"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M1 5.5C47 2 153 2 199 5.5"
            stroke="url(#underline-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
              <stop stopColor="#2563eb" />
              <stop offset="0.5" stopColor="#4f46e5" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      .
    </h1>
    <div
      className={`
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1]
        transition-colors duration-700
        ${darkMode ? 'text-slate-300' : 'text-slate-700'}
      `}
    >
      {typedText}
      <span
        className="inline-block w-[3px] h-[0.8em] bg-blue-500 ml-1 align-middle rounded-full"
        style={{ animation: 'typing-cursor 1s infinite' }}
      />
    </div>
  </div>
);

const Description = ({ text, darkMode }) => (
  <p
    className={`
      text-sm md:text-base leading-relaxed max-w-lg font-medium transition-colors duration-700
      ${darkMode ? 'text-slate-400' : 'text-slate-500'}
    `}
  >
    {text}
  </p>
);

const ActionButtons = ({ contactText, cvText, darkMode }) => (
  <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
    {/* ═══ Botón primario (sin cambios, gradiente funciona en ambos) ═══ */}
    <a
      href="#contacto"
      className="group relative inline-flex items-center gap-2 overflow-hidden font-semibold py-3 px-7 rounded-2xl text-white text-sm transition-all duration-500 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 active:translate-y-0"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-all duration-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <span className="relative z-10">{contactText}</span>
      <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1.5 text-base">
        →
      </span>
    </a>

    {/* ═══ Botón secundario - Adaptado a dark ═══ */}
    <a
      href="/CV-JIMENEZ-JOSE.pdf"
      download="CV-JIMENEZ-JOSE.pdf"
      className={`
        group inline-flex items-center gap-2 font-semibold py-3 px-7 rounded-2xl text-sm
        transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 active:translate-y-0
        border-2
        ${darkMode
          ? 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border-white/[0.1] hover:border-white/[0.2]'
          : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
        }
      `}
    >
      {cvText}
      <DownloadIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
    </a>
  </div>
);

const SocialLinks = ({ darkMode }) => (
  <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
    {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
      <a
        key={name}
        href={href}
        target={name !== 'Email' ? '_blank' : undefined}
        rel={name !== 'Email' ? 'noopener noreferrer' : undefined}
        aria-label={name}
        className={`
          group relative p-3 rounded-xl border transition-all duration-300
          hover:-translate-y-1.5 hover:shadow-lg
          ${darkMode
            ? 'bg-white/[0.04] border-white/[0.08] text-slate-500 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/[0.08] hover:shadow-blue-500/10'
            : 'bg-white border-slate-200/80 text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 hover:shadow-blue-500/10'
          }
        `}
      >
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
      </a>
    ))}
    <div
      className={`
        w-12 h-px ml-2 transition-colors duration-700
        ${darkMode
          ? 'bg-gradient-to-r from-white/10 to-transparent'
          : 'bg-gradient-to-r from-slate-200 to-transparent'
        }
      `}
    />
  </div>
);

const ProfileImage = ({ mousePos, darkMode }) => (
  <div className="relative group">
    {/* ═══ Glow ═══ */}
    <div
      className="absolute -inset-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-3xl"
      style={{
        background: darkMode
          ? 'conic-gradient(from 0deg, rgba(59,130,246,0.2), rgba(99,102,241,0.2), rgba(139,92,246,0.2), rgba(59,130,246,0.2))'
          : 'conic-gradient(from 0deg, rgba(59,130,246,0.15), rgba(99,102,241,0.15), rgba(139,92,246,0.15), rgba(59,130,246,0.15))',
      }}
    />

    {/* ═══ Anillo orbital ═══ */}
    <div
      className={`
        absolute -inset-5 rounded-full border border-dashed transition-colors duration-700
        ${darkMode ? 'border-blue-500/20' : 'border-blue-200/40'}
      `}
      style={{ animation: 'spin-slow 25s linear infinite' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
    </div>

    {/* ═══ Segundo anillo ═══ */}
    <div
      className={`
        absolute -inset-8 rounded-full border border-dotted transition-colors duration-700
        ${darkMode ? 'border-indigo-500/10' : 'border-indigo-200/20'}
      `}
      style={{ animation: 'spin-slow 40s linear infinite reverse' }}
    />

    {/* ═══ Imagen ═══ */}
    <div
      className={`
        relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80
        rounded-full overflow-hidden shadow-2xl ring-[5px]
        transition-all duration-700 ease-out group-hover:scale-[1.03]
        ${darkMode
          ? 'shadow-blue-500/10 ring-white/10'
          : 'shadow-blue-900/10 ring-white'
        }
      `}
      style={{
        transform: `perspective(1000px) rotateY(${mousePos.x * 0.1}deg) rotateX(${mousePos.y * -0.1}deg)`,
      }}
    >
      <img
        src="/mi-foto.jpg"
        alt="Perfil de José Heinar"
        loading="eager"
        className="w-full h-full object-cover"
      />
      <div
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
          ${darkMode
            ? 'bg-gradient-to-t from-blue-900/10 via-transparent to-blue-500/5'
            : 'bg-gradient-to-t from-blue-900/5 via-transparent to-white/5'
          }
        `}
      />
    </div>
  </div>
);

const ScrollIndicator = ({ darkMode }) => (
  <a
    href="#sobre-mi"
    aria-label="Scroll hacia abajo"
    className={`
      absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2
      transition-all duration-300 hidden md:flex group
      ${darkMode
        ? 'text-slate-600 hover:text-blue-400'
        : 'text-slate-400 hover:text-blue-500'
      }
    `}
  >
    <div className="w-5 h-8 rounded-full border-2 border-current p-0.5 flex justify-center">
      <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
    </div>
    <span className="text-[9px] font-bold tracking-[0.2em] uppercase group-hover:tracking-[0.3em] transition-all duration-300">
      Scroll
    </span>
  </a>
);

export default Hero;