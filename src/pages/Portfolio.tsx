import { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState<'All' | 'Websites' | 'Branding' | 'Ads' | 'Apps'>('All');

  const filteredItems = filter === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4 block">Portfolio</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12 uppercase">
              Digital <br />
              <span className="text-white/10 uppercase">Artifacts.</span>
            </h1>
          </motion.div>

          <div className="flex flex-wrap gap-8 pt-12 border-t border-white/5">
            {(['All', 'Websites', 'Branding', 'Ads', 'Apps'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`text-[11px] font-black tracking-[0.2em] transition-all border-b-2 pb-2 uppercase ${filter === tab ? 'text-accent border-accent' : 'text-white/30 border-transparent hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[500px] overflow-hidden border border-white/5 bg-white/2"
              >
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute top-8 right-8">
                   <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100 translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight size={20} />
                   </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                   <p className="text-[10px] font-black text-accent mb-1 uppercase tracking-[0.2em]">{item.category}</p>
                   <h3 className="text-2xl font-bold text-white tracking-tighter uppercase">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
