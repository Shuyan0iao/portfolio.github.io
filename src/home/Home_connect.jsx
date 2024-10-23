import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BACKGROUND from "../assets/img/home1.jpg";
import './home__connect.css';

export default function Home_time() {
  return (
    <>
      <img src={BACKGROUND} alt="" className="homes__bg" />

      <div className=" bd-container">
        <div className="homes__connect">
          <div className="homes__a">
            <div className="homes__b">
              <a href="#">How to Contact Me? </a>
              <h2>Weixin Id: ywz610</h2>
              <span>You can reach out to me via email, phone, LinkedIn, or WeChat. <br/>
                I look forward to discussing more with you at any time!

              </span>

            </div>
            <div className="homes__c">
              <div className="homes__d" style={{ "--i": 1, "--w": 1.5 }}></div>
              <div className="homes__d" style={{ "--i": 2, "--w": 1.6 }}></div>
              <div className="homes__d" style={{ "--i": 3, "--w": 1.4 }}></div>
              <div className="homes__d" style={{ "--i": 4, "--w": 1.7 }}></div>
              <div className="homes__e" style={{ "--i": 1}}></div>
            </div>
            <div className="homes__f"></div>
          </div>
        </div>
      </div>
    </>
  );
}
