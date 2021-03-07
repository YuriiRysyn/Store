import React from "react";
import PropTypes from "prop-types";

import { NavLink, useLocation } from 'react-router-dom';


import classNames from 'classnames/bind';

import "./Nav.scss";

export const Nav = props => {
  const location = useLocation();

  return (
    <nav className="Header__nav Nav">
      <ul className="Nav__list">
        <li className="Nav__item-home">
          <NavLink 
            className={classNames('Nav__link', { 'Nav__link--active': location.pathname === '/' })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="Nav__item-phones">
          <NavLink 
            className={classNames('Nav__link', { 'Nav__link--active': location.pathname === '/phones' })}
            to="phones"
          >
            Phones
          </NavLink>
        </li>
        <li className="Nav__item-tablets">
          <NavLink 
            className={classNames('Nav__link', { 'Nav__link--active': location.pathname === '/tablets' })}
            to="tablets"
          >
            Tablets
          </NavLink>
        </li>
        <li className="Nav__item-accessories">
          <NavLink 
            className={classNames('Nav__link', { 'Nav__link--active': location.pathname === '/accessories' })}
            to="accessories"
          >
            Accessories
          </NavLink>
        </li>


      <li className="Nav__item-favorites">
        <NavLink className="Nav__favorites" to="favorites"/>
      </li>

      <li className="Nav__item-basket">
        <NavLink className="Nav__basket" to="basket"/>
      </li>

      {/* <NavLink className="Nav__favorites" to="favorites"/>

      <NavLink className="Nav__basket" to="basket"/> */}

      </ul>
    </nav>
  );
}

Nav.propTypes = {};

