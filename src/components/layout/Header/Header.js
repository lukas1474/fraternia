import React from 'react';
import styles from './Header.module.scss';

import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <header className={styles.header}>
    <Row className={styles.row}>
      <Col className={styles.col}>
        <div>
          <img src="/images/Logo2V3.svg" alt="fraternia" />
        </div>
      </Col>
      <Col className={styles.col}>
        <div className={styles.addressDiv}>
          <h3 className={styles.title}>Fraternia Zakonna™</h3>
          <a href='tel:+48 739 985 627' className={styles.tel}>+48 739 985 627</a>
          <br />
          <a href='mailto:kontakt@fraternia-zakonna.pl' className={styles.mail}>kontakt@fraternia-zakonna.pl</a>
          <p className={styles.address}>
            ul. Kościuszki 1
            <br />
            44-240 Żory
          </p>
          <a href='https://www.facebook.com/Fraternia-Zakonna-105250125520349' className={styles.socialIcon}>
            <FontAwesomeIcon icon={faFacebook} /></a>
        </div>
      </Col>
    </Row>
  </header>
);

export default Header;
