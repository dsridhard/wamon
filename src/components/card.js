import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const [host, sethost] = useState([]);
  const navigate = useNavigate();
  const navHandler = () => {
    navigate(`/${props.appPath}`, {
      state: { id: props.appId, name: props.appName },
    });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 60000); // 1 Minutes

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    fetch(`http://10.64.29.214/snap/${props.appId}`)
      .then((res) => res.json())
      .then((response) => {
        sethost(response.data);
      });
  }, []);
  return (
    <div className="container ">
       <div className="row">
       {host.map((hostData) => (
        <div className="col">
          <div key={hostData.App_ID} className="text-center mt-3 ">
            <div
              className="mx-1 px-1 "
              style={{
                color: "white",
                backgroundColor: hostData.colorCode,
              }}
            >
              <p>{hostData.server_id}</p>
              
            </div>
           
          </div>
        </div>
      ))}
       </div>
     
      <br></br>
      <button className="btn btn-primary btn-sm" onClick={navHandler}>
        View
      </button>
    </div>
  );
};

export default Card;
