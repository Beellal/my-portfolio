import React from 'react';
import { themeContext } from "../../Context";
import { useContext } from "react";

const Card = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="timeline_item">
        <i className={props.icon}></i>
        <span className="timeline_date">{props.year}</span>
        <h3 className="timeline_title">{props.title}</h3>
        <p className="timeline_text" style={{ color: darkMode ? "black" : "" }}>{props.desc}</p>
    </div>
  )
}

export default Card