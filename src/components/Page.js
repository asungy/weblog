import React from 'react';

// Third-party components
import { ThemeProvider } from 'styled-components';
// Custom components
import NavigationBar from './NavigationBar';

// Custom hooks
import useDarkMode from '../hooks/useDarkMode';

// Themes
import { GlobalStyle } from '../styles/globalStyle';
import { lightTheme, darkTheme } from '../styles/lightDarkTheme';

const Page = ({ pageTitle, hideDefaultTitle, children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeObj = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeObj}>
      <title>Alek Sung - {pageTitle}</title>
      <GlobalStyle />
      <div style={{margin: "0 auto", maxWidth: "600px", width: "90%"}}>

        <NavigationBar theme={theme} toggleTheme={toggleTheme}/>
        <h1>{hideDefaultTitle ? '' : pageTitle}</h1>
        {children}

      </div>
    </ThemeProvider>
  );
};

export default Page;
