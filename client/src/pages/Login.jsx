import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Handle your login logic here
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
        <h2>Not Registered??!? OH MY GOD!!! signup herr</h2>
        <Link to="/signup">Signup</Link> // Use the Link component to link to the Signup page
      </form>
    </div>
  );
}

export default Login;

