import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, MessageCircle, Users } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp Solutions',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Alex is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable. The React applications he built for us have been running flawlessly for over a year.',
      project: 'E-commerce Platform Redesign',
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Working with Alex was a game-changer for our startup. He not only delivered exceptional code but also provided valuable insights on user experience and performance optimization. His proactive approach saved us months of development time.',
      project: 'Fintech Dashboard Development',
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      company: 'Digital Agency Pro',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Alex has an incredible ability to bring designs to life. He understands the nuances of good UI/UX and implements them with pixel-perfect precision. The collaboration was seamless, and the final product exceeded our expectations.',
      project: 'Brand Website Development',
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'David Thompson',
      role: 'Founder',
      company: 'Local Business Co.',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'As a non-technical founder, I was worried about finding the right developer. Alex made the entire process smooth and transparent. He explained everything in terms I could understand and delivered exactly what we needed on time and within budget.',
      project: 'Business Website & Online Store',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Lisa Wang',
      role: 'Senior Developer',
      company: 'TechCorp Solutions',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Alex is not just a talented developer but also an excellent mentor. He helped me improve my React skills and introduced me to best practices that I still use today. His code reviews are thorough and educational.',
      project: 'Team Collaboration & Mentoring',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-indigo-500/30 mb-8"
          >
            <MessageCircle className="w-5 h-5 text-indigo-400" />
            <span className="text-indigo-300 font-medium">What Clients Say</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Feedback from colleagues, clients, and collaborators I've had the pleasure of working with
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
          >
            {/* Animated Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentTestimonial].color} opacity-10`}></div>
            
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-white/20">
              <Quote className="w-16 h-16" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center mb-8">
                {Array.from({ length: 5 }, (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Star
                      className={`w-8 h-8 mx-1 ${
                        i < testimonials[currentTestimonial].rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-400'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-white mb-10 text-center leading-relaxed font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonials[currentTestimonial].color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-white text-xl mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-300 text-lg">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-8 text-center">
                <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold border border-white/30">
                  Project: {testimonials[currentTestimonial].project}
                </span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-16">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-4 bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg rounded-full text-white hover:bg-white/30 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-16">
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-4 bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg rounded-full text-white hover:bg-white/30 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-white shadow-lg'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid (Hidden on Mobile) */}
        <div className="hidden lg:block mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            All Reviews
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  index === currentTestimonial
                    ? 'bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-600'
                    : 'bg-white dark:bg-dark-700 hover:shadow-lg'
                }`}
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  "{testimonial.text.substring(0, 150)}..."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
