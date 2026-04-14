import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C84B31]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-[#C84B31] mb-6"
        >
          Creative Developer / Builder
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%", rotate: 2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-serif text-[12vw] md:text-[8vw] leading-[0.85] tracking-tight"
          >
            Crafting <span className="italic text-outline">modern</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%", rotate: 2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="font-serif text-[12vw] md:text-[8vw] leading-[0.85] tracking-tight"
          >
            digital products.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-8 md:items-center mt-12"
        >
          <p className="max-w-md text-sm md:text-base text-white/60 leading-relaxed">
            I am Thiran Wijesingha, a developer merging technical engineering with artistic direction to build unforgettable websites and web applications.
          </p>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scrollTo('work')}
              className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#C84B31] hover:text-white transition-colors"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 rounded-full text-sm font-medium border border-white/20 hover:border-white transition-colors"
            >
              Hire Me
            </button>
          </div>
        </motion.div>
      </div>

      {/* Marquee at bottom of hero */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden flex whitespace-nowrap opacity-20 pointer-events-none">
        <div className="animate-marquee flex gap-8 text-xs tracking-[0.3em] uppercase font-serif">
          <span>Creative Direction</span>
          <span>•</span>
          <span>Frontend Engineering</span>
          <span>•</span>
          <span>Full-Stack Development</span>
          <span>•</span>
          <span>UI/UX Design</span>
          <span>•</span>
          <span>Creative Direction</span>
          <span>•</span>
          <span>Frontend Engineering</span>
          <span>•</span>
          <span>Full-Stack Development</span>
          <span>•</span>
          <span>UI/UX Design</span>
          <span>•</span>
        </div>
      </div>
    </section>
  );
}
