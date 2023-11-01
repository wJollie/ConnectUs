import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function SignUp({ setIsAuth }) {
  const cookies = new Cookies();
  const [user, setUser] = useState({ username: "", password: "" });
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState(null);

  const signUp = () => {
    if (user.password !== confirmation) {
      setError("Password and confirmation do not match.");
      return;
    }

    Axios.post("http://localhost:3001/signup", user)
      .then((res) => {
        const { token, userId, username, hashedPassword } = res.data;
        cookies.set("token", token);
        cookies.set("userId", userId);
        cookies.set("username", username);
        cookies.set("hashedPassword", hashedPassword);
        setIsAuth(true);
        setError("Signup successful");
      })
      .catch((err) => {
        setError("Error signing up.");
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <label>Username:</label>
      <input
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={(event) => {
          setUser({ ...user, username: event.target.value });
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(event) => {
          setUser({ ...user, password: event.target.value });
        }}
      />
      <label>Confirm Password:</label>
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmation}
        onChange={(event) => {
          setConfirmation(event.target.value);
        }}
      />
      <button onClick={signUp}>Sign Up</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SignUp;
