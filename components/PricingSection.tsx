
import React from 'react';
import { Check, ShieldCheck, Zap } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Get Started at an <span className="text-blue-400">Unbeatable Value</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Professional design shouldn't break the bank. Invest in your business's visual future today.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative group">
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest animate-bounce">
              Save 25%
            </div>
            
            <div className="p-10 border-b border-slate-100 bg-slate-50">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Basic UI/UX Package</h3>
              <p className="text-slate-500 text-sm mb-6">Full visual foundation for your startup.</p>
              
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-slate-900 tracking-tight">₹15,000</span>
                <span className="text-xl text-slate-400 line-through">₹20,000</span>
              </div>
            </div>

            <div className="p-10 space-y-4">
              {[
                "Custom Homepage Layout",
                "Up to 5–7 Page UI Design",
                "Mobile Responsive Versions",
                "Basic Design System",
                "Figma Source File Handover",
                "One Revision Round"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Check className="w-3 h-3 font-bold" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}

              <div className="pt-8">
                <a 
                  href="https://wa.me/919209767989?text=I'm interested in the Basic UI/UX Website Design Package for ₹15,000" 
                  className="block text-center py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-xl shadow-blue-200"
                >
                  Buy Package Now
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-2 pt-4 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4" />
                100% Professional Design Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
