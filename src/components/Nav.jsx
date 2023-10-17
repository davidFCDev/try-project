import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="w-full px-20 py-5 flex justify-between items-center bg-white fixed shadow-md z-50">
      <Link className="text-3xl font-creatoLight tracking-[8px]">
        <strong className="font-creatoMedium">
          <span className="text-red-600">T</span>RY
        </strong>{" "}
        FITNESS
      </Link>

      <div className="flex gap-10 uppercase text-[13px] tracking-[6px] font-creato items-center">
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
    </nav>
  );
};

export default Nav;
