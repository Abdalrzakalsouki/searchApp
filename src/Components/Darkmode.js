import React from "react";
import "../Mode.css";
import { BsSun, BsMoon } from "react-icons/bs";
export default function Darkmode() {
  let theme;
  const lightTheme = "light";
  const darkTheme = "dark";

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    document.body.classList.add(theme);
  } else {
    document.body.classList.add(lightTheme);
  }

  const switchTheme = () => {
    if (theme === darkTheme) {
      document.body.classList.replace(darkTheme, lightTheme);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      document.body.classList.replace(lightTheme, darkTheme);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  window.onload = function () {
    const checkbox1 = document.getElementById("checkbox");
    checkbox1.addEventListener("click", switchTheme);
  };

  return (
    <div>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="label">
        <BsMoon color="#DDEBF7" />
        <BsSun color="#F7D154" />
        <div className="ball"></div>
      </label>
    </div>
  );
}
