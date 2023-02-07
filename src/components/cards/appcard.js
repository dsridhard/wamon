import React, { useState, useEffect } from "react";

const AppCard = () => {
  const [green, red, orange] = "";
  const [hotnm, sethotnm] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/snap/shortsnap/3")
      .then((res) => res.json())
      .then((response) => {
        sethotnm(response.data);
        for (let i in response.data) {
          const cpu_util = response.data[i].cpu_util;
          const mem_util = response.data[i].mem_util;
          const ntp_status = response.data[i].ntp_status;
          const root_vol = response.data[i].root_vol;
          console.log(cpu_util, mem_util, ntp_status, root_vol);
          if (cpu_util && mem_util && ntp_status && root_vol > 0.8) {
            console.warn("ok");
           
          } else {
            console.warn("not ok");
            
          }
        }
      });
  }, []);

  return (
    <div>
      <div className="container-fluid text-center mt-5">
        <div className="row ">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                {hotnm.map((host) => (
                  <div className="p-5 border" key={host.server_id}>
                    cpu{host.cpu_util} util{host.mem_util}ntp {host.ntp_status}
                    root {host.root_vol} ip{host.server_ip}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">CPU Info</th>
                  <th scope="col">CPU Util</th>

                  <th scope="col">Total Memory</th>
                  <th scope="col">Memory Util</th>

                  <th scope="col">NTP Status</th>
                  <th scope="col">NTP Delay</th>
                  <th scope="col">Root vol</th>
                  <th scope="col">UP Time</th>
                  <th scope="col">Server IP</th>
                  <th scope="col">Server Id</th>
                  <th scope="col">Total Memory</th>
                  <th scope="col">App Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
