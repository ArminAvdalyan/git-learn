import React from "react";
import "./Button.css";

const Button = (props) => {
  return  <button onClick={props.onclick} className="btnStyle">{props.text}</button>
}

export default Button;