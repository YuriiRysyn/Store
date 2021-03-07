import React from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation, useParams } from 'react-router-dom';

import classNames from 'classnames/bind';

import "./Header.scss";

const Header = props => {
  const location = useLocation();
  // const params = useParams();
  
  return (
    <header className="header">
      <input
        type="checkbox"
        name="menu-toogler"
        id="menu-toogler"
        className="header__menu-toogler-checkbox"
      />
  
      <a href="#" className="header__logo logo"></a>

      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink 
              className={classNames('nav__link', { 'nav__link--active': location.pathname === '/' })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink 
              className={classNames('nav__link', { 'nav__link--active': location.pathname === '/phones' })}
              to="phones"
            >
              Phones
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink 
              className={classNames('nav__link', { 'nav__link--active': location.pathname === '/tablets' })}
              to="tablets"
            >
              Tablets
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink 
              className={classNames('nav__link', { 'nav__link--active': location.pathname === '/accessories' })}
              to="accessories"
            >
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>
      <label htmlFor="menu-toogler" className="header__humburger-menu-button">
        {" "}
      </label>
      <NavLink className="header__choosen-items" to="favorites"/>
      <NavLink className="header__basket" to="basket"/>
  
    </header>
  );
}

Header.propTypes = {};

export default Header;
