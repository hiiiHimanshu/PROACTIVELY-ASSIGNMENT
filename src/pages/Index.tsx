
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MovingImages from '../components/MovingImages';
import '../styles/main.css';

const Index = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <MovingImages />
      </main>
    </div>
  );
};

export default Index;
