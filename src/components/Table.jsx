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
                  <td className={`border border-slate-400 ${item[1] === 'WOD' || item[1] === 'ENDURANCE' ? 'bg-red-200' : item[1] === 'TRY45' || item[1] === 'AERIAL' ? 'bg-blue-100' : ''}`}>{item[1]}</td>
                  <td className={`border border-slate-400 ${item[2] === 'WOD' || item[2] === 'ENDURANCE' ? 'bg-red-200' : item[2] === 'TRY45' || item[2] === 'AERIAL' ? 'bg-blue-100' : ''}`}>{item[2]}</td>
                  <td className={`border border-slate-400 ${item[3] === 'WOD' || item[3] === 'ENDURANCE' ? 'bg-red-200' : item[3] === 'TRY45' || item[3] === 'AERIAL' ? 'bg-blue-100' : ''}`}>{item[3]}</td>
                  <td className={`border border-slate-400 ${item[4] === 'WOD' || item[4] === 'ENDURANCE' ? 'bg-red-200' : item[4] === 'TRY45' || item[4] === 'AERIAL' ? 'bg-blue-100' : ''}`}>{item[4]}</td>
                  <td className={`border border-slate-400 ${item[5] === 'WOD' || item[5] === 'ENDURANCE' ? 'bg-red-200' : item[5] === 'TRY45' || item[5] === 'AERIAL' ? 'bg-blue-100' : ''}`}>{item[5]}</td>
                  <td className={`border border-slate-400 ${item[6] === 'WOD' || item[6] === 'ENDURANCE' ? 'bg-red-200' : item[6] === 'TRY45' || item[6] === 'AERIAL' ? 'bg-blue-100' : ''}`}>{item[6]}</td>
                  <td className={`border border-slate-400 ${item[7] === 'WOD' || item[7] === 'ENDURANCE' ? 'bg-red-200' : item[7] === 'TRY45' || item[7] === 'AERIAL' ? 'bg-blue-100' : ''}`}>{item[7]}</td>
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
