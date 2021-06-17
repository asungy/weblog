import * as React from 'react';
import NavigationBar from './NavigationBar';
import ThemeButton from './ThemeButton';
import { 
  page,
  heading,
} from './dark.module.css';

const Page = ({ pageTitle, children }) => {
  return (
    <main className={page}>
      <title>{pageTitle}</title>
      <NavigationBar />
      <h1 className={heading}>{pageTitle}</h1>
      <ThemeButton/>
      {children}
    </main>
  );
};

export default Page;
