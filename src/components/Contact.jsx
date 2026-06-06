import React from 'react';
import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application! We will get back to you shortly.');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Ready to Start Your Tech Journey?</h2>
          <div className="contact-title-underline"></div>
        </div>

        <div className="contact-grid">
          {/* Left: Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">Full Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone</label>
                <input
                  className="form-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="college">College Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="college"
                  name="college"
                  placeholder="Enter your college name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="course">Course Interested In</label>
                <select
                  className="form-input form-select"
                  id="course"
                  name="course"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a program
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Full Stack MERN">Full Stack MERN</option>
                  <option value="Python & Data Science">Python &amp; Data Science</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  className="form-input form-textarea"
                  id="message"
                  name="message"
                  placeholder="Tell us about yourself and your goals..."
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                Submit Application
              </button>
            </form>
          </div>

          {/* Right: Contact info */}
          <div className="contact-info-wrapper">
            <div className="contact-info-card">
              <h3 className="contact-info-heading">Get in Touch</h3>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13L2 4" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info-label">Email</p>
                  <p className="contact-info-value">hello@student2techie.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info-label">Phone</p>
                  <p className="contact-info-value">+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info-label">Location</p>
                  <p className="contact-info-value">Chennai, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785a9.735 9.735 0 01-4.968-1.363l-.356-.212-3.691.968.985-3.599-.232-.37A9.726 9.726 0 012.27 12.05c0-5.395 4.391-9.786 9.79-9.786a9.74 9.74 0 016.921 2.867A9.72 9.72 0 0121.84 12.05c-.004 5.395-4.395 9.786-9.79 9.786zM12.05.262C5.443.262.08 5.625.08 12.05a11.72 11.72 0 001.57 5.87L0 24l6.305-1.654A11.84 11.84 0 0012.05 23.81c6.56 0 11.94-5.363 11.94-11.76C23.99 5.625 18.61.262 12.05.262z" />
                  </svg>
                </div>
                <div>
                  <p className="contact-info-label">WhatsApp</p>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-link"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="contact-map-placeholder">
              <div className="contact-map-inner">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="map-location-text">Chennai, Tamil Nadu</p>
                <p className="map-sub-text">India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
