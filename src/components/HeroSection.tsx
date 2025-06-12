
import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-images">
            <div className="image-grid">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop" 
                alt="Healthy cooking" 
                className="hero-image cooking-image"
              />
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop" 
                alt="Yoga and meditation" 
                className="hero-image yoga-image"
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" 
                alt="Beach wellness" 
                className="hero-image beach-image"
              />
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop" 
                alt="Doctor consultation" 
                className="hero-image consultation-image"
              />
            </div>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              Book an appointment with{' '}
              <span className="highlight">lifestyle medicine</span> experts
            </h1>
            <p className="hero-subtitle">
              Optimize your lifestyle and reverse chronic diseases.
            </p>
            
            <div className="booking-form">
              <div className="form-row">
                <div className="input-group">
                  <input 
                    type="text" 
                    placeholder="Condition, procedure, specialty..." 
                    className="form-input condition-input"
                  />
                </div>
                <div className="input-group">
                  <input 
                    type="text" 
                    placeholder="City, state, or zipcode" 
                    className="form-input location-input"
                  />
                </div>
                <div className="input-group">
                  <select className="form-input insurance-input">
                    <option>Insurance carrier</option>
                    <option>Blue Cross Blue Shield</option>
                    <option>Aetna</option>
                    <option>Cigna</option>
                    <option>UnitedHealth</option>
                  </select>
                </div>
                <button className="find-btn">Find now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
