import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="container">
      <h1 className="header__title">Bars</h1>
      <NavLink to="/" activeClassName="is-active" exact={true} className="header__link">Home</NavLink>
      <NavLink to="/contact" activeClassName="is-active" className="header__link">Contact</NavLink>
    </div>
  </header>
);

export default Header;
