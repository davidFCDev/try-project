import SliderArenal from "./SliderArenal";
import SliderZenter from "./SliderZenter";

const Centers = () => {
  return (
    <div className="w-full flex flex-col bg-black text-white">

      <div className="flex items-center gap-16">
        <SliderArenal />

        <div className="flex flex-col gap-6 max-w-[30%]">
          <h2 className="text-7xl font-creatoExtrBold uppercase tracking-wide">
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

      <div className="flex flex-row-reverse justify-start items-center gap-16 text-right ">
        <SliderZenter />

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
