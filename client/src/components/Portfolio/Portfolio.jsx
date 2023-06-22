import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import mainimg from "../../img/mainimg.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Some Examples</span>
      <span>Lorem Ipsum</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={mainimg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainimg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainimg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainimg} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
