import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    id: '01',
    name: 'SideQuest',
    category: 'Full-Stack Web App',
    description: 'A gamified task management platform designed to turn daily habits into an RPG experience. Built with real-time sync and complex state management.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    year: '2023',
    link: '#',
    github: '#'
  },
  {
    id: '02',
    name: 'Aura',
    category: 'E-Commerce Experience',
    description: 'A premium headless e-commerce storefront for a boutique fragrance brand. Features smooth page transitions, 3D product viewers, and a custom cart implementation.',
    stack: ['Next.js', 'Framer Motion', 'Shopify API', 'WebGL'],
    year: '2024',
    link: '#',
    github: '#'
  },
  {
    id: '03',
    name: 'Echo',
    category: 'Real-time Dashboard',
    description: 'An analytics dashboard for creators to track cross-platform metrics. Focuses on data visualization, accessibility, and high-performance rendering of large datasets.',
    stack: ['TypeScript', 'React', 'D3.js', 'Firebase'],
    year: '2024',
    link: '#',
    github: '#'
  },
  {
    id: '04',
    name: 'Personal Portfolio',
    category: 'Creative Development',
    description: 'An exploration of typography, motion, and brutalist elegance. This very site, designed to showcase my identity as a builder and creative developer.',
    stack: ['React', 'Tailwind CSS', 'Motion', 'Vite'],
    year: '2024',
    link: '#',
    github: '#'
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-4">02 — Selected Work</h2>
            <h3 className="font-serif text-4xl md:text-6xl leading-none">
              Featured <span className="italic text-white/60">Projects</span>
            </h3>
          </div>
          <p className="text-sm text-white/50 max-w-xs">
            A curated selection of digital products, websites, and applications I've designed and engineered.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Project Image / Visual Placeholder */}
              <div className="md:col-span-7 order-2 md:order-1 overflow-hidden rounded-2xl bg-[#111] border border-white/5 aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#222] to-[#050505] opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                
                {/* Abstract visual representation instead of generic placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  <div className="w-3/4 h-3/4 border border-white/20 rounded-full blur-3xl" />
                  <div className="absolute font-serif text-[12rem] text-white/5 select-none">{project.id}</div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a href={project.link} className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Live <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="md:col-span-5 order-1 md:order-2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-mono text-[#C84B31]">{project.id}</span>
                  <span className="h-px w-12 bg-white/20" />
                  <span className="text-xs font-medium tracking-widest uppercase text-white/50">{project.category}</span>
                </div>
                
                <h4 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-[#C84B31] transition-colors duration-300">
                  {project.name}
                </h4>
                
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                  <a href={project.link} className="text-sm font-medium flex items-center gap-2 hover:text-[#C84B31] transition-colors">
                    Live Demo <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a href={project.github} className="text-sm font-medium flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                    GitHub <Github className="w-4 h-4" />
                  </a>
                  <span className="ml-auto text-xs text-white/30">{project.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
