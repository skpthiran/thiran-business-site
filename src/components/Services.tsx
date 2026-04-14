import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Custom Web Apps',
    description: 'Full-stack applications built with React, Node, and modern databases. Scalable, secure, and tailored to your business logic.',
    tags: ['React', 'Next.js', 'Node.js', 'Databases']
  },
  {
    title: 'Business Websites',
    description: 'High-performance, SEO-optimized marketing sites that convert visitors into clients. Built with modern frameworks for lightning-fast load times.',
    tags: ['Landing Pages', 'CMS Integration', 'SEO', 'Animations']
  },
  {
    title: 'Dashboards & Portals',
    description: 'Complex data visualization and admin interfaces designed for clarity and ease of use. Turning raw data into actionable insights.',
    tags: ['Data Viz', 'Admin Panels', 'Analytics', 'UI/UX']
  },
  {
    title: 'UI Rebuilds & Maintenance',
    description: 'Modernizing legacy codebases, improving accessibility, and providing ongoing technical support to keep your digital products running smoothly.',
    tags: ['Refactoring', 'Accessibility', 'Performance', 'Support']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-4">03 — Services</h2>
          <h3 className="font-serif text-4xl md:text-6xl leading-none max-w-2xl">
            What I can build <br />
            <span className="italic text-white/60">for you.</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 border-t border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-white/10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="md:col-span-4 flex flex-col justify-between h-full">
                <h4 className="text-2xl md:text-3xl font-serif group-hover:text-[#C84B31] transition-colors">
                  {service.title}
                </h4>
              </div>
              
              <div className="md:col-span-5">
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
              
              <div className="md:col-span-3 flex flex-col md:items-end gap-4">
                <div className="flex flex-wrap md:justify-end gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 border border-white/10 rounded text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-4 md:mt-auto flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                  Discuss Project <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
