import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-teal-400 via-blue-900 to-navy-900 dark:from-navy-900 dark:via-teal-800 dark:to-blue-900"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/40 via-blue-900/60 to-navy-900/80 blur-2xl opacity-60" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-teal-400/30 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-600/30 rounded-full blur-2xl opacity-30 animate-pulse" />
      </motion.div>

      {/* Glassmorphism Card */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-3xl bg-white/70 dark:bg-dark-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-dark-800/40 p-8 md:p-12 text-center">
          {/* Main Content */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="relative text-teal-500 dark:text-teal-400">
              Alex Johnson
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-primary-600 to-blue-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl font-semibold text-primary-700 dark:text-teal-300 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creative Web Developer
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I craft beautiful, responsive web experiences that bring ideas to life.<br />
            <span className="text-primary-600 dark:text-teal-400 font-medium">
              Passionate about clean code, modern design, and innovative solutions.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px 4px #14b8a6' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gradient-to-r from-teal-400 via-primary-600 to-blue-500 text-white rounded-xl font-bold shadow-lg hover:shadow-teal-400/40 transition-all duration-200 border-2 border-transparent hover:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px 4px #14b8a6' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-white/80 dark:bg-dark-800/80 border-2 border-teal-400 text-teal-600 dark:text-teal-300 rounded-xl font-bold shadow-lg hover:bg-teal-400 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center space-x-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, boxShadow: '0 0 16px 2px #14b8a6' }}
              className="p-4 bg-white/60 dark:bg-dark-800/60 rounded-full shadow-lg border border-white/30 dark:border-dark-700/30 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-200"
            >
              <Github className="w-7 h-7" />
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, boxShadow: '0 0 16px 2px #14b8a6' }}
              className="p-4 bg-white/60 dark:bg-dark-800/60 rounded-full shadow-lg border border-white/30 dark:border-dark-700/30 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-200"
            >
              <Linkedin className="w-7 h-7" />
            </motion.a>

            <motion.a
              href="mailto:alex@example.com"
              whileHover={{ scale: 1.15, boxShadow: '0 0 16px 2px #14b8a6' }}
              className="p-4 bg-white/60 dark:bg-dark-800/60 rounded-full shadow-lg border border-white/30 dark:border-dark-700/30 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-200"
            >
              <Mail className="w-7 h-7" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.button
          onClick={scrollToNext}
          className="p-3 rounded-full bg-white/80 dark:bg-dark-800/80 shadow-lg hover:shadow-teal-400/40 transition-shadow duration-200 border border-white/30 dark:border-dark-700/30"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-7 h-7 text-teal-500 dark:text-teal-400 animate-pulse" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
