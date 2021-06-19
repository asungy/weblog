import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  .page {
    color: white;
    font-family: sans-serif;
    margin: auto;
    max-width: 500px;
  }

  .heading {
    color: rgb(158, 110, 207);
  }

  .nav-links {
    display: flex;
    list-style: none;
    padding-left: 0;
  }

  .nav-link-item {
    padding-right: 2rem;
  }

  .nav-link-text {
    color: ${({ theme }) => theme.text};
  }
`;
