"use client";

import React from "react";
import { usePortfolio } from "../../hooks/usePortfolio";

const CustomSolutionCTA = () => {
  const { navigateToSection } = usePortfolio();

  return (
    <div className="row">
      <div className="custom-solution-cta padd-15">
        <div className="cta-box">
          <h3>Need a Custom Solution?</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Let's work together to bring your ideas to life with cutting-edge technology and professional execution.
          </p>
          <button 
            className="btn cta-button"
            onClick={() => navigateToSection("contact")}
          >
            <i className="fa fa-comments"></i> Let's Discuss Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSolutionCTA;

