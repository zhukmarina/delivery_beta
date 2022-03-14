import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className={styles.root}>
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName={styles.active} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/cart">
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/favourite">
              Favourites
            </NavLink>
          </li>
          <li>
         
           
           
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
