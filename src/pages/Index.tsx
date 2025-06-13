
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import MovingImages from '../components/MovingImages';
import '../styles/main.css';

const Index = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <MovingImages />
      </main>
    </div>
  );
};

export default Index;
