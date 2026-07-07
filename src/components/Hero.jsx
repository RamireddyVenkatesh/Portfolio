// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/credentials';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="text-blue-500">{personalInfo.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          {personalInfo.role} based in {personalInfo.location}.
        </p>
        
        <div className="flex justify-center gap-6 mb-10">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
            <Github size={28} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-500 transition-colors">
            <Mail size={28} />
          </a>
        </div>

        <a 
          href={personalInfo.resumeLink} 
          download="Resume"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}