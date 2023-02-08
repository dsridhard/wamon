import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const id= 5
  const [host, sethost] = useState([]);
  const navigate = useNavigate()
  const navHandler=()=>{
    navigate(`/${props.appPath}`,{state:{id:props.appId}})
  }

  useEffect(() => {
    fetch(`http://10.64.29.214/snap/${props.appId}`)
      .then((res) => res.json())
      .then((response) => {
        sethost(response.data);
      });
  }, []);
  return (
    <div className="d-inline-flex ">
      {host.map((hostData) => (
        <>
          <div key={hostData.App_ID} className="text-center mt-3 ">
            <div
              className="mx-1 "
              style={{
                color: "white",
                backgroundColor: hostData.colorCode,
                borderRadius: 100,
              }}
            >
              <p>u</p>
            </div>
          </div>
        </>
      ))}
      <button className="btn btn-primary" onClick={navHandler}>
        View
      </button>
    </div>
  );
};

export default Card;
