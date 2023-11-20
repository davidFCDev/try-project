import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });

  return (
    <div className="w-full flex flex-col pt-20 sm:pt-32 pb-16 px-6 justify-center items-center">
      <motion.div
        animate={inView ? animationOptions : {}}
        initial={{ opacity: 0, y: 50 }}
        className="sm:max-w-[40%] flex flex-col gap-5"
        ref={ref}
      >
        <h2 className="font-creatoBold text-4xl sm:text-6xl uppercase tracking-wider">
          Descubre nuestros dos centros en Vigo
        </h2>
        <p className="font-creatoLight tracking-wider text-lg sm:text-2xl">
          Dos espacios de entrenamiento distintos, para que puedas elegir el que más se adapte a ti.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
