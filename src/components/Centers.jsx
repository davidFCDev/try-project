import SliderArenal from "./SliderArenal";
import SliderZenter from "./SliderZenter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Centers = () => {
  const animationOptions = {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  };

  const [ref1, inView1] = useInView({ threshold: 0.4, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <div id="centros" className="w-full flex flex-col gap-10">
      <div className="flex items-center gap-16 bg-black text-white">
        <SliderArenal />

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={inView1 ? animationOptions : {}}
          className="flex flex-col gap-6 max-w-[30%]"
          ref={ref1}
        >
          <h2 className="text-7xl font-creatoExtrBold uppercase tracking-wide">
            <span className="text-red-600">TRY</span> BOX ARENAL
          </h2>
          <p className="text-lg font-creatoLight italic">
            Rúa do Areal, 140, 36201 Vigo, Pontevedra
          </p>
          <p className="text-xl font-creato">
            Ven a disfrutar nuestras clases de WOD, Endurance o ven directamente
            a Open Box y decide tú!
          </p>
        </motion.div>
      </div>

      <div className="flex flex-row-reverse justify-start items-center gap-16 text-right bg-black text-white">
        <SliderZenter />

        <motion.div
          className="flex flex-col gap-5 max-w-[30%]"
          initial={{ opacity: 0, x: -200 }}
          animate={inView2 ? animationOptions : {}}
          ref={ref2}
        >
          <h2 className="text-7xl font-creatoExtrBold uppercase tracking-wide">
            <span className="text-red-600">TRY</span> ZENTER
          </h2>
          <p className="text-lg font-creatoLight italic">
            Estrada Fragosiño, 30, 36214 Vigo, Pontevedra
          </p>
          <p className="text-xl font-creato">
            Apúntate a nuestras clases de Try45, aereos y específicos para
            pádel.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Centers;
