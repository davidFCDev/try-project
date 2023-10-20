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
    <div className="w-full flex flex-col gap-32">
      <motion.div
        animate={inView ? animationOptions : {}}
        initial={{ opacity: 0, y: 50 }}
        className="flex flex-col gap-5 w-[35%] items-start px-20"
        ref={ref}
      >
        <h2 className="font-creatoExtrBold text-6xl uppercase tracking-wider">
          Nuestras clases
        </h2>
        <p className="font-creatoLight text-2xl">
        Ya busques mejorar tu resistencia, desarrollar tu fuerza o perfeccionar tus habilidades gimnásticas, tenemos la clase perfecta para ti.
        </p>
        <Link
          to="/timetable"
          className="font-creatoExtrBold border border-black text-white bg-black hover:bg-white hover:text-black px-3 py-2 transition-all tracking-wider"
        >
          Ver horarios
        </Link>
      </motion.div>

      <div className="flex flex-col py-16 gap-10 w-full justify-around">
        {CLASS.map((item) => (
          <ClassItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Class;
