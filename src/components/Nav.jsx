import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollToTopLink from "./ScrollToTopLink";

const Nav = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = (path) => {
    handleToggle();

    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <nav className="w-full px-6 md:px-20 py-5 flex justify-between items-center bg-white fixed shadow-md z-50">
      <Link className="text-2xl md:text-[2.4rem] font-creatoLight tracking-[4px] sm:tracking-[8px] flex items-baseline gap-4">
        <strong className="font-creatoExtrBold">
          <span className="text-red-600">T</span>RY
        </strong>{" "}
        FITNESS
      </Link>

      <div className="hidden sm:flex gap-10 uppercase text-[13px] tracking-[6px] font-creato items-center">
        <ScrollToTopLink to={"/"} className="link underline-hover">
          Inicio
        </ScrollToTopLink>
        <Link to={"/timetable"} className="link underline-hover">
          Horarios
        </Link>
        <Link to={"/prices"} className="link underline-hover">
          Tarifas
        </Link>
        <a
          href="https://www.instagram.com/tryfitness._/"
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <img
            src="/images/iconoIg.png"
            alt="icono instagram"
            className="w-7 hover:scale-105"
          />
        </a>
        <Link
          to={"/contact"}
          className="font-creatoBold border border-black text-black hover:bg-black hover:text-white px-3 py-2 transition-all"
        >
          Contacto
        </Link>
      </div>

      <aside className="sm:hidden">
        <div id="menuToggle">
          <input id="checkbox" type="checkbox" onClick={handleToggle} />
          <label className="toggle" htmlFor="checkbox">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </div>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="px-10 py-10 bg-white shadow flex flex-col items-center absolute top-[4.65rem] right-0 min-w-[100px] h-screen rounded font-creato uppercase shadow-black"
            >
              <ul className="list-none flex gap-5 justify-start h-full items-center flex-1 flex-col tracking-widest text-xs">
                <Link
                  to={"/"}
                  className="px-6 py-2 hover-underline hover-underline"
                  onClick={() => handleLinkClick("/")}
                >
                  Inicio
                </Link>
                <hr className="border-neutral-300 border w-full" />
                <Link
                  onClick={() => handleLinkClick("/timetable")}
                  to={"/timetable"}
                  className="px-6 py-2 hover-underline"
                >
                  Horarios
                </Link>
                <hr className="border-neutral-300 border w-full" />

                <Link
                  onClick={() => handleLinkClick("/prices")}
                  to={"/prices"}
                  className="px-6 py-2 hover-underline"
                >
                  Tarifas
                </Link>
                <hr className="border-neutral-300 border w-full" />

                <a
                  href="https://www.instagram.com/tryfitness._/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 hover-underline"
                >
                  Instagram
                </a>
                <hr className="border-neutral-300 border w-full" />

                <Link
                  onClick={() => handleLinkClick("/contact")}
                  to={"/contact"}
                  className="px-6 py-2 hover-underline"
                >
                  Contacto
                </Link>
              </ul>

            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </nav>
  );
};

export default Nav;
