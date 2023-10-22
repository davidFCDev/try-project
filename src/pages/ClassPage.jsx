import { useParams } from "react-router-dom";
import { CLASS } from "../constants/class.js";

const ClassPage = () => {
  const { id } = useParams();
  const selectedClass = CLASS.find(
    (classItem) => classItem.id === parseInt(id, 10)
  );

  if (!selectedClass) {
    return <div>Clase no encontrada</div>;
  }

  console.log(selectedClass);

  return (
    <div className="w-full min-h-screen py-32 gap-10 justify-end flex items-center bg-dark text-white">
      <div className="flex flex-col gap-10 w-[40%]">
        <h2 className="font-creatoBold text-7xl uppercase tracking-wider ">
          {selectedClass.title.first}
          {selectedClass.title.red}
          {selectedClass.title.end}
        </h2>
        <div className="flex flex-col gap-5">
          <h3 className="font-creatoBold text-4xl">{selectedClass.subtitle}</h3>
          <p className="font font-creatoLight text-xl">
            {selectedClass.description}
          </p>
        </div>
      </div>
      <img
        src={selectedClass.image}
        alt="image from class"
        className="w-[50%] rounded-md"
      />
    </div>
  );
};

export default ClassPage;
