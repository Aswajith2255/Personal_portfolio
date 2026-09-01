import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Aswajith P P. Software QA Engineer & Tester. All rights reserved.</p>
        <div className="footer-badges">
          <span className="badge-qa badge-pass">QA Passed</span>
          <span className="badge-qa badge-info">QA Engineer</span>
        </div>
      </div>
    </footer>
  );
}
