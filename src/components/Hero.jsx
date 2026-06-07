import { useState, useEffect, useRef } from 'react';
import './Hero.css';

const stats = [
  { target: 300, suffix: '+', label: 'Students Trained' },
  { target: 10, suffix: '+', label: 'Partner Companies' },
  { target: 100, suffix: '%', label: 'Certificate Rate' },
  { target: 4.5, suffix: '★', label: 'Student Rating', isDecimal: true },
];

function AnimatedCounter({ target, suffix, isDecimal }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            if (isDecimal) {
              setCount(parseFloat((eased * target).toFixed(1)));
            } else {
              setCount(Math.floor(eased * target));
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

/* SVG tech icons */
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.36 7.5 12 10.82 5.64 7.5 12 4.18zM5 8.82l6 3.33v6.67l-6-3.33V8.82zm8 10v-6.67l6-3.33v6.67l-6 3.33z" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2c-1.66 0-3 .34-4 1s-1.5 1.66-1.5 3v2h5v1H5c-1.66 0-3.12 1-3.5 3-.44 2.28-.46 3.68 0 6 .34 1.72 1.14 3 2.8 3h1.7v-2.7c0-1.88 1.62-3.54 3.5-3.54h5c1.34 0 2.5-1.12 2.5-2.46V6c0-1.3-1.12-2.28-2.5-2.6C13.82 2.13 12.88 2 12 2zm-2.5 2.25a.75.75 0 110 1.5.75.75 0 010-1.5z" />
    <path d="M18.5 7.76v2.7c0 1.88-1.62 3.54-3.5 3.54h-5c-1.34 0-2.5 1.12-2.5 2.46V20c0 1.3 1.22 2.06 2.5 2.46 1.54.48 3.01.56 4.85 0C16.08 22.04 17 21.24 17 20v-1.5h-5V18h7.5c1.66 0 2.28-1.16 2.8-2.9.54-1.8.52-3.53 0-5.9C21.88 7.64 20.7 7.76 19.3 7.76h-.8zm-3 12a.75.75 0 110 1.5.75.75 0 010-1.5z" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5l-5 7 5 7M16 5l5 7-5 7M14 4l-4 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DBIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid" />

      <div className="hero-floating-icons">
        <div className="hero-float-icon"><ReactIcon /></div>
        <div className="hero-float-icon"><NodeIcon /></div>
        <div className="hero-float-icon"><PythonIcon /></div>
        <div className="hero-float-icon"><CodeIcon /></div>
        <div className="hero-float-icon"><DBIcon /></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Applications Open for 2026
        </div>

        <h1 className="hero-title">
          Transform Your Student Life
          <br />
          Into a <span className="hero-title-accent">Tech Career</span>
        </h1>

        <p className="hero-subtitle">
          Real Internships. Online Classes. Offer Letters. Certificates.
          <br />
          Join hundreds of students who launched their tech careers with us.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Apply for Internship
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#programs" className="btn btn-outline">
            View Programs
          </a>
        </div>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <div className="hero-stat-number">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
              </div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
