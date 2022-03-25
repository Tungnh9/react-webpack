import * as React from "react";
import Form from "./Form";
import "./login.scss";

const Banner = require("../../assets/bg.png");

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper-login">
          <div className="login-form">
            <h3 className="title">login</h3>
            <Form />
          </div>
          <div className="banner">
            <img srcSet={`${Banner} 2x`} alt="banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
