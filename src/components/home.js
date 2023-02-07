import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [hotnm, sethotnm] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/apps")
      .then((res) => res.json())
      .then((response) => {
        sethotnm(response.data);
      });
  }, []);
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-12 text-center ">
          <h1>DashBoard</h1>
        </div>
      </div>
      <div className="text-center mt-5 p-4">
        {hotnm.map((appData) => (
          <div className="">
            <h1> {appData.App_Name} </h1>
            <Link
              className="btn btn-primary"
              key={appData.App_ID}
              to={appData.App_Path}
            >
              View
            </Link>
          </div>
        ))}
        <Link to="/detailview">Detail</Link>
      </div>
    </div>
  );
};

export default Home;
