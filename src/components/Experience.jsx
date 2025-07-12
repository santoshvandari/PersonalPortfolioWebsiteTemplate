import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award, Briefcase, Star, TrendingUp } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'Senior Frontend Developer',
            company: 'TechCorp Solutions',
            location: 'San Francisco, CA',
            period: '2022 - Present',
            type: 'Full-time',
            description: 'Led the development of modern web applications using React and TypeScript. Mentored junior developers and established best practices for code quality and testing.',
            responsibilities: [
                'Developed and maintained 10+ React applications serving 50k+ users',
                'Implemented responsive designs that improved mobile engagement by 40%',
                'Led a team of 4 developers in building a complex dashboard application',
                'Introduced automated testing practices reducing bugs by 35%'
            ],
            technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
            achievements: [
                'Employee of the Month - March 2023',
                'Led successful migration to TypeScript',
                'Improved application performance by 60%'
            ],
            color: 'from-blue-500 to-indigo-600',
            bgColor: 'from-blue-500/20 to-indigo-500/20'
        },
        {
            title: 'Frontend Developer',
            company: 'StartupXYZ',
            location: 'Remote',
            period: '2020 - 2022',
            type: 'Full-time',
            description: 'Developed user interfaces for a fast-growing fintech startup. Worked closely with designers and backend developers to create seamless user experiences.',
            responsibilities: [
                'Built responsive web applications from scratch using React',
                'Collaborated with UX/UI designers to implement pixel-perfect designs',
                'Integrated with RESTful APIs and managed application state',
                'Optimized applications for performance and accessibility'
            ],
            technologies: ['React', 'JavaScript', 'Redux', 'Styled Components', 'Jest'],
            achievements: [
                'Launched 3 major product features',
                'Improved page load speed by 45%',
                'Achieved 98% accessibility score'
            ],
            color: 'from-purple-500 to-pink-600',
            bgColor: 'from-purple-500/20 to-pink-500/20'
        },
        {
            title: 'Junior Web Developer',
            company: 'Digital Agency Pro',
            location: 'New York, NY',
            period: '2019 - 2020',
            type: 'Full-time',
            description: 'Started my professional journey building websites and web applications for various clients. Gained experience in different technologies and project management.',
            responsibilities: [
                'Developed custom websites using HTML, CSS, and JavaScript',
                'Worked with WordPress and other CMS platforms',
                'Collaborated with designers to translate mockups into code',
                'Provided website maintenance and support to clients'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
            achievements: [
                'Completed 25+ client projects',
                'Received excellent client feedback',
                'Promoted to Frontend Developer role'
            ],
            color: 'from-green-500 to-teal-600',
            bgColor: 'from-green-500/20 to-teal-500/20'
        },
        {
            title: 'Freelance Web Developer',
            company: 'Self-Employed',
            location: 'Remote',
            period: '2018 - 2019',
            type: 'Freelance',
            description: 'Provided web development services to small businesses and entrepreneurs. Built custom websites and helped clients establish their online presence.',
            responsibilities: [
                'Consulted with clients to understand their requirements',
                'Designed and developed custom websites',
                'Provided ongoing maintenance and support',
                'Managed multiple projects simultaneously'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
            achievements: [
                'Built 15+ websites for small businesses',
                'Maintained 100% client satisfaction rate',
                'Developed strong client relationship skills'
            ],
            color: 'from-yellow-500 to-orange-600',
            bgColor: 'from-yellow-500/20 to-orange-500/20'
        }
    ];

    return (
        <section id="experience" className="relative min-h-screen py-20 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(120,119,198,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(236,72,153,0.1),transparent_50%)]"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
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
                        <Briefcase className="w-5 h-5 text-indigo-400" />
                        <span className="text-indigo-300 font-medium">Professional Experience</span>
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                        My Journey
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        My journey through various roles and companies, building expertise and delivering results
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-60"></div>

                    {/* Experience Items */}
                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <motion.div 
                                    whileHover={{ scale: 1.2 }}
                                    className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg z-10`}
                                >
                                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                                </motion.div>

                                {/* Content */}
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                                        } ml-20 md:ml-0`}
                                >
                                    <div className="relative overflow-hidden bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                        {/* Animated Background */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                        
                                        <div className="relative z-10">
                                            {/* Header */}
                                            <div className="mb-6">
                                                <div className="flex items-center justify-between mb-3">
                                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                                                        {exp.title}
                                                    </h3>
                                                    <motion.span 
                                                        whileHover={{ scale: 1.05 }}
                                                        className={`px-4 py-2 rounded-full text-sm font-semibold ${exp.type === 'Full-time'
                                                                ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                                                                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                                            } shadow-lg`}
                                                    >
                                                        {exp.type}
                                                    </motion.span>
                                                </div>

                                                <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 text-gray-300 mb-4">
                                                    <div className="flex items-center space-x-2">
                                                        <Building className="w-5 h-5 text-blue-400" />
                                                        <span className="font-medium">{exp.company}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <MapPin className="w-5 h-5 text-purple-400" />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center space-x-2 text-blue-300">
                                                    <Calendar className="w-5 h-5" />
                                                    <span className="font-semibold">{exp.period}</span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {/* Responsibilities */}
                                            <div className="mb-6">
                                                <h4 className="font-bold text-white mb-4 flex items-center">
                                                    <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                                                    Key Responsibilities:
                                                </h4>
                                                <ul className="space-y-3">
                                                    {exp.responsibilities.map((resp, idx) => (
                                                        <motion.li 
                                                            key={idx} 
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                            className="flex items-start space-x-3 text-gray-300"
                                                        >
                                                            <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`}></div>
                                                            <span>{resp}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Technologies */}
                                            <div className="mb-6">
                                                <h4 className="font-bold text-white mb-4">
                                                    Technologies:
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech, techIndex) => (
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
                                            </div>

                                            {/* Achievements */}
                                            <div>
                                                <h4 className="font-bold text-white mb-4 flex items-center">
                                                    <Award className="w-5 h-5 mr-2 text-yellow-400" />
                                                    Key Achievements:
                                                </h4>
                                                <ul className="space-y-2">
                                                    {exp.achievements.map((achievement, idx) => (
                                                        <motion.li 
                                                            key={idx} 
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                            className="flex items-start space-x-3 text-gray-300"
                                                        >
                                                            <Star className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                                                            <span>{achievement}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="relative overflow-hidden bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-center mb-6">
                                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                                    <Briefcase className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                Ready for New Challenges
                            </h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                                I'm always excited to take on new projects and collaborate with talented teams.
                                Let's discuss how I can contribute to your next venture.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative flex items-center space-x-3">
                                    <Briefcase className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                                    <span>Let's Work Together</span>
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
