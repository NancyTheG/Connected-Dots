import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Our team will get back to you shortly.');
  };

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sm font-black tracking-[0.3em] text-accent uppercase mb-4 block">Get In Touch</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12 uppercase">
              Let's build <br />
              <span className="text-white/10">Together.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <div className="space-y-12 mb-20">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-white/2 border border-white/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Email Us</h4>
                  <p className="text-xl md:text-2xl font-bold">hello@connecteddots.pk</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-white/2 border border-white/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Phone size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Call Us</h4>
                  <p className="text-xl md:text-2xl font-bold">+92 (300) 123 4567</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-white/2 border border-white/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <MapPin size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Visit Us</h4>
                  <p className="text-xl md:text-2xl font-bold uppercase tracking-tighter">Main Market, North Nazimabad,<br />Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Mock Map */}
            <div className="h-[400px] w-full bg-white/2 border border-white/10 rounded-[4rem] overflow-hidden relative group">
              <div className="absolute inset-0 bg-grayscale-filter opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000">
                 <img src="https://picsum.photos/seed/map/1200/800" className="w-full h-full object-cover" alt="Map Location" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="px-6 py-2 bg-accent text-black font-black text-[10px] tracking-widest rounded-full shadow-2xl animate-pulse">
                    CENTER OF INNOVATION
                 </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 lg:p-20 text-black">
             <div className="mb-12">
                <MessageSquare className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-4xl font-black tracking-tighter uppercase mb-4 leading-none">Send a Message</h3>
                <p className="text-lg text-black/50 font-light">Fill out the form below and we'll connect within 24 hours.</p>
             </div>

             <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/30">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Sameer Sheikh"
                      className="w-full px-6 py-4 bg-black/2 border border-black/10 transition-all focus:border-accent focus:bg-white text-black font-semibold outline-none"
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/30">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="hello@world.com"
                      className="w-full px-6 py-4 bg-black/2 border border-black/10 transition-all focus:border-accent focus:bg-white text-black font-semibold outline-none"
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/30">Services Needed</label>
                  <select 
                    className="w-full px-6 py-4 bg-black/2 border border-black/10 transition-all focus:border-accent focus:bg-white text-black font-semibold outline-none appearance-none"
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option>Web Development</option>
                    <option>Graphic Design</option>
                    <option>Branding</option>
                    <option>Digital Marketing</option>
                    <option>Google Ads / PPC</option>
                    <option>App Development</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/30">Your Message</label>
                  <textarea 
                    rows={6}
                    required
                    placeholder="Briefly describe your vision..."
                    className="w-full px-6 py-4 bg-black/2 border border-black/10 transition-all focus:border-accent focus:bg-white text-black font-semibold outline-none resize-none"
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-6 bg-accent text-black font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] shadow-2xl"
                >
                  SEND ENQUIRY <Send size={16} />
                </button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
}
