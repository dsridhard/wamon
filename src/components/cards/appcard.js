import React,{useState,useEffect} from "react";

const Appcard = () => {
const green="";
const red="";
  const [hotnm, sethotnm] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/snap/shortsnap/3")
      .then((res) => res.json())
      .then((response) => {sethotnm(response.data)}
      );
    

  }, []);

  return (
    <div>
      <div className="container-fluid text-center mt-5">
        <div className="row ">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                {hotnm.map((host) => (
                  <div className="p-5 border" key={host.server_id}>cpu{host.cpu_util} util{host.mem_util}ntp {host.ntp_status}root {host.root_vol} ip{host.server_ip}  </div>
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
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
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

export default Appcard;
