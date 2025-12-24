import React, { useState, useEffect } from 'react';
import { Terminal, Mail, Menu, X, Download } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { jsPDF } from "jspdf";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const doc = new jsPDF();
    
    // Config
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);

    // Title Section
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("Yevin Bollegala", pageWidth / 2, 20, { align: "center" });
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    doc.text("Web Developer & AI Chatbot Developer", pageWidth / 2, 28, { align: "center" });
    doc.text("Location: United Kingdom (Remote)", pageWidth / 2, 34, { align: "center" });
    doc.text("WhatsApp: +44 7719762080 | Email: yevin.bollegala@gmail.com", pageWidth / 2, 40, { align: "center" });
    
    // Separator
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, 46, pageWidth - margin, 46);
    
    let yPos = 58;
    
    // Helper for Section Titles
    const addSectionTitle = (title: string) => {
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 0, 0);
      doc.text(title, margin, yPos);
      yPos += 8;
    };

    // Professional Summary
    addSectionTitle("Professional Summary");
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(40, 40, 40);
    
    const summaryText = "Creative Web Developer specializing in professional websites and AI-powered chatbots. Experienced in building frontend and backend solutions, integrating ChatGPT-like systems, and delivering secure, scalable applications for businesses.";
    const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
    doc.text(splitSummary, margin, yPos);
    yPos += splitSummary.length * 6 + 10;

    // Experience
    addSectionTitle("Experience");
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Web & AI Chatbot Developer", margin, yPos);
    yPos += 6;
    
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    const experiences = [
      "Built multi-page professional websites (frontend & backend)",
      "Developed ChatGPT-like AI chatbots for customer interaction",
      "Integrated automation and notification systems",
      "Focused on security, performance, and clean UI/UX"
    ];
    
    experiences.forEach(item => {
      doc.text(`• ${item}`, margin + 5, yPos);
      yPos += 6;
    });
    yPos += 10;

    // Skills
    addSectionTitle("Skills");
    
    const skills = [
      "HTML, CSS, JavaScript",
      "Vue.js, TypeScript",
      "Backend Development & APIs",
      "AI Chatbots (ChatGPT-style integration)",
      "Website Security & Automation"
    ];
    
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    skills.forEach(item => {
      doc.text(`• ${item}`, margin + 5, yPos);
      yPos += 6;
    });

    // Save
    doc.save("Yevin_Bollegala_CV.pdf");
  };

  const navClasses = scrolled
    ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3'
    : 'bg-transparent py-5';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-primary-500 p-1.5 rounded-lg shadow-lg shadow-primary-500/20">
              <Terminal className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Yevin<span className="text-primary-400">.dev</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors capitalize"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:yevin.bollegala@gmail.com"
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
            >
              <Mail className="w-5 h-5" />
            </a>
            <div className="h-4 w-px bg-slate-700"></div>
            <button 
              onClick={handleDownloadCV}
              className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download CV
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full top-full left-0 shadow-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white hover:bg-slate-800 block w-full text-left px-3 py-2 rounded-md text-base font-medium capitalize"
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Download Button */}
            <div className="mt-4 px-3">
              <button 
                onClick={() => {
                  handleDownloadCV();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-primary-600 hover:bg-primary-500 text-white px-5 py-2 rounded-lg text-base font-medium transition-all shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Download CV
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;