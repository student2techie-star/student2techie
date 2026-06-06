import './HowItWorks.css';

const steps = [
  {
    number: 1,
    icon: '📝',
    title: 'Apply Online',
    desc: 'Fill out a simple application form with your details and interests.',
  },
  {
    number: 2,
    icon: '🎓',
    title: 'Attend Online Training',
    desc: 'Join live sessions and complete assignments at your own pace.',
  },
  {
    number: 3,
    icon: '📄',
    title: 'Get Offer Letter',
    desc: 'Receive an official internship offer letter from Student2Techie.',
  },
  {
    number: 4,
    icon: '💻',
    title: 'Complete Internship',
    desc: 'Work on real-world projects and build your professional portfolio.',
  },
  {
    number: 5,
    icon: '🏆',
    title: 'Earn Certificate',
    desc: 'Get your industry-recognized certificate upon successful completion.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works fade-in">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Your journey from student to techie in five simple steps.
          </p>
        </div>

        <div className="steps-container">
          <div className="steps-line">
            <div className="steps-line-fill" />
          </div>
          {steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-circle">
                <span className="step-number">{step.number}</span>
              </div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
