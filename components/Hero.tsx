
import React from 'react';
import { ArrowRight, CheckCircle, Smartphone, Figma, Sparkles } from 'lucide-react';

interface HeroProps {
  onConsult: () => void;
}

const Hero: React.FC<HeroProps> = ({ onConsult }) => {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-16 lg:pt-32">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl -mr-48 -mt-24"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl -ml-48 -mb-24"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold animate-pulse">
              <Sparkles className="w-4 h-4" />
              Perfect for Startups & Small Businesses
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Professional <span className="text-blue-600">UI/UX Design</span> Package for Your Next Big Idea
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Launching a new business? Get a strong visual foundation with our conversion-focused UI design. Up to 7 pages of pure design strategy to guide your development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#pricing" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 group"
              >
                Claim Offer Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={onConsult}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Talk to AI Expert
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <Smartphone className="w-5 h-5 text-blue-500" />
                Mobile Responsive
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <Figma className="w-5 h-5 text-purple-500" />
                Figma Source Files
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <CheckCircle className="w-5 h-5 text-green-500" />
                5-7 Working Days
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-10 animate-pulse"></div>
             <img 
               src="https://picsum.photos/id/48/1200/900" 
               alt="UI UX Design Showcase" 
               className="relative rounded-2xl shadow-2xl border border-slate-200"
             />
             
             {/* Floating UI elements mock */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">₹</div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">Special Sale</p>
                        <p className="text-xs text-slate-500">Only ₹15,000</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
