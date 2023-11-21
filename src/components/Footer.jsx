/* eslint-disable react/prop-types */
import { MdLocationOn, MdOutlinePhoneAndroid } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";

const Footer = () => {
  const handleContactClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dark text-gray-100 w-full pt-14 pb-10 flex flex-col gap-24 sm:gap-40 font-creatoLight tracking-wider px-6 sm:px-0">
      <ul className="sm:flex grid grid-cols-2 justify-around gap-10 sm:gap-0">
        <li className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-xl font-creatoBold">UBICACIÓN</h2>
            <MdLocationOn className="text-md sm:text-xl" />
          </div>
          <a
            className="text-xs sm:text-base"
            href="https://goo.gl/maps/d1PUZHKSqzoqhWrd8"
            target="_blank"
            onClick={(event) => {
              if (!window.confirm("¿Quieres acceder a Ubicación?")) {
                event.preventDefault();
              } else {
                handleContactClick();
              }
            }}
            rel="noreferrer"
          >
            Arenal Box: <span>Rúa do Areal, 140, 36201 Vigo, Pontevedra</span>
          </a>
          <a
            className="text-xs sm:text-base"
            href="https://goo.gl/maps/nfzy9RUETPPxd8Zx7"
            target="_blank"
            onClick={(event) => {
              if (!window.confirm("¿Quieres acceder a Ubicación?")) {
                event.preventDefault();
              } else {
                handleContactClick();
              }
            }}
            rel="noreferrer"
          >
            Zenter: <span>Estrada Fragosiño, 30, 36214 Vigo, Pontevedra</span>
          </a>
        </li>
        <li className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-xl font-creatoBold">HORA. GYM</h2>
            <FaRegClock className="text-md sm:text-xl" />
          </div>
          <p className="text-xs sm:text-base">L-V: 6:15am - 23pm</p>
          <p className="text-xs sm:text-base">S-D: 9am - 14pm</p>
        </li>
        <li className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-xl font-creatoBold">TELÉFONO</h2>
            <MdOutlinePhoneAndroid className="text-md sm:text-xl" />
          </div>
          <p className="text-xs sm:text-base">Arenal: 666765432</p>
          <p className="text-xs sm:text-base">Zenter: 666123456</p>
        </li>
        <li className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-xl font-creatoBold">SOCIAL</h2>
            <BiLike className="text-md sm:text-xl" />
          </div>
          <a
            className="flex items-center gap-2 hover:underline text-xs sm:text-base"
            href="https://www.instagram.com/tryfitness._/"
            target="_blank"
            onClick={(event) => {
              if (!window.confirm("¿Quieres acceder a Instagram?")) {
                event.preventDefault();
              } else {
                handleContactClick();
              }
            }}
            rel="noreferrer"
          >
            Instagram
            <GrInstagram />
          </a>
          <a
            className="flex items-center gap-2 hover:underline text-xs sm:text-base"
            href="https://www.facebook.com/tryfitnessboxzenter"
            target="_blank"
            onClick={(event) => {
              if (!window.confirm("¿Quieres acceder a Facebook?")) {
                event.preventDefault();
              } else {
                handleContactClick();
              }
            }}
            rel="noreferrer"
          >
            Facebook
            <BsFacebook />
          </a>
        </li>
      </ul>

      <div className="flex flex-col items-center gap-3">
        <ul className="flex gap-4">
          <li>
            <Link
              to={{ pathname: "/legal", hash: "#legal" }}
              onClick={(event) => {
                if (!window.confirm("¿Quieres acceder a Aviso legal?")) {
                  event.preventDefault();
                } else {
                  handleContactClick();
                }
              }}
              className="hover:underline"
            >
              <p className="text-xs sm:text-base">Aviso legal</p>
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "/privacity", hash: "#top" }}
              onClick={(event) => {
                if (
                  !window.confirm(
                    "¿Quieres acceder a la Política de privacidad?"
                  )
                ) {
                  event.preventDefault();
                } else {
                  handleContactClick();
                }
              }}
              className="hover:underline"
            >
              <p className="text-xs sm:text-base">Pol. de privacidad</p>
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "/cookies", hash: "#top" }}
              onClick={(event) => {
                if (
                  !window.confirm("¿Quieres acceder a la Política de cookies?")
                ) {
                  event.preventDefault();
                } else {
                  handleContactClick();
                }
              }}
              className="hover:underline"
            >
              <p className="text-xs sm:text-base">Pol. de cookies</p>
            </Link>
          </li>
        </ul>
        <hr className="border w-60 opacity-50"/>
        <p id="portfolio">
          <a
            className="text-xs sm:text-base hover:text-white"
            target="_blank"
            href="https://personal-virtualfolio.netlify.app/#portfolio"
            rel="noreferrer"
          >
            developed by <span>davidFC</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
