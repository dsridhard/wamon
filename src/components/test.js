import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState([]);

  const handleClick = () => {
    axios
      .get("https://example.com/api/data")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      {data && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {" "}
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default Test;
