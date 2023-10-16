import SliderArenal from "./SliderArenal";
import SliderZenter from "./SliderZenter";

const Centers = () => {
  return (
    <div id="centros" className="w-full flex flex-col border-t-2 border-black gap-10">
      <div className="flex items-center gap-16 bg-black text-white">
        <SliderArenal />

        <div className="flex flex-col gap-6 max-w-[30%]">
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
        </div>
      </div>

      <div className="flex flex-row-reverse justify-start items-center gap-16 text-right bg-black text-white">
        <SliderZenter />

        <div className="flex flex-col gap-5 max-w-[30%]">
          <h2 className="text-7xl font-creatoExtrBold uppercase tracking-wide">
            <span className="text-red-600">TRY</span> ZENTER
          </h2>
          <p className="text-lg font-creatoLight italic">
            Estrada Fragosiño, 30, 36214 Vigo, Pontevedra
          </p>
          <p className="text-xl font-creato">
            Apúntate a nuestras clases de Try45, aereos y específicos para pádel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Centers;
