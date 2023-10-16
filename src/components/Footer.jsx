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
    <footer className="bg-black text-gray-100 w-full py-16 flex flex-col gap-40 font-creatoLight tracking-wider ">
		
      <ul className="flex justify-around">
        <li className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-creatoBold">UBICACIÓN</h2>
            <MdLocationOn className="text-md sm:text-xl" />
          </div>
          <a
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
            <h2 className="text-xl font-creatoBold">HORA. GYM</h2>
            <FaRegClock className="text-md sm:text-xl" />
          </div>
          <p>L-V: 6:15am - 23pm</p>
          <p>S-D: 9am - 14pm</p>
        </li>
        <li className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-creatoBold">TELÉFONO</h2>
            <MdOutlinePhoneAndroid className="text-md sm:text-xl" />
          </div>
          <p>Arenal: 666765432</p>
          <p>Zenter: 666123456</p>
        </li>
        <li className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-creatoBold">SOCIAL</h2>
            <BiLike className="text-md sm:text-xl" />
          </div>
          <a
            className="flex items-center gap-2"
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
            className="flex items-center gap-2"
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

      <div className="flex flex-col items-center">
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
            >
              <p>Aviso legal</p>
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
            >
              <p>Pol. de privacidad</p>
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
            >
              <p>Pol. de cookies</p>
            </Link>
          </li>
        </ul>
        <p id="portfolio">
          <a
            target="_blank"
            href="https://personal-virtualfolio.netlify.app/#portfolio"
            className="portfolio"
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
