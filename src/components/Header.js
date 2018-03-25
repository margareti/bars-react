import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="container  header__inner">
      <NavLink to="/" activeClassName="is-active" exact={true} className="header__title">Bars</NavLink>
      <div>
        <NavLink to="/" activeClassName="is-active" exact={true} className="header__link">Home</NavLink>
        <NavLink to="/contact" activeClassName="is-active" className="header__link">Contact</NavLink>
      </div>
    </div>
  </header>
);

export default Header;
