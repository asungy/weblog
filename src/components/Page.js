// NPM imports
import React from 'react';
import { ThemeProvider } from 'styled-components';

// Local imports
import NavigationBar from './NavigationBar';
import ThemeButton from '../components/ThemeButton';
import useDarkMode from '../components/useDarkMode';
import { GlobalStyles } from '../themes/globalStyles';
import { lightTheme, darkTheme } from '../themes/lightDarkTheme';


const Page = ({ pageTitle, children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeObj = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyles />
      <ThemeButton theme={theme} toggleFunc={toggleTheme} />
      <title>{pageTitle}</title>
      <NavigationBar />
      <h1>{pageTitle}</h1>
      {children}
    </ThemeProvider>
  );
};

export default Page;
