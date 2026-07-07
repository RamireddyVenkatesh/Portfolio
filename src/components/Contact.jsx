import { motion } from 'framer-motion';
import { personalInfo } from '../data/credentials';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, integrate EmailJS, Formspree, or your own backend here
    alert("Thanks for reaching out! Form integration pending.");
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question, a project proposition, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-800 rounded-full text-blue-500">
                  <Mail size={20} />
                </div>
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-800 rounded-full text-blue-500">
                  <MapPin size={20} />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit} 
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}