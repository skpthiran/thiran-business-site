import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understanding your goals, audience, and technical requirements. We define the scope and strategy before writing a single line of code.'
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Crafting the visual identity and user experience. I create wireframes and high-fidelity prototypes that align with your brand.'
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Engineering the solution using modern, scalable technologies. Clean code, responsive layouts, and robust architecture.'
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Rigorous testing, performance optimization, and deployment. Ensuring a smooth transition from development to production.'
  },
  {
    num: '05',
    title: 'Maintain',
    desc: 'Ongoing support, updates, and feature additions to keep your digital product secure and relevant as your business grows.'
  }
];

export default function Process() {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-4">04 — Process</h2>
          <h3 className="font-serif text-4xl md:text-5xl leading-tight">
            How we get from <br />
            <span className="italic text-white/60">idea to reality.</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="w-24 h-24 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center mb-8 shrink-0 group hover:border-[#C84B31] transition-colors">
                <span className="font-serif text-2xl text-white/50 group-hover:text-[#C84B31] transition-colors">{step.num}</span>
              </div>
              <h4 className="text-lg font-medium mb-3">{step.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
