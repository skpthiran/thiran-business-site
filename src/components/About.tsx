import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Section Header */}
          <div className="md:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-4">01 — About</h2>
              <h3 className="font-serif text-4xl md:text-5xl leading-tight">
                Code, taste, <br />
                <span className="italic text-white/60">& identity.</span>
              </h3>
            </motion.div>
          </div>

          {/* Content */}
          <div className="md:col-span-8 md:col-start-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-lg md:text-xl text-white/80 leading-relaxed font-light"
            >
              <p>
                I am a developer who believes that software should be more than just functional—it should be <span className="text-white font-medium">memorable</span>. I bridge the gap between rigorous engineering and high-end creative direction.
              </p>
              <p>
                My background in Computer Science gives me the foundation to build robust, scalable architectures, while my obsession with design ensures every interaction feels intentional and polished. I don't just write code; I craft digital experiences that elevate brands and engage users.
              </p>
              <p>
                Whether it's a sleek landing page, a complex dashboard, or a full-scale web application, I approach every project with the same philosophy: <span className="italic text-white">performance and aesthetics are not mutually exclusive.</span>
              </p>
              
              <div className="pt-8 border-t border-white/10 mt-12 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-medium tracking-widest uppercase text-white/40 mb-2">Focus</h4>
                  <ul className="space-y-2 text-sm">
                    <li>Frontend Architecture</li>
                    <li>Creative Development</li>
                    <li>Full-Stack Web Apps</li>
                    <li>UI/UX Implementation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-medium tracking-widest uppercase text-white/40 mb-2">Approach</h4>
                  <ul className="space-y-2 text-sm">
                    <li>Detail-Oriented</li>
                    <li>Performance-First</li>
                    <li>Accessible</li>
                    <li>Pixel-Perfect</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
