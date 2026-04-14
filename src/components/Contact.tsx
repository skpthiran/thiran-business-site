import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Github, Linkedin, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...formData,
          subject: `New Contact from ${formData.name}`,
          from_name: "Thiran Portfolio"
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C84B31]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Left Column - Text & Socials */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-[#C84B31] mb-4">06 — Contact</h2>
              <h3 className="font-serif text-5xl md:text-7xl leading-none mb-8">
                Let's build <br />
                <span className="italic text-white/60">something</span> <br />
                memorable.
              </h3>
              <p className="text-white/60 text-lg max-w-md mb-12">
                Need a modern website, a custom web app, or a technical partner for your next big idea? I'm currently available for freelance work and exciting opportunities.
              </p>
              
              <div className="flex flex-col gap-6">
                <a href="mailto:skpthiran@gmail.com" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group w-fit">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-light">skpthiran@gmail.com</span>
                </a>
                
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/skpthiran" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/thiran-wijesingha-79a1b33b7/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0a0a0a] p-8 md:p-12 rounded-2xl border border-white/5"
          >
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-medium tracking-widest uppercase text-white/40">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="What should I call you?"
                  className="bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C84B31] transition-colors"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium tracking-widest uppercase text-white/40">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="hello@yourcompany.com"
                  className="bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C84B31] transition-colors"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-medium tracking-widest uppercase text-white/40">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className="bg-transparent border-b border-white/10 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#C84B31] transition-colors resize-none"
                />
              </div>
              
              <button 
                type="submit"
                disabled={formState === 'sending' || formState === 'success'}
                className={`group mt-4 flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all ${
                  formState === 'success' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : formState === 'error'
                    ? 'bg-red-500/10 text-red-100 border border-red-500/20'
                    : 'bg-white text-black hover:bg-[#C84B31] hover:text-white'
                }`}
              >
                {formState === 'idle' && (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                {formState === 'sending' && "Sending..."}
                {formState === 'success' && (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Sent Successfully
                  </>
                )}
                {formState === 'error' && (
                  <>
                    <AlertCircle className="w-4 h-4" />
                    Error! Try Again
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Thiran Wijesingha</p>
          <p>Designed & Engineered with intent.</p>
        </div>
      </div>
    </section>
  );
}
