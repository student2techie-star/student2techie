import './Features.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 20h6M12 17v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 9l2 2-2 2M12 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Online Classes',
    desc: 'Live & recorded sessions by industry experts with hands-on coding exercises and real-time doubt clearing.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 13v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v6a2 2 0 002 2h14a2 2 0 002-2v-2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 3l-4 4-4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="14" r="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Internship Placement',
    desc: 'Real-world projects with top tech companies. Build your portfolio while gaining professional experience.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 8h8M8 12h6M8 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Offer Letter',
    desc: 'Official offer letter upon internship selection, adding credibility to your professional journey.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15l-3 3 1 2h4l1-2-3-3z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="12" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6v3l2 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Certificate',
    desc: 'Industry-recognized certificate on completion, verified digitally and valued by employers nationwide.',
  },
];

export default function Features() {
  return (
    <section id="features" className="features fade-in">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Everything you need to kickstart your tech career — from learning to landing your dream role.
          </p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
