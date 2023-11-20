
import { motion } from "framer-motion";

const Hero = () => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  return (
    <div className="w-full min-h-screen screen flex justify-center items-end py-[5rem] px-6">
      <div className="">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={animationOptions}
          className="text-[50px] sm:text-[90px] text-white font-creatoBold tracking-wider"
        >
          TRY <span className="font-creatoLight bg-black pr-10 sm:pr-0">AGAIN,</span> FAIL{" "}
          <span className="font-creatoLight bg-black">BETTER</span>
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
