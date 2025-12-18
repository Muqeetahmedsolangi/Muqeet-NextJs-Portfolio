"use client";

import React from "react";
import { usePortfolio } from "../../hooks/usePortfolio";

const Sidebar = () => {
  const { 
    activeSection, 
    navigateToSection, 
    isMobileMenuOpen, 
    setIsMobileMenuOpen 
  } = usePortfolio();

  const navigationItems = [
    { id: "home", label: "Home", icon: "fa-home" },
    { id: "about", label: "About", icon: "fa-user" },
    { id: "services", label: "Services", icon: "fa-list" },
    { id: "portfolio", label: "Projects", icon: "fa-briefcase" },
    { id: "skills", label: "Skills", icon: "fa-code" },
    { id: "contact", label: "Contact", icon: "fa-comments" },
  ];

  return (
    <>
      {/* Sidebar */}
      <div className={`aside ${isMobileMenuOpen ? "open" : ""}`}>
        {/* Logo */}
        <div className="logo">
          <a href="#" onClick={(e) => e.preventDefault()}>
            <span>ZAV</span>i
          </a>
        </div>

        {/* Mobile Navigation Toggler */}
        <div 
          className={`nav-toggler ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
        </div>

        {/* Navigation Menu */}
        <ul className="nav">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(item.id);
                }}
              >
                <i className={`fa ${item.icon}`}></i>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
