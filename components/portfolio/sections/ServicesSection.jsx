"use client";

import React from "react";
import CustomSolutionCTA from "../CustomSolutionCTA";
import PageHeader from "../PageHeader";

const ServicesSection = () => {
  const services = [
    {
      icon: "fa-server",
      title: "Backend Development",
      description: "Building robust and scalable backend systems using Node.js, Express.js, and modern frameworks. Expert in creating RESTful, GraphQL, and SOAP APIs with secure authentication and efficient data handling.",
      technologies: ["Node.js", "Express.js", "Bun.js", "Nest.js", "REST APIs", "GraphQL", "SOAP"],
      deliverables: [
        "API Development & Integration",
        "Microservices Architecture",
        "Database Design & Optimization",
        "Authentication & Authorization"
      ]
    },
    {
      icon: "fa-desktop",
      title: "Frontend Development",
      description: "Creating responsive and intuitive user interfaces using modern JavaScript frameworks. Delivering pixel-perfect designs with optimal performance and seamless user experiences across all devices.",
      technologies: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
      deliverables: [
        "Single Page Applications",
        "Responsive Web Design",
        "State Management",
        "Performance Optimization"
      ]
    },
    {
      icon: "fa-mobile-alt",
      title: "Mobile App Development",
      description: "Developing cross-platform mobile applications that work seamlessly on iOS and Android. Building native-like experiences with real-time features and offline capabilities.",
      technologies: ["React Native", "Ionic", "Capacitor", "Expo", "WebRTC"],
      deliverables: [
        "iOS & Android Apps",
        "Cross-Platform Solutions",
        "Real-time Features",
        "Push Notifications"
      ]
    },
    {
      icon: "fa-cloud",
      title: "Cloud & DevOps",
      description: "Deploying and managing applications on cloud platforms with automated CI/CD pipelines. Implementing containerization, orchestration, and monitoring for reliable and scalable infrastructure.",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx", "Azure", "Google Cloud"],
      deliverables: [
        "Cloud Infrastructure Setup",
        "Container Orchestration",
        "Automated Deployments",
        "Performance Monitoring"
      ]
    },
    {
      icon: "fa-database",
      title: "Database Management",
      description: "Designing efficient database architectures for both SQL and NoSQL systems. Optimizing queries, implementing data models, and ensuring data integrity with proper backup strategies.",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis", "Sequelize", "Prisma"],
      deliverables: [
        "Database Architecture",
        "Query Optimization",
        "Data Migration",
        "Backup & Recovery"
      ]
    },
    {
      icon: "fa-brain",
      title: "AI Integration",
      description: "Integrating cutting-edge AI capabilities into applications using OpenAI and Anthropic models. Building intelligent features like chatbots, content generation, and automated data processing.",
      technologies: ["OpenAI GPT", "Anthropic Claude", "TensorFlow.js", "LangChain"],
      deliverables: [
        "AI-Powered Chatbots",
        "Content Generation",
        "Data Analysis & Insights",
        "Custom AI Solutions"
      ]
    },
    {
      icon: "fa-code",
      title: "Full-Stack Solutions",
      description: "Providing end-to-end development from concept to deployment. Handling both frontend and backend, ensuring seamless integration and delivering complete, production-ready applications.",
      technologies: ["MERN Stack", "MEAN Stack", "MEVN Stack", "Full Stack Development"],
      deliverables: [
        "Complete Web Applications",
        "API Development",
        "Third-Party Integrations",
        "Maintenance & Support"
      ]
    },
    {
      icon: "fa-shield-alt",
      title: "Security & Authentication",
      description: "Implementing secure authentication systems and protecting applications from vulnerabilities. Ensuring data privacy with encryption, secure APIs, and compliance with industry standards.",
      technologies: ["JWT", "OAuth", "Auth0", "Encryption", "Security Best Practices"],
      deliverables: [
        "User Authentication",
        "Role-Based Access Control",
        "Data Encryption",
        "Security Audits"
      ]
    },
    {
      icon: "fa-credit-card",
      title: "Payment Integration",
      description: "Integrating secure payment gateways and handling complex payment workflows. Expert in implementing subscription models, marketplace splits, and automated commission distribution.",
      technologies: ["Stripe", "PayPal", "Stripe Connect", "Stripe Express", "Payment APIs"],
      deliverables: [
        "Payment Gateway Integration",
        "Subscription Management",
        "Marketplace Solutions",
        "Payment Security"
      ]
    },
    {
      icon: "fa-chart-line",
      title: "Performance Optimization",
      description: "Analyzing and optimizing application performance for faster load times and better user experience. Implementing caching strategies, code splitting, and efficient resource management.",
      technologies: ["Redis", "CDN", "Load Balancing", "Code Optimization", "Monitoring Tools"],
      deliverables: [
        "Speed Optimization",
        "Caching Implementation",
        "Database Optimization",
        "Performance Monitoring"
      ]
    },
    {
      icon: "fa-sync",
      title: "Real-Time Solutions",
      description: "Building real-time applications with WebSocket technology for instant communication. Implementing live updates, notifications, and collaborative features for dynamic user experiences.",
      technologies: ["WebSocket", "Socket.io", "WebRTC", "Server-Sent Events", "Real-time APIs"],
      deliverables: [
        "Real-time Chat",
        "Live Notifications",
        "Video/Audio Calling",
        "Collaborative Features"
      ]
    },
    {
      icon: "fa-wordpress",
      title: "CMS & E-Commerce",
      description: "Developing content management systems and e-commerce platforms with user-friendly interfaces. Creating custom solutions for product management, inventory tracking, and order processing.",
      technologies: ["WordPress", "WooCommerce", "Custom CMS", "E-commerce Solutions"],
      deliverables: [
        "CMS Development",
        "E-commerce Platforms",
        "Product Management",
        "Order Processing"
      ]
    }
  ];

  return (
    <div className="service" id="services">
      <div className="container">
        {/* Page Header with Buttons */}
        <PageHeader 
          title="Services"
          description="I offer comprehensive software development services covering the entire technology stack. With 3+ years of professional experience, I deliver high-quality solutions tailored to your specific business needs."
        />
        
        {/* Services Grid */}
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="service-item padd-15">
              <div className="service-item-inner">
                <div className="service-icon">
                  <i className={`fa ${service.icon}`}></i>
                </div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
                
                <div className="service-technologies">
                  <h5 className="tech-heading">Technologies:</h5>
                  <div className="tech-tags">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="service-deliverables">
                  <h5 className="deliverables-heading">What I Deliver:</h5>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <CustomSolutionCTA />
      </div>
    </div>
  );
};

export default ServicesSection;
