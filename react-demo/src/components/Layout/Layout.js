import React from "react";
import Form from "../../Container/Form/Form.js";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <main>
        <Form />
        {children}
      </main>
    </div>
  )
}

export default Layout;