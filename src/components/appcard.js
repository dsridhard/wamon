import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./header";
const Appcard = () => {
  const location = useLocation();
  const hostView = location.state.id;
  console.warn(hostView);
  const [item, setitem] = useState([]);
  useEffect(() => {
    fetch(`http://10.64.29.214/snap/${hostView}`)
      .then((response) => response.json())
      .then((resData) => {
        console.warn(resData);
        setitem(resData.data)
      });
  }, []);
  return (
    <div>
      <Header />
      <Link className="btn btn-info mx-4 mt-5" to="/">
        Home
      </Link>
      <button className="btn btn-primary">{location.state.id}</button>
     
      {item.map((element) => (
        <>
          <div key={element.App_ID} className="text-center mt-3 ">
            <div
              className="mx-1 "
              style={{
                color: "white",
                backgroundColor: element.colorCode,
                borderRadius: 100,
              }}
            >
               <button className="mx-3 btn btn-primary">Detail</button> 
            </div>
            <p>cpu_util:{element.cpu_util}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Appcard;
