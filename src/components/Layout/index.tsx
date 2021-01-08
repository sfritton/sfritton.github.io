import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Nav from './Nav';
import Content from './Content';
import styles from './layout.module.css';

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  const pageTitle = title ? `Sam Fritton | ${title}` : 'Sam Fritton';

  return (
    <div className={styles.layout}>
      <Helmet>
        <link rel="shortcut icon" type="image/svg" href="/images/logo.svg" />
        <title>{pageTitle}</title>
      </Helmet>
      <Nav />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
