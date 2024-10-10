import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
  const [activeModal, setActiveModal] = useState(null);

  const experienceData = [
    {
      title: "Front-end engineer",
      company: "American Home textile",
      year: "2024",
      description: "Designed and developed CRM platform",
      detailedDescription: (
        <>
          <p>1. Contributed to the development of a scalable, data-driven, vendor-independent CRM platform, significantly enhancing customer data management and marketing automation efficiency</p>
          <p>2. Utilized Docker for containerized deployment and coordinated deployment with automated scripts in Bitbucket pipelines, including AWS CLI installation and cluster authentication. Managed cloud resources on AWS, such as EC2, S3, RDS, and Lambda functions, greatly improving product performance and operational efficiency</p>
          <p>3. Implemented responsive, user-centric interfaces using React, Next.js, JavaScript, HTML, and CSS, and developed and maintained a robust backend with Node.js and MongoDB</p>
          <p>4. Integrated the distributed workflow engine Camunda for process orchestration and Keycloak for security authentication, enhancing system efficiency and security</p>
        </>
      ),
    },
    {
      title: "Software engineer",
      company: "Airclub software",
      year: "2023 - 2024",
      description: "Contributed to the development and maintenance of an integrated software platform",
      detailedDescription: (
        <>
          <p>1. Contributed to the development and maintenance of an integrated software platform using TypeScript, React, Node.js, GraphQL, and Tailwind CSS, from requirements gathering to final implementation.</p>
          <p>2. Led the development of the membership application independently, including the user interface. Collaborated with the visual design team using Figma. Ensured compatibility with older browsers, building complete functionalities using either graceful degradation or progressive enhancement as needed.</p>
          <p>3. Optimized initial page load time using dynamic import and code splitting technologies, loading specific modules only when needed. Reduced unnecessary asynchronous data requests and lazy-loaded non-visible components to minimize rendering blockages.</p>
          <p>4. Compressed all images in the project using ImageOptim, achieving an average compression rate of 40%, significantly reducing page load time. Selected the optimal image format based on usage scenarios, such as using WebP.</p>
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
          <p>1. Conducted extensive data analysis on over 18,000 potential client companies, introducing new financing methods that significantly increased fund recovery rates by over 40%</p>
          <p>2. Developed operational reports and dashboards in Tableau, integrating interactive design elements to enhance the project's functionality and structure</p>
          <p>3. Established a white-label solution incorporating storage services, integrating front-end and back-end to create an intelligent management platform</p>
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