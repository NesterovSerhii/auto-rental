import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div >
        <Link className={css.logo} to="/">Car Rental</Link>
      </div>
      <nav>
        <ul className={css.navList}>
          <li>
            <Link className={css.navListItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={css.navListItem} to="/catalog">
              Catalog
            </Link>
          </li>
          <li>
            <Link className={css.navListItem} to="/favorites">
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
