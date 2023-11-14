// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';


const Navbar = ({title}) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        Auth.logout();
        navigate('/login');
    }
  return (
    <div className="navWrapper">
    <nav className="navbar">
      <h1 className="title">{title}</h1>
      <ul>
        <li>
          <Link className="linkButton navButton" to="/tech"
          >Tech</Link>
        </li>
        <li>
          <Link className="linkButton navButton" to="/hr">Hr</Link>
        </li>
        <li>
          <Link className="linkButton navButton" to="/sales">Sales</Link>
        </li>
        <li>
          <Link className="linkButton navButton" to="/accounting">Accounting</Link>
        </li>
      </ul>
      <div className="mobileLogoutButtonWrapper">
      <button className="logoutButton navButton" onClick={handleLogout}>LogOut</button>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
