
import React from 'react';
import { Layout, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg shadow-blue-100">
              <Layout className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-black tracking-tighter text-slate-900">
              WEBTRIX<span className="text-blue-600">.</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="https://webtrixinnovations.com/our-services/" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors">Services</a>
            <a href="https://webtrixinnovations.com/portfolio/" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="https://webtrixinnovations.com/about/" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors">About</a>
            <a 
              href="https://wa.me/919209767989" 
              className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold text-xs hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
