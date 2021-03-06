import React from 'react';
import styles from '../Footer/Footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <div className={styles.yearBox}>
      <div className={styles.linkBox}>
      ©
        <p className={styles.textFooter}>2022</p>
        <p className={styles.textFooter}>Fraternia Zakonna.</p>
      </div>
      <div className={styles.linkBox}>
        <p className={styles.textFooter}> Powered by <a href="mailto:info@crucialfix.pl">CrucialFix</a> </p>
      </div>
    </div>
  </footer>
);

export default Footer;
