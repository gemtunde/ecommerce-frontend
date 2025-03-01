import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div>
      <form action="" className="auth-form">
        <div className="form-header">
          <p className="form-title">{currentState}</p>
        </div>
        {currentState === "Login" ? null : (
          <input
            type="text"
            placeholder="Username"
            required
            className="form-input"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          required
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="form-input"
        />
        <div className="form_footer">
          <p className="forgot-password">Forgot Password</p>
          {currentState === "Login" ? (
            <p
              className="toggle-auth-state"
              onClick={() => setCurrentState("Register")}
            >
              Register
            </p>
          ) : (
            <p
              className="toggle-auth-state"
              onClick={() => setCurrentState("Login")}
            >
              Login
            </p>
          )}
        </div>
        <button className="form-button">
          {currentState === "Login" ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Login;
