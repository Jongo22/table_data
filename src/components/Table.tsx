interface Props {
  tableOne?: string;
  tableTwo?: string;
}

type DataArray = Array<{ [key: string]: number }>;

const dataArray: DataArray = [
  { A1: 41 },
  { A2: 18 },
  { A3: 21 },
  { A4: 63 },
  { A5: 2 },
  { A6: 53 },
  { A7: 5 },
  { A8: 57 },
  { A9: 60 },
  { A10: 98 },
  { A11: 28 },
  { A12: 3 },
  { A13: 90 },
  { A14: 39 },
  { A15: 80 },
  { A16: 88 },
  { A17: 49 },
  { A18: 60 },
  { A19: 26 },
  { A20: 28 },
];

const sumOfAlpha = dataArray[4].A5 + dataArray[19].A20;
const quotientOfBeta = dataArray[14].A15 / dataArray[6].A7;
const productOfCharlie = dataArray[12].A13 * dataArray[11].A12;

const Table = ({ tableOne, tableTwo }: Props) => {
  if (tableOne) {
    return (
      <div className="container">
        <h3 className="table-font">
          {" "}
          Table 1
          <table className="table">
            <div className="table-container">
              <thead>
                <tr className="table-row">
                  <th className="table-header">Index</th>
                  <th className="table-header">Value</th>
                </tr>
              </thead>
              <tbody>
                {/* Map over the dataArray to create rows */}
                {dataArray.map((data, index) => (
                  <tr key={index}>
                    {/* Map over keys to create cells in the first column */}
                    <td className="table-data">
                      {Object.keys(data).map((key) => (
                        <div className="index" key={key}>{key}</div>
                      ))}
                    </td>
                    {/* Map over values to create cells in the second column */}
                    <td className="table-data">
                      {Object.values(data).map((value, idx) => (
                        <div className="value" key={idx}>{value}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </div>
          </table>
        </h3>
      </div>
    );
  } else if (tableTwo) {
    return (
      <div className="container">
        <h3 className="table-font">
          {" "}
          Table 2
          <table className="table">
            <thead>
              <tr className="table-row">
                <th className="table-header">Category</th>
                <th className="table-header">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-data">
                <th className="index" >Alpha</th>
                <td>{sumOfAlpha}</td>
              </tr>
              <tr className="table-data">
                <th className="index">Beta</th>
                <td>{quotientOfBeta}</td>
              </tr>
              <tr className="table-data">
                <th className="index">Charlie</th>
                <td>{productOfCharlie}</td>
              </tr>
            </tbody>
          </table>
        </h3>
      </div>
    );
  }
};

export default Table;
