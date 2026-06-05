import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'Html', 'Css', 'Bootstrap']
    },
    // {
    //   title: 'Backend',
    //   skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
    // },
    {
      title: 'Tools & DevOps',
     skills: ['Git', 'GitHub', "Vercel", "Netlify"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((cat, i) => (
          <div className="skill-category" key={i}>
            <h3 className="category-title">{cat.title}</h3>
            <div className="skills-list">
              {cat.skills.map((skill, j) => (
                <span className="skill-pill" key={j}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
