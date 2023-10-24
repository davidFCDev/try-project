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

  return (
    <div className="w-full min-h-screen pt-16 justify-center flex text-white">
      <div className="flex flex-col justify-center items-start px-14 gap-10 w-[55%] bg-dark">
        <h2 className="title font-creatoExtrBold text-6xl uppercase tracking-wider bg-red-600 px-2 py-1">
          {selectedClass.title.first}
          {selectedClass.title.red}
          {selectedClass.title.end}
        </h2>
        <div className="flex flex-col gap-5">
          <h3 className="font-creatoBold text-2xl">{selectedClass.subtitle}</h3>
          <p className="font font-creatoLight text-xl italic">
            {selectedClass.description}
          </p>
        </div>
      </div>
      <div>
        <img
          src={selectedClass.image}
          alt="image from class"
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
};

export default ClassPage;
