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
    }, 300000); // 5 Minutes

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/snap/${props.appId}`)
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
              className="mx-1 px-1 "
              style={{
                color: "white",
                backgroundColor: hostData.colorCode,
              }}
            >
              <p>{hostData.server_id}</p>
            </div>
          </div>
        </>
      ))}
      <br></br>
      <button className="btn btn-primary btn-sm" onClick={navHandler}>
        View
      </button>
    </div>
  );
};

export default Card;
