import React, { useState } from "react";

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [error, setError] = useState("");

  const handleSignUp = () => {
    // Validating form fields
    if (!username || !password || password !== confirmPassword) {
      setError("Please fill in all fields correctly");
      return;
    }

    // Calling onSignUp function passed from the parent component
    onSignUp(username, password);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default SignUp;
