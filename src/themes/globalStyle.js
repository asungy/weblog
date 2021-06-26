import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    justify-content: top;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
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
