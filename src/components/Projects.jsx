import { motion } from 'framer-motion';
import { projects } from '../data/credentials';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Notable Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors flex flex-col h-full"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 border-t border-gray-700 pt-4 mt-auto">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                  <Github size={16} /> Code
                </a>
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}