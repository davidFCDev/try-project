import "./nav.css";

const Nav = () => {
  return (
    <nav className="w-full px-20 py-6 flex justify-between items-center bg-white">
      <h1 className="text-3xl font-creatoMedium tracking-widest">
        TRY FITNESS
      </h1>

      <div className="flex gap-10 uppercase text-[13px] tracking-[6px] font-creato items-center">
        <a href="" className="link underline-hover">
          Centros
        </a>
        <a href="" className="link underline-hover">
          Horarios
        </a>
        <a href="" className="link underline-hover">
          Tarifas
        </a>
        <a href="" className="border border-black text-black hover:bg-black hover:text-white px-3 py-2 transition-all">
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Nav;
