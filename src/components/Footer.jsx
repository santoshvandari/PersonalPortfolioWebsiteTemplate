import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail, Twitter, Send, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#' },
        { name: 'Frontend Development', href: '#' },
        { name: 'React Applications', href: '#' },
        { name: 'UI/UX Implementation', href: '#' },
        { name: 'Performance Optimization', href: '#' },
        { name: 'Consulting', href: '#' }
      ]
    },
    {
      title: 'Technologies',
      links: [
        { name: 'React', href: '#' },
        { name: 'TypeScript', href: '#' },
        { name: 'Next.js', href: '#' },
        { name: 'Node.js', href: '#' },
        { name: 'Tailwind CSS', href: '#' },
        { name: 'MongoDB', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/alexjohnson', label: 'GitHub', color: 'from-gray-500 to-gray-700' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/alexjohnson', label: 'LinkedIn', color: 'from-blue-500 to-blue-700' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/alexjohnson', label: 'Twitter', color: 'from-sky-500 to-sky-700' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:alex@example.com', label: 'Email', color: 'from-purple-500 to-purple-700' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.h3 
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
              >
                Alex Johnson
              </motion.h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Creative Web Developer passionate about building beautiful, 
                functional, and user-centered digital experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gradient-to-r ${social.color} rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <h4 className="text-lg font-bold text-white mb-6 relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: linkIndex * 0.1 }}
                    >
                      <motion.button
                        whileHover={{ x: 5, color: '#c084fc' }}
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-purple-300 transition-all duration-200 text-sm group"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </motion.button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h4 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stay Connected
              </h4>
            </div>
            <p className="text-gray-400 mb-6">
              Get notified about new projects and blog posts
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 whitespace-nowrap shadow-lg flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 Alex Johnson.</span>
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>using React & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <motion.button
                whileHover={{ color: '#c084fc' }}
                onClick={() => scrollToSection('#hero')}
                className="text-gray-400 hover:text-purple-300 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </motion.button>
              <motion.button
                whileHover={{ color: '#c084fc' }}
                onClick={() => scrollToSection('#hero')}
                className="text-gray-400 hover:text-purple-300 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                  rotate: 360
                }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
