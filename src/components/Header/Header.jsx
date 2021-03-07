import React from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';

import { useWindowDimensions } from '../../tools/windowSize';

import classNames from 'classnames/bind';

import { Nav } from './Nav/Nav';

import "./Header.scss";

const Header = props => {

  const { width } = useWindowDimensions();
  const isMobile = width < 756;
console.log(width);
  return (
    !isMobile &&
    <header className="Header">

      <NavLink 
        className="Header__logo logo"
        to="/"
      />

      <Nav className="Header__nav"/>
      
      <label htmlFor="menu-toogler" className="Header__humburger-menu-button">
        {" "}
      </label>

      {/* <NavLink className="header__choosen-items" to="favorites"/>
      <NavLink className="header__basket" to="basket"/> */}
  
    </header>
  );
}

Header.propTypes = {};

export default Header;
