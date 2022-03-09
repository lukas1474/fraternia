import React from 'react';
import styles from './MainLayout.module.scss';

import Header from '../Header/Header';

// eslint-disable-next-line react/prop-types
const MainLayout = ({children}) => {
  return (
    <div className={styles.mainLayoutGrid}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
