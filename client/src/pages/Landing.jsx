import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landingWrapper">
      <div className="landingContent">
        <h1 className="landingTitle">Welcome to ConnectUs Employee Portal!</h1>
        <div className="landingLinks">
          <ul>
            <li>
              <Link to="/signup" className="landingButton signUpButton linkButton">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className="landingButton loginButton linkButton">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Landing;
