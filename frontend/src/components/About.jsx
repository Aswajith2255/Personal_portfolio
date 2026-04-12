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
            Iam Aswajith pp, a BCA student passionate about Web development. Skilled in HTML,CSS,JS, and React, with a strong interest
            in building data-driven applications. Eager to learn and contribute to real-world projects.
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
