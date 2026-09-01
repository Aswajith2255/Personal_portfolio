import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Testing Methodologies & QA',
      // badge: 'CORE QA',
      // badgeType: 'pass',
      skills: [
        'Manual Testing',
        'Boundary Value Analysis',
        'Equivalence Partitioning',
        'Functional Testing',
        'Smoke & Sanity Testing',
        'Regression Testing',
        'Web Application Testing'
      ]
    },
    {
      title: 'Technical Skills & Tools',
      // badge: 'TOOLS & TECH',
      // badgeType: 'info',
      skills: [
        'Test Scenario Creation',
        'Test Case Design & Execution',
        'Defect Reporting & Tracking',
        'SDLC',
        'STLC',
        'Git & GitHub'
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="skills-subtitle">
          Core testing competencies, test documentation, software development lifecycles, and backend validation tools.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div className="skill-category-card" key={i}>
            <div className="category-header">
              <h3 className="category-title">{cat.title}</h3>
              <span className={`badge-qa badge-${cat.badgeType}`}>{cat.badge}</span>
            </div>
            <div className="skills-list">
              {cat.skills.map((skill, j) => (
                <span className="skill-pill" key={j}>
                  <span className="pill-check">✓</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
