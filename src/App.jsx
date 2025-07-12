import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import { ThemeProvider } from './hooks/useTheme';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
          <Toaster 
            position="top-right"
            toastOptions={{
              className: 'dark:bg-dark-800 dark:text-white',
              duration: 3000,
            }}
          />
          <Header />
          
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Testimonials />
                <Contact />
              </main>
            } />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
