import { useEffect, useState } from 'react';

function setLocalStorageTheme(theme) {
  // Check if window is defined (window is undefined during server-side 
  // rendering build).
  if (typeof window !== "undefined") {
    window.localStorage.setItem('theme', theme);
  }
}

function getLocalStorageTheme() {
  // Check if window is defined (window is undefined during server-side 
  // rendering build).
  if (typeof window !== "undefined") {
    return window.localStorage.getItem('theme');
  }
}

const useDarkMode = () => {
  // Set theme to previously selected theme. Otherwise, default to light theme
  const state = getLocalStorageTheme() || 'light';
  const [theme, setTheme] = useState(state);

  // Toggle callback sets the theme in React component and local storage
  const toggleTheme = () => {
    if (theme === 'light') {
      setLocalStorageTheme('dark');
      setTheme('dark');
    } else {
      setLocalStorageTheme('light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = getLocalStorageTheme();
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
}

export default useDarkMode;
