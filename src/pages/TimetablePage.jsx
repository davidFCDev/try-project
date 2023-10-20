import Table from "../components/Table";

const TimetablePage = () => {
  return (
    <div className="w-full min-h-screen py-28 px-10 gap-10 justify-start flex flex-col items-center bg-dark">
      <h2 className="font-creatoBold text-5xl uppercase tracking-wider text-white">
        Nuestros horarios
      </h2>
      <Table />
    </div>
  );
};

export default TimetablePage;
