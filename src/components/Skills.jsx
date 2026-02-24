import React from 'react';

const SkillBar = ({ name, percentage }) => (
  <div className="mb-5">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-bold text-slate-700">{name}</span>
      <span className="text-sm text-slate-400 font-medium">{percentage}%</span>
    </div>
    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
      <div 
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="habilidades" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-3">Habilidades Técnicas</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Lo que mejor sé hacer</h2>
        </div>

        {/* Grid de 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tarjeta 1: Frontend */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Frontend</h3>
            </div>
            <SkillBar name="React" percentage={90} />
            <SkillBar name="Tailwind CSS" percentage={95} />
            <SkillBar name="HTML5 / CSS3" percentage={98} />
            <SkillBar name="JavaScript" percentage={85} />
            <SkillBar name="Bootstrap" percentage={85} />

          </div>

          {/* Tarjeta 2: Backend & Redes */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Backend</h3>
            </div>
            <SkillBar name="Python" percentage={90} />
            <SkillBar name="Java" percentage={85} />
            <SkillBar name="C#" percentage={80} />
            <SkillBar name="PHP" percentage={80} />
            <SkillBar name="Laravel" percentage={80} />
          </div>

          {/* Tarjeta 3: Herramientas */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Herramientas & Otros</h3>
            </div>
            <SkillBar name="Git / GitHub" percentage={90} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;