
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  const [activePillar, setActivePillar] = useState('Nutrition');

  const pillars = [
    'Nutrition',
    'Physical activity',
    'Restorative sleep',
    'Stress management',
    'Social connection',
    'Substance abuse'
  ];

  return (
    <section className="how-it-works-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">HOW IT WORKS</p>
          <h2 className="section-title">
            <span className="lifestyle-text">Lifestyle as medicine:</span> The six pillars
          </h2>
        </div>

        <div className="pillars-navigation">
          <div className="pillars-tabs">
            {pillars.map((pillar) => (
              <button
                key={pillar}
                className={`pillar-tab ${activePillar === pillar ? 'active' : ''}`}
                onClick={() => setActivePillar(pillar)}
              >
                {pillar}
              </button>
            ))}
          </div>

          <div className="navigation-arrows">
            <button className="nav-arrow">
              <ChevronLeft size={20} />
            </button>
            <button className="nav-arrow">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
