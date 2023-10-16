// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        className="h-[550px]"
      >
        <SwiperSlide>
          <img src="/public/images/zenter1.webp" alt="imagen zenter1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/images/zenter2.webp" alt="imagen zenter2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/images/zenter3.webp" alt="imagen zenter3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderArenal;