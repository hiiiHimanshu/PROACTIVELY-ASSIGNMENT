
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="nav-brand">
            <div className="logo">
              <span className="logo-icon">🏥</span>
              <span className="logo-text">ProVital</span>
            </div>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <div className="nav-links">
              <a href="#" className="nav-link">List your practice</a>
              <a href="#" className="nav-link">For Employers</a>
              <a href="#" className="nav-link">Courses</a>
              <a href="#" className="nav-link">Books</a>
              <a href="#" className="nav-link">Speakers</a>
              <a href="#" className="nav-link">Doctors</a>
            </div>
          </nav>

          <div className="auth-dropdown">
            <button className="auth-toggle">Login / Signup ▼</button>
            <div className="auth-menu">
              <div className="auth-section">
                <div className="auth-group">
                  <span className="auth-label">Doctor</span>
                  <div className="auth-buttons">
                    <a href="#" className="auth-link">Login</a>
                    <a href="#" className="auth-link">Sign up</a>
                  </div>
                </div>
                <div className="auth-group">
                  <span className="auth-label">Patients</span>
                  <div className="auth-buttons">
                    <a href="#" className="auth-link">Login</a>
                    <a href="#" className="auth-link">Sign up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
