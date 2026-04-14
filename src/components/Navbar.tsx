import { motion } from 'motion/react';

export default function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-sm font-medium tracking-widest uppercase">
        Thiran W.
      </div>
      
      <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase opacity-70">
        <button onClick={() => scrollTo('work')} className="hover:opacity-100 transition-opacity">Work</button>
        <button onClick={() => scrollTo('about')} className="hover:opacity-100 transition-opacity">About</button>
        <button onClick={() => scrollTo('services')} className="hover:opacity-100 transition-opacity">Services</button>
        <button onClick={() => scrollTo('contact')} className="hover:opacity-100 transition-opacity">Contact</button>
      </div>

      <button onClick={() => scrollTo('contact')} className="text-xs font-medium tracking-widest uppercase border border-white/30 rounded-full px-5 py-2.5 hover:bg-white hover:text-black transition-colors">
        Let's Talk
      </button>
    </motion.nav>
  );
}
