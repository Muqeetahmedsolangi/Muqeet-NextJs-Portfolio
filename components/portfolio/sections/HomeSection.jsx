"use client";

import React, { useEffect, useRef } from "react";
import { usePortfolio } from "../../../hooks/usePortfolio";

const HomeSection = () => {
  const typingRef = useRef(null);
  const { navigateToSection } = usePortfolio();

  useEffect(() => {
    let timeoutId;
    if (typeof window !== "undefined" && typingRef.current) {
      const texts = [
        "Full Stack Software Engineer",
        "Web & Mobile Developer",
        "Cloud Architecture Expert"
      ];
      
      let currentIndex = 0;
      let currentText = "";
      let isDeleting = false;
      let charIndex = 0;
      let isMounted = true;

      const typeEffect = () => {
        if (!isMounted) return;
        
        const fullText = texts[currentIndex];
        
        if (isDeleting) {
          currentText = fullText.substring(0, charIndex - 1);
          charIndex--;
        } else {
          currentText = fullText.substring(0, charIndex + 1);
          charIndex++;
        }

        if (typingRef.current && isMounted) {
          typingRef.current.textContent = currentText;
        }

        let typeSpeed = isDeleting ? 50 : 80;

        if (!isDeleting && charIndex === fullText.length) {
          typeSpeed = 2000;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % texts.length;
          typeSpeed = 500;
        }

        timeoutId = setTimeout(typeEffect, typeSpeed);
      };

      typeEffect();
      
      return () => {
        isMounted = false;
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <div className="home" id="home">
      <div className="container">
        <div className="row">
          {/* Home Info */}
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is <span className="name">Muqeet Ahmed</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span ref={typingRef} className="typing"></span>
            </h3>
            <p>
              Full Stack Software Developer with 3+ years of hands-on experience in software development, 
              architecture, and team leadership. Expert in backend technologies including Node.js, Express.js, 
              RESTful/SOAP/GraphQL APIs, and comprehensive database management across PostgreSQL, MongoDB, 
              DynamoDB, MySQL. Specialized in AI integration with OpenAI & Anthropic, cloud deployment (AWS), 
              microservices, and cross-platform mobile development.
            </p>
            
            <div className="btn-group">
              <button 
                className="btn hire-me"
                onClick={() => navigateToSection("contact")}
              >
                <i className="fa fa-paper-plane"></i> Hire Me
              </button>
              <a 
                href="https://wa.me/923083160159?text=Hi%20Muqeet,%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </a>
              <a 
                href="/assets/resume/Muqeet Ahmed Full Stack Resume (2).pdf" 
                download
                className="btn btn-outline"
              >
                <i className="fa fa-download"></i> Download CV
              </a>
            </div>

            {/* Professional Links */}
            <div className="professional-links">
              <h4 className="links-title">Find Me On:</h4>
              <div className="links-grid">
                <a 
                  href="https://github.com/Muqeetahmedsolangi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                  title="GitHub Profile"
                >
                  <i className="fa-brands fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/muqeetahmed" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                  title="LinkedIn Profile"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://www.fiverr.com/zaviial?public_mode=true" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                  title="Fiverr Profile"
                >
                  <i className="fa-solid fa-f"></i>
                  <span>Fiverr</span>
                </a>
                <a 
                  href="https://www.upwork.com/freelancers/~0151e635a568d50da5" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                  title="Upwork Profile"
                >
                  <i className="fa-solid fa-u"></i>
                  <span>Upwork</span>
                </a>
                <a 
                  href="https://stackoverflow.com/users/30508733/zavii" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                  title="Stack Overflow Profile"
                >
                  <i className="fa-brands fa-stack-overflow"></i>
                  <span>Stack Overflow</span>
                </a>
              </div>
            </div>
          </div>

          {/* Home Image */}
          <div className="home-img padd-15">
            <img 
              src="/assets/images/profile/muqeet-profile.jpg" 
              alt="Muqeet Ahmed - Full Stack Developer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
