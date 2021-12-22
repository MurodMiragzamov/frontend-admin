import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./Patients.scss";
import { Redirect } from "react-router-dom";
function Patients() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8030/admin/patients")
      .then((response) => response.json())
      .then((datas) => setData(datas));
  }, []);
  return (
    <>
      <Nav />
      {!localStorage.getItem("token") ? (
        <Redirect to="/" />
      ) : (
        <Redirect to="/Patients" />
      )}
      <h1 className="pat__header">Patients</h1>

      <div className="pat__title">
        <h4 className="pat__username">Username</h4>
        <h4 className="pat__age">Age</h4>
      </div>
      <ul className="pat__list">
        {data.length &&
          data.map((row) => (
            <li className="pat__item" key={row.patient_id}>
              <p className="pat-username">{row.patient_username}</p>
              <p className="pat_age">{row.patient_age}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Patients;
