import React from "react";
import "./style.css";
import Logo from "./images/unnamed.gif"
const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm grad navbar-dark  sticky-top">
      <div className="container">
        <div className="row">
          <div className="logo float col text-center ">
            <a>
              <img
                className="navbar-brand img-fluid"
                src={Logo}

              />
            </a>
          </div>
        </div>
        <h2 className="col-md-10 text-center text-white user-select-none">
          Gimple
        </h2>
      </div>
    </nav>
  );
};

export default Header;
