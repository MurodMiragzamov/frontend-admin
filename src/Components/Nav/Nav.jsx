import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
function Nav() {
  return (
    <>
      <nav>
        <h1 className="header">Najot Klinika</h1>

        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/Home">
              <h4 className="page-link">Home</h4>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Direction">
              <h4 className="page-link">Directions</h4>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Order">
              <h4 className="page-link">Orders</h4>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Patients">
              <h4 className="page-link">Patients</h4>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/History">
              <h4 className="page-link">History</h4>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
