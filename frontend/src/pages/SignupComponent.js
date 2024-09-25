// src/components/SignupComponent.js
// import React, { useState } from "react";
import useField from "../hooks/useField";
import useSignup from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const emailField = useField("text");
  const passwordField = useField("password");
  const password2Field = useField("password"); 
  const { signup } = useSignup(setIsAuthenticated);

  const handleSubmit = () => {
    if (passwordField.value !== password2Field.value) {
      alert("Passwords do not match!");
      return;
    }
    signup(emailField.value, passwordField.value).then((user) => {
      if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
        setIsAuthenticated(true);
      }
    });
  };

  return (
    <div>
      <h2>Signup</h2>
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
      <label>
        Confirm Password:
        <input {...password2Field} />
      </label>
      <br />
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
