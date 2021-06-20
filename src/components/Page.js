import React from 'react';

// Third-party components
import { ThemeProvider } from 'styled-components';
// Custom components
import NavigationBar from './NavigationBar';
import ThemeButton from './ThemeButton';

// Custom hooks
import useDarkMode from '../hooks/useDarkMode';

// Themes
import { GlobalStyle } from '../themes/globalStyle';
import { lightTheme, darkTheme } from '../themes/lightDarkTheme';

const Page = ({ pageTitle, children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeObj = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeObj}>
      <title>{pageTitle}</title>
      <GlobalStyle />
      <div style={{display: "flex", flexDirection: "row"}}>

        <div style={{width: "40rem"}}>
          <NavigationBar />
          <h1>{pageTitle}</h1>
          {children}
        </div>

        <ThemeButton theme={theme} toggleFunc={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};

export default Page;
