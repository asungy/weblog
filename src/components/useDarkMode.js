import { useEffect, useState } from 'react';

const useDarkMode = () => {
  // Set theme to previously selected theme. Otherwise, default to light theme
  const state = window.localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(state);

  // Toggle callback sets the theme in React component and local storage
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
}

export default useDarkMode;
