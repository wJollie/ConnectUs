import React from 'react';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <div className="landingWrapper">
        <h1>Welcome to ConnectUs employee portal!</h1>
        <div className="landingLinks">
            <ul>
            <li>
                <Link to="/signup">Sign Up</Link>
            </li>
            <li>
                <Link to="/login">Log In</Link>
            </li>
            </ul>
        </div>
    </div>
  );
}

export default Landing;
