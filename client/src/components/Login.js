import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for displaying login errors
  const cookies = new Cookies();

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username,
      password,
    })
      .then((res) => {
        const { token, userId, username } = res.data;
        cookies.set("token", token);
        cookies.set("userId", userId);
        cookies.set("username", username);
        // Clear the form fields
        setUsername("");
        setPassword("");
        setError("");
      })
      .catch((error) => {
        // Handle login errors and display error messages
        if (error.response && error.response.data) {
          setError(error.response.data.message);
        } else {
          setError("An error occurred while logging in.");
        }
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Username:</label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
