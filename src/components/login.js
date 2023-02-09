import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wave from "../components/logo.svg";
import HPELogo from "./images/unnamed.gif";
const Login = () => {
  const [user, setUser] = useState();
  const [pwd, setPwd] = useState();
  const navigate = useNavigate();
  const handleLogin = async () => {
    // console.warn(user, pwd);
    let result = await fetch("http://10.64.29.214/auth", {
      method: "post",
      body: JSON.stringify({
        user_id: "admin",
        password: "admin",
      }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
         sessionStorage.setItem('user',JSON.stringify(result));
         navigate("/home")
    } else {
      alert(result.error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className=" mt-5 mx-3 card   tbg rounded-3 shadow-lg">
              <span className="text-center mt-3 h5 text-dark">Gimple</span>
              <div id="logins" className=" card-body">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="uname"
                    required
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="form-control"
                    placeholder="Please Enter Username"
                  />
                  <label htmlFor="floatingInput">Please Enter Username</label>
                </div>

                <div className="mb-3">
                  <div className="form-floating">
                    <input
                      type="password"
                      required
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)}
                      className="form-control"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">
                      Please Enter Password
                    </label>
                  </div>
                </div>
                <div className="mb-3 text-center">
                  <button
                    type="submit"
                    className="btn grad text-white text-center"
                    onClick={handleLogin}
                  >
                    Login<i className="fas fa-sign-in-alt "></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 text-center">
            <img
              className="mt-5"
              style={{ height: "90px" }}
              alt="logoimg"
              src={HPELogo}
            />
          </div>
        </div>
      </div>
      <img className="fixed-bottom" src={Wave} alt="svgwave" />
    </>
  );
};

export default Login;
