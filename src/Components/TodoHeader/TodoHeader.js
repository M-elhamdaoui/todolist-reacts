import React, { useContext } from "react";
import Theme from "../../Contexts/MoodContext";
import "./todoHeader.css";
import sunIcon from "../../Assets/icons/icon-sun.svg";
import moonIcon from "../../Assets/icons/icon-moon.svg";

function TodoHeader() {
  const theme = useContext(Theme);
  const icon = theme.theme === "dark" ? sunIcon : moonIcon;
  const alts = theme.theme === "dark" ? "Switch to light " : "Switch to dark";
  const to = theme.theme === "dark" ? "light" : "dark";
  const classes = ["todoHeader", theme.theme];
  return (
    <div className={classes.join(" ")}>
      <h1>TODO</h1>
      <img src={icon} alt={alts} onClick={() => theme.setTheme(to)} />
    </div>
  );
}

export default TodoHeader;
