import React from "react";
import { Link } from 'react-router-dom';
import logo from "./images/amazon_logo.png";

function Login() {
  return (
    <div className="login">
      <Link to="/">
          <img className="login__logo" src={logo} alt="logo for login page"/>
      </Link>
    </div>
  );
}

export default Login;
