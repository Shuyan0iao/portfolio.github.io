import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import Home_intro from "./Home_intro";
import Home_time from "./Home_time";
import Home_others from "./Home_others";
import './home.css';
import BUTTON1 from "../assets/img/button1.png";

export default function Home() {
  return (
    <>
      <div className="swiper-container gallery-top" id="home">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
        >
          {/*========== ISLANDS 1 ==========*/}
          <SwiperSlide>
            <Home_intro />
          </SwiperSlide>

          {/*========== ISLANDS 2 ==========*/}
          <SwiperSlide>
            <Home_time />
          </SwiperSlide>

          {/*========== ISLANDS 3 ==========*/}
          <SwiperSlide>
            <Home_others />
          </SwiperSlide>
        </Swiper>
      </div>

    </>
  );
}
