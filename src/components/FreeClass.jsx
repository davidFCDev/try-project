import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FreeClass = () => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });
  return (
    <div className="w-full flex flex-col pt-16 pb-32 justify-center items-start">
      <motion.div
        animate={inView ? animationOptions : {}}
        initial={{ opacity: 0, y: 50 }}
        className="w-[45%] flex flex-col gap-5 px-20"
        ref={ref}
      >
        <h2 className="font-creatoBold text-6xl uppercase tracking-wider">
          Tu primera clase es gratis
        </h2>
        <p className="font-creatoLight text-2xl">
          Contacta con nosotros y ven a probar!
        </p>
      </motion.div>
    </div>
  );
};

export default FreeClass;
