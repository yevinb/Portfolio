import React from 'react';
import { FileCode, Layers, Atom, Server, Bot, Lock } from 'lucide-react';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <FileCode className="w-4 h-4" />;
      case 'layers': return <Layers className="w-4 h-4" />;
      case 'atom': return <Atom className="w-4 h-4" />;
      case 'server': return <Server className="w-4 h-4" />;
      case 'bot': return <Bot className="w-4 h-4" />;
      case 'lock': return <Lock className="w-4 h-4" />;
      default: return <FileCode className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My technical toolset focuses on modern web technologies, AI integration, and secure backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {/* Split skills into two columns */}
          <div className="space-y-6">
            {SKILLS_DATA.slice(0, 3).map((skill, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-200 font-medium group-hover:text-primary-400 transition-colors flex items-center gap-2">
                    {getIcon(skill.icon)} {skill.name}
                  </span>
                  <span className="text-slate-500 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-600 to-indigo-500 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {SKILLS_DATA.slice(3).map((skill, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-200 font-medium group-hover:text-primary-400 transition-colors flex items-center gap-2">
                     {getIcon(skill.icon)} {skill.name}
                  </span>
                  <span className="text-slate-500 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-600 to-indigo-500 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
