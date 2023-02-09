import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./style.css";
import Header from "./header";
import User from "./User";
import CpuLogo from "./images/cpu.gif";
import MemLogo from "./images/ram.png";
import Hard from "./images/hard-disk.gif";
import NTP from "./images/hourglass.gif";
const Appcard = () => {
  const location = useLocation();
  const hostView = location.state.id;
  const [item, setitem] = useState([]);
  const [modeldata, setModeldata] = useState({
    server_id: "",
    server_ip: "",
    cpuinfo: "",
    cpu_util: "",
    mem_util: "",
    ntp_delay: "",
    ntp_status: "",
    root_vol: "",
    total_mem: "",
    up_time: "",
    ntp_status: "",
    root_vol: "",
    total_mem: "",
    up_time: "",
  });

  const tableHandler = () => {};
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 60000); // 1 Minutes

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    fetch(`http://10.64.29.214/snap/${hostView}`)
      .then((response) => response.json())
      .then((resData) => {
        setitem(resData.data);
      });
  }, []);
  const showDetail = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resposne) => resposne.json())
      .then((res) => setModeldata(res));
  };
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <User />
        <div className="row">
          <div className=" col">
            <Link
              className="btn gradLove text-white border-light mx-2 "
              to="/home"
            >
              Home
            </Link>
            <p className="text-center display-5 ">{location.state.name}</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {item.map((element,index) => (
            <div key={index} className="col-sm-1">
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
              <span className="badge grad">Server Detail</span>
            </h4>
            <div className="table-responsive">
              <table className="table table-hover  border shadow-md">
                <thead className="gradMaldives border-light text-white">
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
                          className="btn gradBlue border-light text-white"
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
            {/*model*/}
            <div className="modal fade" id="myModal">
              <div className="modal-dialog modal-dialog-centered  modal-lg" style={{ width: "4200px" }}>
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Sever_Id : {modeldata.id}</h4>
                    <button type="button" className="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>

                  <div className="modal-body">
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th>SID </th>
                          <th>IP</th>
                          <th>CPUINFO</th>
                          <th>CPUtil</th>
                          <th>MemUtil</th>
                          <th>NTPDelay </th>
                          <th>NTPStaus</th>
                          <th>RooTVol</th>
                          <th>TotalMem</th>
                          <th>UpTime</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{modeldata.server_id}</td>
                          <td>{modeldata.server_ip}</td>
                          <td>{modeldata.cpuinfo}</td>
                          <td>{modeldata.cpu_util}</td>
                          <td>{modeldata.mem_util}</td>
                          <td>{modeldata.ntp_delay}</td>
                          <td>{modeldata.ntp_status}</td>
                          <td>{modeldata.root_vol}</td>
                          <td>{modeldata.total_mem}</td>
                          <td>{modeldata.up_time}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appcard;
//how to pass api data on table on click of button in reactjs
