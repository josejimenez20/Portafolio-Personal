import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ idioma, setIdioma, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const linksRef = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'];
    const handleScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Indicador flotante que sigue al hover o sección activa
  useEffect(() => {
    const target = hoveredLink || activeSection;
    const el = linksRef.current[target];
    if (el) {
      setIndicatorStyle({
        width: el.offsetWidth,
        left: el.offsetLeft,
        opacity: 1,
      });
    }
  }, [hoveredLink, activeSection]);

  // Bloquear scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { href: '#inicio', label: t?.inicio, id: 'inicio' },
    { href: '#sobre-mi', label: t?.sobreMi, id: 'sobre-mi' },
    { href: '#habilidades', label: t?.habilidades, id: 'habilidades' },
    { href: '#proyectos', label: t?.proyectos, id: 'proyectos' },
    { href: '#contacto', label: t?.contacto, id: 'contacto' },
  ];

  return (
    <>
      <nav
        className={`
          w-full fixed top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${scrolled
            ? 'py-2.5'
            : 'py-5'
          }
        `}
      >
        {/* Fondo con doble capa */}
        <div
          className={`
            absolute inset-0 transition-all duration-700
            ${scrolled
              ? 'bg-white/70 backdrop-blur-2xl border-b border-slate-900/[0.06]'
              : 'bg-transparent'
            }
          `}
        />

        <div className="relative max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">

          {/* Logo - SIN CAMBIOS */}
          <a
            href="#inicio"
            className="relative group"
          >
            <div className="text-2xl font-extrabold text-blue-600 tracking-tight cursor-pointer">
              H<span className="text-slate-900">J</span>
            </div>
            {/* Glow sutil detrás del logo */}
            <div className="absolute -inset-3 bg-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          </a>

          {/* Centro - Links Desktop con indicador flotante */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <div
              className={`
                relative flex items-center gap-1 rounded-2xl px-2 py-1.5 transition-all duration-700
                ${scrolled
                  ? 'bg-slate-50/80 border border-slate-200/60'
                  : 'bg-white/60 backdrop-blur-xl border border-slate-200/40 shadow-lg shadow-slate-200/30'
                }
              `}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {/* Indicador flotante animado */}
              <div
                className="absolute top-1.5 h-[calc(100%-12px)] bg-white rounded-xl shadow-sm shadow-slate-200/80 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"
                style={{
                  width: indicatorStyle.width || 0,
                  left: indicatorStyle.left || 0,
                  opacity: indicatorStyle.opacity || 0,
                }}
              />

              {navLinks.map((link) => (
                <a
                  key={link.id}
                  ref={(el) => (linksRef.current[link.id] = el)}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  className={`
                    relative z-10 px-4 py-2 rounded-xl text-[13px] font-semibold tracking-wide transition-colors duration-300
                    ${activeSection === link.id
                      ? 'text-slate-900'
                      : 'text-slate-400 hover:text-slate-700'
                    }
                  `}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Derecha - Idioma + CTA */}
          <div className="hidden md:flex items-center gap-4">

            {/* Selector de idioma tipo chip */}
            <div className="relative flex items-center bg-slate-100/80 rounded-xl p-[3px] border border-slate-200/50">
              {/* Indicador deslizante */}
              <div
                className={`
                  absolute top-[3px] h-[calc(100%-6px)] w-[calc(50%-3px)] bg-white rounded-[10px]
                  shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${idioma === 'en' ? 'left-[calc(50%)]' : 'left-[3px]'}
                `}
              />
              <button
                onClick={() => setIdioma('es')}
                className={`
                  relative z-10 px-3.5 py-1.5 text-xs font-bold tracking-wider transition-colors duration-300
                  ${idioma === 'es' ? 'text-slate-900' : 'text-slate-400'}
                `}
              >
                ES
              </button>
              <button
                onClick={() => setIdioma('en')}
                className={`
                  relative z-10 px-3.5 py-1.5 text-xs font-bold tracking-wider transition-colors duration-300
                  ${idioma === 'en' ? 'text-slate-900' : 'text-slate-400'}
                `}
              >
                EN
              </button>
            </div>

            {/* Botón CTA */}
            {/* <a
              href="#contacto"
              className="group relative px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">{t?.contacto || 'Contacto'}</span>
            </a> */}
          </div>

          {/* Hamburguesa Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`
              md:hidden relative z-50 w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300
              ${mobileOpen ? 'bg-slate-100' : 'hover:bg-slate-50'}
            `}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`
                  block h-[2px] rounded-full bg-slate-800 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center
                  ${mobileOpen ? 'rotate-45 translate-y-[7px]' : 'w-5'}
                `}
              />
              <span
                className={`
                  block h-[2px] rounded-full bg-slate-800 transition-all duration-300
                  ${mobileOpen ? 'opacity-0 scale-x-0' : 'w-3.5 opacity-100'}
                `}
              />
              <span
                className={`
                  block h-[2px] rounded-full bg-slate-800 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center
                  ${mobileOpen ? '-rotate-45 -translate-y-[7px] w-5' : 'w-4'}
                `}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* ===== MENÚ MOBILE FULLSCREEN ===== */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden transition-all duration-600
          ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}
        `}
      >
        {/* Fondo difuminado */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`
            absolute inset-0 bg-white/90 backdrop-blur-3xl transition-opacity duration-700
            ${mobileOpen ? 'opacity-100' : 'opacity-0'}
          `}
        />

        {/* Contenido */}
        <div className="relative h-full flex flex-col justify-center px-10">
          {/* Links grandes */}
          <ul className="space-y-3">
            {navLinks.map((link, i) => (
              <li
                key={link.id}
                style={{
                  transitionDelay: mobileOpen ? `${150 + i * 70}ms` : '0ms',
                }}
                className={`
                  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
              >
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    block py-3 text-3xl font-bold tracking-tight transition-colors duration-300
                    ${activeSection === link.id
                      ? 'text-blue-600'
                      : 'text-slate-300 hover:text-slate-900'
                    }
                  `}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Separador */}
          <div
            style={{ transitionDelay: mobileOpen ? '550ms' : '0ms' }}
            className={`
              w-12 h-px bg-slate-200 my-8 transition-all duration-700
              ${mobileOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
            `}
          />

          {/* Idioma Mobile */}
          <div
            style={{ transitionDelay: mobileOpen ? '600ms' : '0ms' }}
            className={`
              flex gap-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <button
              onClick={() => setIdioma('es')}
              className={`
                px-6 py-3 rounded-2xl text-sm font-bold tracking-wider transition-all duration-300
                ${idioma === 'es'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                }
              `}
            >
              Español
            </button>
            <button
              onClick={() => setIdioma('en')}
              className={`
                px-6 py-3 rounded-2xl text-sm font-bold tracking-wider transition-all duration-300
                ${idioma === 'en'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                }
              `}
            >
              English
            </button>
          </div>

          {/* Logo al fondo */}
          <div
            style={{ transitionDelay: mobileOpen ? '700ms' : '0ms' }}
            className={`
              absolute bottom-10 left-10 transition-all duration-700
              ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <div className="text-2xl font-extrabold text-blue-600 tracking-tight">
              H<span className="text-slate-900">J</span>
            </div>
            <p className="text-xs text-slate-300 mt-1 font-medium tracking-wider">HJ</p>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className={`transition-all duration-700 ${scrolled ? 'h-14' : 'h-20'}`} />
    </>
  );
};

export default Navbar;