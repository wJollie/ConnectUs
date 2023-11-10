import React from 'react';
import { Link } from 'react-router-dom';


function Home({ signOut }) {
  return (
    <div className="home-page">
      <h2>Welcome!</h2>
      <button onClick={signOut}>Sign Out</button>

      <div className="department-links">
        <h3>Departments:</h3>
        <ul>
          <li>
            <Link to="/tech">Tech</Link>
          </li>
          <li>
            <Link to="/hr">HR</Link>
          </li>
          <li>
            <Link to="/sales">Sales</Link>
          </li>
          <li>
            <Link to="/accounting">Accounting</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
