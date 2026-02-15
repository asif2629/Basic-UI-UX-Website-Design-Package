
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Layout, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/webtrixinnovations", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/webtrixinnovations/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/webtrixagency", label: "X (Twitter)" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/webtrixinnovationsceo/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@WebtrixInnovations", label: "YouTube" }
  ];

  const serviceLinks = [
    { label: "Web Design", href: "https://webtrixinnovations.com/services/web-design/" },
    { label: "Web Development", href: "https://webtrixinnovations.com/services/web-development/" },
    { label: "Website Maintenance", href: "https://webtrixinnovations.com/services/website-maintenance/" },
    { label: "Digital Marketing", href: "https://webtrixinnovations.com/services/digital-marketing/" },
    { label: "All Services", href: "https://webtrixinnovations.com/our-services/" }
  ];

  const quickLinks = [
    { label: "Shop", href: "https://webtrixinnovations.com/shop/" },
    { label: "Portfolio", href: "https://webtrixinnovations.com/portfolio/" },
    { label: "Get a Quote", href: "https://webtrixinnovations.com/get-a-quote/" },
    { label: "About Us", href: "https://webtrixinnovations.com/about/" },
    { label: "Contact Us", href: "https://webtrixinnovations.com/contact-us/" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "https://webtrixinnovations.com/privacy-policy/" },
    { label: "Terms & Conditions", href: "https://webtrixinnovations.com/terms-conditions/" },
    { label: "Refund Policy", href: "https://webtrixinnovations.com/refund-policy/" },
    { label: "Shipping & Delivery", href: "https://webtrixinnovations.com/shipping-and-delivery-policy/" },
    { label: "Disclaimer", href: "https://webtrixinnovations.com/disclaimer/" },
    { label: "FAQs", href: "https://webtrixinnovations.com/faqs/" }
  ];

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 border-t-8 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Layout className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase italic">
                Webtrix Innovations
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We empower startups and small businesses through high-quality UI/UX design and strategic digital solutions. Transform your online presence with India's leading design agency.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="w-11 h-11 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-blue-500 mb-8">Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm font-bold flex items-center gap-1 group transition-colors">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-blue-500 mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm font-bold flex items-center gap-1 group transition-colors">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-blue-500 mb-8">Legal & Support</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-4">
                {legalLinks.slice(0, 3).map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-slate-400 hover:text-white text-sm font-bold transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {legalLinks.slice(3).map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-slate-400 hover:text-white text-sm font-bold transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 p-6 bg-slate-800 rounded-3xl border border-slate-700">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-2">Need Direct Support?</span>
               <a href="mailto:support@webtrixinnovations.com" className="text-sm font-black text-blue-400 hover:text-blue-300 transition-colors">
                 support@webtrixinnovations.com
               </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[11px] font-black uppercase tracking-widest text-slate-500">
            © {new Date().getFullYear()} Webtrix Innovations. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest">
            <a href="http://webtrixinnovations.com" className="text-slate-500 hover:text-blue-500 transition-colors">Webtrix Agency</a>
            <span className="text-slate-800">•</span>
            <span className="text-slate-600">Made with Precision in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
