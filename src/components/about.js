import React from "react";
import { Link, useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const navHandler = () => {
    navigate("/");
  };
  return (
    <div className="mt-4 p-4">
      this is about page
      <Link className="btn btn-info mx-4" to="/">
        Home
      </Link>
      <button className="btn btn-primary" onClick={navHandler}>
        View
      </button>
    </div>
  );
};

export default About;
