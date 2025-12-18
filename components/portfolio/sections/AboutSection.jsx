"use client";

import React from "react";
import { usePortfolio } from "../../../hooks/usePortfolio";
import CustomSolutionCTA from "../CustomSolutionCTA";
import PageHeader from "../PageHeader";

const AboutSection = () => {
  const { navigateToSection } = usePortfolio();

  const personalInfoTop = [
    { label: "Name", value: "Muqeet Ahmed", icon: "fa-user" },
    { label: "Phone", value: "+92 308 3160159", icon: "fa-phone", link: "tel:+923083160159" },
    { label: "Location", value: "Karachi, Pakistan", icon: "fa-map-marker-alt" },
    { label: "Experience", value: "3+ Years", icon: "fa-briefcase" }
  ];

  const personalInfoBottom = [
    { label: "Email", value: "solangimuqueet@gmail.com", icon: "fa-envelope", link: "mailto:solangimuqueet@gmail.com" },
    { label: "Website", value: "muqeetahmedportfolio.netlify.app", icon: "fa-globe", link: "https://muqeetahmedportfolio.netlify.app" }
  ];

  const technicalSkills = [
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Bun.js", "Nest.js", "Flask", "Django", "PHP", "Laravel"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "Nuxt.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML5/CSS3"]
    },
    {
      title: "Mobile Development",
      skills: ["React Native", "Ionic", "Capacitor", "Expo", "iOS Development", "Android Development", "PWA"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis", "MariaDB", "Sequelize", "Mongoose", "Prisma"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS Lambda", "AWS EC2", "AWS S3", "Docker", "Kubernetes", "CI/CD", "Git", "Nginx", "Microservices"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["OpenAI GPT", "Anthropic Claude", "TensorFlow.js", "LangChain", "Prompt Engineering", "ML Models"]
    }
  ];

  const experience = [
    {
      period: "August 2024 - Present",
      title: "Full Stack Developer | Web & Mobile Applications",
      company: "TURINGOID",
      website: "www.turingoid.com",
      location: "Karachi, Pakistan",
      companyDescription: "Turingoid is a product-based technology company specializing in web and mobile application development for long-term enterprise clients, with strong focus on innovation, scalability, and cutting-edge software solutions.",
      responsibilities: [
        "Lead and mentor junior developers, conducting code reviews and providing technical guidance to enhance team productivity",
        "Architect and maintain scalable backend systems, resolving critical bugs and optimizing application performance",
        "Collaborate with cross-functional teams to translate business requirements into technical solutions"
      ],
      projects: [
        {
          name: "Babyzilla.ai",
          link: "https://app.babyzilla.ai",
          description: "Built AI-powered Excel processing platform using Anthropic Claude Sonnet with streaming APIs for real-time responses. Enabled bulk Excel file processing with intelligent formula generation and data visualization through interactive chat interface. Implemented AWS S3 storage, Nuxt.js/Node.js stack, Stripe payments, SSE (Server-Sent Events) for live data streaming, and MySQL/Sequelize for user management."
        },
        {
          name: "Orderain.com",
          link: "https://orderain.com",
          description: "Developed drag-and-drop website builder platform leveraging OpenAI for content generation and custom component libraries. Implemented features for instant website creation, custom domain mapping, and one-click publishing. Built responsive editing interface for non-technical users to create websites without coding knowledge."
        },
        {
          name: "Vip-Me - Cross-Platform Mobile Application",
          link: null,
          description: "Engineered event and restaurant management system using React Native for iOS/Android with Node.js backend on AWS EC2. Implemented multi-role architecture supporting users, businesses, servers, bouncers, and admins. Integrated Stripe webhooks for secure payment processing, real-time booking systems, and ticket management. Built social features including stories, reels, and WebSockets for messaging and WebRTC-based video calling."
        },
        {
          name: "Cadence.io - Music Distribution Platform",
          link: "https://cadenceio.com",
          description: "Engineered music distribution system using React.js and Node.js, enabling artists to upload songs to Spotify, YouTube Music, Apple Music, and multiple DSPs simultaneously. Implemented Cloudflare CDN for traffic management, Google Analytics for performance tracking, and centralized dashboard for UK celebrities."
        }
      ]
    },
    {
      period: "April 2023 - July 2024",
      title: "MERN Stack Developer",
      company: "Digital Elliptical",
      website: "www.digitalelliptical.com",
      location: "Karachi, Pakistan",
      companyDescription: "Digital Elliptical Software service company specializing in enterprise-level SaaS products and large-scale management systems. Provides custom software development, system optimization, and digital transformation solutions for businesses across industries.",
      responsibilities: [
        "Developed responsive full-stack web applications with clean code architecture and optimized performance",
        "Worked closely with project managers and team leads to deliver projects on schedule while maintaining code quality",
        "Participated in code reviews and technical discussions to improve system architecture and team productivity"
      ],
      projects: [
        {
          name: "AFZ Logistics Services",
          link: "https://afzdeliveryservices.com",
          description: "Developed UAE-based logistics platform comprising web dashboard and mobile application. Built multi-role architecture (Admin/Manager/Business/User/Rider) using React.js, Redux, Node.js, and MySQL. Integrated Stripe Express for platform-wide payment processing and fee management. Implemented container tracking, ride assignment, ratings system, and Firebase push notifications for real-time updates across web and mobile platforms."
        },
        {
          name: "Salony",
          link: "https://www.salony.com",
          description: "Built on-demand beauty salon services platform connecting multiple salons across Kuwait for both home and in-salon services. Developed vendor management system for salon onboarding, rider assignment for home service delivery, and dual payment integration using Stripe, PayPal, and Stripe Connect for direct rider payments. Implemented Google Maps integration, real-time tracking, automated notifications, and responsive design for seamless cross-platform experience."
        },
        {
          name: "ViewNShop - Video E-Commerce Platform",
          link: "https://viewnshop.com",
          description: "Engineered video-commerce platform using React Native, Node.js, and WebRTC for live streaming shopping experience. Implemented multi-role architecture (Buyer/Seller/Reseller) with dropshipping capabilities, profit margin automation, and real-time inventory sync. Integrated video reels feature, secure payment gateways, and deployed on AWS with MongoDB for scalable data management across iOS, Android, and web platforms."
        }
      ]
    }
  ];

  const education = [
    {
      period: "January 2022 - January 2025",
      degree: "Bachelor's in Management Information Systems",
      institution: "University of Sindh",
      location: "Jamshoro, Pakistan",
      grade: "CGPA: 3.2/4.0"
    },
    {
      period: "February 2022 - February 2023",
      degree: "Web, Android & iOS Development",
      institution: "The GETS (Government Employees Training School)",
      location: "Jamshoro, Pakistan",
      grade: "GPA: 3.5/4.0"
    }
  ];

  return (
    <div className="about" id="about">
      <div className="container">
        {/* Page Header with Buttons */}
        <PageHeader 
          title="About Me"
          description=""
        />

        {/* Introduction Section */}
        <div className="row">
          <div className="about-intro-new padd-15">
            <h3 className="intro-heading">
              Full Stack Software Engineer <span className="experience-badge">| 3+ Years Experience</span>
            </h3>
            <p className="intro-paragraph">
              I'm a passionate Full Stack Software Developer with over 3 years of professional experience in building 
              modern web and mobile applications. I specialize in backend development, AI integration, and cloud architecture, 
              delivering scalable solutions for clients across UAE, Kuwait, UK, and USA. My expertise spans the entire 
              development lifecycle, from requirement analysis to deployment and maintenance.
            </p>
            <p className="intro-paragraph">
              Throughout my career, I've worked with cutting-edge technologies including Node.js, React.js, React Native, 
              AWS, and advanced AI models from OpenAI and Anthropic. I'm committed to writing clean, maintainable code 
              and staying updated with the latest industry trends and best practices.
            </p>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="row">
          <div className="personal-info-new padd-15">
            <h3 className="section-heading-new">
              Personal Information
              <span className="heading-underline"></span>
            </h3>
            
            {/* Top Row - 4 Cards */}
            <div className="info-cards-grid-top">
              {personalInfoTop.map((info, index) => (
                <div key={index} className="info-card-new">
                  <div className="info-icon-box">
                    <i className={`fa ${info.icon}`}></i>
                  </div>
                  <div className="info-text">
                    <span className="info-label-new">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="info-value-new info-link">
                        {info.value}
                      </a>
                    ) : (
                      <span className="info-value-new">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - 2 Cards */}
            <div className="info-cards-grid-bottom">
              {personalInfoBottom.map((info, index) => (
                <div key={index} className="info-card-new">
                  <div className="info-icon-box">
                    <i className={`fa ${info.icon}`}></i>
                  </div>
                  <div className="info-text">
                    <span className="info-label-new">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="info-value-new info-link">
                        {info.value}
                      </a>
                    ) : (
                      <span className="info-value-new">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="row">
          <div className="experience-section-new padd-15">
            <h3 className="section-heading-new">
              Professional Experience
              <span className="heading-underline"></span>
            </h3>
            <div className="experience-timeline">
              {experience.map((exp, index) => (
                <div key={index} className="experience-card-detailed">
                  <div className="exp-header">
                    <div className="exp-period">{exp.period}</div>
                    <h4 className="exp-title">{exp.title}</h4>
                    <div className="exp-company-info">
                      <div className="exp-company">
                        <i className="fa fa-building"></i> {exp.company}
                      </div>
                      <a href={`https://${exp.website}`} target="_blank" rel="noopener noreferrer" className="exp-website">
                        <i className="fa fa-globe"></i> {exp.website}
                      </a>
                    </div>
                    <div className="exp-location">
                      <i className="fa fa-map-marker-alt"></i> {exp.location}
                    </div>
                  </div>

                  <p className="company-description">{exp.companyDescription}</p>

                  <div className="exp-responsibilities">
                    <h5>Key Responsibilities:</h5>
                    <ul>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="exp-projects">
                    <h5>Key Projects:</h5>
                    {exp.projects.map((project, idx) => (
                      <div key={idx} className="project-detail">
                        <h6>
                          {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              {project.name} <i className="fa fa-external-link-alt"></i>
                            </a>
                          ) : (
                            project.name
                          )}
                        </h6>
                        <p>{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="row">
          <div className="education-section-new padd-15">
            <h3 className="section-heading-new">
              Education
              <span className="heading-underline"></span>
            </h3>
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={index} className="education-card-new">
                  <div className="edu-period">{edu.period}</div>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <div className="edu-institution">
                    <i className="fa fa-university"></i> {edu.institution}
                  </div>
                  <div className="edu-location">
                    <i className="fa fa-map-marker-alt"></i> {edu.location}
                  </div>
                  <div className="edu-grade">
                    <i className="fa fa-star"></i> {edu.grade}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Need a Custom Solution Section */}
        <CustomSolutionCTA />
      </div>
    </div>
  );
};

export default AboutSection;
