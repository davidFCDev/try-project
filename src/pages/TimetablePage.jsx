import Table from "../components/Table";

const TimetablePage = () => {
  return (
    <div className="w-full min-h-screen py-28 px-10 gap-10 justify-start flex flex-col items-center bg-dark">
      <div className="flex flex-col gap-4">
        <h2 className="font-creatoExtrBold text-5xl uppercase tracking-wider text-white">
          Nuestros horarios
        </h2>
        <div className="text-white flex w-full justify-between px-2 font-creatoLight tracking-wide">
          <div className="flex gap-2 items-center">
            <div className="w-10 bg-red-200 p-2" />
            <p>Try Fitness Box</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-10 bg-blue-200 p-2" />
            <p>Try Fitness Zenter</p>
          </div>
        </div>
      </div>
      <Table/>
    </div>
  );
};

export default TimetablePage;
