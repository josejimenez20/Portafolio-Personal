import React, { useEffect, useState } from 'react';

const ContactModal = ({ isOpen, onClose, darkMode }) => {
  const [copied, setCopied] = useState(false);
  const email = "jimenezheinar8@gmail.com";

  // Evita el scroll del fondo cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    // CAMBIO CRÍTICO: Quitamos la clase z- de Tailwind y forzamos el zIndex altísimo con CSS nativo
    <div 
      className="fixed inset-0 flex items-center justify-center px-4"
      style={{ zIndex: 99999 }}
    >
      {/* Fondo borroso tipo cristal */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Tarjeta del Modal */}
      <div className={`
        relative w-full max-w-sm p-8 rounded-3xl shadow-2xl transform transition-all
        ${darkMode ? 'bg-[#121212] border border-white/10 text-white shadow-blue-500/10' : 'bg-white border border-slate-200 text-slate-900 shadow-xl'}
      `}>
        {/* Botón X para cerrar */}
        <button 
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Contenido */}
        <div className="text-center mt-2">
          <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">¡Hablemos!</h3>
          <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Copia mi correo electrónico para escribirme o abre tu aplicación de correo predeterminada.
          </p>

          <div className="space-y-3">
            <a 
              href={`mailto:${email}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-semibold transition-all shadow-lg"
            >
              Abrir app de correo
            </a>

            <button 
              onClick={handleCopy}
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all border
                ${darkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'}`}
            >
              {copied ? (
                <span className="text-green-500 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  ¡Copiado!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  Copiar dirección
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;