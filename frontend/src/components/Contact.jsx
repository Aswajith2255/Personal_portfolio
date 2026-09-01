import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_p85yiwm';
    const templateID = 'template_36pgp2u';
    const publicKey = 'JghsvFziuEDiNsa8b';

    const submissionTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    }) + ' (IST)';

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      reply_to: formData.email,
      message: formData.message,
      submitted_at: submissionTime,
    };

    // Tier 1: EmailJS
    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
      return;
    } catch (err1) {
      console.log('EmailJS failed, trying direct FormSubmit service...', err1);
    }

    // Tier 2: FormSubmit.co API (Delivers directly to aswajithpp45@gmail.com)
    try {
      const response = await fetch('https://formsubmit.co/ajax/aswajithpp45@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          submission_time: submissionTime,
          _subject: `QA Portfolio Inquiry from ${formData.name}`
        })
      });

      const resData = await response.json();
      if (response.ok || resData.success === 'true') {
        setSubmitted(true);
        setLoading(false);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
        return;
      }
    } catch (err2) {
      console.log('FormSubmit backup failed, using mailto link...', err2);
    }

    // Tier 3: Direct mailto link fallback
    setLoading(false);
    const subject = encodeURIComponent(`QA Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Aswajith,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:aswajithpp45@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Interested in discussing a Software Tester / QA Specialist position, software testing audit, or QA project? Feel free to reach out!
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                <span className="success-icon">✓</span>
                Message sent successfully! I will respond to your QA inquiry shortly.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g. john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message / Opportunity Details</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Mention your software testing project requirements or QA role details..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'Sending Request...' : 'Send QA Inquiry'}
            </button>
          </form>
        </div>

        <div className="contact-sidebar">
          <h3 className="sidebar-name">Aswajith P P</h3>
          <p className="sidebar-role">Software Tester / QA Engineer</p>

          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-icon">📧</span>
              <div>
                <span className="detail-label">Direct Email</span>
                <a href="mailto:aswajithpp45@gmail.com" className="detail-value">aswajithpp45@gmail.com</a>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div>
                <span className="detail-label">Location</span>
                <span className="detail-value">Kerala, India</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/Aswajith2255" target="_blank" rel="noopener noreferrer" className="social-icon">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/aswajith-pp-b4a740378/" target="_blank" rel="noopener noreferrer" className="social-icon">
              LinkedIn
            </a>
            <a href="mailto:aswajithpp45@gmail.com" className="social-icon">
              Email
            </a>
            <a href="https://www.instagram.com/aswa.jith__?igsh=MWRzMTg0NHd2bGVpcg==" target="_blank" rel="noopener noreferrer" className="social-icon">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
