"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import StyleSwitcher from "./StyleSwitcher";
import { PortfolioProvider } from "../../hooks/usePortfolio";

const PortfolioLayout = () => {
  return (
    <PortfolioProvider>
      <div className="portfolio-container">
        {/* Sidebar Navigation */}
        <Sidebar />
        
        {/* Main Content Area */}
        <MainContent />
        
        {/* Style Switcher */}
        <StyleSwitcher />
      </div>
    </PortfolioProvider>
  );
};

export default PortfolioLayout;
