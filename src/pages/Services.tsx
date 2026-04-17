import { SERVICES } from '../constants';
import { motion } from 'motion/react';
import { Layout, Palette, Zap, Megaphone, TrendingUp, Smartphone, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const icons = {
  Layout, Palette, Zap, Megaphone, TrendingUp, Smartphone
};

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
           >
            <span className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4 block">Our Expertise</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12">
              SERVICES WE <br />
              <span className="text-white/10 uppercase">Provide.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed font-light">
              Comprehensive digital solutions tailored for growth. We combine creative artistry with technical precision across all major digital touchpoints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="px-6 space-y-48">
        {SERVICES.map((service, i) => {
          const Icon = icons[service.icon as keyof typeof icons] || Layout;
          return (
            <div key={service.id} className="max-w-7xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                   initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className={i % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="w-20 h-20 text-accent mb-10">
                    <Icon size={64} strokeWidth={1} />
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 uppercase">{service.title}</h2>
                  <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                     <div>
                        <h4 className="text-[10px] font-black text-accent uppercase tracking-widest mb-6 border-b border-white/5 pb-2">Benefits</h4>
                        <ul className="space-y-4">
                          {service.benefits.map((b, j) => (
                            <li key={j} className="flex gap-3 text-white/50 text-sm font-medium">
                              <Check size={18} className="text-accent shrink-0" /> {b}
                            </li>
                          ))}
                        </ul>
                     </div>
                     <div>
                        <h4 className="text-[10px] font-black text-accent uppercase tracking-widest mb-6 border-b border-white/5 pb-2">Tools Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.tools.map((t, j) => (
                            <span key={j} className="px-4 py-2 bg-white/2 border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/40">
                              {t}
                            </span>
                          ))}
                        </div>
                     </div>
                  </div>

                  <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-black uppercase tracking-widest text-xs rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(198,255,0,0.2)]">
                    START A PROJECT <ArrowRight size={16} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={`bg-white/2 border border-white/5 rounded-[3rem] p-12 lg:h-full flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                   <h3 className="text-[10px] font-black mb-10 tracking-[0.3em] uppercase text-slate-500">Methodology</h3>
                   <div className="space-y-8">
                     {service.process.map((step, j) => (
                       <div key={j} className="flex gap-6 items-start group">
                         <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center font-black text-[10px] shrink-0 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                           {j + 1}
                         </div>
                         <p className="text-xl font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-tighter">{step}</p>
                       </div>
                     ))}
                   </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="px-6 py-40 mt-32 bg-accent text-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] bg-[length:40px_40px] opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-[100px] font-black tracking-tighter leading-[0.85] mb-12 uppercase">
            NOT SURE <br /> <span className="text-black/40">WHERE TO START?</span>
          </h2>
          <p className="text-xl font-medium opacity-60 mb-12 max-w-2xl mx-auto">
            Schedule a free consultation call with our experts and we'll help you map out your digital journey.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-12 py-6 bg-white text-accent font-black text-lg rounded-full transition-transform hover:scale-110 shadow-2xl">
            BOOK A CALL <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
