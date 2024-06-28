import ServicesComponent from "@components/ServicesComponent";
import WhyChooseUsComponent from "@components/WhyChooseUsComponent";
import Swiper, { Autoplay, EffectCreative } from 'swiper';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Certifique-se de registrar os módulos
Swiper.use([Autoplay, EffectCreative]);

const HalfSlider = () => {
  return (
    <SwiperComponent
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      effect="creative"
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
    >
      <SwiperSlide>
        <ServicesComponent />
      </SwiperSlide>
      <SwiperSlide>
        <WhyChooseUsComponent />
      </SwiperSlide>
    </SwiperComponent>
  );
};

export default HalfSlider;