"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [activeColor, setActiveColor] = useState("color-1");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStyleSwitcherOpen, setIsStyleSwitcherOpen] = useState(false);

  // Color themes matching your original portfolio
  const colorThemes = {
    "color-1": "#ec1839", // Red
    "color-2": "#fa5b0f", // Orange  
    "color-3": "#37b182", // Green
    "color-4": "#1854b5", // Blue
    "color-5": "#f021b2", // Pink
  };

  // Apply theme to CSS variables
  useEffect(() => {
    const portfolioBody = document.querySelector(".portfolio-body");
    if (portfolioBody) {
      portfolioBody.style.setProperty("--skin-color", colorThemes[activeColor]);
      
      // Apply dark/light mode
      if (isDarkMode) {
        portfolioBody.classList.add("dark-mode");
        portfolioBody.style.setProperty("--bg-black-900", "#151515");
        portfolioBody.style.setProperty("--bg-black-100", "#222222");
        portfolioBody.style.setProperty("--bg-black-50", "#393939");
        portfolioBody.style.setProperty("--text-black-900", "#ffffff");
        portfolioBody.style.setProperty("--text-black-700", "#e9e9e9");
      } else {
        portfolioBody.classList.remove("dark-mode");
        portfolioBody.style.setProperty("--bg-black-900", "#f2f2fc");
        portfolioBody.style.setProperty("--bg-black-100", "#fdf9ff");
        portfolioBody.style.setProperty("--bg-black-50", "#e8dfec");
        portfolioBody.style.setProperty("--text-black-900", "#302e4d");
        portfolioBody.style.setProperty("--text-black-700", "#504e70");
      }
    }
  }, [activeColor, isDarkMode]);

  const value = {
    // State
    activeSection,
    activeColor,
    isDarkMode,
    isMobileMenuOpen,
    isStyleSwitcherOpen,
    colorThemes,
    
    // Actions
    setActiveSection,
    setActiveColor,
    setIsDarkMode: () => setIsDarkMode(!isDarkMode),
    setIsMobileMenuOpen,
    setIsStyleSwitcherOpen,
    
    // Navigation
    navigateToSection: (section) => {
      setActiveSection(section);
      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    },
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
