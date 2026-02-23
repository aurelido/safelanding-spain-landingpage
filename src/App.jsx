import React from 'react';
import NavBar from './components/NavBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import WhatWeDoSection from './components/WhatWeDoSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import FaqSection from './components/FaqSection.jsx';
import EmotionalSection from './components/EmotionalSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import FinalCtaSection from './components/FinalCtaSection.jsx';
import AppFooter from './components/AppFooter.jsx';

const App = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        {/* <WhatWeDoSection /> */}
        <ServicesSection />
        <FinalCtaSection />
        {/* <FaqSection /> */}
        <EmotionalSection />
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
