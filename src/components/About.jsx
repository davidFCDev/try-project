import { motion } from "framer-motion";

const About = () => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };
  return (
    <div className="w-full flex flex-col justify-center items-center py-32">
      <motion.div
        animate={animationOptions}
        initial={{ opacity: 0, y: 50 }}
        className=" mx-[27%] flex flex-col gap-5"
      >
        <h2 className="font-creatoBold text-6xl uppercase tracking-wider">
          Descubre nuestros dos centros en Vigo
        </h2>
        <p className="font-creatoLight text-2xl">
          Dos espacios de entrenamiento distintos que se adaptan completamente a
          tus necesidades.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
