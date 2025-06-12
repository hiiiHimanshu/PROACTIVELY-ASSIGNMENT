
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
          <a href="#" className="nav-link">List your practice</a>
          <a href="#" className="nav-link">For Employers</a>
          <a href="#" className="nav-link">Courses</a>
          <a href="#" className="nav-link">Books</a>
          <a href="#" className="nav-link">Speakers</a>
          <a href="#" className="nav-link">Doctors</a>
          <div className="nav-auth">
            <button className="auth-btn login-btn">Login</button>
            <button className="auth-btn signup-btn">Sign up</button>
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
