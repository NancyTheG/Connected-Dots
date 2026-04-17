import { motion } from 'motion/react';
import { Target, Eye, MapPin, Award, Users } from 'lucide-react';

export default function About() {
  const team = [
    { name: 'Sameer Sheikh', role: 'CEO & Founder', image: 'https://i.pravatar.cc/300?u=sameer' },
    { name: 'Zohaib Ahmed', role: 'Head of Tech', image: 'https://i.pravatar.cc/300?u=zohaib' },
    { name: 'Sara Qureshi', role: 'Creative Director', image: 'https://i.pravatar.cc/300?u=sara' },
    { name: 'Hamza Farooq', role: 'Marketing Strategy', image: 'https://i.pravatar.cc/300?u=hamza' },
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Header */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
             <span className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4 block">Our Story</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85]">
              CRAFTING DIGITAL <br />
              <span className="text-white/10 uppercase">Artifacts.</span>
            </h1>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
              Founded in 2021 by a group of passionate creators in North Nazimabad, Connected Dots emerged from a simple realization: the digital landscape in Pakistan was fractured.
            </p>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
              We set out to be the bridge — the dot-connectors between high-level business goals and ground-breaking digital execution. Today, we are one of Karachi's fastest-growing premium agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 border border-black/5 bg-black/2">
            <Target className="w-16 h-16 text-accent mb-8" />
            <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Our Mission</h3>
            <p className="text-xl text-black/60 leading-relaxed">
              To empower businesses with innovative digital solutions that are not just beautiful, but strategically sound and commercially successful.
            </p>
          </div>
          <div className="p-12 border border-black/5 bg-black/2">
            <Eye className="w-16 h-16 text-accent mb-8" />
            <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Our Vision</h3>
            <p className="text-xl text-black/60 leading-relaxed">
              To be the most respected digital agency in Pakistan, recognized globally for our design standards and technical prowess.
            </p>
          </div>
        </div>
      </section>

      {/* Identity */}
      <section className="px-6 py-32 bg-[#080808] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-black mb-12 shadow-[0_0_80px_rgba(198,255,0,0.4)]">
             <MapPin size={40} />
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
            BORN IN KARACHI, <br />
            <span className="text-accent underline decoration-white/10 underline-offset-8">MADE FOR THE WORLD.</span>
          </h2>
          <p className="max-w-3xl text-xl text-slate-500 leading-relaxed font-light">
            While we operate on a global scale, our roots in Karachi give us a unique perspective on resilience, innovation, and community. We are proud to contribute to the growing tech ecosystem of Pakistan.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-32 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4 block">The Faces behind it</span>
            <h2 className="text-6xl font-black tracking-tighter uppercase">Our <span className="text-slate-500">Team.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                className="group bg-white/2 p-10 border border-white/5 overflow-hidden transition-all duration-500 hover:bg-white/5"
              >
                <div className="aspect-square overflow-hidden mb-8 border border-white/10">
                  <img src={member.image} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-1 tracking-tight">{member.name}</h4>
                  <p className="text-accent text-[10px] font-black uppercase tracking-widest">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-32 bg-accent text-black border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <h4 className="text-6xl font-black italic">5+</h4>
            <p className="uppercase tracking-[0.3em] text-[10px] font-black opacity-60">Years in Business</p>
          </div>
          <div>
            <h4 className="text-6xl font-black italic">20+</h4>
            <p className="uppercase tracking-[0.3em] text-[10px] font-black opacity-60">Creative Minds</p>
          </div>
          <div>
            <h4 className="text-6xl font-black italic">150+</h4>
            <p className="uppercase tracking-[0.3em] text-[10px] font-black opacity-60">Success Stories</p>
          </div>
          <div>
            <h4 className="text-6xl font-black italic">100%</h4>
            <p className="uppercase tracking-[0.3em] text-[10px] font-black opacity-60">Quality Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
}
