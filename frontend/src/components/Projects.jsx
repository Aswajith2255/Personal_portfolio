import React from 'react';
import './Projects.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Storefront - QA Audit & Test Suite',
      qaRole: 'Lead QA Tester',
      description: 'Executed comprehensive manual testing & functional audit. Designed 40+ test cases covering product catalog, cart item addition, checkout forms, boundary value inputs, and cross-browser UI verification.',
      tags: ['Manual Testing', 'Test Cases', 'Boundary Value', 'Defect Logging', 'Cart Validation'],
      image: img1,
      demoUrl: 'https://aswajith2255.github.io/fashionstyle/',
      githubUrl: 'https://github.com/Aswajith2255/fashionstyle'
    },
    {
      id: 2,
      title: 'Food Web App - Functional & Integration Testing',
      qaRole: 'Software QA Analyst',
      description: 'Performed integration & system testing for food menu ordering web application. Validated interactive UI elements, order state updates, filter logic, and mobile responsiveness.',
      tags: ['Integration QA', 'Functional Testing', 'React.js', 'UI Audit'],
      image: img2,
      demoUrl: 'https://aswajith2255.github.io/project2/',
      githubUrl: 'https://github.com/Aswajith2255/project2'
    },
    {
      id: 3,
      title: 'AswaTourism - Usability & Cross-Device Audit',
      qaRole: 'QA & Usability Tester',
      description: 'Conducted exploratory usability testing and cross-browser viewport audits across desktop, tablet, and mobile displays. Identified broken link edge-cases and navigation menu overlaps.',
      tags: ['Exploratory QA', 'Responsive Audit', 'Cross-Browser', 'Jira Tracking'],
      image: img3,
      demoUrl: 'https://aswatourisms-com.netlify.app/',
      githubUrl: 'https://github.com/Aswajith2255/aswatourism'
    },
    {
      id: 4,
      title: 'FashionStyle E-Commerce - Test Case Suite & Regression Matrix',
      qaRole: 'QA Test Engineer',
      description: 'Authored test execution suite for fashion catalog. Tested edge-cases in user selections, price calculations, broken image fallbacks, and regression verification post-updates.',
      tags: ['Regression Testing', 'Test Suite Design', 'Edge-Case QA', 'React.js'],
      image: img4,
      demoUrl: '',
      githubUrl: 'https://github.com/Aswajith2255/e-commerce'
    },
    {
      id: 5,
      title: 'Weather App - API Testing & Response Payload Audit',
      qaRole: 'API & Functional Tester',
      description: 'Validated RESTful weather API endpoints using Postman. Verified 200 OK, 400 Bad Request, and 404 Not Found status codes, JSON payload schema structure, and UI error handling.',
      tags: ['API Testing', 'Postman', 'JSON Validation', 'Status Code Audit', 'React.js'],
      image: img5,
      demoUrl: 'https://weatherapp-seven-rho.vercel.app/',
      githubUrl: 'https://github.com/Aswajith2255/Weatherapp'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="section-title">Tested Projects </h2>
        <p className="projects-subtitle">
          Web applications and systems subjected to rigorous manual testing, API audits, cross-browser verification, and test execution suites.
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <span className="qa-role-badge">{project.qaRole}</span>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="project-tag" key={i}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-actions">
              {project.demoUrl ? (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-project btn-demo">
                  Live Application
                </a>
              ) : (
                <span className="btn-project btn-demo disabled">In QA Testing</span>
              )}
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-project btn-github">
                QA Code & Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
