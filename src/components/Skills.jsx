import { motion } from 'framer-motion';
import { skills } from '../data/credentials';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gray-800 border border-gray-700 px-6 py-3 rounded-full text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}