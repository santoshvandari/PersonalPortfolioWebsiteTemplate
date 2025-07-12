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
            className="relative overflow-hidden glass-card rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl group"
          >
            {/* Enhanced Animated Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentTestimonial].color} opacity-10 group-hover:opacity-15 transition-opacity duration-500`}></div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-white/10 group-hover:text-white/20 transition-colors duration-300">
              <Quote className="w-20 h-20" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center mb-10">
                {Array.from({ length: 5 }, (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                  >
                    <Star
                      className={`w-10 h-10 mx-1 transition-all duration-300 ${
                        i < testimonials[currentTestimonial].rating
                          ? 'text-yellow-400 fill-current group-hover:text-yellow-300'
                          : 'text-gray-500'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-white mb-12 text-center leading-relaxed font-medium group-hover:text-purple-100 transition-colors duration-300">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${testimonials[currentTestimonial].color} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-shadow duration-300`}
                >
                  <span className="text-white font-bold text-2xl">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </motion.div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-white text-2xl mb-2 group-hover:text-purple-200 transition-colors duration-300">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-300 text-lg mb-1">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-purple-300 font-semibold text-lg">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Project Info */}
              <div className="text-center">
                <motion.span 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${testimonials[currentTestimonial].color} text-white rounded-2xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
                  Project: {testimonials[currentTestimonial].project}
                </motion.span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-16">
              <motion.button
                whileHover={{ scale: 1.15, x: -8, boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)' }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-4 glass-card border border-white/30 shadow-2xl rounded-2xl text-white hover:bg-white/30 transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </motion.button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-16">
              <motion.button
                whileHover={{ scale: 1.15, x: 8, boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)' }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-4 glass-card border border-white/30 shadow-2xl rounded-2xl text-white hover:bg-white/30 transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>

          {/* Enhanced Dots Indicator */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.4, y: -3 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToTestimonial(index)}
                className={`relative transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'w-12 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg'
                    : 'w-4 h-4 bg-white/40 hover:bg-white/60 rounded-full'
                }`}
              >
                {index === currentTestimonial && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-full animate-pulse`}></div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-4xl font-black bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                  All Reviews
                </h3>
                <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
              </div>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover what clients and colleagues say about working with me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group relative overflow-hidden glass-card p-8 rounded-3xl border border-white/20 hover:border-white/30 transition-all duration-500 cursor-pointer ${
                  index === currentTestimonial ? 'ring-2 ring-purple-400 shadow-2xl shadow-purple-500/25' : ''
                }`}
                onClick={() => goToTestimonial(index)}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                />

                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-white/10 group-hover:text-white/20 transition-colors duration-300">
                  <Quote className="w-8 h-8" />
                </div>

                <div className="relative z-10">
                  {/* Author Info */}
                  <div className="flex items-center mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-lg mr-4 group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-lg mb-1 group-hover:text-purple-200 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-300 text-sm mb-1">
                        {testimonial.role}
                      </p>
                      <p className="text-purple-300 font-semibold text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center mb-6">
                    {Array.from({ length: 5 }, (_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <Star
                          className={`w-5 h-5 mx-0.5 transition-all duration-300 ${
                            i < testimonial.rating
                              ? 'text-yellow-400 fill-current group-hover:text-yellow-300'
                              : 'text-gray-500 group-hover:text-gray-400'
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    "{testimonial.text.length > 120 ? testimonial.text.substring(0, 120) + '...' : testimonial.text}"
                  </blockquote>

                  {/* Project Badge */}
                  <div className="flex items-center justify-center">
                    <span className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${testimonial.color} text-white rounded-full text-xs font-semibold shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Read More Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-xs font-semibold hover:bg-white/30 transition-all duration-300">
                      Read Full Review
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
