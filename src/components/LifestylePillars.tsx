
import React, { useState } from 'react';

const LifestylePillars = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const pillars = [
    {
      id: 'nutrition',
      title: 'Nutrition',
      description: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop',
      stats: '121/80 mmHg',
      color: '#4FD1C7'
    },
    {
      id: 'physical-activity',
      title: 'Physical activity',
      description: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
      stats: '32 minutes',
      color: '#38B2AC'
    },
    {
      id: 'restorative-sleep',
      title: 'Restorative sleep',
      description: 'Consistent, quality sleep is essential for physical health, mental function and overall wellbeing.',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop',
      stats: '8 hours',
      color: '#319795'
    },
    {
      id: 'stress-management',
      title: 'Stress management',
      description: 'Effective stress management techniques are crucial for maintaining mental and physical health.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
      stats: '15 minutes',
      color: '#2C7A7B'
    },
    {
      id: 'social-connection',
      title: 'Social connection',
      description: 'Strong social relationships and community connections are vital for mental health and longevity.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
      stats: 'Daily',
      color: '#285E61'
    },
    {
      id: 'substance-avoidance',
      title: 'Substance avoidance',
      description: 'Avoiding harmful substances like tobacco and limiting alcohol consumption supports overall health.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      stats: '0 cigarettes',
      color: '#234E52'
    }
  ];

  return (
    <section className="lifestyle-pillars">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">HOW IT WORKS</p>
          <h2 className="section-title">
            <span className="highlight">Lifestyle as medicine:</span> The six pillars
          </h2>
        </div>

        <div className="pillars-nav">
          {pillars.map((pillar, index) => (
            <button
              key={pillar.id}
              className={`pillar-tab ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        <div className="pillars-content">
          <div className="pillar-card active">
            <div className="card-image">
              <img src={pillars[activeIndex].image} alt={pillars[activeIndex].title} />
              <div className="stats-badge" style={{ backgroundColor: pillars[activeIndex].color }}>
                {pillars[activeIndex].stats}
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{pillars[activeIndex].title}</h3>
              <p className="card-description">{pillars[activeIndex].description}</p>
            </div>
          </div>
        </div>

        <div className="navigation-arrows">
          <button 
            className="nav-arrow prev"
            onClick={() => setActiveIndex(activeIndex > 0 ? activeIndex - 1 : pillars.length - 1)}
          >
            ‹
          </button>
          <button 
            className="nav-arrow next"
            onClick={() => setActiveIndex(activeIndex < pillars.length - 1 ? activeIndex + 1 : 0)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default LifestylePillars;
