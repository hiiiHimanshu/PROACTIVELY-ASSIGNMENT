
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LifestylePillars from '../components/LifestylePillars';
import '../styles/main.css';

const Index = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <LifestylePillars />
      </main>
    </div>
  );
};

export default Index;
