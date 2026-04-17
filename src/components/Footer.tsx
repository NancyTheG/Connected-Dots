import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <Logo size={48} />
            <span className="font-black text-2xl tracking-tighter uppercase whitespace-nowrap">Connected Dots.</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Award-winning digital agency in Karachi. We connect the dots between ambitious ideas and high-impact digital realities.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white/2 border border-white/5 rounded-full hover:bg-accent hover:text-black transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-3 bg-white/2 border border-white/5 rounded-full hover:bg-accent hover:text-black transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-3 bg-white/2 border border-white/5 rounded-full hover:bg-accent hover:text-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-3 bg-white/2 border border-white/5 rounded-full hover:bg-accent hover:text-black transition-all">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-black mb-6 text-[10px] uppercase tracking-[0.3em] text-accent">Services</h4>
          <ul className="flex flex-col gap-5 text-sm font-medium text-white/40">
            <li><Link to="/services/#web-dev" className="hover:text-white transition-colors">Web Development</Link></li>
            <li><Link to="/services/#graphic-design" className="hover:text-white transition-colors">Graphic Design</Link></li>
            <li><Link to="/services/#branding" className="hover:text-white transition-colors">Branding</Link></li>
            <li><Link to="/services/#digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
            <li><Link to="/services/#google-ads" className="hover:text-white transition-colors">Google Ads / PPC</Link></li>
            <li><Link to="/services/#app-dev" className="hover:text-white transition-colors">Mobile App Development</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-6 text-[10px] uppercase tracking-[0.3em] text-accent">Agency</h4>
          <ul className="flex flex-col gap-5 text-sm font-medium text-white/40">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Our Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Pricing Plans</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-6 text-[10px] uppercase tracking-[0.3em] text-accent">Get in Touch</h4>
          <ul className="flex flex-col gap-6 text-sm font-medium text-white/40">
            <li className="flex gap-4">
              <MapPin size={18} className="text-accent shrink-0" />
              <span className="leading-relaxed">North Nazimabad, Karachi, Pakistan</span>
            </li>
            <li className="flex gap-4">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+92 (300) 123 4567</span>
            </li>
            <li className="flex gap-4">
              <Mail size={18} className="text-accent shrink-0" />
              <span>hello@connecteddots.pk</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Connected Dots. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs text-white/30">
          <a href="#" className="hover:text-white underline-offset-4 hover:underline">Privacy Policy</a>
          <a href="#" className="hover:text-white underline-offset-4 hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
