const Class = () => {
  return (
    <div className="w-full py-20 justify-center items-center flex flex-col gap-20">
      <h2 className="font-creatoBold text-6xl uppercase tracking-wider">
        Nuestras Clases
      </h2>
      <div className="flex w-full justify-around">
        <div className="flex flex-col gap-10 text-center items-center max-w-[10%]">
          <img
            src="/public/images/iconoKb.png"
            alt="icono wod"
            className="w-20"
          />

          <h3 className="text-2xl uppercase font-creatoBold tracking-wide">
            Wod
          </h3>
          <p className="text-lg font-creato">Workout of the day</p>
        </div>

        <div className="flex flex-col gap-10 text-center items-center max-w-[10%]">
          <img
            src="/public/images/iconoCarrera.png"
            alt="icono wod"
            className="w-20"
          />

          <h3 className="text-2xl uppercase font-creatoBold tracking-wide">
            Endurance
          </h3>
          <p className="text-lg font-creato">Vas a quemar calorías</p>
        </div>
        <div className="flex flex-col gap-10 text-center items-center max-w-[10%]">
          <img
            src="/public/images/iconoBalanza.png"
            alt="icono wod"
            className="w-20"
          />

          <h3 className="text-2xl uppercase font-creatoBold tracking-wide">
            Try45
          </h3>
          <p className="text-lg font-creato">Description</p>
        </div>
        <div className="flex flex-col gap-10 text-center items-center max-w-[10%]">
          <img
            src="/public/images/iconoCorazon.png"
            alt="icono wod"
            className="w-20"
          />

          <h3 className="text-2xl uppercase font-creatoBold tracking-wide">
            Aereal
          </h3>
          <p className="text-lg font-creato">Description</p>
        </div>
        <div className="flex flex-col gap-10 text-center items-center max-w-[10%]">
          <img
            src="/public/images/iconoKb.png"
            alt="icono wod"
            className="w-20"
          />

          <h3 className="text-2xl uppercase font-creatoBold tracking-wide">
            Open Box
          </h3>
          <p className="text-lg font-creato">Ven por libre y decide tú mismo</p>
        </div>
      </div>
    </div>
  );
};

export default Class;
