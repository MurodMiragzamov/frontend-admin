import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./Order.scss";
import { Redirect } from "react-router-dom";
function Order() {
  const [data, setData] = React.useState([]);
  const [deleteData, setDeleteData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8030/admin/orders")
      .then((response) => response.json())
      .then((datas) => setData(datas));
  }, []);
  React.useEffect(() => {
    const asyncPostCall = async () => {
      try {
        await fetch("http://localhost:8030/submitOrder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: deleteData }),
        });
      } catch (error) {
        console.log(error);
      }
    };

    asyncPostCall();
  }, [deleteData]);

  return (
    <>
      <Nav />
      {!localStorage.getItem("token") ? (
        <Redirect to="/" />
      ) : (
        <Redirect to="/Order" />
      )}
      <h1 className="ord__header">Orders</h1>

      <ul className="ord__list">
        {data.length &&
          data.map((row) => (
            <li className="ord__item" key={row.waiting_patient_id}>
              <p className="ord__username">
                Username: {row.waiting_patient_username}
              </p>
              <p className="ord__fname">
                First name: {row.waiting_patient_firstname}
              </p>
              <p className="ord__lname">
                Last name: {row.waiting_patient_lastname}
              </p>
              <p className="ord__phone">Phone: {row.waiting_patient_phone}</p>
              <p className="ord__dir">
                Direction: {row.waiting_patient_direction_name}
              </p>
              <p className="ord__date">
                Add data: {row.waiting_patient_addtime}
              </p>
              <button
                className="ord__btn"
                onClick={() => {
                  setDeleteData(row.waiting_patient_username);
                  window.location.href = "/Order";
                }}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Order;
