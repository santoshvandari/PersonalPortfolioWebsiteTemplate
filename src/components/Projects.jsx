import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Filter, Search, Code2, Rocket, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL',
      image: '/api/placeholder/400/300',
      category: 'fullstack',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/example/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      featured: true,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates',
      image: '/api/placeholder/400/300',
      category: 'frontend',
      techStack: ['React', 'Firebase', 'Material-UI', 'Context API'],
      githubUrl: 'https://github.com/example/task-manager',
      liveUrl: 'https://task-manager-demo.com',
      featured: true,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with geolocation and forecasts',
      image: '/api/placeholder/400/300',
      category: 'frontend',
      techStack: ['React', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
      githubUrl: 'https://github.com/example/weather-app',
      liveUrl: 'https://weather-dashboard-demo.com',
      featured: false,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Blog CMS',
      description: 'A content management system for bloggers with markdown support',
      image: '/api/placeholder/400/300',
      category: 'fullstack',
      techStack: ['Next.js', 'MongoDB', 'NextAuth.js', 'Markdown'],
      githubUrl: 'https://github.com/example/blog-cms',
      liveUrl: 'https://blog-cms-demo.com',
      featured: false,
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with dark mode and animations',
      image: '/api/placeholder/400/300',
      category: 'frontend',
      techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/example/portfolio',
      liveUrl: 'https://portfolio-demo.com',
      featured: false,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 6,
      title: 'API Gateway',
      description: 'A microservices API gateway with rate limiting and authentication',
      image: '/api/placeholder/400/300',
      category: 'backend',
      techStack: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
      githubUrl: 'https://github.com/example/api-gateway',
      liveUrl: null,
      featured: false,
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Code2 className="w-4 h-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Eye className="w-4 h-4" /> },
    { id: 'fullstack', name: 'Full Stack', icon: <Rocket className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend', icon: <Filter className="w-4 h-4" /> }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedFilter === 'all' || project.category === selectedFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
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
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-8"
          >
            <Rocket className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Featured Projects</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            My Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12 text-center"
          >
            Highlighted Work
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-white font-bold text-4xl drop-shadow-lg"
                    >
                      {project.title.split(' ')[0]}
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: -360 }}
                          whileTap={{ scale: 0.9 }}
                          className={`p-3 bg-gradient-to-r ${project.color} rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          <ExternalLink className="w-6 h-6" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30 hover:border-white/50 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:text-blue-200 transition-colors"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12 text-center"
          >
            All Projects
          </motion.h3>
          
          {/* Filters and Search */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedFilter(category.id)}
                  className={`relative overflow-hidden flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedFilter === category.id
                      ? 'bg-white/20 text-white shadow-lg border border-white/30 backdrop-blur-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/15 border border-white/20 backdrop-blur-sm'
                  }`}
                >
                  {selectedFilter === category.id && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <div className="relative z-10 flex items-center space-x-2">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                </motion.button>
              ))}
            </div>
            
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <motion.span 
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-white font-bold text-xl drop-shadow-lg"
                    >
                      {project.title.split(' ')[0]}
                    </motion.span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-lg text-xs font-medium border border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-400 rounded-lg text-xs border border-white/20">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/project/${project.id}`}
                      className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                    >
                      View Details
                    </Link>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="p-2 text-gray-400 hover:text-white transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: -360 }}
                          className="p-2 text-gray-400 hover:text-purple-400 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <p className="text-gray-300 text-lg">
                  No projects found matching your criteria.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
