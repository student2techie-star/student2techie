import React from "react";
import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const college = formData.get("college");
    const course = formData.get("course");
    const message = formData.get("message");

    const whatsappMessage = `
🎓 *New Internship Application*

👤 Full Name: ${fullName}
📧 Email: ${email}
📱 Phone: ${phone}
🏫 College: ${college}
📚 Course: ${course}

📝 Message:
${message}
`;

    const whatsappURL = `https://wa.me/919360293815?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Ready to Start Your Tech Journey?</h2>
          <div className="contact-title-underline"></div>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  className="form-input"
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  className="form-input"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">College Name</label>
                <input
                  className="form-input"
                  type="text"
                  name="college"
                  placeholder="Enter your college name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Course Interested In</label>
                <select
                  className="form-input form-select"
                  name="course"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a program
                  </option>
                  <option value="Web Development">
                    Web Development
                  </option>
                  <option value="Full Stack MERN">
                    Full Stack MERN
                  </option>
                  <option value="Python & Data Science">
                    Python & Data Science
                  </option>
                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-input form-textarea"
                  name="message"
                  placeholder="Tell us about yourself and your goals..."
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                Submit via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper">
            <div className="contact-info-card">
              <h3 className="contact-info-heading">Get in Touch</h3>

              <div className="contact-info-item">
                <div>
                  <p className="contact-info-label">Email</p>
                  <p className="contact-info-value">
                    student2techie@gmail.com
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div>
                  <p className="contact-info-label">Phone</p>
                  <p className="contact-info-value">
                    +91 93602 93815
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div>
                  <p className="contact-info-label">Location</p>
                  <p className="contact-info-value">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div>
                  <p className="contact-info-label">WhatsApp</p>
                  <a
                    href="https://wa.me/919360293815"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-link"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-map-placeholder">
              <div className="contact-map-inner">
                <p className="map-location-text">
                  Chennai, Tamil Nadu
                </p>
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