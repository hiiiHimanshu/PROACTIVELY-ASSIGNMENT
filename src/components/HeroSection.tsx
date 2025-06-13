
import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
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
