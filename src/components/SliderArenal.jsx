// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const SliderArenal = () => {
  return (
    <div className="w-[60%]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="h-[500px]"
      >
        <SwiperSlide>
          <img src="/public/images/arenal1.webp" alt="imagen arenal1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/images/arenal2.webp" alt="imagen arenal2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/images/arenal3.webp" alt="imagen arenal3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderArenal;
