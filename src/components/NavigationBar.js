import * as React from 'react';
import { Link } from 'gatsby';

import ThemeButton from './ThemeButton';

const NavigationBar = ({ theme, toggleTheme }) => {
  return (
    <div style={{display: "flex"}}>

      <div style={{width: "100%"}}>
        <nav>
          <ul className="nav-links">

            <li className="nav-link-item">
              <Link to="/" className="nav-link-text">Home</Link>
            </li>

            <li className="nav-link-item">
              <Link to="/about" className="nav-link-text">About</Link>
            </li>

            <li>
              <Link to="/posts" className="nav-link-text">Posts</Link>
            </li>

          </ul>
        </nav>
      </div>

      <div style={{maxWidth: "60px"}}>
        <ThemeButton theme={theme} toggleFunc={toggleTheme} />
      </div>

    </div>
  );
};

export default NavigationBar;
