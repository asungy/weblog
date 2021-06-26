import React from 'react';

// Third-party components
import { ThemeProvider } from 'styled-components';
// Custom components
import NavigationBar from './NavigationBar';

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
      <div style={{margin: "0 auto", maxWidth: "700px", width: "90%"}}>

        <div>
          <NavigationBar theme={theme} toggleTheme={toggleTheme}/>
          <h1>{pageTitle}</h1>
          {children}
        </div>

      </div>
    </ThemeProvider>
  );
};

export default Page;
