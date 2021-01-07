import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div>
      <input className="inputStyle" onChange={props.onChange} type={props.type} value={props.value} placeholder={props.placeholder}/>
    </div>
  )
}

export default Input;
