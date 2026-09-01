import React, { useState } from 'react';
import './Navbar.css';
import resumeFile from '../assets/ASWAJITH_PP.pdf';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#about">
            <span className="logo-name">Aswajith P P</span>
            <span className="logo-badge">QA Tester</span>
          </a>
        </div>

        <nav className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#skills" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Tested Projects</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <div className="mobile-menu-action">
            <a href={resumeFile} download="ASWAJITH_PP_QA_Resume.pdf" className="btn-resume mobile-resume-btn" onClick={() => setIsMobileMenuOpen(false)}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '6px' }}>
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              Download QA Resume
            </a>
          </div>
        </nav>

        <div className="navbar-right">
          <div className="navbar-action desktop-only">
            <a href={resumeFile} download="ASWAJITH_PP_QA_Resume.pdf" className="btn-resume">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '6px' }}>
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              QA Resume
            </a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
