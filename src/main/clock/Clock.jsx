import React, { useState, useEffect } from "react";
// Assuming you have a separate CSS file for styling
import "./clock.css";

export default function Clock() {
  const [offset, setOffset] = useState(0);
  const maxOffset = 0;
  const minOffset = -3;

  const cards = [
    {
      year: 2021,
      title: "Obtained Hungarian green card",
      passage:
        "I started developing and optimizing the ESG (Environmental, Social, and Governance) evaluation standard analysis API for Mingshan Think Tank.\n\nI collaborated with university professors in China to integrate and optimize the backend API for ESG analysis using C# and ASP.NET Core, enabling personalized customization and real-time analysis reports, while continuously improving performance.",
    },
    {
      year: 2022,
      title: "Graduated in Eötvös Loránd University",
      passage:
        "I completed my undergraduate studies at Eötvös Loránd University and started my master’s program at UCSB, maintained a high merit-based scholarship throughout.\n\nI also assisted Women’s Economic Ventures in forming deep partnerships with third-party white-label platforms, designed full-stack solutions for field cooperation projects between the University of California and nonprofit organizations.",
    },
    {
      year: 2023,
      title: "Graduated from UCSB",
      passage:
        "I finished my graduate studies at UCSB and began working at Airclub Software. I contributed to the development and maintenance of an integrated software platform using TypeScript, React, Node.js, GraphQL, and Tailwind CSS, and established a long-term collaboration with the Figma visual design team.",
    },
    {
      year: 2024,
      title: "Won the H1B lottery",
      passage:
        "I joined American Home Textile and participated in developing a CRM platform.\n\nI am currently exploring more opportunities for the future ~!",
    },
  ];

  const slideToPrev = () => {
    setOffset((prevOffset) => Math.min(maxOffset, prevOffset + 1));
  };

  const slideToNext = () => {
    setOffset((prevOffset) => Math.max(minOffset, prevOffset - 1));
  };

  const clockRotate = (degree) => {
    const clock = document.querySelector("#clock-table");
    if (clock) {
      clock.style.transform = `rotate(${degree}deg)`;
    }
  };

  useEffect(() => {
    clockRotate(offset * 60);
  }, [offset]);

  const addClockScale = (degree) => {
    return (
      <div
        className="invisible-table"
        style={{ transform: `rotate(${degree}deg)` }}
      >
        <div className="clock-scale" />
      </div>
    );
  };

  const addThickClockScale = (degree, year) => {
    return (
      <div
        className="invisible-table"
        style={{ transform: `rotate(${degree}deg)` }}
      >
        <div className="clock-thick">
          <span>{year}</span>
        </div>
      </div>
    );
  };

  const renderClockScales = () => {
    const elements = [];
    let year = 2021;
    for (let i = -60; i < 300; i += 6) {
      elements.push(addClockScale(i));
      if (i % 60 === 0) {
        elements.push(addThickClockScale(i, year));
        year++;
      }
    }
    return elements;
  };

  return (
    <section className="section" id="timeline">
    <div className="container flex-center">
       <h1 className="section-title-01">Timeline</h1>
       <h2 className="section-title-02">Timeline</h2>
    <div className="timeLine">
      <i
        className="iconfont bx bxs-chevron-up"
        id="up-btn"
        onClick={slideToPrev}
      />
      <i
        className="iconfont bx bxs-chevron-down"
        id="down-btn"
        onClick={slideToNext}
      />
      <div id="clock-content">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ transform: `translateY(${offset * 100}%)` }}
          >
            <div className="card-time">{card.year}</div>
            <div className="card-title">{card.title}</div>
            <div className="card-passage">
              <p>{card.passage}</p>
            </div>
          </div>
        ))}
      </div>

      <div id="clock">
        <div id="clock-center" />
        <div id="clock-pointer" />
        <div id="clock-table">{renderClockScales()}</div>
      </div>
    </div>
    </div>
    </section>
  );
}
