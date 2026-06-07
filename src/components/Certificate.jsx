import React from "react";
import "./Certificate.css";
import CertificateImg from "../assets/Certificate.jpg";

function Certificate() {
  return (
    <section className="certificate-section" id="certificate">
      <div className="certificate-container">
        <div className="certificate-content">
          <h2 className="certificate-title">
            Internship Completion Certificate
          </h2>

          <p className="certificate-description">
            Receive an industry-recognized certificate after successfully
            completing your internship and project work.
          </p>
        </div>

        <div className="certificate-image-wrapper">
          <img
            src={CertificateImg}
            alt="Internship Certificate"
            className="certificate-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Certificate;