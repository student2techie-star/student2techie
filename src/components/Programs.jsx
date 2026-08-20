import React from 'react';
import './Programs.css';

const programs = [
  {
    icon: '💻',
    title: 'Web Development',
    subtitle: 'Frontend + Backend',
    duration: '8 Weeks',
    desc: 'Learn to build responsive websites from scratch. This web development internship covers HTML, CSS, JavaScript and React so you can develop the frontend and backend skills employers look for.',
    topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    color: '#2563EB',
  },
  {
    icon: '🚀',
    title: 'Full Stack MERN',
    subtitle: 'MongoDB · Express · React · Node.js',
    duration: '12 Weeks',
    desc: 'Go deeper with a full stack MERN internship. Build complete web applications using MongoDB, Express, React and Node.js while working on real projects that strengthen your developer portfolio.',
    topics: ['MongoDB', 'Express', 'React', 'Node.js'],
    color: '#7C3AED',
  },
  {
    icon: '🐍',
    title: 'Python & Data Science',
    subtitle: 'Analysis + Machine Learning',
    duration: '10 Weeks',
    desc: 'Start your Python internship by mastering data analysis with Pandas and NumPy, then apply machine learning techniques to real datasets — a strong foundation for careers in data science.',
    topics: ['Python', 'Pandas', 'NumPy', 'Machine Learning'],
    color: '#059669',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    subtitle: 'Research · Design · Prototype',
    duration: '6 Weeks',
    desc: 'Learn user research, wireframing and prototyping in Figma. This program helps students develop the design thinking and interface skills needed for product and UX roles.',
    topics: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
    color: '#D97706',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    subtitle: 'React Native',
    duration: '10 Weeks',
    desc: 'Build cross-platform mobile apps with React Native and Expo. Students learn to integrate APIs, work with Firebase and ship production-ready applications for iOS and Android.',
    topics: ['React Native', 'Expo', 'Firebase', 'APIs'],
    color: '#DC2626',
  },
];

function Programs() {
  return (
    <section className="programs-section fade-in" id="programs">
      <div className="programs-container">
        <div className="programs-header">
          <h2 className="programs-title">Training Programs for Students</h2>
          <div className="programs-title-underline"></div>
          <p className="programs-subtitle">
            Hands-on tech training designed to help students build career-ready skills through real projects and guided mentorship.
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
              {program.desc && (
                <p className="program-card-desc">{program.desc}</p>
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

              <a href='#contact' className="program-enroll-btn">Enroll Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
