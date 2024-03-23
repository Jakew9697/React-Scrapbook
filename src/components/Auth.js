// Login.jsx
import React from "react";

const Login = () => {
  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in...");
  };

  return (
    <button className="login-button" onClick={handleLogin}>
      Login
    </button>
  );
};

export default Login;
