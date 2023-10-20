import { useEffect, useState } from "react";
import { getTimetable } from "../services";

const Table = () => {
  const [timetable, setTimetable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTimetable()
      .then((data) => {
        setTimetable(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(
          "Error al cargar el horario. Inténtalo de nuevo más tarde.",
          error
        );
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full items-center justify-start flex flex-col gap-10 px-32">
      {loading ? (
        <p className="text-white text-xl">Cargando horarios...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="bg-gray-200 w-full shadow-md shadow-gray-600">
          <table cellPadding={12} className="w-full">
            <thead className="text-white bg-dark font-creatoBold border-white border">
              <tr>
                <th className="border border-white">Hora</th>
                <th className="border border-white">Lunes</th>
                <th className="border border-white">Martes</th>
                <th className="border border-white">Miércoles</th>
                <th className="border border-white">Jueves</th>
                <th className="border border-white">Viernes</th>
                <th className="border border-white">Sábado</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {timetable.map((item, index) => (
                <tr key={index} className="font-creatoBold">
                  <td className="border border-dark">{item[1]}</td>
                  <td className="border border-dark">{item[2]}</td>
                  <td className="border border-dark">{item[3]}</td>
                  <td className="border border-dark">{item[4]}</td>
                  <td className="border border-dark">{item[5]}</td>
                  <td className="border border-dark">{item[6]}</td>
                  <td className="border border-dark">{item[7]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
