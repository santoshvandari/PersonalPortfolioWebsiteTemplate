import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Wrench, 
  Users, 
  CheckCircle,
  Star,
  Zap,
  Award
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'React', level: 95, years: 4 },
        { name: 'JavaScript', level: 90, years: 5 },
        { name: 'TypeScript', level: 85, years: 3 },
        { name: 'HTML/CSS', level: 95, years: 5 },
        { name: 'Tailwind CSS', level: 90, years: 2 },
        { name: 'Next.js', level: 80, years: 2 },
        { name: 'Vue.js', level: 70, years: 1 },
        { name: 'Sass/SCSS', level: 85, years: 3 }
      ]
    },
    backend: {
      title: 'Backend',
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'Node.js', level: 85, years: 3 },
        { name: 'Express.js', level: 80, years: 3 },
        { name: 'MongoDB', level: 75, years: 2 },
        { name: 'PostgreSQL', level: 70, years: 2 },
        { name: 'REST APIs', level: 90, years: 4 },
        { name: 'GraphQL', level: 65, years: 1 },
        { name: 'Firebase', level: 80, years: 2 },
        { name: 'Python', level: 60, years: 1 }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Git & GitHub', level: 95, years: 5 },
        { name: 'VS Code', level: 90, years: 4 },
        { name: 'Webpack', level: 75, years: 2 },
        { name: 'Vite', level: 85, years: 2 },
        { name: 'Docker', level: 65, years: 1 },
        { name: 'Figma', level: 80, years: 3 },
        { name: 'Postman', level: 85, years: 3 },
        { name: 'Vercel/Netlify', level: 90, years: 3 }
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'Problem Solving', level: 95, years: 5 },
        { name: 'Communication', level: 90, years: 5 },
        { name: 'Team Leadership', level: 80, years: 2 },
        { name: 'Project Management', level: 75, years: 2 },
        { name: 'Mentoring', level: 70, years: 1 },
        { name: 'Adaptability', level: 90, years: 5 },
        { name: 'Critical Thinking', level: 85, years: 4 },
        { name: 'Time Management', level: 80, years: 3 }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
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
            <Zap className="w-5 h-5 text-indigo-400" />
            <span className="text-indigo-300 font-medium">Skills & Expertise</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
            My Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and professional capabilities
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`relative overflow-hidden flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-white/20 text-white shadow-lg border border-white/30 backdrop-blur-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/15 border border-white/20 backdrop-blur-sm'
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className={`absolute inset-0 bg-gradient-to-r ${skillCategories[category].color} opacity-20 rounded-xl`}
                  transition={{ duration: 0.3 }}
                />
              )}
              <div className="relative z-10 flex items-center space-x-2">
                {skillCategories[category].icon}
                <span>{skillCategories[category].title}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden"
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skillCategories[activeCategory].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-white text-lg group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: skill.years }, (_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                    <span className="font-medium">Proficiency</span>
                    <span className="font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className={`h-full rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} shadow-lg`}
                    />
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  <span>{skill.years} {skill.years === 1 ? 'year' : 'years'} exp.</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative overflow-hidden bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Always Learning
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying current with the latest 
                trends, frameworks, and best practices in web development.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  <span className="inline-flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                    Currently Learning: AI/ML Integration
                  </span>
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  <span className="inline-flex items-center">
                    <Code className="w-4 h-4 mr-2 text-blue-400" />
                    Next Up: Web3 Technologies
                  </span>
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
