import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BACKGROUND from "../assets/img/home1.jpg";

export default function Home_time() {
  return (
    <>
      <img src={BACKGROUND} alt="" className="homes__bg" />

      <div className="homes__container bd-container">
        <div className="homes__data">
          <h2 className="homes__subtitle">Some pics</h2>
          <h1 className="homes__title">Alko</h1>
          <p className="homes__description">
          I plan to put a ton of pictures of Alko here, but I haven't figured out how to lay them out yet (he's my kitten and the cutest little black cat in the world)
          </p>
          <a href="#" className="homes__button">
            Null{" "}
            <i className="bx bx-right-arrow-alt homes__button-icon"></i>
          </a>
        </div>
      </div>
    </>
  );
}
