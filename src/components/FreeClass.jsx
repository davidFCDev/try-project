import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const FreeClass = () => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });
  return (
    <div className="w-full flex flex-col pt-16 pb-32 justify-center items-center">
      <motion.div
        animate={inView ? animationOptions : {}}
        initial={{ opacity: 0, y: 50 }}
        className="sm:max-w-[48%] flex flex-col gap-5 px-6"
        ref={ref}
      >
        <h2 className="font-creatoBold text-4xl sm:text-6xl uppercase tracking-wider">
          Tu primera clase es gratis
        </h2>
        <p className="font-creatoLight tracking-wider text-lg sm:text-2xl">
          Contacta con nosotros y ven a
          <Link
            to="/contact"
            className="ml-2 font-creatoBold bg-black text-white px-4 py-1 hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            probar
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default FreeClass;
