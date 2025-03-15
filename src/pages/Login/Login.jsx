import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { ShopContext } from "../../context/ShopContex";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token, setToken } = useContext(ShopContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Register") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        console.log("RESPNSE", response);
        if (response.data.success) {
          setToken(response.data.token);
          toast.success(response.data.message);
          localStorage.setItem("token-FE", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          toast.success(response.data.message);
          localStorage.setItem("token-FE", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div>
      <form onSubmit={handleLogin} className="auth-form">
        <div className="form-header">
          <p className="form-title">{currentState}</p>
        </div>
        {currentState === "Login" ? null : (
          <input
            type="text"
            placeholder="Username"
            required
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          required
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
