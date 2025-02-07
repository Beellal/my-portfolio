import React from "react";
import "./Toggl.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Toggl = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggl" });
  };

  return (
    <div className="toggl" onClick={handleClick}>
      <i className="fa-solid fa-moon"></i>
      <i className="fa-solid fa-sun"></i>
      <div
        className="t_button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggl;