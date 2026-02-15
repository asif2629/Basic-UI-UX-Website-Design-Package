
import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Still Have Questions? Let's Chat!
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Not sure if this package is right for you? Our experts are available on WhatsApp and Phone to help you decide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://wa.me/919209767989" 
            className="flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            <MessageSquare className="w-6 h-6" />
            Chat on WhatsApp
          </a>
          <a 
            href="tel:+919209767989" 
            className="flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
          >
            <PhoneCall className="w-6 h-6" />
            Call +91 9209767989
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
