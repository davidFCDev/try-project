import { Link } from "react-router-dom";
import "./nav.css";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="w-full px-10 md:px-20 py-5 flex justify-between items-center bg-white fixed shadow-md z-50">
      <Link className="text-xl md:text-3xl font-creatoLight tracking-[8px]">
        <strong className="font-creatoMedium">
          <span className="text-red-600">T</span>RY
        </strong>{" "}
        FITNESS
      </Link>

      <div className="hidden sm:flex gap-10 uppercase text-[13px] tracking-[6px] font-creato items-center">
        <Link to={"/"} className="link underline-hover">
          Inicio
        </Link>
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
              className="p-6 bg-dimWhite shadow-sm shadow-gray3 absolute top-14 right-0 mx-4 my-1 min-w-[100px] rounded-lg sidebar font-rubik"
            >
              <ul className="list-none flex gap-2 justify-end items-start flex-1 flex-col tracking-wider">
                <Link href="#" className="hover:text-orange text-xs sm:text-lg">
                  Home
                </Link>
                <Link
                  href="#services"
                  className="hover:text-orange text-xs sm:text-lg"
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="hover:text-orange text-xs sm:text-lg"
                >
                  About
                </Link>
                <Link href="#" className="hover:text-orange text-xs sm:text-lg">
                  Resources
                </Link>
                <Link href="#" className="hover:text-orange text-xs sm:text-lg">
                  Blog
                </Link>
                <button className="text-xs sm:text-lg text-orange active:text-black">
                  Sign Up
                </button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </nav>
  );
};

export default Nav;
