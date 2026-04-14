import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js / WebGL']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'Serverless']
  },
  {
    title: 'Databases & Cloud',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'AWS', 'Vercel']
  },
  {
    title: 'Design & Tools',
    skills: ['Figma', 'UI/UX Design', 'Git', 'Docker', 'Jest', 'CI/CD']
  }
];

export default function Skills() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-4">05 — Stack</h2>
          <h3 className="font-serif text-4xl md:text-5xl leading-tight">
            The tools I use to <br />
            <span className="italic text-white/60">build the web.</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-6 pb-4 border-b border-white/10">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.skills.map(skill => (
                  <li key={skill} className="text-white/80 font-light flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#C84B31]/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
