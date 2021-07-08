import React from 'react';
import { func, string } from 'prop-types';
import MoonIcon from '../images/icons/moon.svg';
import SunIcon from '../images/icons/sun.svg';
import { ThemeButtonStyle } from '../styles/themeButtonStyle';

const ThemeButton = ({ theme, toggleFunc }) => {
  const lightTheme = theme === 'light';
  return (
    <ThemeButtonStyle onClick={toggleFunc} lightTheme={lightTheme}>
      <SunIcon />
      <MoonIcon />
    </ThemeButtonStyle>
  );
};

ThemeButton.propTypes = {
  theme: string.isRequired,
  toggleFunc: func.isRequired,
}

export default ThemeButton;
