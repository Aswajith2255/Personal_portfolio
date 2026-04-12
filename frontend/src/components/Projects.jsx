import React from 'react';
import './Projects.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Responsive e-commerce front-end web page designed for showcasing and selling fashion products online.',
      tags: ['Html', 'CSS', 'JavaScript'],
      image: img1,
      demoUrl: 'https://aswajith2255.github.io/fashionstyle/',
      githubUrl: 'https://github.com/Aswajith2255/fashionstyle'
    },
    {
      id: 2,
      title: 'Food webpage',
      description: 'Responsive Food Webpage using front-end web application designed to showcase food items, menus, and restaurant-style .',
      tags: ['React', 'Html', 'Css'],
      image: img2,
      demoUrl: 'https://aswajith2255.github.io/project2/',
      githubUrl: 'https://github.com/Aswajith2255/project2'
    },
    {
      id: 3,
      title: ' Tourism webpage',
      description: 'AswaTourisms Responsive webpage using  front-end tourism web application designed to help users explore travel.',
      tags: ['Html', 'Css', 'JavaScript', 'Bootstrap'],
      image: img3,
      demoUrl: 'https://aswatourisms-com.netlify.app/',
      githubUrl: 'https://github.com/Aswajith2255/aswatourism'
    },
    {
      id: 4,
      title: ' E-Commerce Platform',
      description: 'e-commerce website designed to showcase and sell clothing items online. It provides users with an interactive platform to browse different dress collections.',
      tags: ['React', 'Html', 'Css',],
      image: img4,
      demoUrl: '',
      githubUrl: 'https://github.com/Aswajith2255/e-commerce'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title"> Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="project-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-actions">
              <a href={project.demoUrl} className="btn-project btn-demo">Live Demo</a>
              <a href={project.githubUrl} className="btn-project btn-github">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
