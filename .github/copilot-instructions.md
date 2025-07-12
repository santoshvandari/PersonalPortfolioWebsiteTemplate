<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portfolio Website Project

This is a modern, responsive React portfolio website built with the following technologies:

## Tech Stack
- **Frontend**: React (JavaScript), Vite
- **Styling**: Tailwind CSS with custom animations
- **Animation**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **State Management**: React Context API (for theme)

## Project Structure
- `src/components/` - All React components
- `src/pages/` - Page components (ProjectDetail)
- `src/hooks/` - Custom hooks (useTheme)
- `src/data/` - Static data and content
- `src/` - Main App component and entry point

## Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Toggle with localStorage persistence
- **Smooth Animations**: Framer Motion for page transitions and interactions
- **Modern UI**: Clean, professional design with good typography
- **Interactive Elements**: Hover effects, smooth scrolling, form validation
- **Performance Optimized**: Efficient state management and lazy loading

## Design Principles
- Clean, minimalistic layout
- Consistent color scheme (primary: teal, dark: navy)
- Soft shadows and rounded corners
- Smooth transitions and micro-interactions
- Accessibility-focused design

## Code Guidelines
- Use functional components with hooks
- Implement proper TypeScript-like prop validation
- Follow React best practices
- Use semantic HTML elements
- Ensure responsive design for all screen sizes
- Implement proper error handling
- Use meaningful component and variable names

## Animation Guidelines
- Use Framer Motion for complex animations
- Implement smooth scroll behavior
- Add loading states and transitions
- Use CSS classes for simple animations
- Ensure animations enhance UX, not distract

## Content Management
- Portfolio data is centralized in `src/data/portfolio.js`
- Easy to update personal information, projects, and skills
- Modular component structure for easy maintenance
