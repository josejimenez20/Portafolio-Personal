import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ idioma, setIdioma, t, darkMode, setDarkMode }) => {
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
    const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'certificados', 'contacto'];
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

  useEffect(() => {
    const target = hoveredLink || activeSection;
    const el = linksRef.current[target];
    
    if (el) {
      const updateIndicator = () => {
        setIndicatorStyle({
          width: el.offsetWidth,
          left: el.offsetLeft,
          opacity: 1,
        });
      };
      
      // Actualizamos inmediatamente y luego con un pequeño delay para asegurar
      // que el DOM ya renderizó el texto nuevo (en inglés o español)
      updateIndicator();
      const timeoutId = setTimeout(updateIndicator, 50);
      
      return () => clearTimeout(timeoutId);
    }
  }, [hoveredLink, activeSection, idioma, t]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { href: '#inicio', label: t?.inicio, id: 'inicio' },
    { href: '#sobre-mi', label: t?.sobreMi, id: 'sobre-mi' },
    { href: '#habilidades', label: t?.habilidades, id: 'habilidades' },
    { href: '#proyectos', label: t?.proyectos, id: 'proyectos' },
    { href: '#certificados', label: t?.certificados, id: 'certificados' },
    { href: '#contacto', label: t?.contacto, id: 'contacto' },
  ];

  return (
    <>
      <nav
        className={`
          w-full fixed top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${scrolled ? 'py-2.5' : 'py-5'}
        `}
      >
        {/* ═══ FONDO ═══ */}
        <div
          className={`
            absolute inset-0 transition-all duration-700
            ${scrolled
              ? darkMode
                ? 'bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/[0.06]'
                : 'bg-white/70 backdrop-blur-2xl border-b border-slate-900/[0.06]'
              : 'bg-transparent'
            }
          `}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">

          {/* ═══ LOGO ═══ */}
          <a href="#inicio" className="relative group shrink-0">
            <div className="text-2xl font-extrabold tracking-tight cursor-pointer transition-colors duration-500">
              <span className="text-blue-500">H</span>
              <span className={darkMode ? 'text-white' : 'text-slate-900'}>J</span>
            </div>
            <div className="absolute -inset-3 bg-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          </a>

          {/* ═══ CENTRO - Links Desktop ═══ */}
          <div className="hidden md:flex flex-1 justify-center mx-2 lg:mx-4 overflow-hidden">
            <div
              className={`
                relative flex items-center gap-0.5 lg:gap-1 rounded-2xl p-1 lg:px-2 lg:py-1.5 transition-all duration-700
                ${scrolled
                  ? darkMode
                    ? 'bg-white/[0.06] border border-white/[0.08]'
                    : 'bg-slate-50/80 border border-slate-200/60'
                  : darkMode
                    ? 'bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] shadow-lg shadow-black/20'
                    : 'bg-white/60 backdrop-blur-xl border border-slate-200/40 shadow-lg shadow-slate-200/30'
                }
              `}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {/* Indicador flotante */}
              <div
                className={`
                  absolute top-1.5 h-[calc(100%-12px)] rounded-xl shadow-sm
                  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0
                  ${darkMode
                    ? 'bg-white/[0.1] shadow-white/5'
                    : 'bg-white shadow-slate-200/80'
                  }
                `}
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
                    relative z-10 px-2.5 lg:px-4 py-2 rounded-xl text-xs lg:text-[13px] whitespace-nowrap font-semibold tracking-wide transition-colors duration-300
                    ${activeSection === link.id
                      ? darkMode ? 'text-white' : 'text-slate-900'
                      : darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-700'
                    }
                  `}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* ═══ DERECHA - Toggle + Idioma ═══ */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">

            {/* Toggle Dark/Light */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`
                relative w-10 h-10 flex items-center justify-center rounded-xl
                transition-all duration-500 group cursor-pointer
                ${darkMode
                  ? 'bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08]'
                  : 'bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200/50'
                }
              `}
              title={darkMode ? 'Modo claro' : 'Modo oscuro'}
            >
              {/* Sol */}
              <svg
                className={`
                  w-[18px] h-[18px] absolute transition-all duration-500
                  ${darkMode
                    ? 'opacity-0 rotate-90 scale-0'
                    : 'opacity-100 rotate-0 scale-100 text-amber-500'
                  }
                `}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              {/* Luna */}
              <svg
                className={`
                  w-[18px] h-[18px] absolute transition-all duration-500
                  ${darkMode
                    ? 'opacity-100 rotate-0 scale-100 text-blue-400'
                    : 'opacity-0 -rotate-90 scale-0'
                  }
                `}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>

            {/* Selector de idioma */}
            <div className={`
              relative flex items-center rounded-xl p-[3px] transition-all duration-500
              ${darkMode
                ? 'bg-white/[0.06] border border-white/[0.08]'
                : 'bg-slate-100/80 border border-slate-200/50'
              }
            `}>
              <div
                className={`
                  absolute top-[3px] h-[calc(100%-6px)] w-[calc(50%-3px)] rounded-[10px]
                  shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${idioma === 'en' ? 'left-[calc(50%)]' : 'left-[3px]'}
                  ${darkMode ? 'bg-white/[0.1] shadow-white/5' : 'bg-white shadow-slate-200/50'}
                `}
              />
              <button
                onClick={() => setIdioma('es')}
                className={`
                  relative z-10 px-3 py-1.5 lg:px-3.5 text-xs font-bold tracking-wider transition-colors duration-300
                  ${idioma === 'es'
                    ? darkMode ? 'text-white' : 'text-slate-900'
                    : darkMode ? 'text-slate-500' : 'text-slate-400'
                  }
                `}
              >
                ES
              </button>
              <button
                onClick={() => setIdioma('en')}
                className={`
                  relative z-10 px-3 py-1.5 lg:px-3.5 text-xs font-bold tracking-wider transition-colors duration-300
                  ${idioma === 'en'
                    ? darkMode ? 'text-white' : 'text-slate-900'
                    : darkMode ? 'text-slate-500' : 'text-slate-400'
                  }
                `}
              >
                EN
              </button>
            </div>
          </div>

          {/* ═══ MOBILE - Toggle + Hamburguesa ═══ */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`
                relative z-50 w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300
                ${darkMode ? 'hover:bg-white/10' : 'hover:bg-slate-50'}
              `}
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`
                relative z-50 w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300
                ${mobileOpen
                  ? darkMode ? 'bg-white/10' : 'bg-slate-100'
                  : darkMode ? 'hover:bg-white/10' : 'hover:bg-slate-50'
                }
              `}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`
                  block h-[2px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center
                  ${darkMode ? 'bg-white' : 'bg-slate-800'}
                  ${mobileOpen ? 'rotate-45 translate-y-[7px]' : 'w-5'}
                `} />
                <span className={`
                  block h-[2px] rounded-full transition-all duration-300
                  ${darkMode ? 'bg-white' : 'bg-slate-800'}
                  ${mobileOpen ? 'opacity-0 scale-x-0' : 'w-3.5 opacity-100'}
                `} />
                <span className={`
                  block h-[2px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center
                  ${darkMode ? 'bg-white' : 'bg-slate-800'}
                  ${mobileOpen ? '-rotate-45 -translate-y-[7px] w-5' : 'w-4'}
                `} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ═══ MENÚ MOBILE FULLSCREEN ═══ */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden transition-all duration-600
          ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}
        `}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`
            absolute inset-0 backdrop-blur-3xl transition-opacity duration-700
            ${darkMode ? 'bg-[#0a0a0a]/95' : 'bg-white/90'}
            ${mobileOpen ? 'opacity-100' : 'opacity-0'}
          `}
        />

        <div className="relative h-full flex flex-col justify-center px-10">
          <ul className="space-y-3">
            {navLinks.map((link, i) => (
              <li
                key={link.id}
                style={{ transitionDelay: mobileOpen ? `${150 + i * 70}ms` : '0ms' }}
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
                      ? 'text-blue-500'
                      : darkMode
                        ? 'text-slate-600 hover:text-white'
                        : 'text-slate-300 hover:text-slate-900'
                    }
                  `}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            style={{ transitionDelay: mobileOpen ? '550ms' : '0ms' }}
            className={`
              w-12 h-px my-8 transition-all duration-700
              ${darkMode ? 'bg-white/10' : 'bg-slate-200'}
              ${mobileOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
            `}
          />

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
                  ? darkMode ? 'bg-white text-black' : 'bg-slate-900 text-white'
                  : darkMode ? 'bg-white/[0.06] text-slate-500 hover:bg-white/[0.1]' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
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
                  ? darkMode ? 'bg-white text-black' : 'bg-slate-900 text-white'
                  : darkMode ? 'bg-white/[0.06] text-slate-500 hover:bg-white/[0.1]' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                }
              `}
            >
              English
            </button>
          </div>

          <div
            style={{ transitionDelay: mobileOpen ? '700ms' : '0ms' }}
            className={`
              absolute bottom-10 left-10 transition-all duration-700
              ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <div className="text-2xl font-extrabold tracking-tight">
              <span className="text-blue-500">H</span>
              <span className={darkMode ? 'text-white' : 'text-slate-900'}>J</span>
            </div>
            <p className={`text-xs mt-1 font-medium tracking-wider ${darkMode ? 'text-slate-600' : 'text-slate-300'}`}>
              HJ
            </p>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className={`transition-all duration-700 ${scrolled ? 'h-14' : 'h-20'}`} />
    </>
  );
};

export default Navbar;