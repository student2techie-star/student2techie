import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Priya Ramesh',
    initials: 'PR',
    college: 'Anna University',
    stars: 5,
    quote:
      'Student2Techie completely transformed my career path. The hands-on projects and mentorship helped me land my first developer role even before graduation!',
    gradient: 'linear-gradient(135deg, #2563EB, #7C3AED)',
  },
  {
    name: 'Karthik Selvam',
    initials: 'KS',
    college: 'VIT Vellore',
    stars: 5,
    quote:
      'The MERN stack internship was incredibly well-structured. The real-world project experience gave me the confidence to ace my technical interviews.',
    gradient: 'linear-gradient(135deg, #059669, #2563EB)',
  },
  {
    name: 'Deepika Murugan',
    initials: 'DM',
    college: 'PSG Tech Coimbatore',
    stars: 5,
    quote:
      'From zero coding knowledge to building full applications — Student2Techie made it possible. The certificate is recognized by top companies!',
    gradient: 'linear-gradient(135deg, #D97706, #DC2626)',
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Students Say</h2>
          <div className="testimonials-title-underline"></div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div
                className="testimonial-avatar"
                style={{ background: t.gradient }}
              >
                {t.initials}
              </div>

              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-college">{t.college}</p>

              <div className="testimonial-stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span className="testimonial-star" key={i}>
                    ★
                  </span>
                ))}
              </div>

              <p className="testimonial-quote">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
