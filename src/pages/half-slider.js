import React from 'react'; // Import React uma vez

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-creative'; // Import EffectCreative styles
import 'swiper/css/autoplay'; // Import Autoplay styles

// Import Swiper core and required modules
import SwiperCore, { Autoplay, EffectCreative } from 'swiper';

// Install modules
SwiperCore.use([Autoplay, EffectCreative]);

import ServicesComponent from "@components/ServicesComponent";
import WhyChooseUsComponent from "@components/WhyChooseUsComponent";

const HalfSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2500 }}
      effect="creative"
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default HalfSlider;