import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSelector } from "react-redux";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.cart);

  console.log(users);

  const handleLogin = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Username is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    const foundUser = users.find((e) => {
      console.log("eeeee---", e);
      return (
        formData.username === e.userName && formData.password === e.password
      );
    });

    if (foundUser) {
      navigate("/Home");
      console.log("Logged in");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container-form">
      <h2>Login Page</h2>
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <span className="error">{errors.username}</span>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            autoComplete="on"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <span className="error">{errors.password}</span>
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
