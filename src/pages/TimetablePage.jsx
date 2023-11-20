import Table from "../components/Table";

const TimetablePage = () => {
  return (
    <div className="w-full min-h-screen py-28 px-6 sm:px-40 gap-5 sm:gap-10 justify-start flex flex-col items-center bg-dark">
      <div className="flex flex-col gap-10 sm:gap-4">
        <h2 className="font-creatoExtrBold text-4xl sm:text-5xl uppercase tracking-wider text-white text-center sm:text-left">
          Nuestros horarios
        </h2>
        <div className="text-white flex w-full justify-between px-2 font-creatoLight tracking-wide">
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <div className="w-10 bg-red-200 p-2" />
            <p className="text-xs sm:text-sm">Try Fitness Box</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-end sm:items-center">
            <div className="w-10 bg-blue-200 p-2" />
            <p className="text-xs sm:text-sm">Try Fitness Zenter</p>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default TimetablePage;
