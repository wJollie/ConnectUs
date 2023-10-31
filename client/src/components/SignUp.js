import React, { useState } from "react";

function SignUp() {
  const [user, setUser] = useState(null);
  const signUp = () => {};
  return (
    <div>
      SignUp
      <label> Sign Up</label>
      <input
        placeholder="Username"
        onChange={(event) => {
          setUser({ ...user, username: event.target.value });
        }}
      />
      <input
        placeholder="Password"
        onChange={(event) => {
          setUser({ ...user, password: event.target.value });
        }}
      />
      <button onClick={signUp}>SignUp</button>
    </div>
  );
}

export default SignUp;
