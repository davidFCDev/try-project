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
    <div className="w-full sm:w-[60%]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="sm:h-[500px] overflow-x-hidden"
      >
        <SwiperSlide>
          <img src="/images/zenter1.webp" alt="imagen zenter1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/zenter2.webp" alt="imagen zenter2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/zenter3.webp" alt="imagen zenter3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderArenal;
