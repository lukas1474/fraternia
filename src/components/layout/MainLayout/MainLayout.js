import React from 'react';
import styles from './MainLayout.module.scss';

import {Container} from 'react-bootstrap';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// eslint-disable-next-line react/prop-types
const MainLayout = ({children}) => {


  return (
    <div>
      <Header />
      <Container className={styles.mainLayoutGrid}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
