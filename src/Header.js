import React from "react";

export default function Header(props) {
  function clicker() {
    window.location.href = "https://wasifkhan00.github.io/weather/";
  }
  return (
    <>
      <header className="header">
        <h2>{props.logo}</h2>
        <ul>
          <li onClick={clicker}>{props.first}</li>
          <li onClick={clicker}>{props.second}</li>
          <li onClick={clicker}>{props.third}</li>
          <li onClick={clicker}>{props.fourth}</li>
        </ul>
      </header>
    </>
  );
}
