import React from "react";
import "./Login.scss";
function Login() {
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8030/admin/login")
      .then((response) => response.json())
      .then((datas) => setData(datas));
  }, []);
  React.useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const adminName = React.useRef(null);
  const adminPassword = React.useRef(null);
  return (
    <>
      <h1 className="log__header">Login</h1>
      <form
        className="log__form"
        onSubmit={(evt) => {
          evt.preventDefault();

          data.length &&
            data.forEach((row) => {
              if (
                row.admin_name === adminName.current.value &&
                row.admin_password === adminPassword.current.value
              ) {
                localStorage.setItem("token", row.admin_password);
                window.location.href = "/Home";
              } else {
                setValue("password yoki username notogri kiritilgan");
              }
            });
        }}
      >
        <input
          ref={adminName}
          type="text"
          placeholder="username"
          autoComplete="off"
          className="log__adminname"
        />
        <input
          ref={adminPassword}
          type="text"
          placeholder="Password"
          autoComplete="off"
          className="log__adminpass"
        />
        <button className="log__btn">Submit</button>
      </form>
      <p className="log__p">{value}</p>
      <p>username : Adminali pass: ali123</p>
    </>
  );
}

export default Login;
