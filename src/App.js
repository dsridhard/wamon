import "./App.css";
import React, { useState, useEffect } from "react";

import Card from "./components/card";
import Appcard from "./components/cards/appcard";
function App() {
  const [item, setitem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/Apps")
      .then((res) => res.json())
      .then((response) => setitem(response.data));
  }, []);

  return (
    <div>
      {item.map((appData) => (
        <Card key={appData.App_ID} name={appData.App_Name} />
      ))}

      <Appcard />
    </div>
  );
}

export default App;
