import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Header from "./header";
import CpuLogo from "./images/cpu.gif";
import MemLogo from "./images/ram.png";
import Hard from "./images/hard-disk.gif";
import NTP from "./images/hourglass.gif";
const Appcard = () => {
  const location = useLocation();
  const hostView = location.state.id;
  const [item, setitem] = useState([]);
  const showDetail = () => {};
  const tableHandler = () => {};
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 60000); // 5 Minutes

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/snap/${hostView}`)
      .then((response) => response.json())
      .then((resData) => {
        setitem(resData.data);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="mt-3">
          <Link className="btn btn-info mx-2 " to="/">
            Home
          </Link>
          <button className="btn btn-primary text-center">
            {location.state.name}
          </button>
        </div>
        <div className="row justify-content-center">
          {item.map((element) => (
            <div key={element.server_id} className="col-sm-1">
              <div
                className="card my-2 shadow-lg "
                onClick={tableHandler()}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="card-body "
                  // style={{ backgroundColor: element.colorCode, color: "white" }}
                >
                  <div className="d-inline-flex">
                    <div>
                      <img className="imglogo" alt="cpu" src={CpuLogo} />
                    </div>
                    <div>
                      <img className="imglogo" alt="mem" src={MemLogo} />
                    </div>
                  </div>
                  <br></br>
                  <p
                    className="mt-2 text-center"
                    style={{
                      backgroundColor: element.colorCode,
                      color: "white",
                    }}
                  >
                    {element.server_id}
                  </p>
                  <div className="d-inline-flex">
                    <div>
                      <img className="imglogo" alt="vol" src={Hard} />
                    </div>
                    <div>
                      <img className="imglogo" alt="ntp" src={NTP} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-6 ">
            <h4 className="text-center">
              <span className="badge bg-secondary ">Server IP</span>
            </h4>
            <div className="table-responsive">
              <table className="table table-hover  border shadow-lg">
                <thead className="table-primary">
                  <tr>
                    <th scope="col">SID</th>
                    <th scope="col">IP</th>
                    <th scope="col">CPU</th>
                    <th scope="col">Mem</th>
                    <th scope="col">Root</th>
                    <th scope="col">NTPDelay</th>
                    <th scope="col">NTP</th>
                    <th scope="col">TotalMem</th>
                    <th scope="col">UpTime</th>
                    <th scope="col">ShowDetail</th>
                  </tr>
                </thead>
                <tbody>
                  {item.map((tableData, index) => (
                    <tr key={index}>
                      <td>{tableData.server_id}</td>
                      <td>{tableData.server_ip}</td>
                      <td>{tableData.cpu_util}</td>
                      <td>{tableData.mem_util}</td>
                      <td>{tableData.root_vol}</td>
                      <td>{tableData.ntp_delay}</td>
                      <td>{tableData.ntp_status}</td>
                      <td>{tableData.total_mem}</td>
                      <td>{tableData.up_time}</td>
                      <td>
                        <button
                          class="btn btn-primary"
                          onClick={(e) => showDetail(tableData.server_id)}
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appcard;
//how to pass api data on table on click of button in reactjs
