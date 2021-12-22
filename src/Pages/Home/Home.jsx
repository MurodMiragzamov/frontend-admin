import React from "react";
import Nav from "../../Components/Nav/Nav";
import { Redirect } from "react-router-dom";
import "./Home.scss";
function Home() {
  return (
    <>
      <Nav />
      {!localStorage.getItem("token") ? (
        <Redirect to="/" />
      ) : (
        <Redirect to="/Home" />
      )}
      <h1 className="home__header">Admin Panel </h1>

      <ul className="home__list">
        <li>DIRECTIONS -- klinika yonalishlari royxati</li>
        <li>ORDERS -- patsientla ogan oceretlar va ularni boshqarish</li>
        <li>PATIENTS -- hamma registratsiya qgan patsientla </li>
        <li>
          LOGIN -- data bazada shu user name li va passwordli admin bor yoki
          yogligini tekshirib kiritadi{" "}
        </li>
        <li>nav da login kornmidi har kirganda log qilish kere</li>
        <li>
          HISTORY -- admin orsers dan bita patsient ni ochirsa u patsient
          trigger yordamida HISTORY ga saqlab qoyadi
        </li>
      </ul>

      <h2>TUGADI!!</h2>
    </>
  );
}

export default Home;
