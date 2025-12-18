"use client";

import React, { useState } from "react";
import CustomSolutionCTA from "../CustomSolutionCTA";
import PageHeader from "../PageHeader";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Babyzilla.ai",
      subtitle: "AI-Powered Excel Processing Platform",
      description: "Built AI-powered Excel processing platform using Anthropic Claude Sonnet with streaming APIs for real-time responses. Enabled bulk Excel file processing with intelligent formula generation and data visualization.",
      technologies: ["Anthropic Claude", "Node.js", "Nuxt.js", "AWS S3", "Stripe", "MySQL"],
      image: "/assets/images/projects/babyzilla.png",
      link: "https://app.babyzilla.ai",
      category: "ai"
    },
    {
      title: "Orderain.com",
      subtitle: "Drag & Drop Website Builder",
      description: "Developed drag-and-drop website builder platform leveraging OpenAI for content generation. Implemented features for instant website creation, custom domain mapping, and one-click publishing.",
      technologies: ["OpenAI", "React.js", "Node.js", "Domain Mapping"],
      image: "/assets/images/projects/orderain.png", 
      link: "https://orderain.com",
      category: "saas"
    },
    {
      title: "Vip-Me",
      subtitle: "Event & Restaurant Management App",
      description: "Engineered event and restaurant management system using React Native for iOS/Android. Implemented multi-role architecture with real-time booking systems, social features, and WebRTC-based video calling.",
      technologies: ["React Native", "Node.js", "AWS EC2", "Stripe", "WebRTC"],
      image: "/assets/images/projects/vip-me.png",
      link: "#",
      category: "mobile"
    },
    {
      title: "Cadence.io",
      subtitle: "Music Distribution Platform",
      description: "Engineered music distribution system enabling artists to upload songs to Spotify, YouTube Music, Apple Music, and multiple DSPs simultaneously. Implemented Cloudflare CDN for traffic management.",
      technologies: ["React.js", "Node.js", "Cloudflare CDN", "Multiple DSPs"],
      image: "/assets/images/projects/cadence.png",
      link: "https://cadenceio.com",
      category: "web"
    },
    {
      title: "ChildAutism",
      subtitle: "AI Autism Screening Platform",
      description: "AI-powered autism detection platform using eye-tracking technology to analyze children's responses to stimulus videos. Developed doctor-patient portal with role-based access and appointment booking.",
      technologies: ["Next.js", "TensorFlow.js", "WebGazer.js", "Computer Vision"],
      image: "/assets/images/projects/child-autism.png",
      link: "#",
      category: "ai"
    },
    {
      title: "Real-Time Chat",
      subtitle: "Messaging & Communication Platform",
      description: "Developed messaging platform using PERN Stack with Socket.io for instant messaging and WebRTC for peer-to-peer communication. Implemented JWT authentication, file sharing, and end-to-end encryption.",
      technologies: ["PostgreSQL", "Express.js", "React.js", "Node.js", "Socket.io", "WebRTC"],
      image: "/assets/images/projects/chat-app.png",
      link: "#",
      category: "web"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ai", name: "AI & ML" },
    { id: "saas", name: "SaaS" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile Apps" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-section" id="portfolio">
      <div className="container">
        {/* Page Header with Buttons */}
        <PageHeader 
          title="Projects I Built"
          description="Showcasing my recent projects and professional work. Each project demonstrates my expertise in modern technologies and commitment to delivering high-quality solutions."
        />
        
        {/* Category Filter */}
        <div className="row">
          <div className="portfolio-filter padd-15">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="row">
          {filteredProjects.map((project, index) => (
            <div key={index} className="portfolio-item padd-15">
              <div className="portfolio-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    {project.link !== "#" && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="view-project-btn"
                      >
                        <i className="fa fa-external-link-alt"></i>
                        View Live
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <h4 className="project-subtitle">{project.subtitle}</h4>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Need a Custom Solution Section */}
        <CustomSolutionCTA />
      </div>
    </div>
  );
};

export default PortfolioSection;
