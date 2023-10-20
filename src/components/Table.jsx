import { useEffect, useState } from "react";
import { getTimetable } from "../services";

const Table = () => {
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    getTimetable().then((data) => {
      setTimetable(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="w-full min-h-screen items-center flex flex-col gap-10">
      <h1 className="text-3xl font-creatoBold">Horarios</h1>
      {timetable.length > 0 ? (
        <table cellPadding={10} className="bg-gray-200" >
          <tbody>
            {timetable.map((item, index) => (
              <tr key={index}>
                <td className="font-creatoBold">{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
                <td>{item[5]}</td>
                <td>{item[6]}</td>
                <td>{item[7]}</td>
                <td>{item[8]}</td>
                <td>{item[9]}</td>
                <td>{item[10]}</td>
                <td>{item[11]}</td>
                <td>{item[12]}</td>

                {/* Agrega más celdas para otras propiedades */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Table;
