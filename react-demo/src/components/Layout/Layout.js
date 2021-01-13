import React, { useState, Component } from "react";

import LoginForm from "../../Container/Form/LoginForm/LoginForm.js";
import SignUpForm from "../../Container/Form/SignupForm/SignupForm.js";
import Button from "../../Components/Button/Button.js";
import Products from "../../Container/Products/Products.js";

import "./Layout.scss";

// const Layout = ({ children }) => {
//   const [isLogin, setIsLogin] = useState(false);

//   const toggleLogin = () => {
//     setIsLogin(!isLogin);
//   }

//   return (
//     <div className="app-layout">
//       <main>
//         <Products />
//         {isLogin ?
//           <SignUpForm />
//           : <LoginForm />
//         }
//         <Button onclick={toggleLogin} text="Click" newBtnClass="btn-layout" />
//         {children}
//       </main>
//     </div>
//   )
// }

class LayoutClass extends Component {
  state = {
    isLogin: true
  }

  toggleLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }
  render() {
    return (
      <div className="app-layout">
        <main>
          <Products />
          {this.state.isLogin ?
            <SignUpForm />
            : <LoginForm />
          }
          <Button onclick={this.toggleLogin} text="Click" newBtnClass="btn-layout" />
          {/* {children} */}
        </main>
      </div>
    )
  }
}

export default LayoutClass;