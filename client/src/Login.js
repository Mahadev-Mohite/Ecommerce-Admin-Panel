import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      console.log("Response:", response.data);
      // Directly navigate to the homepage
      navigate("/Home");
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Login failed. Please try again.");
    }
  };

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <div className="Login">
      {/* Main body with logo and welcome message */}
      <div className="main-body">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/128/10003/10003663.png"
          alt="Logo"
        />
        <h3>
          <b>digital</b>flake
        </h3>
        <h4>Welcome to digitalflake Admin</h4>
      </div>

      {/* Login form */}
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group floating-label">
          <input
            type="text"
            name="email-id"
            id="email-id"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="email-id">Email-id</label>
        </div>
        <div className="form-group floating-label">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <label htmlFor="password">Password</label>
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group text-right">
          <a
            href="#!"
            className="forgot-password-link"
            onClick={handleModalShow}
          >
            Forgot Password?
          </a>
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
      </form>

      {/* Forgot Password Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Enter your email and we’ll send you a link to restore password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="reset-email-id">Email-id</label>
              <input
                type="email"
                className="form-control"
                id="reset-email-id"
                name="reset-email-id"
                placeholder="Enter your email"
                required
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            <u>Back to Login</u>
          </Button>
          <Button variant="primary">Request reset link</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
