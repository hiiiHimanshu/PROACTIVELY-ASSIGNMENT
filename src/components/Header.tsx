
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <div className="logo">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">ProVital</span>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
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
          
          <div className="nav-separator"></div>
          
          <div className="nav-links">
            <a href="#" className="nav-link">
              <span>Doctors</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="#" className="nav-link">
              <span>List your practice</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="#" className="nav-link">
              <span>For Employers</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="#" className="nav-link">
              <span>Courses</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="#" className="nav-link">
              <span>Books</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="#" className="nav-link">
              <span>Speakers</span>
              <span className="nav-arrow">→</span>
            </a>
          </div>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
