import React, { useState } from "react";

const TableData = () => {
  const [showTable, setShowTable] = useState(false);

  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 28 },
    { id: 3, name: "Jack", age: 30 },
  ];

  const handleClick = () => {
    setShowTable(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Data</button>

      {showTable && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody>
            {data.map(
              (
                item // Iterate over data and create table rows with data.map() method.
              ) => (
                <tr key={item.id}>
                  {" "}
                  // Add a unique key to each row for React to identify them.
                  <td>{item.id}</td> // Add the values of each item object to
                  the corresponding cell in the table row.
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              )
            )}{" "}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default TableData;
