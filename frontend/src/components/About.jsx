import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image-col">
          {/* <div className="profile-placeholder">
            <span>Image Placeholder</span>
          </div> */}
        </div>
        <div className="about-text-col">
          <p className="greeting">Hi, Iam Aswajith pp</p>
          <h1 className="name">Developer</h1>
          {/* <h2 className="title">Full Stack Software Engineer</h2> */}
          <p className="bio">
           BCA graduate with hands-on experience in Frontend Development and React.js. Skilled in developing responsive and interactive web applications using HTML, CSS, JavaScript, React.js, and Bootstrap. Seeking an entry-level Frontend Developer or React Developer role to apply technical skills, contribute to innovative projects, and grow within a dynamic organization.
          </p>
          {/* <div className="highlight-stats">
            <div className="stat">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Projects</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Clients</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
