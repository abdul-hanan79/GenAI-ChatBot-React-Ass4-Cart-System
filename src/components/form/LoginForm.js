import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext"; // Assuming your CartContext is in the context folder
import { useNavigate } from "react-router-dom";
    
const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useCartContext(); // Access login method from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission for login
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }); // Pass email and password to the login function
    navigate("/")
  };

  return  (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome Back</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="form-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
