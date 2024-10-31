import React, { useState, useEffect } from 'react';
import LogoType from '../assets/images/SIliconlogga.svg';
import LogoType2 from '../assets/images/siliconlogodark.svg';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const hasDarkmode = localStorage.getItem('darkmode');

    if (hasDarkmode === 'on') {
      enableDarkMode();
    } else if (hasDarkmode === 'off') {
      disableDarkMode();
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }, []);

  useEffect(() => {

    if (darkMode) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  function enableDarkMode() {
    setDarkMode(true);
    localStorage.setItem('darkmode', 'on');
    document.documentElement.classList.add('dark');
  }

  function disableDarkMode() {
    setDarkMode(false);
    localStorage.setItem('darkmode', 'off');
    document.documentElement.classList.remove('dark');
  }

  return (
    <header>
      <div className="container">
        <a id="logo" className={darkMode ? 'silicon-white' : 'silicon-black'} href="index2.html">
          <img src={darkMode ? LogoType2 : LogoType} alt="Logo" />
        </a>

        <nav id="main-mmenu" className="navbar">
          <a className="navlink" href="#">Features</a>
          <a className="navlink" href="#">Contact</a>
        </nav>

        <div id="dark-mode-toggle" className="toggle-btn-switch">
          <span className="label">Dark Mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input
              id="darkmode-switch"
              type="checkbox"
              checked={darkMode}
              onChange={handleToggle}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="icon-sign-in-btn" className="btn-primary" href="#">
          <i className="fa-regular fa-user"></i>
          <span>Sign In/Up</span>
        </a>

        <button className="mobile-first">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
