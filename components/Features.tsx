
import React from 'react';
import { Home, Layers, Move, Ruler, Type, MousePointer2, RefreshCcw, FileCode } from 'lucide-react';

const features = [
  {
    title: "Custom Homepage Layout",
    desc: "A clean, modern storefront designed to guide visitors toward action with hero sections and CTAs.",
    icon: Home,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Up to 5–7 Page UI",
    desc: "Home, About, Services, Blog, and more—all with consistent visual hierarchy.",
    icon: Layers,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Mobile Responsive",
    desc: "Design that adapts perfectly to smartphones where 70% of your traffic lives.",
    icon: Move,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Wireframe Structure",
    desc: "Strategic positioning of elements before visual design to ensure clarity.",
    icon: Ruler,
    color: "bg-teal-100 text-teal-600"
  },
  {
    title: "Design System",
    desc: "Modern typography and a professional color palette your developers will love.",
    icon: Type,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "CTA & Form Layout",
    desc: "Strategically placed contact forms and buttons to boost your business inquiries.",
    icon: MousePointer2,
    color: "bg-pink-100 text-pink-600"
  },
  {
    title: "Revision Round",
    desc: "One structured round of refinements to polish the layout to perfection.",
    icon: RefreshCcw,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Figma Source Files",
    desc: "Full handover of editable Figma files for seamless developer implementation.",
    icon: FileCode,
    color: "bg-slate-100 text-slate-600"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Everything You Get in This Package
          </h2>
          <p className="text-lg text-slate-600">
            A complete UI/UX blueprint for your business website, crafted with design strategy and conversion principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group">
              <div className={`${f.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
