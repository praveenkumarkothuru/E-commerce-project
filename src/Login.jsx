import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) return alert("No user found, please register first.");

    if (
      savedUser.email === loginData.email &&
      savedUser.password === loginData.password
    ) {
      localStorage.setItem("auth", "true");
      alert("Login Successful!");
      navigate("/"); // redirect to home
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />

        <button onClick={handleLogin}>Login</button>

        <p>
          Don’t have an account?{" "}
          <span className="link" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
