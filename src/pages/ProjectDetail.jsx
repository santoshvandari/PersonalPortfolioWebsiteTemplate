import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleBackToProjects = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector('#projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleGetInTouch = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleViewMoreProjects = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector('#projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

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
        {/* Enhanced Animated Background - Matching other sections */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
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
              <h1 className="text-3xl font-bold text-white mb-4">
                Project Not Found
              </h1>
              <p className="text-gray-300 mb-8">
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
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_60%)]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 pt-10 pb-20">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="mb-8 flex items-center">
                <button
                  onClick={handleBackToProjects}
                  className="inline-flex items-center space-x-2 glass-card px-5 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group shadow-md"
                >
                  <ArrowLeft className="w-5 h-5 text-teal-400 group-hover:text-white transition-colors duration-300" />
                  <span className="font-semibold text-white group-hover:text-teal-200 transition-colors duration-300">Back to Projects</span>
                </button>
              </div>
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
                  <div className="glass-card p-8 rounded-2xl relative overflow-hidden group shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Sparkles className="w-7 h-7 text-white animate-pulse" />
                      </div>
                      <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Featured Project</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                      {project.title}
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="text-xl font-bold text-teal-300 mb-4">
                      {project.subtitle}
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="text-base text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 1.2 + index * 0.08 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 text-teal-300 rounded-xl text-xs font-bold hover:bg-gradient-to-r hover:from-teal-500/30 hover:to-blue-500/30 hover:border-teal-400/50 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-2">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="font-bold text-base">Code</span>
                      </motion.a>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-bold text-base">Live</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }} className="relative">
                  <div className="glass-card p-8 rounded-2xl group shadow-xl flex flex-col items-center justify-center">
                    <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 flex items-center justify-center shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-500"></div>
                      <div className="relative z-10 text-center">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                          <Code className="w-10 h-10 text-white" />
                        </motion.div>
                        <span className="text-white font-bold text-2xl drop-shadow-lg">
                          {project.title.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Info Cards */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass-card p-6 rounded-2xl mb-10 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-lg">
              <div className="flex flex-col items-center">
                <Calendar className="w-8 h-8 text-teal-400 mb-2" />
                <span className="font-bold text-white text-sm">Duration</span>
                <span className="text-teal-300 text-xs">{project.duration}</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-green-400 mb-2" />
                <span className="font-bold text-white text-sm">Team Size</span>
                <span className="text-green-300 text-xs">{project.teamSize}</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 text-orange-400 mb-2" />
                <span className="font-bold text-white text-sm">Role</span>
                <span className="text-orange-300 text-xs">{project.role}</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-emerald-400 mb-2" />
                <span className="font-bold text-white text-sm">Status</span>
                <span className="text-emerald-300 text-xs">{project.status}</span>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Overview & Details */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass-card p-8 rounded-2xl mb-10 shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-400 mr-3" />
                <h2 className="text-2xl font-black bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">Project Overview</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-300 dark:text-gray-200 leading-relaxed">
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <motion.p key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} className="mb-6 text-base leading-relaxed">
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
            {/* Features, Challenges, Outcomes */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="glass-card p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Code className="w-7 h-7 text-blue-400 mr-2" />
                  <h3 className="text-lg font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Key Features</h3>
                </div>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <motion.li key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ x: 5 }} className="flex items-start space-x-2 text-gray-300 dark:text-gray-200">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1" />
                      <span className="font-medium leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="glass-card p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Palette className="w-7 h-7 text-orange-400 mr-2" />
                  <h3 className="text-lg font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Challenges</h3>
                </div>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <motion.li key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ x: 5 }} className="flex items-start space-x-2 text-gray-300 dark:text-gray-200">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-1"></div>
                      <span className="font-medium leading-relaxed">{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="glass-card p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Zap className="w-7 h-7 text-yellow-400 mr-2" />
                  <h3 className="text-lg font-black bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Outcomes</h3>
                </div>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome, index) => (
                    <motion.li key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ x: 5 }} className="flex items-start space-x-2 text-gray-300 dark:text-gray-200">
                      <Award className="w-4 h-4 text-yellow-400 mt-1" />
                      <span className="font-medium leading-relaxed">{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Gallery */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass-card p-8 rounded-2xl mb-10 shadow-lg">
              <div className="flex items-center mb-6">
                <Sparkles className="w-7 h-7 text-purple-400 mr-2" />
                <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-300 bg-clip-text text-transparent">Project Gallery</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="relative group cursor-pointer">
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-300"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white font-bold text-base">Screenshot {index + 1}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        {/* CTA */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center">
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent mb-2">Interested in Similar Work?</h3>
                  <p className="text-base text-gray-300 dark:text-gray-200 mb-6 max-w-xl mx-auto leading-relaxed">I'd love to discuss your project and see how I can help bring your ideas to life with cutting-edge technology and creative solutions.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <button onClick={handleGetInTouch} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">Get In Touch</button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <button onClick={handleViewMoreProjects} className="px-8 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold">View More Projects</button>
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
