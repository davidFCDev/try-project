import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { CLASS } from "../constants/class.js";
import "./class.css";
import { Link } from "react-router-dom";
import ClassItem from "./ClassItem.jsx";

const Class = () => {
  const animationOptions = {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2 },
  };

  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });

  return (
    <div className="w-full flex flex-col items-center gap-32">
      <motion.div
        animate={inView ? animationOptions : {}}
        initial={{ opacity: 0, y: 50 }}
        className="flex flex-col gap-5 items-start sm:max-w-xl px-6 sm:px-0"
        ref={ref}
      >
        <h2 className="font-creatoBold text-4xl sm:text-6xl uppercase tracking-wider">
          Nuestras clases
        </h2>
        <p className="font-creatoLight tracking-wider text-lg sm:text-2xl">
        Ya busques mejorar tu resistencia, desarrollar tu fuerza o perfeccionar tus habilidades gimnásticas, tenemos la clase perfecta para ti.
        </p>
        <Link
          to="/timetable"
          className="font-creatoExtrBold border border-black text-white bg-black hover:bg-white hover:text-black px-6 py-3 transition-all tracking-widest uppercase text-sm"
        >
          Ver horarios
        </Link>
      </motion.div>

      <div className="flex flex-col py-4 sm:py-16 gap-20 sm:gap-10 w-full justify-around">
        {CLASS.map((item) => (
          <ClassItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Class;
