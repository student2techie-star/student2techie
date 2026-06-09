import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CertificateVerifier.css";
import studentData from "../Data/StudentData.json";

export default function CertificateVerifier() {
  const [email, setEmail]       = useState("");
  const [regNo, setRegNo]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [touched, setTouched]   = useState(false);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const handleVerify = () => {
    if (!email.trim() || !regNo.trim()) {
      setTouched(true);
      return;
    }
    setLoading(true);
    setNotFound(false);

    setTimeout(() => {
      const found = studentData.find(
        (s) =>
          s.email.toLowerCase() === email.trim().toLowerCase() &&
          s.register_number.replace(/\s/g, "").toLowerCase() ===
            regNo.trim().replace(/\s/g, "").toLowerCase()
      );

      if (found) {
        navigate("/verify", { state: { student: found } });
      } else {
        setNotFound(true);
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="page">
      <h2 className="contact-title">Verify Your Certificate</h2>
      <main className="main">

        <div className="card verify-card">
          <div className="card-label">STUDENT DETAILS</div>

          <div className="field-group">
            <label className="field-label" htmlFor="email">Registered Email</label>
            <input
              id="email"
              className={`field-input ${touched && !email.trim() ? "field-error" : ""}`}
              type="email"
              placeholder="e.g. example@gmail.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setNotFound(false); }}
              onKeyDown={(e) => e.key === "Enter" && handleVerify()}
            />
            {touched && !email.trim() && (
              <span className="error-msg">Email is required</span>
            )}
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="regno">Register Number</label>
            <input
              id="regno"
              className={`field-input ${touched && !regNo.trim() ? "field-error" : ""}`}
              type="text"
              placeholder="e.g. XX29080XX"
              value={regNo}
              onChange={(e) => { setRegNo(e.target.value); setNotFound(false); }}
              onKeyDown={(e) => e.key === "Enter" && handleVerify()}
            />
            {touched && !regNo.trim() && (
              <span className="error-msg">Register number is required</span>
            )}
          </div>

          {/* Not found inline error */}
          {notFound && (
            <div className="not-found-banner">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="var(--red)" strokeWidth="2"/>
                <line x1="12" y1="8" x2="12" y2="12" stroke="var(--red)" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="var(--red)"/>
              </svg>
              No record found. Please check your email and register number.
            </div>
          )}

          <button
            className={`btn-verify ${loading ? "btn-loading" : ""}`}
            onClick={handleVerify}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner" />
                Verifying…
              </>
            ) : (
              "Verify Certificate"
            )}
          </button>
        </div>

      </main>
    </div>
  );
}