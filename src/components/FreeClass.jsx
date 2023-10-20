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
        <p className="font-creatoLight text-2xl flex items-center">
          Contacta con nosotros y ven a
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="ml-2 font-creatoMedium bg-black text-white px-2 py-1 rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            probar
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default FreeClass;
