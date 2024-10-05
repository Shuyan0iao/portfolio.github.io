import React, { useEffect, useRef } from 'react';
import './clock.css'; // Assuming you have a separate CSS file for styling

const Clock = () => {
    const clockRef = useRef(null);
    const slidesRef = useRef([]);
    let offset = 0;
    const maxOffset = 0;
    const minOffset = -3;
    const startYear = 2021;

    useEffect(() => {
        // Generate clock scales when the component mounts
        addClockScales();
        slidesRef.current = Array.from(document.querySelectorAll(".card"));
    }, []);

    // Adding clock scales
    const addClockScales = () => {
        for (let i = -60, year = startYear - 1; i < 300; i += 6) {
            addClockScale(i);
            if (i % 60 === 0) {
                addThickClockScale(i, year);
                year++;
            }
        }
    };

    // Add a clock scale
    const addClockScale = (degree) => {
        const invisibleClockTable = document.createElement("div");
        invisibleClockTable.className = "invisible-table";
        invisibleClockTable.style.transform = `rotate(${degree}deg)`;
        const clockScale = document.createElement("div");
        clockScale.className = "clock-scale";
        invisibleClockTable.appendChild(clockScale);
        clockRef.current.appendChild(invisibleClockTable);
    };

    // Add a thick clock scale with year
    const addThickClockScale = (degree, time) => {
        const invisibleClockTable = document.createElement("div");
        invisibleClockTable.className = "invisible-table";
        invisibleClockTable.style.transform = `rotate(${degree}deg)`;
        const thickClockScale = document.createElement("div");
        thickClockScale.className = "clock-thick";
        const scaleContent = document.createElement("span");
        scaleContent.textContent = `${time}`;
        thickClockScale.appendChild(scaleContent);
        invisibleClockTable.appendChild(thickClockScale);
        clockRef.current.appendChild(invisibleClockTable);
    };

    // Slide to the previous card
    const slideToPrev = () => {
        offset = Math.min(maxOffset, offset + 1);
        updateSlideTransform();
        clockRotate(offset * 60);
    };

    // Slide to the next card
    const slideToNext = () => {
        offset = Math.max(minOffset, offset - 1);
        updateSlideTransform();
        clockRotate(offset * 60);
    };

    // Update slide transformations
    const updateSlideTransform = () => {
        slidesRef.current.forEach(slide => {
            slide.style.transform = `translateY(${offset * 100}%)`;
        });
    };

    // Rotate the clock face
    const clockRotate = (degree) => {
        clockRef.current.style.transform = `rotate(${degree}deg)`;
    };

    return (

        <div className="clock__container">
            
            <div id="content">
                <div className="card">
                    <div className="cardBox">
                        <div className="card-time">2021</div>
                        <div className="card-title">Obtained Hungarian green card</div>
                        <div className="card-passage">
                            <br />
                            I started developing and optimizing the ESG (Environmental, Social, and Governance) evaluation standard analysis API for Mingshan Think Tank.
                            <br /><br />
                            I collaborated with university professors in China to integrate and optimize the backend API for ESG analysis using C# and ASP.NET Core, enabling personalized customization and real-time analysis reports, while continuously improving performance.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="cardBox">
                        <div className="card-time">2022</div>
                        <div className="card-title">Graduated in Eötvös Loránd University</div>
                        <div className="card-passage">
                            <br />
                            I completed my undergraduate studies at Eötvös Loránd University and started my master’s program at UCSB, maintained a high merit-based scholarship throughout.
                            <br /><br />
                            I also assisted Women’s Economic Ventures in forming deep partnerships with third-party white-label platforms, designed full-stack solutions for field cooperation projects between the University of California and nonprofit organizations.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="cardBox">
                        <div className="card-time">2023</div>
                        <div className="card-title">Graduated from UCSB</div>
                        <div className="card-passage">
                            <br />
                            I finished my graduate studies at UCSB and began working at Airclub Software. I contributed to the development and maintenance of an integrated software platform using TypeScript, React, Node.js, GraphQL, and Tailwind CSS, and established a long-term collaboration with the Figma visual design team.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="cardBox">
                        <div className="card-time">2024</div>
                        <div className="card-title">Won the H1B lottery</div>
                        <div className="card-passage">
                            <br />
                            I joined American Home Textile and participated in developing a CRM platform.
                            <br /><br />
                            I am currently exploring more opportunities for the future ~!
                        </div>
                    </div>
                </div>
            </div>
            <div className="clock__buttons">
                <i className='bx bxs-chevron-up' id="clock__button" onClick={slideToNext}></i>
                <i className='bx bxs-chevron-down' id="clock__button" onClick={slideToPrev}></i>
            </div>
            <div id="clock">
                <div id="clock-center"></div>
                <div id="clock-pointer"></div>
                <div id="clock-table" ref={clockRef}></div>
            </div>
        </div>

    );
};

export default Clock;
