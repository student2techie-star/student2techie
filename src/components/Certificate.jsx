import React from 'react';
import './Certificate.css';

function Certificate() {
  return (
    <section className="certificate-section" id="certificate">
      <div className="certificate-container">
        <div className="certificate-header">
          <h2 className="certificate-title">Earn a Certificate That Matters</h2>
          <div className="certificate-title-underline"></div>
          <p className="certificate-description">
            Our industry-recognized certificates validate your skills and boost your resume.
            Each certificate includes a unique verification ID, course details, and is digitally
            signed by Student2Techie Academy.
          </p>
        </div>

        <div className="certificate-preview-wrapper">
          <div className="certificate-preview">
            <div className="cert-border">
              <div className="cert-inner">
                {/* Corner decorations */}
                <div className="cert-corner cert-corner-tl"></div>
                <div className="cert-corner cert-corner-tr"></div>
                <div className="cert-corner cert-corner-bl"></div>
                <div className="cert-corner cert-corner-br"></div>

                {/* Header */}
                <div className="cert-logo">
                  <span className="cert-logo-badge">S2T</span>
                </div>
                <h3 className="cert-academy-name">Student2Techie Academy</h3>
                <div className="cert-divider"></div>
                <h4 className="cert-heading">Certificate of Completion</h4>

                {/* Body */}
                <p className="cert-subtext">This is to certify that</p>
                <p className="cert-student-name">Student Name</p>
                <p className="cert-body-text">
                  has successfully completed the{' '}
                  <strong>Full Stack MERN Development</strong> program
                  conducted by Student2Techie Academy, demonstrating proficiency in
                  all required coursework and projects.
                </p>

                {/* Verification */}
                <div className="cert-verification">
                  <span className="cert-verification-label">Verification ID:</span>
                  <span className="cert-verification-id">S2T-2025-MERN-04872</span>
                </div>

                {/* Seal & Signature */}
                <div className="cert-footer">
                  <div className="cert-signature-block">
                    <div className="cert-signature-line"></div>
                    <p className="cert-signature-label">Date of Issue</p>
                    <p className="cert-signature-value">June 6, 2025</p>
                  </div>

                  <div className="cert-seal">
                    <div className="cert-seal-inner">
                      <span className="cert-seal-text">S2T</span>
                      <span className="cert-seal-sub">VERIFIED</span>
                    </div>
                  </div>

                  <div className="cert-signature-block">
                    <div className="cert-signature-line"></div>
                    <p className="cert-signature-label">Program Director</p>
                    <p className="cert-signature-value">Student2Techie Academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
