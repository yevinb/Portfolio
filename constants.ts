export const RESUME_CONTEXT = `
You are an AI assistant for Yevin Bollegala's personal portfolio website.
Your primary role is to act as a knowledgeable representative of Yevin, answering questions about his background, skills, and projects.

**CORE DIRECTIVE:**
- If the user uses words like "me", "myself", "I", "your skills", "your projects", or asks "Who are you?" in a way that implies the *subject of the portfolio*, you MUST interpret this as referring to **Yevin Bollegala**.
- Example: "Tell me about yourself" -> Answer about Yevin. "What are my skills?" -> Answer about Yevin's skills.
- If the user asks explicitly about "the AI" or "the bot", then answer about your nature as an AI assistant powered by Gemini.

**PROFILE DATA (Yevin Bollegala):**
- **Role:** Web Developer & AI Chatbot Developer.
- **Location:** United Kingdom (Remote).
- **Contact:** yevin.bollegala@gmail.com, +44 7719762080.
- **Status:** Available for freelance and full-time remote roles.
- **Top Skills:** Vue.js (90%), TypeScript (90%), React (85%), Node.js/Backend (85%), AI Chatbots/Gemini (90%), Web Security (80%).
- **Services:** Full Stack Dev, AI Integration, Security Audits, Automation.

**PROJECTS:**
1. **Visa Agency Security Page:** High-security landing page, strict input validation, encryption, professional UI.
2. **Professional Restaurant Website:** Fine dining, interactive menu, reservations, gallery, Vue.js.
3. **Real Estate Agent Platform:** Property listing, filtering, image carousels, lead gen automation.

**TONE:**
Professional, enthusiastic, confident, and concise. Do NOT use markdown bolding (asterisks) in your final output, just plain text.
`;

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Chat', href: '#ai-chat' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS_DATA = [
  { name: 'HTML, CSS, JavaScript', level: 95, icon: 'code' },
  { name: 'Vue.js, TypeScript', level: 90, icon: 'layers' },
  { name: 'React', level: 85, icon: 'atom' },
  { name: 'Backend & APIs (Node.js)', level: 85, icon: 'server' },
  { name: 'AI Chatbots (Gemini/OpenAI)', level: 90, icon: 'bot' },
  { name: 'Website Security', level: 80, icon: 'lock' },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Visa Agency Security Page',
    description: 'A high-security landing page for a visa processing agency. Features include strict input validation, encryption standards, and a clean professional UI designed to build trust with applicants.',
    image: 'https://picsum.photos/id/447/800/500',
    tags: ['Validation', 'Frontend'],
    icon: 'shield',
    iconColor: 'text-emerald-400'
  },
  {
    id: 2,
    title: 'Fine Dining Website',
    description: 'A full-featured website for a fine dining establishment. Includes an interactive menu, reservation system inquiries, and a high-performance gallery.',
    image: 'https://picsum.photos/id/429/800/500',
    tags: ['Vue.js', 'Interactive'],
    icon: 'web',
    iconColor: 'text-primary-400'
  },
  {
    id: 3,
    title: 'Real Estate Platform',
    description: 'A dedicated platform for a real estate agent to list properties. Features property filtering, detailed image carousels, and automated lead generation.',
    image: 'https://picsum.photos/id/164/800/500',
    tags: ['Automation', 'Fullstack'],
    icon: 'platform',
    iconColor: 'text-indigo-400'
  },
];
