import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Timeline from './sections/Timeline';
import Skills from './sections/Skills';
import SQAGuide from './sections/SQAGuide';
import PMGuide from './sections/PMGuide';
import Challenges from './sections/Challenges';
import Blog from './sections/Blog';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Refresh ScrollTrigger after content loads
    if (!isLoading) {
      ScrollTrigger.refresh();
    }
  }, [isLoading]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-deep-blue flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-cyan to-purple flex items-center justify-center mx-auto animate-pulse">
              <span className="text-deep-blue font-bold text-3xl font-heading">YN</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="loading-dot w-3 h-3 rounded-full bg-cyan" />
            <div className="loading-dot w-3 h-3 rounded-full bg-cyan" />
            <div className="loading-dot w-3 h-3 rounded-full bg-cyan" />
          </div>
          <p className="text-white/50 text-sm mt-4 font-mono">INITIALIZING...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <SQAGuide />
        <PMGuide />
        <Challenges />
        <Blog />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
