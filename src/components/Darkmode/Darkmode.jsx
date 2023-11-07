// import React, { useState } from "react";
import "./Darkmode.css";

const Darkmode = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme == "light") {
    setLightTheme();
  } else setDarkTheme();

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkTheme();
    } else setLightTheme();
  };

  return (
    <div className="dark_mode">
      <label className="ui-switch" htmlFor="darkmode-toggle">
        <input
          type="checkbox"
          className="dark_mode_input"
          id="darkmode-toggle"
          onClick={toggleTheme}
          defaultChecked={selectedTheme !== "light"}
        />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </div>
  );
};

export default Darkmode;
