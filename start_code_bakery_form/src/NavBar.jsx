import React from 'react';
import Search from './Search';

const NavBar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
      <li className="nav-title">BNTA Bakery</li>
        <li>Home</li>
        <li>Tasty Cakes</li>
        <li>Contact</li>
        <li>
          <Search onSearch={onSearch} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
