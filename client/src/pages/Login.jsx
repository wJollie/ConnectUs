// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token, data.login.user.username);
      navigate('/home');
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: '',
      password: '',
    });
  };

  return (
    <div className="landingWrapper">
      <div className="landingContent">
        <h1 className="landingTitle">Login</h1>
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/home">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} className="loginForm">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="form-input"
                type="text"
                id="username"
                name="username"
                value={formState.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">
              Login
            </button>
            <h2>Not Registered? click the Signup button!</h2>
            <Link className="linkButton"to="/signup">
              Signup
            </Link>

          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </div>
  );
};

export default Login;
