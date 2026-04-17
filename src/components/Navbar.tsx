import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Logo from './Logo';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-md bg-white/5 border border-white/10 rounded-full py-3 px-8">
        <Link to="/" className="flex items-center gap-3">
          <Logo size={40} />
          <span className="font-black text-xl tracking-tighter uppercase">Connected Dots.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[13px] uppercase tracking-widest font-semibold transition-colors hover:text-accent",
                location.pathname === link.path ? "text-accent" : "text-slate-400"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(198,255,0,0.2)]"
          >
            GET STARTED
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-6 right-6 bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 flex flex-col gap-6 md:hidden z-50"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-2xl font-black uppercase tracking-tighter transition-colors",
                location.pathname === link.path ? "text-accent" : "text-white/40 hover:text-white"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent text-black px-8 py-4 rounded-full text-center font-black uppercase tracking-widest text-sm"
            onClick={() => setIsOpen(false)}
          >
            GET STARTED
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
