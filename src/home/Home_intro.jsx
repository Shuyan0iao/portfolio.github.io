import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BACKGROUND from "../assets/img/home_intro.jpg";
import MYPHOTO from "../assets/img/myphoto.jpg";
import RESUME from "../assets/documents/resume_shuyan.pdf";

export default function homes_intro() {
  return (
    <>
      <img src={BACKGROUND} alt="" className="homes__bg" />

      <div className="homes__container bd-container">
        <div className="homes__data">
          <h2 class="homes__subtitle">Hi, I am</h2>
          <h1 class="homes__title">Annika Qiao</h1>
          <p class="homes__description">
            Front-End Engineer with expertise in JavaScript, React, and user
            experience design.{<br></br>}
            Passionate about developing high-quality web interfaces and looking
            for exciting software engineering roles
          </p>
          <div className="homes__buttons">
            <a href={RESUME} className="homes__button" id="cvButton">
              Resume <i className="bx bx-right-arrow-alt homes__button-icon"></i>
            </a>

            <ul className="home__connectList">
              <li>
                <a
                  href="https://www.linkedin.com/in/shuyanqiao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="bx bxl-linkedin-square"
                    style={{ color: "#84725e" }}
                  >
                    &nbsp;shuyanqiao
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bx-phone" style={{ color: "#84725e" }}>
                    &nbsp;(805)-869-9672
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:shyan.qiao@gmail?subject=Contact%20Request&body=Hello%2C%20I%20would%20like%20to%20contact%20you%20regarding..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxs-envelope" style={{ color: "#84725e" }}>
                    &nbsp;shyan.qiao@gmail.com
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
              <div className="homes__pic">
        <img src={MYPHOTO} alt="" />
      </div>
      </div>
    </>
  );
}
