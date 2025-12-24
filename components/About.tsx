import React from 'react';
import { Check, MapPin, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-indigo-600 rounded-2xl transform -rotate-2 scale-105 opacity-20 blur-xl"></div>
            <div className="relative bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-2xl">👋</div>
                <div>
                  <h3 className="text-lg font-bold text-white">Quick Bio</h3>
                  <p className="text-slate-400 text-sm">Web & AI Developer</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  "Build multi-page professional websites (Frontend & Backend)",
                  "Develop ChatGPT-like AI chatbots for customer interaction",
                  "Integrate automation and notification systems",
                  "Create clean, accessible, and responsive UI/UX designs"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Me</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full mb-8"></div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I am a creative <span className="text-primary-400 font-semibold">Web Developer</span> specializing in professional websites and AI-powered chatbots. 
              Based in the United Kingdom, I work remotely to deliver high-quality digital solutions that drive business growth.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              My technical journey is defined by a passion for solving complex problems. Whether it's building a secure landing page for a visa agency or integrating a conversational AI for a real estate platform, I prioritize security, performance, and clean code.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <h4 className="font-bold text-white text-sm">Location</h4>
                </div>
                <p className="text-slate-400 text-sm">United Kingdom (Remote)</p>
              </div>
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <h4 className="font-bold text-white text-sm">Experience</h4>
                </div>
                <p className="text-slate-400 text-sm">Web & AI Chatbot Dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
