import React from 'react';
import './skills.css'; // Make sure to import your CSS file

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <h1 className="section-title-01">SKILLS</h1>
        <h2 className="section-title-02">SKILLS</h2>
        <div className="content">
          <div className="skills-description">
            {/* You can add a description here */}
          </div>
          <div className="skills-info education-all">
            {/* Education */}
            <div className="education">
              <h4><label>Education</label></h4>
              <ul className="edu-list">
                <li className="item">
                  <span className="year">2022-2023</span>
                  <p><span>Master of Technology</span> - University of California - Santa Barbara</p>
                </li>
                <li className="item">
                  <span className="year">2018-2022</span>
                  <p><span>Bachelor of Computer Science</span> - Eötvös Loránd University, Hungary</p>
                </li>
              </ul>
            </div>
            {/* Languages */}
            <div className="education">
              <h4><label>Languages</label></h4>
              <ul className="bars">
                <li className="bar">
                  <div className="info">
                    <span>HTML/CSS</span>
                    <span>95%</span>
                  </div>
                  <div className="line html"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>JavaScript / TypeScript</span>
                    <span>85%</span>
                  </div>
                  <div className="line css"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>C#</span>
                    <span>60%</span>
                  </div>
                  <div className="line javascript"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>Java</span>
                    <span>80%</span>
                  </div>
                  <div className="line jquery"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>Python</span>
                    <span>65%</span>
                  </div>
                  <div className="line java"></div>
                </li>
              </ul>
            </div>
            {/* Technologies */}
            <div className="education">
              <h4><label>Technologies</label></h4>
              <ul className="bars">
                <li className="bar">
                  <div className="info">
                    <span>React</span>
                    <span>85%</span>
                  </div>
                  <div className="line html"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>Node.js</span>
                    <span>75%</span>
                  </div>
                  <div className="line css"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>Jest</span>
                    <span>60%</span>
                  </div>
                  <div className="line javascript"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>GraphQL</span>
                    <span>80%</span>
                  </div>
                  <div className="line jquery"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>Docker</span>
                    <span>75%</span>
                  </div>
                  <div className="line java"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
