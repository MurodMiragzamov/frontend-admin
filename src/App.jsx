import "./App.scss";
import React from "react";
import { Switch, Route } from "react-router-dom";

//   Pages---
import Home from "./Pages/Home/Home";
import Direction from "./Pages/Direction/Direction";
import Order from "./Pages/Order/Order";
import Login from "./Pages/Login/Login";
import Patients from "./Pages/Patients/Patients";
import History from "./Pages/History/History";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/Direction" component={Direction} exact />
        <Route path="/Order" component={Order} exact />
        <Route path="/Home" component={Home} exact />
        <Route path="/Patients" component={Patients} exact />
        <Route path="/History" component={History} exact />
      </Switch>
    </div>
  );
}
export default App;
