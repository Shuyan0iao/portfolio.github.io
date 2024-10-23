import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
  const [activeModal, setActiveModal] = useState(null);

const experienceData = [
  {
    title: "Software Engineer",
    company: "American Home Textile",
    year: "2024 - Present",
    description: "Develop a scalable, data-driven, vendor-independent CRM platform",
    detailedDescription: (
      <>
        <p>1. Develop a scalable, data-driven, vendor-independent CRM platform using Java, Vue, Element UI, and Redis, enhancing customer data management and marketing automation efficiency.</p>
        <p>2. Developed data visualization capabilities, effectively communicating technical concepts to non-technical stakeholders to support data-driven decision-making, generating insightful charts across sales, marketing, and service dimensions.</p>
        <p>3. Designed customizable workflows with modular extensions, implementing multi-tiered approval permissions to ensure robust data security and streamline operations.</p>
        <p>4. Established automated reminders for customer follow-ups, enhancing communication, record-keeping, and task management efficiency.</p>
      </>
    ),
  },
  {
    title: "Full Stack Developer Intern",
    company: "Airclub Software",
    year: "2023 - 2024",
    description: "Spearheaded the development of a part of the membership application",
    detailedDescription: (
      <>
        <p>1. Spearheaded the development of a part of the membership application, overseeing both front-end and back-end functionality, resulting in a 20% increase in user retention.</p>
        <p>2. Applied user behavior analysis to enhance user experience. Collaborated with the visual design team using Figma to ensure a smooth and consistent UI/UX.</p>
        <p>3. Developed and maintained an integrated software platform using TypeScript, React, Node.js, GraphQL, and Tailwind CSS, ensuring timely delivery and customer satisfaction.</p>
        <p>4. Refactored large components into smaller, reusable modules, reducing rendering overhead by 15%, while ensuring cross-browser compatibility through progressive enhancement techniques.</p>
      </>
    ),
  },
  {
    title: "Data Analyst",
    company: "Women’s Economic Ventures",
    year: "2023",
    description: "Formed a deep collaboration with a third-party white-label platform to design a full-stack solution for UC and nonprofit field projects",
    detailedDescription: (
      <>
        <p>1. Conducted extensive data analysis on over 18,000 potential client companies, introducing new financing methods that significantly increased fund recovery rates by over 40%.</p>
        <p>2. Developed operational reports and dashboards in Tableau, integrating interactive design elements to enhance the project's functionality and structure.</p>
        <p>3. Established a white-label solution incorporating storage services, integrating front-end and back-end to create an intelligent management platform.</p>
      </>
    ),
  },
];


  const handleLearnMoreClick = (index) => {
    setActiveModal(index);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <section className="skills section" id="experience">
      <div className="container flex-center">
        <h1 className="section-title-01">EXPERIENCE</h1>
        <h2 className="section-title-02">EXPERIENCE</h2>
        <div className="content">
          <div className="skills-description">
            {/* Optional description can be added here */}
          </div>
          <div className="skills-info">
            {experienceData.map((exp, index) => (
              <div className="experience-card" key={index}>
                <div className="upper">
                  <h3>{exp.title}</h3>
                  <h5>{exp.company}</h5>
                  <span>{exp.year}</span>
                </div>
                <div className="hr"></div>
                <h4><label>WORK</label></h4>
                <p>{exp.description}</p>
                <div className="learn-more-btn" onClick={() => handleLearnMoreClick(index)}>
                  Learn more <i className='bx bx-chevrons-right'></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {experienceData.map((exp, index) => (
        <div className={`service-modal flex-center ${activeModal === index ? 'active' : ''}`} key={index}>
          <div className="service-modal-body">
            <i className="bx bxs-message-square-x modal-close-btn" onClick={handleCloseModal}></i>
            <h3>{exp.company}</h3>
            <h4>{exp.title}</h4>
            <div>{exp.detailedDescription}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;