import React, { useState } from "react";

import Button from "../../../Components/Button/Button.js";
import Input from "../../../Components/Input/Input.js";
import { Validate } from "../../../util/validate.js";

import "./LoginForm.css";

const LoginForm = () => {
  const [inputText, setInputText] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const onchangeText = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  }

  const onchangeEmail = (e) => {
    e.preventDefault();
    setInputEmail(e.target.value);
  }

  const onclickBtn = (e) => {
    e.preventDefault();
    const result = Validate(inputText);
    if(!result.isValid) {
      alert(result.errorText);
    } else {
      console.log("name: " + inputText);
      console.log("email: " + inputEmail);
    }
  }

  return (
    <form className="formStyle">
      <Input onChange={onchangeText} value={inputText} type="text" placeholder="Name" />
      <Input onChange={onchangeEmail} value={inputEmail} type="email" placeholder="Email" />
      <Button onclick={onclickBtn} text="Login" />
    </form>
  )
}

export default LoginForm;
 