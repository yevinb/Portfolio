import React from 'react';
import { Mail, MessageCircle, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
              I'm currently available for freelance projects and remote full-time roles. 
              If you need a secure website or an AI integration, let's talk.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="mailto:yevin.bollegala@gmail.com" className="bg-white text-slate-900 px-6 py-2.5 rounded-lg font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/5 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email Me
              </a>
              <a href="https://wa.me/447719762080" className="bg-slate-800 text-white border border-slate-700 px-6 py-2.5 rounded-lg font-bold hover:bg-slate-700 transition-colors flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://wa.me/447719762080"
                target="_blank"
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <img 
                  src="https://www.iconpacks.net/icons/2/free-whatsapp-logo-icon-4456-thumb.png" 
                  alt="WhatsApp" 
                  className="w-5 h-5 object-contain"
                />
              </a>
              <a 
                href="mailto:yevin.bollegala@gmail.com" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
                aria-label="Gmail"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61559442657633" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" 
                  alt="Facebook" 
                  className="w-5 h-5 object-contain rounded-full"
                />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:yevin.bollegala@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  yevin.bollegala@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+447719762080" className="flex items-center gap-3 text-slate-400 hover:text-primary-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  +44 7719762080
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4" />
                United Kingdom (Remote)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>Full Stack Web Development</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>AI Chatbot Integration</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>Website Security Audits</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>Automation Scripts</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Yevin Bollegala. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
             <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;