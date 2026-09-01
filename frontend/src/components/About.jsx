import React from 'react';
import './About.css';
import resumeFile from '../assets/ASWAJITH_PP.pdf';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text-col">
            <div className="status-pill">
              <span className="pulse-dot"></span>
              Available for Software QA / Testing Roles
            </div>
            <p className="greeting">Hi, I'm</p>
            <h1 className="name">Aswajith P P</h1>
            <h2 className="title">Software Tester & QA Specialist</h2>

            <p className="bio">
              BCA Graduate specializing in <strong>Software Quality Assurance & Testing</strong>. Skilled in
              <strong> Manual Testing</strong>,
              Test Case Design. Experienced in validating web applications, executing regression test suites, uncovering edge-case bugs, and ensuring flawless user experiences.
            </p>

            <div className="about-actions">
              <a href="#projects" className="btn-primary">
                View Tested Projects
              </a>
              <a href={resumeFile} download="ASWAJITH_PP_QA_Resume.pdf" className="btn-secondary">
                Download QA Resume
              </a>
            </div>

            <div className="highlight-stats">
              <div className="stat">
                <span className="stat-badge">PASSED</span>
                <h3>500+</h3>
                <p>Test Cases Executed</p>
              </div>
              <div className="stat">
                <span className="stat-badge bug">TRACKED</span>
                <h3>150+</h3>
                <p>Bugs Logged & Verified</p>
              </div>
              <div className="stat">
                <span className="stat-badge info">ACCURACY</span>
                <h3>99%</h3>
                <p>Execution Precision</p>
              </div>
              <div className="stat">
                <span className="stat-badge">AUDITED</span>
                <h3>5+</h3>
                <p>App Quality Audits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
