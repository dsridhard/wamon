import React from "react";
const Card = (props) => {
  return (
    <div className="container-fluid">
    
      <div className="row row-cols-2 row-cols-md-2 g-4 justify-content-center align-items-center ">
        <div className="col">
          <div className="card-body shadow-lg mt-3  p-2">
            <div className="card-title">
              <h3 className="text-center mt-4">{props.name}</h3>
            </div>
            <p className="card-text"></p>
            <button className="btn btn-primary text-center">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
