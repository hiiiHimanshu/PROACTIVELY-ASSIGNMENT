
import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-images">
            <div className="image-rows">
              <div className="image-row top-row">
                <img 
                  src="/lovable-uploads/106f2df8-e7a9-4dcb-b795-bd5d4fa954ea.png" 
                  alt="Healthy cooking and nutrition" 
                  className="hero-image"
                />
                <img 
                  src="/lovable-uploads/938c923e-fb13-4111-b9b5-f468dd8a169d.png" 
                  alt="Yoga and meditation" 
                  className="hero-image"
                />
                <img 
                  src="/lovable-uploads/106f2df8-e7a9-4dcb-b795-bd5d4fa954ea.png" 
                  alt="Healthy cooking and nutrition" 
                  className="hero-image"
                />
                <img 
                  src="/lovable-uploads/938c923e-fb13-4111-b9b5-f468dd8a169d.png" 
                  alt="Yoga and meditation" 
                  className="hero-image"
                />
              </div>
              <div className="image-row bottom-row">
                <img 
                  src="/lovable-uploads/bcfded9f-2685-4d1b-9f6d-c354e0f62056.png" 
                  alt="Mindfulness and wellness" 
                  className="hero-image"
                />
                <img 
                  src="/lovable-uploads/91dfaf18-b532-440a-8bbe-db17757985f5.png" 
                  alt="Active lifestyle" 
                  className="hero-image"
                />
                <img 
                  src="/lovable-uploads/bcfded9f-2685-4d1b-9f6d-c354e0f62056.png" 
                  alt="Mindfulness and wellness" 
                  className="hero-image"
                />
                <img 
                  src="/lovable-uploads/91dfaf18-b532-440a-8bbe-db17757985f5.png" 
                  alt="Active lifestyle" 
                  className="hero-image"
                />
              </div>
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
