
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import LifestylePillars from '../components/LifestylePillars';
import MovingImages from '../components/MovingImages';
import '../styles/main.css';

const Index = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <LifestylePillars />
        <MovingImages />
      </main>
    </div>
  );
};

export default Index;
