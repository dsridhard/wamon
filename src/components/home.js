import React, { useEffect, useState } from "react";
import Header from "./header";
import Card from "./card";
import Wave from "../components/logo.svg";
const Home = () => {
  const [hotnm, sethotnm] = useState([]);
  useEffect(() => {
    fetch("http://10.64.29.214/apps")
      .then((res) => res.json())
      .then((response) => {
        sethotnm(response.data);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row mt-5 ">
          {hotnm.map((appData) => (
            <div
              key={appData.App_ID}
              className=" col  text-center mx-1 rounded-4   "
            >
              <div className="card mt-2 shadow-lg">
                <div className="card-header">{appData.App_Name}</div>
                <div className="card-body">
                  <Card  appPath={appData.App_Path} appId={appData.App_ID} />
                </div>
              </div>
            </div>
          ))}

          <img className="fixed-bottom" src={Wave} alt="svgwave"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
