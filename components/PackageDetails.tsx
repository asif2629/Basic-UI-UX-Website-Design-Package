
import React from 'react';
import { Target, AlertCircle, Calendar, Info } from 'lucide-react';

const PackageDetails: React.FC = () => {
  return (
    <section id="details" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4">
                <Target className="w-5 h-5" />
                Who Should Buy This?
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Designed For Strategic Growth</h3>
              <ul className="space-y-4">
                {[
                  "Startup founders launching their first website",
                  "Small businesses needing a brochure-style layout",
                  "Agencies looking to outsource UI design",
                  "Businesses with a developer but no structured design",
                  "Brands planning WordPress or custom-coded sites"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4">
              <Calendar className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <p className="font-bold text-blue-900">Quick Delivery Timeline</p>
                <p className="text-blue-700 text-sm">Typically delivered within 5–7 working days depending on page count and content clarity.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
              <div className="inline-flex items-center gap-2 text-amber-600 font-bold mb-4">
                <AlertCircle className="w-5 h-5" />
                Important Clarification
              </div>
              <p className="text-amber-800 font-medium mb-4">This package includes UI/UX design only. It does not include:</p>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  "Website development",
                  "WordPress setup",
                  "Hosting or domain",
                  "Coding (HTML/CSS)",
                  "CMS integration",
                  "Content writing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-amber-700 text-sm">
                    <span className="text-amber-500 font-bold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2 text-xs text-amber-600">
                <Info className="w-4 h-4" />
                Development can be purchased separately.
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Why Invest in UI First?</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Many businesses jump directly into development without structured UI planning. This leads to poor layout balance, weak conversion flow, and expensive redesign costs later. Strategic planning ensures consistency and professional branding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageDetails;
