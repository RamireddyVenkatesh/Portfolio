import { motion } from 'framer-motion';
import { experience } from '../data/credentials';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-12">
          {experience.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border-l-4 border-blue-500 pl-6 ml-4 relative"
            >
              {/* Timeline dot */}
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[8px] top-2"></div>
              
              <h3 className="text-2xl font-semibold">{job.role}</h3>
              <div className="text-blue-400 font-medium mb-4 mt-1">
                {job.company} <span className="text-gray-400 text-sm ml-2 px-2 py-1 bg-gray-900 rounded-md">{job.duration}</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {job.contributions.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}