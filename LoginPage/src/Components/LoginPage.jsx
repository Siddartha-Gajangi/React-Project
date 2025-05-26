import React, { useState } from "react";
import "./LoginPage.css"; // Adjust path if necessary

const LoginPage = () => {
  // State and functionality here
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          className="input-field"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="input-field"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
