import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import LogoImage from "./images/Logo.png";
import CompanyIcon from "./images/briefcase.png";

import PasswordIcon from "./images/lock.png";
import RightCompLogo from "./images/Component 1.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
    if (email === 'user@gmail.com' && password === 'user@123') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  }
  };

  const validateForm = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email address");
      return false;
    }
    return true;
  };

  return (
    <div className="sign-in-container" width={1440}>
      <div className="left-section">
        <div className="logo-container">
          <img src={LogoImage} alt="Logo" className="logo-image" />
        </div>

        <div className="sign-in-form">
          <h1 className="title">Sign Into</h1>
          <h2 className="subtitle">Your Account</h2>

          <form onSubmit={handleSignIn} className="signin-form">
            <div className="input-group">
              <div className="input-container">
                <img src={CompanyIcon} alt="Company" className="input-icon" />
                <input
                  type="text"
                  placeholder="Company ID"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-container">
                <img src={PasswordIcon} alt="Password" className="input-icon" />
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember"
                  value={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <div className="error-container">
                {error && <p className="error-message">{error}</p>}
              </div>
              <button className="sign-in-button">Sign in</button>
            </div>
          </form>
        </div>
      </div>

      <div className="right-section">
        <img
          src={RightCompLogo}
          alt="Decorative"
          className="decorative-image"
        />
      </div>
    </div>
  );
};

export default SignIn;
