import React, { useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom";
import Header from "./header";
const AppCard = (props) => {
  let btnnumber = 0;
  const [showTable, setShowTable] = useState(false);
  const [getData, setData] = useState();
  const location = useLocation();
  console.warn(location.state)

  const [hotnm, sethotnm] = useState([]);
  const buttonData = [
   {id:1,name:"srv1"},
   {id:2,name:"srv2"},
   {id:3,name:"srv3"},
   {id:4,name:"srv4"},
   {id:5,name:"srv5"},
   {id:6,name:"srv6"},
   {id:7,name:"srv7"},

  ]

  function removeItem(name) {
    btnnumber = name;
    fetch("http://10.64.29.214/snap/shortsnap/" + name)
      .then((res) => res.json())

      .then((res) => {
        setData(res.data);
      });
    setShowTable(true);
  
  }
 

  const handleClick = () => {
    setShowTable(true);
  };

  return (
    <div>
      <Header />
      <div className="container-fluid text-right mt-5">
        <Link className="btn btn-info mx-4" to="/">
          Home
        </Link>
        <button className="btn btn-primary" >
       {location.state.id}
        </button>
      {buttonData.map((btnm)=>(
               <button className="mx-3 btn btn-primary" key={btnm.id}   onClick={() => removeItem(btnm.id)} >{btnm.name}</button> 
              ))}



{showTable && (
        <table className="table">
          <thead>
            <tr>
              <th>CPUINFO</th>
              <th>cpu_util</th>
              <th>mem_util</th>
              <th>ntp_delay</th>
              <th>ntp_status</th>
            </tr>
          </thead>

          <tbody>
            {getData.map(
              (
                item // Iterate over data and create table rows with data.map() method.
              ) => (
                <tr key={item.id}>
                  <td>{item.cpuinfo}</td>
                  <td>{item.cpu_util}</td>
                  <td>{item.mem_util}</td>
                  <td>{item.ntp_delay}</td>
                  <td>{item.ntp_status}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}


         {
          hotnm.map((responseData)=>(

    <div key={responseData.id} className="mt-5">{responseData.cpu_util}</div>

          ))
         }
       
        
      </div>
    </div>
  );
};

export default AppCard;
