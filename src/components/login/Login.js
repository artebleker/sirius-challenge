import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./login.css";
const Login = () => {
  const history = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;
    const registerEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      document.getElementById("login-error").innerHTML = "Complete all fields";

      return;
    }
    if (email !== "" && !registerEmail.test(email)) {
      document.getElementById("login-error").innerHTML = "Invalid e-mail";

      return;
    }
    if (email !== "username@sirius.com" || password !== "react") {
      document.getElementById("login-error").innerHTML =
        "Invalid e-mail or password";

      return;
    }

    sessionStorage.setItem("token", "tokenVerified");

    history("/characters");
  };
  let token = sessionStorage.getItem("token");

  return (
    <>
      {token ? (
        <Navigate to={"/characters"} replace />
      ) : (
        <div className="login-container">
          <form onSubmit={submitHandler} className="login-form">
            <input
              type="text"
              name="email"
              className="text input-login"
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              className="text input-login"
              placeholder="password"
            />
            <h4 id="login-error" className="text text-alert">
              &nbsp;{" "}
            </h4>
            <button type="submit" className="text btn-login">
              Sign up
            </button>
          </form>
          <div className="text-password text">
          <p>Username: <b>username@sirius.com</b></p>
          <p>Password: <b>react</b></p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
