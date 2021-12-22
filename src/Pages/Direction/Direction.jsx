import React from "react";
import "./Direction.scss";
import Nav from "../../Components/Nav/Nav";
import { Redirect } from "react-router-dom";
function Direction() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8030/yonalish")
      .then((response) => response.json())
      .then((datas) => setData(datas));
  }, []);
  return (
    <>
      <Nav />
      {!localStorage.getItem("token") ? (
        <Redirect to="/" />
      ) : (
        <Redirect to="/Direction" />
      )}
      <h1 className="dir__header">Directions</h1>

      <div className="dir__title">
        <h4 className="dir__dirname">Directions name</h4>
        <h4 className="dir__doctor">Doctors name</h4>
      </div>
      <ul className="dir__list">
        {data.length &&
          data.map((row) => (
            <li className="dir__item" key={row.direction_id}>
              <p className="dir-name">{row.direction_name}</p>
              <p className="dir_doc">{row.direction_doctor}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Direction;
