import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Bot, RefreshCw, Terminal, Send, User } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { Message } from '../types';

const INITIAL_MESSAGE: Message = {
  id: 'init-1',
  role: 'model',
  text: "Hello! I'm Yevin's AI Assistant. I know everything about his CV, skills, and projects.\n\nTry asking:\n• What technologies does he use?\n• Tell me about his visa agency project.\n• How can I contact him?"
};

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = () => {
      const success = geminiService.initializeChat();
      if (success) {
        setIsOnline(true);
        setError(null);
      } else {
        setIsOnline(false);
        setError("Connection Failed: Missing API Key?");
      }
    };
    init();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
    geminiService.initializeChat();
    setError(null);
    setIsOnline(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    if (!isOnline) {
      const success = geminiService.initializeChat();
      if (!success) {
        setError("System is offline. Check API Configuration.");
        return;
      }
      setIsOnline(true);
      setError(null);
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await geminiService.sendMessage(userMsg.text);
      
      // Clean up markdown asterisks as requested in logic
      const cleanText = responseText.replace(/\*\*/g, '').replace(/\*/g, '-');

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: cleanText
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I encountered an error connecting to the AI. Please try again later."
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-chat" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-primary-400 text-sm font-semibold mb-4">
            <Sparkles className="w-3 h-3" /> Powered by Google Gemini 3
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ask My AI Assistant</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Want to know more about my experience with <span className="text-white font-medium">Chatbots</span> or <span className="text-white font-medium">Vue.js</span>? Just ask!
            This feature demonstrates my ability to integrate real-time AI into web applications.
          </p>
        </div>

        {/* CHATBOT CONTAINER */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col h-[600px] ring-1 ring-white/5">
          {/* Header */}
          <div className="bg-slate-950/50 backdrop-blur-sm border-b border-slate-800 p-4 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-tr from-primary-600 to-indigo-600 p-2 rounded-xl shadow-lg">
                <Bot className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white leading-tight">Yevin's Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full shadow-[0_0_8px] ${isOnline ? 'bg-green-500 shadow-green-500/60' : 'bg-red-500 shadow-red-500/60'}`}></span>
                  <span className="text-xs text-slate-400 font-medium">{error ? error : (isOnline ? "Online" : "Offline")}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={handleReset}
              className="text-slate-400 hover:text-white p-2.5 rounded-lg hover:bg-slate-800 transition-colors" 
              title="Reset Chat"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-900 relative">
             {/* Watermark */}
             <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                <Terminal className="w-64 h-64 text-white" />
             </div>
             
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`} style={{ animationDuration: '0.3s' }}>
                <div className={`flex gap-4 max-w-[90%] sm:max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1 border border-white/10 ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-gradient-to-tr from-primary-600/20 to-indigo-600/20'}`}>
                    {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-primary-400" />}
                  </div>
                  <div className={`p-5 rounded-3xl text-[15px] leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none chat-bubble-user shadow-md shadow-indigo-500/10' 
                      : 'bg-slate-800 text-slate-200 border border-slate-700/50 rounded-tl-none chat-bubble-model'
                  }`}>
                    {msg.text.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < msg.text.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
                <div className="flex gap-4 max-w-[80%]">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center mt-1 border border-white/5">
                     <Bot className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/50 rounded-3xl rounded-tl-none p-5 flex items-center gap-2 w-24">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 z-20">
            <form onSubmit={handleSubmit} className="relative max-w-full">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask a question about Yevin..."
                disabled={isLoading || (!!error && !isOnline)}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl py-4 pl-5 pr-14 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all placeholder:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed text-[15px]"
              />
              <button 
                type="submit" 
                disabled={isLoading || !inputText.trim() || (!!error && !isOnline)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary-500/20"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="text-center mt-2">
               <p className="text-[10px] text-slate-600">AI can make mistakes. Please verify important information.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBot;
