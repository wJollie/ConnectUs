// src/components/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADDUSER } from '../utils/mutations';
import Auth from '../utils/auth';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const [addUser, { error, data }] = useMutation(ADDUSER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token, data.addUser.user.username);
      navigate('/home');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signupWrapper">
      <div className="signupContent">
        <h1 className="signupTitle">Sign Up</h1>
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/" className="signupLink">
              back to the homepage.
            </Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} className="signupForm">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="signupInput"
                type="text"
                id="username"
                name="username"
                value={formState.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="signupInput"
                type="password"
                id="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <button className="signupButton" type="submit">
              Submit
            </button>
            <h2>Already Have an Account? Click the Login Button!</h2>
            <Link className="linkButton"to="/login">
              Login
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

export default Signup;
