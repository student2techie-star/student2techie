import React from 'react';
import './Programs.css';

const programs = [
  {
    icon: '💻',
    title: 'Web Development',
    subtitle: 'Frontend + Backend',
    duration: '8 Weeks',
    topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    color: '#2563EB',
  },
  {
    icon: '🚀',
    title: 'Full Stack MERN',
    subtitle: '',
    duration: '12 Weeks',
    topics: ['MongoDB', 'Express', 'React', 'Node.js'],
    color: '#7C3AED',
  },
  {
    icon: '🐍',
    title: 'Python & Data Science',
    subtitle: '',
    duration: '10 Weeks',
    topics: ['Python', 'Pandas', 'NumPy', 'Machine Learning'],
    color: '#059669',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    subtitle: '',
    duration: '6 Weeks',
    topics: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
    color: '#D97706',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    subtitle: 'React Native',
    duration: '10 Weeks',
    topics: ['React Native', 'Expo', 'Firebase', 'APIs'],
    color: '#DC2626',
  },
];

function Programs() {
  return (
    <section className="programs-section fade-in" id="programs">
      <div className="programs-container">
        <div className="programs-header">
          <h2 className="programs-title">Programs We Offer</h2>
          <div className="programs-title-underline"></div>
          <p className="programs-subtitle">
            Industry-ready programs designed to take you from beginner to job-ready professional.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div className="program-card" key={index}>
              <div
                className="program-icon"
                style={{ backgroundColor: `${program.color}15` }}
              >
                <span>{program.icon}</span>
              </div>

              <h3 className="program-card-title">{program.title}</h3>
              {program.subtitle && (
                <p className="program-card-subtitle">{program.subtitle}</p>
              )}

              <span
                className="program-duration"
                style={{ backgroundColor: `${program.color}15`, color: program.color }}
              >
                {program.duration}
              </span>

              <div className="program-topics">
                {program.topics.map((topic, i) => (
                  <span className="program-topic-tag" key={i}>
                    {topic}
                  </span>
                ))}
              </div>

              <button className="program-enroll-btn">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
