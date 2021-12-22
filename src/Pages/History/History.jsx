import React from "react";
import Nav from "../../Components/Nav/Nav";
import { Redirect } from "react-router-dom";
import "./History.scss";
function History() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8030/history")
      .then((response) => response.json())
      .then((datas) => setData(datas));
  }, []);
  return (
    <>
      <Nav />
      {!localStorage.getItem("token") ? (
        <Redirect to="/" />
      ) : (
        <Redirect to="/History" />
      )}
      <h1 className="ord__header">History</h1>

      <ul className="ord__list his_list">
        {data.length &&
          data.map((row) => (
            <li className="ord__item" key={row.history_id}>
              <p className="ord__username">Username: {row.history_username}</p>
              <p className="ord__fname">First name: {row.history_firstname}</p>
              <p className="ord__lname">Last name: {row.history_lastname}</p>
              <p className="ord__phone">Phone: {row.history_phone}</p>
              <p className="ord__dir">Direction: {row.history_direction}</p>
              <p className="ord__date">Delete data: {row.history_addtime}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default History;
