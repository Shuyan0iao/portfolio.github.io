import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from 'react';
import Home_intro from "./Home_intro";
import Home_connect from "./Home_connect";
import Home_others from "./Home_others";
import './home.css';
import BUTTON1 from "../assets/img/button1.png";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
    };

    handleResize(); // 初始化检查
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="swiper-container gallery-top" id="home">
      {isMobile ? (
        <Home_intro />
      ) : (
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
            <Home_connect />
          </SwiperSlide>

          {/*========== ISLANDS 3 ==========*/}
          <SwiperSlide>
            <Home_others />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}
