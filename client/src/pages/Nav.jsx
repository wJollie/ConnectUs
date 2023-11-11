// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({title}) => {
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
      <button className="logoutButton">LogOut</button>
    </nav>
    </div>
  );
};

export default Navbar;
