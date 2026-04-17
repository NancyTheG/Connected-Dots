import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { SERVICES, PORTFOLIO_ITEMS, TESTIMONIALS, PRICING } from '../constants';
import { Layout, Palette, Zap, Megaphone, TrendingUp, Smartphone, ArrowRight, Star, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const icons = {
  Layout, Palette, Zap, Megaphone, TrendingUp, Smartphone
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutPreview />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-white/10">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <motion.div 
           style={{ y: y1 }}
           className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] min-h-[calc(100vh-80px)]">
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 rotate-90 hidden lg:block">
              <span className="text-[10px] font-black tracking-[0.6em] text-white/10 uppercase whitespace-nowrap">
                5+ YEARS EXPERIENCE • DIGITAL INNOVATION
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-[0.2em] mb-8 uppercase text-accent"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(198,255,0,0.5)]" />
              EST. 2019 • NORTH NAZIMABAD
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-9xl lg:text-[110px] font-bold tracking-tighter leading-[0.9] mb-8"
            >
              We Connect<br />
              Ideas Into <span className="text-accent underline decoration-white/10 underline-offset-8 decoration-8">Digital</span> Reality.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed"
            >
              A premium digital agency based in Karachi, blending strategy, design, and technology 
              to build products that move the needle.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/contact" className="px-10 py-5 bg-accent text-black font-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(198,255,0,0.2)]">
                GET STARTED
              </Link>
              <Link to="/portfolio" className="px-10 py-5 border border-white/10 text-white font-bold rounded-full transition-all hover:bg-white/5">
                VIEW PORTFOLIO
              </Link>
            </motion.div>
          </div>

          <div className="hidden lg:flex flex-col gap-6 justify-center p-12 bg-white/2 border-l border-white/10">
            <div className="text-[11px] font-black tracking-[0.3em] text-accent uppercase mb-4">Our Expertise</div>
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-accent/50 transition-all group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.description.split('.')[0]}.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-32 px-6 bg-white text-black relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4 block">About the Agency</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
              5+ YEARS OF <br />
              <span className="text-accent underline decoration-black/5 underline-offset-8">CONSISTENT</span> EXCELLENCE.
            </h2>
            <div className="flex gap-12 mb-12">
              <div>
                <p className="text-5xl font-bold mb-1">5+</p>
                <p className="text-[10px] text-black/40 font-black uppercase tracking-widest">Experience</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-1"> Karachi</p>
                <p className="text-[10px] text-black/40 font-black uppercase tracking-widest">HQ Location</p>
              </div>
            </div>
          </div>
          <div className="text-xl md:text-2xl text-black/70 leading-relaxed font-light">
            <p className="mb-8">
              Based in the heart of <span className="font-bold text-black italic underline decoration-accent/30 underline-offset-4">North Nazimabad, Karachi</span>, we are a collective of thinkers, designers, and builders who believe that great digital products happen when the right dots are connected.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 px-8 py-4 border-2 border-black rounded-full font-bold hover:bg-black hover:text-white transition-all">
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-32 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">SERVICES THAT <span className="text-slate-500">SCALE.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {SERVICES.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons] || Layout;
            return (
              <motion.div
                key={service.id}
                className="group p-10 bg-white/2 border border-white/5 hover:bg-white/5 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500" />
                <div className="w-12 h-12 text-accent mb-8">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-8">{service.description}</p>
                <Link to="/services" className="text-xs font-black tracking-widest text-accent flex items-center gap-2 group-hover:gap-4 transition-all">
                  VIEW DETAILS <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<'Websites' | 'Branding' | 'Ads' | 'Apps'>('Websites');
  const filteredItems = PORTFOLIO_ITEMS.filter(item => item.category === activeTab).slice(0, 8);

  return (
    <section className="py-32 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:row items-start justify-between gap-8 mb-20 border-b border-white/5 pb-12">
          <div>
            <span className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4 block">Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-2">RECENT <span className="text-slate-500">WORK.</span></h2>
          </div>
          <div className="flex flex-wrap gap-8">
            {(['Websites', 'Branding', 'Ads', 'Apps'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[11px] font-black tracking-[0.2em] transition-all border-b-2 pb-2 uppercase ${activeTab === tab ? 'text-accent border-accent' : 'text-white/30 border-transparent hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              className="group relative h-[450px] overflow-hidden bg-white/2 border border-white/5"
            >
              <img 
                src={item.image} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                referrerPolicy="no-referrer"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">{item.category}</p>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { title: 'Research', desc: 'Understanding your market and audience.' },
    { title: 'Strategy', desc: 'Creating a roadmap for real growth.' },
    { title: 'Design', desc: 'Crafting premium, user-centric visuals.' },
    { title: 'Development', desc: 'Building high-performance platforms.' },
    { title: 'Launch', desc: 'Scaling for maximum market impact.' }
  ];

  return (
    <section className="py-32 md:py-48 px-6 bg-accent text-[#0a0a0a] overflow-hidden relative">
      {/* Background patterns - subtle dot grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#000000_1.5px,transparent_1.5px)] bg-[length:32px_32px] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent via-transparent to-accent/50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 flex flex-col items-center text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <span className="text-[11px] font-black tracking-[0.6em] text-black/40 uppercase mb-6 block">The Methodology</span>
            <h2 className="text-[12vw] md:text-[10vw] font-black tracking-tighter leading-[0.8] mb-4 uppercase drop-shadow-sm text-[#0a0a0a]">
              OUR <br className="md:hidden" /> PROCESS.
            </h2>
            <div className="w-32 h-1.5 bg-black/10 mx-auto rounded-full" />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
              className="group relative h-full min-h-[400px] p-12 bg-accent/30 rounded-[3rem] border border-black/5 shadow-[20px_20px_60px_rgba(0,0,0,0.1),-10px_-10px_40px_rgba(255,255,255,0.2)] backdrop-blur-sm flex flex-col justify-center text-left transition-all duration-500 hover:bg-accent/40 isolate"
            >
              {/* Subtle lighting overlay */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative z-10">
                <div className="text-7xl font-black text-black/10 mb-8 italic tracking-tighter">0{i + 1}</div>
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter text-[#0a0a0a] leading-none">{step.title}</h3>
                <p className="text-[#0a0a0a]/70 text-base font-medium leading-relaxed tracking-tight">{step.desc}</p>
              </div>

              {/* Float shadow effect */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [activeSet, setActiveSet] = useState(0);

  return (
    <section className="py-32 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4 block">Pricing</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-12">PLANS FOR <span className="text-slate-500">GROWTH.</span></h2>
          
          <div className="flex flex-wrap justify-center gap-12 mt-8 border-b border-white/5 pb-8">
            {PRICING.map((set, i) => (
              <button
                key={i}
                onClick={() => setActiveSet(i)}
                className={`text-[11px] font-black tracking-[0.2em] transition-all uppercase ${activeSet === i ? 'text-accent' : 'text-white/30 hover:text-white'}`}
              >
                {set.serviceName}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/5">
          {PRICING[activeSet].plans.map((plan, i) => (
            <motion.div 
              layout
              key={plan.name} 
              className={`p-12 border-white/5 ${i !== 2 ? 'lg:border-r' : ''} border-b lg:border-b-0 flex flex-col relative overflow-hidden ${plan.isPopular ? 'bg-white/5' : 'bg-transparent'}`}
            >
              {plan.isPopular && <div className="absolute top-0 right-0 bg-accent text-[10px] font-black text-white px-4 py-1.5 uppercase tracking-widest">Recommended</div>}
              <h3 className="text-sm font-black text-accent mb-4 tracking-widest uppercase">{plan.name}</h3>
              <div className="text-5xl font-bold mb-10 tracking-tighter">{plan.price}</div>
              <ul className="space-y-6 mb-12 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                    <Check size={16} className="text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 font-black text-[11px] tracking-widest transition-all uppercase border ${plan.isPopular ? 'bg-accent text-black border-accent' : 'border-white/20 text-white hover:bg-white/5'}`}>
                GET STARTED
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-32 px-6 bg-white text-black border-t border-black/5">
      <div className="max-w-7xl mx-auto">
         <div className="mb-20">
          <span className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4 block">Reviews</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">SUCCESS <span className="text-black/30">STORIES.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-12 border border-black/5 flex flex-col bg-white">
              <div className="flex gap-1 mb-6 text-accent">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-lg font-medium leading-relaxed text-black/90 mb-12 flex-grow">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} className="w-10 h-10 rounded-full grayscale" />
                <div>
                  <h4 className="font-bold text-sm tracking-tight">{t.name}</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest text-black/30">Verified Partner</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-40 px-6 relative overflow-hidden bg-[#080808] border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[160px]" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-6xl md:text-[120px] font-bold tracking-tighter leading-[0.8] mb-12">
          LET’S BUILD<br />
          <span className="text-accent">SOMETHING BIG.</span>
        </h2>
        <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-accent text-black font-black text-lg rounded-full transition-transform hover:scale-110 shadow-[0_30px_60px_rgba(198,255,0,0.2)]">
          GET STARTED <ArrowRight size={24} />
        </Link>
      </div>
    </section>
  );
}
