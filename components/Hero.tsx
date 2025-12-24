import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, BrainCircuit, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-slow" 
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 text-sm mb-8 animate-fade-in-up backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          Available for Remote Work
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Building Secure Web Solutions & <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">
            Intelligent AI Chatbots
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hi, I'm <span className="text-white font-semibold">Yevin Bollegala</span>. A Creative Web Developer specializing in professional websites, security-focused applications, and next-gen AI integrations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 flex items-center justify-center gap-2 group">
            View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#ai-chat" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg transition-all border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2 group">
            Chat with my AI <Sparkles className="w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-900/60 hover:border-slate-700 transition-all duration-300">
            <div className="p-3 bg-emerald-500/10 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-semibold text-white">Security Focused</h3>
            <p className="text-sm">Robust validation & data protection</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-900/60 hover:border-slate-700 transition-all duration-300">
            <div className="p-3 bg-primary-500/10 rounded-xl">
              <BrainCircuit className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="font-semibold text-white">AI Integration</h3>
            <p className="text-sm">Gemini & OpenAI Automation</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:bg-slate-900/60 hover:border-slate-700 transition-all duration-300">
            <div className="p-3 bg-indigo-500/10 rounded-xl">
              <Code2 className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="font-semibold text-white">Modern Stack</h3>
            <p className="text-sm">React, Vue, TypeScript & Node</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
