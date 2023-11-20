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
        setLoading(false);
      })
      .catch((error) => {
        setError(
          `Error al cargar el horario. Inténtalo de nuevo más tarde. Detalles: ${error.message}`
        );
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full items-center justify-start flex flex-col gap-10 px-32 font-creato">
      {loading ? (
        <p className="text-white text-xl">Cargando horarios...</p>
      ) : error ? (
        <p className="text-white">{error}</p>
      ) : (
        <div className="bg-gray-200 w-full shadow-md shadow-gray-600">
          <table cellPadding={12} className="w-full border-separate">
            <thead className="text-white bg-dark font-creatoBold border">
              <tr>
                <th className="border uppercase tracking-wider">Hora</th>
                <th className="border uppercase tracking-wider">Lunes</th>
                <th className="border uppercase tracking-wider">Martes</th>
                <th className="border uppercase tracking-wider">Miércoles</th>
                <th className="border uppercase tracking-wider">Jueves</th>
                <th className="border uppercase tracking-wider">Viernes</th>
                <th className="border uppercase tracking-wider">Sábado</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {timetable.map((item, index) => (
                <tr key={index} className="font-creatoBold">
                  {Object.keys(item).map((hora, subIndex) => (
                    <td
                      key={subIndex}
                      className={`border border-slate-400 ${
                        item[hora] === "WOD" || item[hora] === "ENDURANCE"
                          ? "bg-red-200"
                          : item[hora] === "TRY45" || item[hora] === "AERIAL"
                          ? "bg-blue-100"
                          : ""
                      }`}
                    >
                      {item[hora]}
                    </td>
                  ))}
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
