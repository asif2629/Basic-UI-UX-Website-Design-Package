
import React, { useState } from 'react';
import { 
  Check, 
  ShieldCheck, 
  Clock, 
  Smartphone, 
  Layers, 
  Figma, 
  AlertCircle, 
  ChevronRight, 
  MessageCircle, 
  Target, 
  Share2, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube,
  Globe,
  Star,
  Shield,
  Headphones
} from 'lucide-react';

const ProductView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');

  const productImages = [
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1400",
    "https://images.unsplash.com/photo-1581291518062-c9a7941a0f3e?auto=format&fit=crop&q=80&w=1400",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1400"
  ];
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  const WHATSAPP_URL = "https://wa.me/919209767989?text=Hi, I want to buy the Basic UI/UX Website Design Package (₹15,000)";

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/webtrixinnovations" },
    { icon: Instagram, href: "https://www.instagram.com/webtrixinnovations/" },
    { icon: Twitter, href: "https://x.com/webtrixagency" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/webtrixinnovationsceo/" },
    { icon: Youtube, href: "https://www.youtube.com/@WebtrixInnovations" }
  ];

  const handleShare = async () => {
    const shareData = {
      title: 'Basic UI/UX Website Design Package - Webtrix Innovations',
      text: 'Check out this professional UI/UX design package for startups!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setShareStatus('copied');
      setTimeout(() => setShareStatus('idle'), 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Brand Identity */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900 uppercase italic">
            Webtrix<span className="text-blue-600">Innovations</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          {socialLinks.map((social, i) => (
            <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10">
        <a href="https://webtrixinnovations.com/" className="hover:text-blue-600 transition-colors">Home</a>
        <ChevronRight className="w-4 h-4" />
        <a href="https://webtrixinnovations.com/shop/" className="hover:text-blue-600 transition-colors">Shop</a>
        <ChevronRight className="w-4 h-4" />
        <span className="text-slate-900 font-bold">UI/UX Package</span>
      </nav>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Product Images */}
        <div className="lg:col-span-7 space-y-6">
          <div className="aspect-[4/3] rounded-[40px] overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl relative group">
            <img 
              src={selectedImage} 
              alt="Professional UI UX Design Showcase" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 px-2">
            {productImages.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`aspect-video rounded-2xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === img ? 'border-blue-600 scale-[1.05] shadow-xl shadow-blue-50' : 'border-transparent opacity-60 hover:opacity-100 hover:border-slate-200'}`}
              >
                <img src={img} className="w-full h-full object-cover" alt={`UI Preview ${idx + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Summary (Updated to match image) */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold text-[#111827] leading-tight">
                Basic UI/UX Website Design Package
              </h1>
              
              <div className="flex items-center gap-1 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-slate-400 text-xs font-semibold ml-2">(4.9/5 Based on 48 reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-extrabold text-[#2563EB]">₹15,000</span>
              <span className="text-xl text-slate-300 line-through font-medium">₹20,000</span>
              <span className="px-2 py-1 bg-green-100 text-green-600 text-[10px] font-black rounded-md tracking-wider">25% OFF</span>
            </div>

            <p className="text-slate-500 text-[14px] leading-relaxed italic font-medium">
              Investing in proper UI/UX design before development ensures your website is strategically structured and visually consistent.
            </p>

            <div className="flex flex-wrap gap-2">
              {["5-7 PAGES", "MOBILE VERSION", "FIGMA SOURCE"].map((tag, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-bold rounded-lg tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <a 
                href={WHATSAPP_URL}
                className="flex items-center justify-center gap-3 w-full py-5 bg-[#22C55E] hover:bg-[#16A34A] text-white font-black text-sm rounded-2xl transition-all shadow-lg shadow-green-100"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                ORDER VIA WHATSAPP
              </a>
              
              <a 
                href="https://webtrixinnovations.com/get-a-quote/"
                className="flex items-center justify-center w-full py-5 bg-[#0F172A] hover:bg-black text-white font-black text-sm rounded-2xl transition-all"
              >
                CUSTOM QUOTE
              </a>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Share with others</span>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 text-xs font-bold rounded-xl border border-slate-100 hover:bg-slate-100 transition-all"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  {shareStatus === 'copied' ? 'Copied' : 'Share Page'}
                </button>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-[#F8FAFC] rounded-2xl flex flex-col items-center justify-center gap-2 text-center border border-slate-100">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Secure Service</span>
            </div>
            <div className="p-6 bg-[#F8FAFC] rounded-2xl flex flex-col items-center justify-center gap-2 text-center border border-slate-100">
              <Headphones className="w-5 h-5 text-blue-600" />
              <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Expert Support</span>
            </div>
          </div>

          <div className="text-center space-y-1">
            <p className="text-xs font-bold text-slate-400">Need help? WhatsApp us at</p>
            <p className="text-lg font-black text-slate-900 tracking-tight">+919209767989</p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-24">
        <div className="flex gap-12 border-b border-slate-200 overflow-x-auto no-scrollbar">
          {['description', 'specifications', 'faq'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${activeTab === tab ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-blue-600"></div>}
            </button>
          ))}
        </div>

        <div className="py-16 min-h-[500px]">
          {activeTab === 'description' && (
            <div className="space-y-16 animate-in fade-in duration-700">
              <div className="relative inline-block mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What You Get in This Package</h2>
                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-blue-600"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                <div className="space-y-6">
                  <p className="text-slate-500 leading-relaxed text-[15px] font-medium">
                    Your homepage is your digital storefront. We design a clean, modern, and conversion-focused layout that guides visitors toward action.
                  </p>
                  <ul className="space-y-5">
                    {[
                      "Custom Homepage Layout",
                      "Up to 5-7 Page UI Design",
                      "Mobile Responsive Versions",
                      "Basic Wireframe Structure"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-[14px] text-slate-600 font-semibold">
                        <Check className="w-4 h-4 text-blue-500 stroke-[3]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <p className="text-slate-500 leading-relaxed text-[15px] font-medium">
                    Everything needed for a seamless developer handover and consistent brand presence.
                  </p>
                  <ul className="space-y-5">
                    {[
                      "Typography & Color System",
                      "Basic CTA & Form Layouts",
                      "One Revision Round",
                      "Figma Source File Handover"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-[14px] text-slate-600 font-semibold">
                        <Check className="w-4 h-4 text-blue-500 stroke-[3]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#FFFBEB] p-8 md:p-10 rounded-2xl border border-[#FEF3C7] flex items-start gap-5">
                <div className="w-10 h-10 rounded-full border-2 border-orange-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-500 font-black text-xl">!</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#92400E] mb-2 text-lg">Important Clarification</h4>
                  <p className="text-sm md:text-[15px] text-[#B45309] leading-relaxed font-medium">
                    This package includes <strong className="font-bold">UI/UX design only</strong>. It does not include development, WordPress setup, hosting, domain, or content writing. If you need development, it can be purchased separately.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
             <div className="space-y-12 animate-in fade-in duration-700">
               <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">Technical Details</h2>
               <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {[
                      { l: "Primary Tool", v: "Figma (Industry Standard)" },
                      { l: "Design Pages", v: "Up to 7 Core Pages" },
                      { l: "Mobile Layouts", v: "Included for All Pages" },
                      { l: "Deliverables", v: "Figma Source File + Style Guide" },
                      { l: "Brand System", v: "Typography, Colors, Button Styles" },
                      { l: "Revisions", v: "1 Structured Revision Round" }
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-slate-50/30' : 'bg-white'}>
                        <td className="px-8 py-6 text-[15px] font-bold text-slate-900 w-1/3 border-b border-slate-100">{row.l}</td>
                        <td className="px-8 py-6 text-[15px] font-medium text-slate-500 border-b border-slate-100">{row.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-12 animate-in fade-in duration-700">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">Service FAQs</h2>
              <div className="space-y-4">
                {[
                  { q: "Who should buy this package?", a: "Startup founders, small businesses, and agencies who need a professional blueprint before starting development." },
                  { q: "How long does it take?", a: "Typically delivered within 5–7 working days after content and requirements are cleared." },
                  { q: "What is a 'Figma Handover'?", a: "You get the full editable source file. Your developers can inspect dimensions, colors, and assets easily." },
                  { q: "Do you offer coding too?", a: "Development is not in this package but we offer separate WordPress and custom coding services." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-4 items-start">
                      <div className="w-7 h-7 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-[10px] font-black flex-shrink-0 mt-0.5">Q</div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-3 leading-tight">{item.q}</h4>
                        <p className="text-[15px] text-slate-500 font-medium leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 text-center relative mt-12 border-t border-slate-100">
            <div className="space-y-2">
              <h4 className="text-3xl font-black text-slate-900 tracking-tight">100+</h4>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Designs Delivered</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl font-black text-slate-900 tracking-tight">5-7</h4>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Working Days</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl font-black text-slate-900 tracking-tight">100%</h4>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Client Satisfaction</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl font-black text-slate-900 tracking-tight">Figma</h4>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Native Source</p>
            </div>
            
            {/* Floating Chat Button */}
            <button className="fixed bottom-10 right-10 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform active:scale-95 z-50">
              <MessageCircle className="w-8 h-8 fill-current" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
