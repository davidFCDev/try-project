// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const SliderArenal = () => {
  const animationOptions = {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2 },
  };

  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      animate={inView ? animationOptions : { }}
      className="w-[60%]"
      ref={ref}
    >
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
    </motion.div>
  );
};

export default SliderArenal;
