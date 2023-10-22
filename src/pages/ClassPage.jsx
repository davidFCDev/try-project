// import { useParams } from "react-router-dom";
// import { CLASS } from "../constants/class.js";

const ClassPage = () => {
  // const { classId } = useParams();
  // const selectedClass = CLASS.find((classItem) => classItem.id === parseInt(classId, 10));

  // if (!selectedClass) {
  //   return <div>Clase no encontrada</div>;
  // }

  return (
    <div className="w-full min-h-screen py-28 px-10 gap-10 justify-start flex flex-col items-center bg-dark">
      <h2 className="font-creatoBold text-5xl uppercase tracking-wider ">
        Contacto
      </h2>
    </div>
  );
};

export default ClassPage;
