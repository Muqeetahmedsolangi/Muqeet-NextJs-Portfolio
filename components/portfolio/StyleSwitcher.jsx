"use client";

import React from "react";
import { usePortfolio } from "../../hooks/usePortfolio";

const StyleSwitcher = () => {
  const { 
    activeColor, 
    setActiveColor, 
    isDarkMode, 
    setIsDarkMode,
    isStyleSwitcherOpen,
    setIsStyleSwitcherOpen,
    colorThemes 
  } = usePortfolio();

  const colorOptions = [
    { id: "color-1", color: "#ec1839" },
    { id: "color-2", color: "#fa5b0f" },
    { id: "color-3", color: "#37b182" },
    { id: "color-4", color: "#1854b5" },
    { id: "color-5", color: "#f021b2" },
  ];

  return (
    <div className={`style-switcher ${isStyleSwitcherOpen ? "open" : ""}`}>
      {/* Style Switcher Toggle Button */}
      <div 
        className="style-switcher-toggler s-icon"
        onClick={() => setIsStyleSwitcherOpen(!isStyleSwitcherOpen)}
      >
        <i className="fas fa-cog fa-spin"></i>
      </div>

      {/* Day/Night Mode Toggle */}
      <div className="day-night s-icon" onClick={setIsDarkMode}>
        <i className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
      </div>

      {/* Theme Colors Section */}
      <h4>Theme Colors</h4>
      <div className="colors">
        {colorOptions.map((option) => (
          <span
            key={option.id}
            className={`color-option ${option.id} ${activeColor === option.id ? "active" : ""}`}
            style={{ backgroundColor: option.color }}
            onClick={() => setActiveColor(option.id)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StyleSwitcher;
