import React, { useState } from 'react';
import './Navbar.css';
import resumeFile from '../assets/Aswajith resume.pdf';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* <a href="#">Aswajith<span>.Dev</span></a> */}
        </div>

        <nav className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#skills" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </nav>

        <div className="navbar-right">
          <div className="navbar-action">
            <a href={resumeFile} download="Aswajith resume.pdf" className="btn-resume">
              Download Resume
            </a>
          </div>

          <div
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
