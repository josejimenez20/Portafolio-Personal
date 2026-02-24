import React from 'react';

const portfolioProjects = [
  {
    id: 1,
    category: "App",
    title: "Tienda Online Móvil",
    description: "Solución integral de comercio electrónico para dispositivos móviles que permite la gestión automatizada de inventarios y clientes. El sistema garantiza la integridad de la información mediante una arquitectura de persistencia de datos local, optimizando la experiencia de usuario con una interfaz intuitiva y tiempos de respuesta inmediatos.",
    tech: ["Android Studio", "Java", "SQLite"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800"
  },
  /* {
    id: 2,
    category: "Desarrollo Web",
    title: "CH XPRESS Y ENVÍOS",
    description: "Plataforma web para gestión integral de retail y logística de entregas a nivel nacional, optimizando rutas y seguimiento de paquetes.",
    tech: ["React", "Laravel", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    category: "Infraestructura",
    title: "Topologías GNS3 & Servidores",
    description: "Diseño, subnetting y despliegue de redes complejas empresariales. Administración y virtualización de servidores en entornos VMware.",
    tech: ["GNS3", "VMware", "Routing"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  } */
];

const Projects = () => {
  return (
    <section id="proyectos" className="w-full bg-slate-50 py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-3">Mi Portafolio</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Proyectos Destacados</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes. Cada proyecto representa un desafío único y una solución escalable.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
              
              {/* Imagen del Proyecto */}
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                {/* Etiqueta superior derecha */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700">
                  {project.category}
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                {/* Píldoras de Tecnologías */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((item, index) => (
                    <span key={index} className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enlace a GitHub */}
        <div className="mt-16 text-center">
          <a href="https://github.com/josejimenez20?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
            Ver más proyectos en GitHub
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;