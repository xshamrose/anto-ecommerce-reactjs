import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { createAccount } from "../../CartReducer";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const handleSignup = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Username is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(newErrors).length === 0) {
      let user = {
        userName: formData.username,
        password: formData.password,
      };
      dispatch(createAccount(user));
      window.alert("saved successfully");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container-form">
      <h2>Signup Page</h2>
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
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            autoComplete="on"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          <span className="error">{errors.confirmPassword}</span>
        </div>
        <button type="button" onClick={handleSignup}>
          Sign up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
