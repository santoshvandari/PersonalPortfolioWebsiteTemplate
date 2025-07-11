import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Calendar, 
  Clock, 
  Users, 
  Award,
  CheckCircle,
  Code,
  Palette,
  Zap,
  Sparkles,
  Target,
  Star
} from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API
  const projectData = {
    1: {
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Web Application',
      description: 'A comprehensive e-commerce solution built with React and Node.js, featuring user authentication, payment processing, inventory management, and an admin dashboard.',
      longDescription: `This e-commerce platform was built from the ground up to provide a seamless shopping experience for both customers and administrators. The project involved creating a scalable architecture that could handle high traffic loads while maintaining excellent performance.

The frontend was built using React with TypeScript for type safety, and styled with Tailwind CSS for a modern, responsive design. The backend utilized Node.js with Express.js, and PostgreSQL for reliable data storage. Stripe was integrated for secure payment processing.

Key challenges included implementing real-time inventory updates, optimizing database queries for large product catalogs, and creating an intuitive admin interface for managing orders and products.`,
      image: '/api/placeholder/800/600',
      category: 'fullstack',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Express.js', 'JWT', 'Redux'],
      githubUrl: 'https://github.com/example/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      duration: '4 months',
      teamSize: '3 developers',
      role: 'Full-Stack Developer & Team Lead',
      status: 'Completed',
      client: 'TechCorp Solutions',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'Payment integration with Stripe',
        'Order management system',
        'Admin dashboard for inventory management',
        'Real-time inventory updates',
        'Responsive design for all devices',
        'Email notifications for orders',
        'Performance optimization and caching'
      ],
      challenges: [
        'Implementing real-time inventory synchronization',
        'Optimizing database queries for large product catalogs',
        'Creating secure payment processing workflow',
        'Building responsive admin interface',
        'Handling high traffic loads during peak shopping seasons'
      ],
      outcomes: [
        'Increased online sales by 150%',
        'Reduced cart abandonment by 35%',
        'Improved page load times by 60%',
        'Achieved 99.9% uptime',
        'Received positive feedback from 95% of users'
      ],
      gallery: [
        '/api/placeholder/400/300',
        '/api/placeholder/400/300',
        '/api/placeholder/400/300',
        '/api/placeholder/400/300'
      ]
    },
    2: {
      title: 'Task Management App',
      subtitle: 'Collaborative Productivity Tool',
      description: 'A real-time collaborative task management application with team features, project organization, and progress tracking.',
      longDescription: `This task management application was designed to help teams collaborate more effectively on projects. The app provides real-time updates, allowing team members to see changes instantly without refreshing the page.

Built with React and Firebase, the application leverages Firebase's real-time database capabilities to provide seamless collaboration. The UI was designed with user experience in mind, featuring drag-and-drop functionality, keyboard shortcuts, and an intuitive interface.

The project focused heavily on performance optimization and user experience, with features like offline support, optimistic updates, and smooth animations throughout the interface.`,
      image: '/api/placeholder/800/600',
      category: 'frontend',
      techStack: ['React', 'Firebase', 'Material-UI', 'Context API', 'React DnD', 'PWA'],
      githubUrl: 'https://github.com/example/task-manager',
      liveUrl: 'https://task-manager-demo.com',
      duration: '2 months',
      teamSize: '2 developers',
      role: 'Frontend Developer',
      status: 'Completed',
      client: 'StartupXYZ',
      features: [
        'Real-time collaboration',
        'Drag-and-drop task management',
        'Project organization',
        'Team member assignments',
        'Progress tracking and reporting',
        'Offline support',
        'Push notifications',
        'Keyboard shortcuts',
        'Dark mode support',
        'Mobile responsive design'
      ],
      challenges: [
        'Implementing real-time synchronization',
        'Optimizing drag-and-drop performance',
        'Creating intuitive user interface',
        'Handling offline scenarios',
        'Managing complex state updates'
      ],
      outcomes: [
        'Improved team productivity by 40%',
        'Reduced project completion time by 25%',
        'Achieved 4.8/5 user satisfaction rating',
        'Gained 1000+ active users within first month',
        'Featured in productivity app showcases'
      ],
      gallery: [
        '/api/placeholder/400/300',
        '/api/placeholder/400/300',
        '/api/placeholder/400/300',
        '/api/placeholder/400/300'
      ]
    }
  };

  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px] animate-pulse"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glass-card p-12 rounded-3xl max-w-md mx-auto">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                Project Not Found
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                The project you're looking for doesn't exist.
              </p>
              <Link
                to="/"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-semibold">Back to Home</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px] animate-pulse"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-40 w-32 h-32 bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-full blur-2xl animate-float-delayed"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-40 w-48 h-48 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-2xl animate-float-delayed"></div>
      
      <div className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <Link
                  to="/"
                  className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 transform hover:scale-105"
                >
                  <ArrowLeft className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Back to Projects</span>
                </Link>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="glass-card p-8 rounded-3xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-center space-x-3 mb-6"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                          Featured Project
                        </span>
                      </div>
                    </motion.div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-600 dark:from-white dark:via-blue-200 dark:to-purple-300 bg-clip-text text-transparent mb-4">
                      {project.title}
                    </h1>
                    
                    <p className="text-xl font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-6">
                      {project.subtitle}
                    </p>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-600 text-white rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <Github className="w-5 h-5" />
                        <span className="font-semibold">View Code</span>
                      </motion.a>

                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span className="font-semibold">Live Demo</span>
                        </motion.a>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="relative glass-card p-8 rounded-3xl">
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Code className="w-10 h-10 text-white" />
                        </div>
                        <span className="text-white font-bold text-2xl">
                          {project.title.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                    
                    {/* Floating Icons */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center animate-pulse">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        
        {/* Project Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl mb-16"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Duration</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">{project.duration}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Team Size</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">{project.teamSize}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Role</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">{project.role}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Status</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">{project.status}</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl mb-16"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
                  Project Overview
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-6 text-lg"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Features, Challenges, and Outcomes */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
                  Challenges
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm font-medium leading-relaxed">{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
                  Outcomes
                </h3>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <Award className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium leading-relaxed">{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl mb-16"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-300 bg-clip-text text-transparent">
                  Project Gallery
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer"
                  >
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-300"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-white font-bold text-xl">
                          Screenshot {index + 1}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent mb-4">
                    Interested in Similar Work?
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    I'd love to discuss your project and see how I can help bring your ideas to life with cutting-edge technology and creative solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/#contact"
                        className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                      >
                        Get In Touch
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/#projects"
                        className="px-10 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold"
                      >
                        View More Projects
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
