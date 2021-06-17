import * as React from 'react';
import { Link } from 'gatsby';
import {
  navLinks,
  navLinkItem,
  navLinkText
} from './dark.module.css';

const NavigationBar = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>Home</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
