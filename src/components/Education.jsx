import { motion } from 'framer-motion';
import { education } from '../data/credentials';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-800 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-700 flex items-start gap-4"
            >
              <div className="p-3 bg-gray-800 rounded-full text-blue-500 shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <p className="text-gray-400 font-medium mb-2">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}