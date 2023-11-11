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
          <Link to="/tech"
          >Tech</Link>
        </li>
        <li>
          <Link to="/hr">Hr</Link>
        </li>
        <li>
          <Link to="/sales">Sales</Link>
        </li>
        <li>
          <Link to="/accounting">Accounting</Link>
        </li>
        <li>
          <Link to="/chat">Direct Messages</Link>
        </li>
      </ul>
      <button className="logoutButton" onClick={handleLogout}>LogOut</button>
    </nav>
    </div>
  );
};

export default Navbar;
