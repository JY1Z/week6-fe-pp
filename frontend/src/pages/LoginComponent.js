// src/components/LoginComponent.js
// import React, { useState } from "react";
import useField from "../hooks/useField";
import useLogin from "../hooks/useLogin";

const LoginComponent = ({ setIsAuthenticated }) => {
  const emailField = useField("text");
  const passwordField = useField("password");
  const { login } = useLogin(setIsAuthenticated);

  return (
    <div>
      <h2>Login</h2>
      <label>
        Email:
        <input {...emailField} />
      </label>
      <br />
      <label>
        Password:
        <input {...passwordField} />
      </label>
      <br />
      <button onClick={() => login(emailField.value, passwordField.value).then((user) => {
        if (user) {
          sessionStorage.setItem("user", JSON.stringify(user));
          setIsAuthenticated(true);
        }
      })}>Log In</button>
    </div>
  );
};

export default LoginComponent;