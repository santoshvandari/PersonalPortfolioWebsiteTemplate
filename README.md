# 🌟 Modern Web Developer Portfolio

A stunning, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features glassmorphism design, smooth animations, and a modern user experience.

![Portfolio Preview](https://via.placeholder.com/800x400/1f2937/ffffff?text=Portfolio+Preview)

## ✨ Features

### 🚀 Core Features
- **Responsive Design** - Mobile-first approach, works seamlessly on all devices
- **Dark Mode Toggle** - Persistent theme switching with smooth animations
- **Smooth Animations** - Framer Motion powered interactions and transitions
- **Modern UI/UX** - Glassmorphism effects and professional aesthetics
- **Performance Optimized** - Fast loading and efficient state management
- **SEO Friendly** - Optimized for search engines with proper meta tags

### 📱 Sections
- **Hero Section** - Eye-catching intro with animated background and floating elements
- **About Me** - Professional bio with skills highlights and downloadable resume
- **Skills** - Interactive skill categories with proficiency levels and experience
- **Projects** - Filterable project showcase with detailed project pages
- **Experience** - Timeline-based professional history with achievements
- **Testimonials** - Client feedback carousel with enhanced review cards
- **Contact** - Functional contact form with validation and toast notifications

### 🎨 Design Highlights
- **Glassmorphism Effects** - Modern glass-like UI elements with backdrop blur
- **Color Scheme** - Vibrant gradients with teal, purple, and blue accents
- **Typography** - Clean, readable fonts with proper hierarchy
- **Animations** - Smooth transitions, hover effects, and micro-interactions
- **Accessibility** - WCAG compliant with semantic HTML and proper contrast
- **Performance** - Optimized images, lazy loading, and efficient rendering

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern JavaScript library with hooks
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Router DOM** - Client-side routing and navigation
- **Lucide React** - Beautiful, customizable icons
- **React Hot Toast** - Elegant notification system

### Development Tools
- **JavaScript ES6+** - Modern JavaScript features
- **CSS3** - Modern styling with custom properties
- **HTML5** - Semantic markup and accessibility
- **Git** - Version control and collaboration

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
```

The optimized build files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Projects portfolio
│   ├── Experience.jsx  # Work experience
│   ├── Testimonials.jsx # Client testimonials
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Site footer
├── pages/              # Page components
│   └── ProjectDetail.jsx # Individual project pages
├── hooks/              # Custom React hooks
│   └── useTheme.jsx    # Theme management
├── data/               # Static data
│   └── portfolio.js    # Portfolio content
├── App.jsx             # Main app component
├── index.css           # Global styles
└── main.jsx           # Entry point
```

## 🎨 Customization

### Personal Information
Update your details in `src/data/portfolio.js`:

```javascript
export const personalInfo = {
  name: 'Your Name',
  role: 'Your Role',
  email: 'your.email@example.com',
  // ... other details
};
```

### Projects
Add your projects to the `projects` array:

```javascript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    techStack: ['React', 'Node.js'],
    // ... other project details
  }
];
```

### Skills
Customize your skills in the `skills` object:

```javascript
export const skills = {
  frontend: [
    { name: 'React', level: 95, years: 4 },
    // ... other skills
  ]
};
```

### Styling
- **Colors**: Modify Tailwind config in `tailwind.config.js`
- **Fonts**: Update Google Fonts import in `src/index.css`
- **Animations**: Customize in individual component files

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Code Quality
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Semantic HTML** - Accessibility-first markup
- **Component Structure** - Modular and reusable components

## 🎯 Performance

### Optimizations
- **Tree Shaking** - Remove unused code
- **Code Splitting** - Lazy load components
- **Image Optimization** - Responsive images
- **Caching** - Browser caching for static assets

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 95+

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing library
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Lucide** - For beautiful icons
- **Vercel** - For easy deployment

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)
- **Portfolio**: [Your Portfolio](https://yourportfolio.com)

---

⭐ If you found this project helpful, please give it a star!

Built with ❤️ by [Your Name]
