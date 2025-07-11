# 🌟 Web Developer Portfolio

A stunning, modern, and responsive portfolio website built with React and cutting-edge UI/UX design principles. This portfolio showcases creativity, professionalism, and strong front-end development skills.

![Portfolio Preview](./preview.png)

## ✨ Features

### 🚀 Core Features
- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark Mode Toggle** - Persistent theme switching with smooth animations
- **Smooth Animations** - Framer Motion powered interactions
- **Modern UI/UX** - Clean, minimalistic design with professional aesthetics
- **Performance Optimized** - Fast loading and efficient state management

### 📱 Sections
- **Hero Section** - Fullscreen intro with animated background
- **About Me** - Professional bio with downloadable resume
- **Skills** - Interactive skill categories with proficiency levels
- **Projects** - Filterable project showcase with detailed views
- **Experience** - Timeline-based professional history
- **Testimonials** - Client feedback carousel
- **Contact** - Functional contact form with validation

### 🎨 Design Highlights
- **Color Scheme**: Teal primary with dark navy accents
- **Typography**: Inter font family for excellent readability
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: WCAG compliant with semantic HTML
- **Performance**: Optimized images and lazy loading

## 🛠️ Tech Stack

### Frontend
- **React** - Modern JavaScript library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **React Hot Toast** - Notification system

### Development
- **JavaScript** - ES6+ features
- **CSS3** - Modern styling with custom properties
- **HTML5** - Semantic markup
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

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

The build files will be in the `dist` directory, ready for deployment.

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
