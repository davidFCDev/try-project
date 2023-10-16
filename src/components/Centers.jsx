const Centers = () => {
  return (
    <div className="w-full bg-gray-100 py-44 flex flex-col gap-32">

      <div className="flex justify-center items-center gap-32">

        <img
          src="/public/images/endurance.webp"
          alt="imagen random"
          className="max-w-[400px] rounded-sm shadow-md shadow-black"
        />

        <div className="flex flex-col gap-5 max-w-[30%]">
          <h2 className="text-6xl font-creatoExtrBold uppercase tracking-wide">
            <span className="text-red-600">TRY</span> BOX ARENAL
          </h2>
          <p className="text-xl font-creatoLight italic">
            Rúa do Areal, 140, 36201 Vigo, Pontevedra
          </p>
          <p className="text-2xl font-creato">
            Ven a disfrutar nuestras clases de WOD, Endurance o ven directamente
            a Open Box y decide tú!
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-center items-center gap-32">
        <img
          src="/public/images/endurance.webp"
          alt="imagen random"
          className="max-w-[400px] rounded-sm shadow-md shadow-black"
        />
        <div className="flex flex-col gap-5 max-w-[30%]">
          <h2 className="text-6xl font-creatoExtrBold uppercase tracking-wide">
            <span className="text-red-600">TRY</span> ZENTER
          </h2>
          <p className="text-xl font-creatoLight italic">
            Rúa do Areal, 140, 36201 Vigo, Pontevedra
          </p>
          <p className="text-2xl font-creato">
            Ven a disfrutar nuestras clases de WOD, Endurance o ven directamente
            a Open Box y decide tú!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Centers;
