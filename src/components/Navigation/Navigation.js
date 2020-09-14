import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav className="Header">
      <ul className="NavigationList">
        <li className="NavigationItem">
          <NavLink
            exact
            to={routes.HomePage.path}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li className="NavigationItem">
          <NavLink
            to={routes.MoviesPage.path}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
