import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CertificateVerifier.css";

export default function Verify() {
  const { state } = useLocation();
  const navigate  = useNavigate();
  const student   = state?.student;

  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!student) {
    return (
      <div className="verify-page">
        <main className="verify-main">
          <div className="card result-card result-invalid" style={{ textAlign: "center" }}>
            <svg viewBox="0 0 64 64" fill="none" className="shield-icon">
              <path d="M32 4L8 14v18c0 14 10.5 24.5 24 28 13.5-3.5 24-14 24-28V14L32 4z"
                fill="var(--red-fill)" stroke="var(--red)" strokeWidth="2" />
              <line x1="24" y1="24" x2="40" y2="40" stroke="var(--red)" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="40" y1="24" x2="24" y2="40" stroke="var(--red)" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
            <div className="result-title invalid-title">No Data Found</div>
            <div className="result-sub">Please verify from the home page.</div>
            <button className="btn-reset" onClick={() => navigate("/")} style={{ marginTop: "20px" }}>
              ← Go Back
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="verify-page">
      <div className="verify-hero">
        <h2 className="verify-heading">Certificate Verification</h2>
        <p className="verify-subheading">Student2Techie Academy — Official Record</p>
      </div>

      <main className="verify-main">
        <div className="card result-card result-valid">

          <svg viewBox="0 0 64 64" fill="none" className="shield-icon">
            <path d="M32 4L8 14v18c0 14 10.5 24.5 24 28 13.5-3.5 24-14 24-28V14L32 4z"
              fill="var(--green-fill)" stroke="var(--green)" strokeWidth="2" />
            <polyline points="20,33 28,41 44,25" stroke="var(--green)"
              strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="result-title valid-title">Certificate Verified ✓</div>
          <div className="result-sub">
            This certificate is authentic and issued by Student2Techie Academy.
          </div>

          <div className="divider" />

          <div className="info-grid">
            {[
              ["Name",         student.name],
              ["College",      student.college],
              ["Department",   student.department],
              ["Register No.", student.register_number],
              ["Internship",   student.internship],
              ["Duration",     student.duration],
              ["Email",        student.email],
              ["Contact",      student.contact],
            ].map(([label, value]) => (
              <div className="info-row" key={label}>
                <span className="info-label">{label}</span>
                <span className="info-value">{value}</span>
              </div>
            ))}
          </div>

          <div className="badge-issued">
            <span className="badge-dot" />
            Issued by Student2Techie Academy
          </div>

          <button className="btn-reset" onClick={() => navigate("/")} style={{ marginTop: "24px" }}>
            ← Verify Another
          </button>

        </div>
      </main>
    </div>
  );
}