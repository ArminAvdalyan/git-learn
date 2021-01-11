import React, {useState } from "react";
import LoginForm from "../../Container/Form/LoginForm/LoginForm.js";
import SignUpForm from "../../Container/Form/SignupForm/SignupForm.js";
import Button from "../../Components/Button/Button.js";
import "./Layout.scss";

const Layout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  
  const toggleLogin = () => {
    console.log('1111ddd', isLogin);

    setIsLogin(!isLogin);
  }

  console.log('ddd', isLogin);

  return (
    <div className="app-layout">
      <main>
        {isLogin ? 
          <SignUpForm />
        : <LoginForm />
        }
        <Button onclick={toggleLogin} text="Button" />
        {children}
      </main>
    </div>
  )
}

export default Layout;