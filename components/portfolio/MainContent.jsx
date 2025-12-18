"use client";

import React from "react";
import { usePortfolio } from "../../hooks/usePortfolio";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ServicesSection from "./sections/ServicesSection";
import PortfolioSection from "./sections/PortfolioSection";
import ContactSection from "./sections/ContactSection";

const MainContent = () => {
  const { activeSection, isMobileMenuOpen } = usePortfolio();

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "services":
        return <ServicesSection />;
      case "portfolio":
        return <PortfolioSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className={`main-content ${isMobileMenuOpen ? "open" : ""}`}>
      <div className="section active">
        {renderActiveSection()}
      </div>
    </div>
  );
};

export default MainContent;
