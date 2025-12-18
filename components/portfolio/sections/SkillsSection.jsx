"use client";

import React, { useState } from "react";
import CustomSolutionCTA from "../CustomSolutionCTA";
import PageHeader from "../PageHeader";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillsData = {
    frontend: {
      title: "Frontend Development",
      icon: "fa-desktop",
      skills: [
        "React.js", "Next.js", "Nuxt.js", "Vue.js", "Angular", 
        "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", 
        "Bootstrap", "jQuery", "Redux", "Zustand", "Material-UI"
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "fa-server",
      skills: [
        "Node.js", "Express.js", "Bun.js", "Nest.js", "Flask", 
        "Django", "PHP", "Laravel", "REST APIs", "GraphQL", 
        "SOAP APIs", "WebSocket", "Socket.io"
      ]
    },
    databases: {
      title: "Databases & ORMs",
      icon: "fa-database",
      skills: [
        "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", 
        "MariaDB", "Sequelize", "Mongoose", "Prisma", "Drizzle ORM"
      ]
    },
    cloud: {
      title: "Cloud & Infrastructure",
      icon: "fa-cloud",
      skills: [
        "AWS Lambda", "AWS EC2", "AWS S3", "Azure", "Google Cloud", 
        "Heroku", "Vercel", "Firebase", "Supabase", "Cloudflare"
      ]
    },
    devops: {
      title: "DevOps & Tools",
      icon: "fa-tools",
      skills: [
        "Docker", "Kubernetes", "CI/CD", "Git", "GitHub", 
        "GitLab", "Nginx", "Linux", "Microservices", "Serverless"
      ]
    },
    mobile: {
      title: "Mobile Development",
      icon: "fa-mobile-alt",
      skills: [
        "React Native", "Ionic", "Capacitor", "Expo", 
        "iOS Development", "Android Development", "PWA", "WebRTC"
      ]
    },
    ai: {
      title: "AI & Machine Learning",
      icon: "fa-brain",
      skills: [
        "OpenAI GPT", "Anthropic Claude", "TensorFlow.js", 
        "LangChain", "Prompt Engineering", "ML Models"
      ]
    }
  };

  const categories = [
    { id: "all", name: "All", icon: "fa-th" },
    { id: "frontend", name: "Frontend", icon: "fa-desktop" },
    { id: "backend", name: "Backend", icon: "fa-server" },
    { id: "databases", name: "Databases", icon: "fa-database" },
    { id: "cloud", name: "Cloud", icon: "fa-cloud" },
    { id: "devops", name: "DevOps", icon: "fa-tools" },
    { id: "mobile", name: "Mobile", icon: "fa-mobile-alt" },
    { id: "ai", name: "AI/ML", icon: "fa-brain" }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return Object.entries(skillsData);
    }
    return [[activeCategory, skillsData[activeCategory]]];
  };

  return (
    <div className="skills-section" id="skills">
      <div className="container">
        {/* Page Header with Buttons */}
        <PageHeader 
          title="Technical Skills"
          description="A comprehensive overview of my technical expertise across various domains. With 3+ years of hands-on experience, I've mastered modern technologies and frameworks to deliver high-quality solutions."
        />

        {/* Category Filter */}
        <div className="row">
          <div className="category-filter padd-15">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <i className={`fa ${category.icon}`}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="row">
          {getFilteredSkills().map(([key, category]) => (
            <div key={key} className="skills-category-wrapper padd-15">
              <div className="skills-category-box">
                <div className="category-header-section">
                  <div className="header-left">
                    <div className="category-icon-box">
                      <i className={`fa ${category.icon}`}></i>
                    </div>
                    <h3 className="category-name">{category.title}</h3>
                  </div>
                  <div className="skills-counter">{category.skills.length} Skills</div>
                </div>

                <div className="skills-content">
                  {category.skills.map((skill, index) => (
                    <span key={index} className="skill-item">
                      {skill}
                    </span>
                  ))}
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

export default SkillsSection;
