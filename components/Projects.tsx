import React from 'react';
import { Github, Shield, Utensils, Home } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'shield': return <Shield className={className} />;
      case 'web': return <Utensils className={className} />;
      case 'platform': return <Home className={className} />;
      default: return <Shield className={className} />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-xl">
              A selection of my best work, demonstrating my capabilities in security, professional design, and functional web applications.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors mt-4 md:mt-0 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-700">
            View Github <Github className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div key={project.id} className="group bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-primary-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/10 hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-white border border-slate-700 flex items-center gap-1">
                  {getIcon(project.icon, `w-3 h-3 ${'iconColor' in project ? (project as any).iconColor : ''}`)} 
                  {project.icon.charAt(0).toUpperCase() + project.icon.slice(1)}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/40 backdrop-blur-[2px]">
                  <button className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">View Project</button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
