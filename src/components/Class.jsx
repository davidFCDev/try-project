import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./class.css";

const Class = () => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });

  return (
    <div className="w-full py-32 flex flex-col gap-32">
      <div className="flex justify-start px-20 items-center">
        <motion.div
          animate={inView ? animationOptions : {}}
          initial={{ opacity: 0, y: 50 }}
          className="flex flex-col gap-4 w-[40%] items-start"
          ref={ref}
        >
          <h2 className="font-creatoExtrBold text-6xl uppercase tracking-wider">
            Nuestras clases
          </h2>
          <p className="font-creatoLight text-2xl">
            Amplia variedad de clases que podrás disfrutar en nuestros centros.
            Descubre la que más se adapta a ti.
          </p>
          <Link
            to={"/contact"}
            className="font-creatoExtrBold border border-black text-white bg-black hover:bg-white hover:text-black px-3 py-2 transition-all tracking-wider"
          >
            Ver horarios
          </Link>
        </motion.div>
      </div>

      <div className="flex flex-col gap-10 w-full justify-around">
        <div className="flex gap-4">
          <div className="w-full overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1263905214/es/foto/espacio-de-gimnasio.jpg?s=2048x2048&w=is&k=20&c=fsMWkvT_afyr4iL7H0FMcNF-ldbbe9-D8_yPkbdC0do="
              alt="icono wod"
              className="w-full h-[200px] object-cover object-center transform hover:scale-110 transition-all duration-1000"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-5 px-8">
            <h3 className="text-4xl uppercase font-creatoExtrBold tracking-wider">
              <span className="text-red-600">W</span>od
            </h3>
            <p className="text-xl font-creato">
              Workout of the Day, para los más exigentes
            </p>
            <a href="#" className="font-creatoLight text-lg">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Saber más</span>
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-4">
          <div className="w-full overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1001575694/es/foto/hombre-joven-de-entrenamiento-fitness-flexiones-o-tabl%C3%B3n.jpg?s=2048x2048&w=is&k=20&c=LRCb3eohMi_daMHdJbJ11SBL73GN46ZVJ1PAd8dnqu0="
              alt="icono wod"
              className="w-full h-[200px] object-cover object-center transform hover:scale-110 transition-all duration-1000"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-5 px-8">
            <h3 className="text-4xl uppercase font-creatoExtrBold tracking-wider">
              Endura<span className="text-red-600">n</span>ce
            </h3>
            <p className="text-xl font-creato">
              Si te gusta sudar, lo vas a pasar bien
            </p>
            <a href="#" className="font-creatoLight text-lg">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Saber más</span>
              </button>
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-full overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1166399307/es/foto/entrenamiento-cruzado-con-campanas-de-hervidor-imagen-de-bajo-%C3%A1ngulo-espacio-de-copia.jpg?s=2048x2048&w=is&k=20&c=xSVGAlj_hr5Y8NOJ9VzExz8vNXm_wMmVuhTONIpxiEw="
              alt="icono wod"
              className="w-full h-[200px] object-cover object-center transform hover:scale-110 transition-all duration-1000"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-5 px-8">
            <h3 className="text-4xl uppercase font-creatoExtrBold tracking-wider">
              TRY4<span className="text-red-600">5</span>
            </h3>
            <p className="text-xl font-creato">
              Clases específicas de 45 minutos
            </p>
            <a href="#" className="font-creatoLight text-lg">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Saber más</span>
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-4">
          <div className="w-full overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/494498164/es/foto/hermosa-bailarina-en-vista-a%C3%A9rea-de-seda-a%C3%A9rea-a%C3%A9rea-contortion-cintas.jpg?s=2048x2048&w=is&k=20&c=JCW0GkgCq5_lcmG9MnsFNdHU3_4pWvL_AHXhXuPsSeg="
              alt="icono wod"
              className="w-full h-[200px] object-cover object-center transform hover:scale-110 transition-all duration-1000"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-5 px-8">
            <h3 className="text-4xl uppercase font-creatoExtrBold tracking-wider">
              A<span className="text-red-600">e</span>RIAL
            </h3>
            <p className="text-xl font-creato">
              Clase de telas aéreas, para los más atrevidos
            </p>
            <a href="#" className="font-creatoLight text-lg">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Saber más</span>
              </button>
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-full overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1222084311/es/foto/imagen-de-barbell-en-el-gimnasio.jpg?s=2048x2048&w=is&k=20&c=kXHLejjkmU0ePIh_FU_Benz2VMke5bCe_Nn8PwOpzHQ="
              alt="icono wod"
              className="w-full h-[200px] object-cover object-bottom transform hover:scale-110 transition-all duration-1000"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-5 px-8">
            <h3 className="text-4xl uppercase font-creatoExtrBold tracking-wider">
              OPEN <span className="text-red-600">b</span>OX
            </h3>
            <p className="text-xl font-creato">
              Ven por libre y decide tú mismo
            </p>
            <a href="#" className="font-creatoLight text-lg">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Saber más</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
