import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="text-gray-300 leading-relaxed text-lg space-y-4">
            <p>
              I am a passionate software developer with over 2 years of professional experience specializing in building robust, scalable applications. My foundation is built on Java and modern web technologies, allowing me to bridge the gap between complex backend systems and seamless user experiences.
            </p>
            <p>
              Currently, I focus on enterprise-grade backend development, API integration, and database optimization. I thrive in environments that challenge me to solve complex problems and write clean, maintainable code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}