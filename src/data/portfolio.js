export const personalInfo = {
  name: 'Alex Johnson',
  role: 'Creative Web Developer',
  email: 'alex@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  bio: `I'm a passionate web developer with a love for creating beautiful, functional,
        and user-centered digital experiences. With over 5 years of experience in web development, 
        I've had the privilege of working on diverse projects ranging from startup MVPs to enterprise 
        applications.`,
  mission: `My journey began with a curiosity about how websites work, which evolved into a passion 
           for creating digital experiences that matter. I specialize in modern JavaScript frameworks, 
           particularly React, and have a strong foundation in full-stack development.`,
  socialLinks: {
    github: 'https://github.com/alexjohnson',
    linkedin: 'https://linkedin.com/in/alexjohnson',
    twitter: 'https://twitter.com/alexjohnson',
    email: 'mailto:alex@example.com'
  }
};

export const skills = {
  frontend: [
    { name: 'React', level: 95, years: 4 },
    { name: 'JavaScript', level: 90, years: 5 },
    { name: 'TypeScript', level: 85, years: 3 },
    { name: 'HTML/CSS', level: 95, years: 5 },
    { name: 'Tailwind CSS', level: 90, years: 2 },
    { name: 'Next.js', level: 80, years: 2 },
    { name: 'Vue.js', level: 70, years: 1 },
    { name: 'Sass/SCSS', level: 85, years: 3 }
  ],
  backend: [
    { name: 'Node.js', level: 85, years: 3 },
    { name: 'Express.js', level: 80, years: 3 },
    { name: 'MongoDB', level: 75, years: 2 },
    { name: 'PostgreSQL', level: 70, years: 2 },
    { name: 'REST APIs', level: 90, years: 4 },
    { name: 'GraphQL', level: 65, years: 1 },
    { name: 'Firebase', level: 80, years: 2 },
    { name: 'Python', level: 60, years: 1 }
  ],
  tools: [
    { name: 'Git & GitHub', level: 95, years: 5 },
    { name: 'VS Code', level: 90, years: 4 },
    { name: 'Webpack', level: 75, years: 2 },
    { name: 'Vite', level: 85, years: 2 },
    { name: 'Docker', level: 65, years: 1 },
    { name: 'Figma', level: 80, years: 3 },
    { name: 'Postman', level: 85, years: 3 },
    { name: 'Vercel/Netlify', level: 90, years: 3 }
  ],
  soft: [
    { name: 'Problem Solving', level: 95, years: 5 },
    { name: 'Communication', level: 90, years: 5 },
    { name: 'Team Leadership', level: 80, years: 2 },
    { name: 'Project Management', level: 75, years: 2 },
    { name: 'Mentoring', level: 70, years: 1 },
    { name: 'Adaptability', level: 90, years: 5 },
    { name: 'Critical Thinking', level: 85, years: 4 },
    { name: 'Time Management', level: 80, years: 3 }
  ]
};

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL',
    category: 'fullstack',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates',
    category: 'frontend',
    techStack: ['React', 'Firebase', 'Material-UI', 'Context API'],
    githubUrl: 'https://github.com/example/task-manager',
    liveUrl: 'https://task-manager-demo.com',
    featured: true,
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather application with geolocation and forecasts',
    category: 'frontend',
    techStack: ['React', 'OpenWeather API', 'Chart.js', 'CSS Modules'],
    githubUrl: 'https://github.com/example/weather-app',
    liveUrl: 'https://weather-dashboard-demo.com',
    featured: false,
    image: '/api/placeholder/400/300'
  },
  {
    id: 4,
    title: 'Blog CMS',
    description: 'A content management system for bloggers with markdown support',
    category: 'fullstack',
    techStack: ['Next.js', 'MongoDB', 'NextAuth.js', 'Markdown'],
    githubUrl: 'https://github.com/example/blog-cms',
    liveUrl: 'https://blog-cms-demo.com',
    featured: false,
    image: '/api/placeholder/400/300'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A modern portfolio website with dark mode and animations',
    category: 'frontend',
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/example/portfolio',
    liveUrl: 'https://portfolio-demo.com',
    featured: false,
    image: '/api/placeholder/400/300'
  },
  {
    id: 6,
    title: 'API Gateway',
    description: 'A microservices API gateway with rate limiting and authentication',
    category: 'backend',
    techStack: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
    githubUrl: 'https://github.com/example/api-gateway',
    liveUrl: null,
    featured: false,
    image: '/api/placeholder/400/300'
  }
];

export const experiences = [
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
    ]
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
    ]
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
    ]
  }
];

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Solutions',
    rating: 5,
    text: 'Alex is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.',
    project: 'E-commerce Platform Redesign'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupXYZ',
    rating: 5,
    text: 'Working with Alex was a game-changer for our startup. He not only delivered exceptional code but also provided valuable insights on user experience and performance optimization.',
    project: 'Fintech Dashboard Development'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    company: 'Digital Agency Pro',
    rating: 5,
    text: 'Alex has an incredible ability to bring designs to life. He understands the nuances of good UI/UX and implements them with pixel-perfect precision.',
    project: 'Brand Website Development'
  }
];
