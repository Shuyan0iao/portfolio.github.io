import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BACKGROUND from "../assets/img/home2.jpg";

export default function Home_others() {
  return (
        <>
      <img src={BACKGROUND} alt="" className="homes__bg" />

      <div className="homes__container bd-container">
        <div className="homes__data">
          <h2 className="homes__subtitle">UNDEFINDED</h2>
          <h1 className="homes__title">UNDEFINDED</h1>
          <p className="homes__description">
          Haven't figured out what to write yet; I will add some things later.
          </p>
          <a href="#" className="homes__button">
            NULL{" "}
            <i className="bx bx-right-arrow-alt homes__button-icon"></i>
          </a>
        </div>
      </div>
      </>
  );
}
