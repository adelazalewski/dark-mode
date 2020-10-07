import React, { useState } from 'react';
import {useDarkMode} from "../hooks/useDarkMode";

const Navbar = (props) => {
  // const toggleMode = e => {
  //   e.preventDefault();
  //   props.setDarkMode(!props.darkMode);
  // };
  const darkMode = props.darkMode;
  const [someValue, toggleMode] = useDarkMode("adela'sKey", darkMode);
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={(e)=> toggleMode(e)}
          className={someValue ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
