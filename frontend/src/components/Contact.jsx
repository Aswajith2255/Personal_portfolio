import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_p85yiwm';
    const templateID = 'template_36pgp2u';
    const publicKey = 'JghsvFziuEDiNsa8b';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <p className="contact-subtitle">
          Have a question or want to work together? Send me a message!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && <div className="success-message">Message sent successfully!</div>}

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">Send Message</button>
        </form>
        <h1>Aswajith pp</h1>
        <div className="social-links">

          <a href="https://github.com/Aswajith2255" className="social-icon">GitHub</a>
          <a href="https://www.linkedin.com/in/aswajith-pp-b4a740378/" className="social-icon">LinkedIn</a>
          <a href="" className="social-icon">Email</a>
          <a href="https://www.instagram.com/aswa.jith__?igsh=MWRzMTg0NHd2bGVpcg==" className="social-icon">Instagram</a>
        </div>
      </div>
    </section>
  );
}
