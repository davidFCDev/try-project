import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ClassItem = ({ item }) => {
  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });

  const animationOptions = {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2 },
  };

  return (
    <div className={item.style} ref={ref}>
      <div className="w-full overflow-hidden">
        <img
          src={item.image}
          alt="icono wod"
          className="w-full h-[200px] object-cover object-center transform hover:scale-110 transition-all duration-1000"
        />
      </div>

      <motion.div
        animate={inView ? animationOptions : {}}
        initial={item.initial}
        className="flex flex-col items-start justify-center gap-5 px-8 "
        key={item.id}
      >
        <h3 className="flex text-4xl uppercase font-creatoExtrBold tracking-wider bg-black text-white px-2">
          {item.title.first}
          <p className="text-red-600">{item.title.red}</p>
          {item.title.end}
        </h3>
        <p className="text-xl font-creatoLight tracking-wider">{item.subtitle}</p>
        <Link to={`class/${item.id}`} className="font-creatoLight text-lg">
          <button className="learn-more special-button">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="special-button-text">Saber más</span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ClassItem;
