"use client";

import React from "react";
import { usePortfolio } from "../../hooks/usePortfolio";

const PageHeader = ({ title, description }) => {
  const { navigateToSection } = usePortfolio();

  return (
    <>
      {/* Section Title with Buttons */}
      <div className="row">
        <div className="section-title-with-buttons padd-15">
          <h2>{title}</h2>
          <div className="title-buttons">
            <button 
              className="btn hire-me-btn"
              onClick={() => navigateToSection("contact")}
            >
              <i className="fa fa-paper-plane"></i> Hire Me
            </button>
            <a 
              href="/assets/resume/Muqeet Ahmed Full Stack Resume (2).pdf" 
              download
              className="btn download-cv-btn"
            >
              <i className="fa fa-download"></i> Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Section Description - Only render if description exists */}
      {description && (
        <div className="row">
          <div className="page-header-content padd-15">
            <p className="page-description">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PageHeader;

