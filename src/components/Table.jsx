import { useEffect, useState } from 'react';
import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  keyFile: '/config/credentials-google-drive.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });
const spreadsheetId = '11HWLVJVE_vXw6a3jRDlMJWa1f-5_6BeEc90Hu9tm2bo';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    sheets.spreadsheets.values.get(
      {
        spreadsheetId,
        range: 'Box!B3:H14',
      },
      (err, res) => {
        if (err) {
          console.log(`Error al acceder a los datos: ${err}`);
        } else {
          setData(res.data.values || []); // Almacenamos los datos en el estado
        }
      }
    );
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
            <th>Columna 3</th>
            <th>Columna 4</th>
            <th>Columna 5</th>
            <th>Columna 6</th>
            <th>Columna 7</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

