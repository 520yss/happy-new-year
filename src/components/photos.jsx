import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Photos.css";

// import required modules
import { EffectCards } from "swiper/modules";
import { useCallback } from "react";
import { useEffect } from "react";

const images = import.meta.glob("../assets/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const Photos = ({ isNewYear }) => {
  const [show, setShow] = useState(false);
  const onSlideChange = useCallback(({ activeIndex }) => {
    console.log(activeIndex);
  }, []);

  useEffect(() => {
    if (isNewYear) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isNewYear]);
  return (
    <div
      className={`w-full h-[70%] z-10 absolute top-[30%] left-0 flex items-center justify-center`}
    >
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSlideChange={onSlideChange}
      >
        {Object.keys(images).map((path, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/src/assets/WechatIMG${index + 1}.jpg`}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Photos;
