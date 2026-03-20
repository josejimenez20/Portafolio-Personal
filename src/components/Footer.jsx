import React, { memo, useState, useEffect, useRef } from 'react';

// ─── Iconos ──────────────────────────────────────────────────────
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

const SendIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const HeartIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const ArrowUpIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

// ─── Datos ───────────────────────────────────────────────────────
const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/josejimenez20', icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/josé-heinar-jiménez-reyes-0597aa3b2', icon: LinkedInIcon },
  { name: 'Email', href: 'mailto:jimenezheinar8@gmail.com', icon: MailIcon },
];

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
];

// ─── Componente Principal ────────────────────────────────────────
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      id="contacto"
      className="relative w-full bg-slate-950 overflow-hidden"
    >
      {/* Decoración de fondo */}
      <FooterBackground />

      {/* Línea superior gradiente */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* ─── CTA Section ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-16">
        <div
          className={`
            relative bg-gradient-to-br from-slate-900 to-slate-900/50
            border border-slate-800/80 rounded-3xl p-10 md:p-14
            backdrop-blur-xl overflow-hidden
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {/* Glow dentro del CTA */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                <SendIcon className="w-3.5 h-3.5" />
                Contacto
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-[1.1]">
                ¿Listo para comenzar
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  un proyecto?
                </span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md">
                Si tienes una idea en mente o simplemente quieres saludar, ¡no dudes en contactarme!
              </p>
            </div>

            <a
              href="mailto:jimenezheinar8@gmail.com"
              className="group relative inline-flex items-center gap-3 overflow-hidden font-semibold py-4 px-8 rounded-2xl text-white transition-all duration-500 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 active:translate-y-0 shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <MailIcon className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">Envíame un correo</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── Footer Content ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-8">
        <div
          className={`
            flex flex-col md:flex-row justify-between items-start gap-12 pb-12
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {/* Logo + Descripción */}
          <div className="max-w-xs">
            <div className="text-2xl font-extrabold text-blue-500 tracking-tight cursor-pointer mb-4">
              H<span className="text-white">J</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Desarrollador apasionado por crear experiencias digitales excepcionales y soluciones innovadoras.
            </p>

            {/* Redes sociales */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target={name !== 'Email' ? '_blank' : undefined}
                  rel={name !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={name}
                  className="group p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-500 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-5">
              Navegación
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-center gap-2 text-slate-500 hover:text-white text-sm font-medium transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-blue-500 transition-all duration-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info de contacto */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-5">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:jimenezheinar8@gmail.com"
                  className="text-slate-500 hover:text-white text-sm font-medium transition-colors duration-300"
                >
                  jimenezheinar8@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/josejimenez20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white text-sm font-medium transition-colors duration-300"
                >
                  github.com/josejimenez20
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div
          className={`
            pt-8 border-t border-slate-800/80
            flex flex-col sm:flex-row justify-between items-center gap-4
            transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-400
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          <p className="text-slate-600 text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} Heinar Jimenez. Todos los derechos reservados.
          </p>
          {/* <p className="flex items-center gap-1.5 text-slate-600 text-xs font-medium">
            Hecho con
            <HeartIcon className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            desde El Salvador.
          </p> */}
        </div>
      </div>

      {/* ─── Scroll to Top ─── */}
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className={`
          fixed bottom-8 right-8 z-50 p-3 rounded-2xl
          bg-white/10 backdrop-blur-xl border border-white/10
          text-white hover:bg-blue-600 hover:border-blue-500
          shadow-lg shadow-slate-900/50
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          hover:-translate-y-1 hover:shadow-xl
          ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
      >
        <ArrowUpIcon className="w-5 h-5" />
      </button>
    </footer>
  );
};

// ─── Fondo decorativo ────────────────────────────────────────────
const FooterBackground = () => (
  <>
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.15) 0%, transparent 70%)',
        }}
      />
    </div>

    <div
      className="absolute inset-0 opacity-[0.02] pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  </>
);

export default memo(Footer);