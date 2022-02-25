import React from 'react';
import styles from './Header.module.scss';

import {Row, Col, Container} from 'react-bootstrap';

const Header = () => (
  <header>
    <Container>
      <Row className={styles.row}>
        <Col className={styles.col}>
          <div>
            <img src="/images/Logo2V3.svg" alt="fraternia" />
          </div>
        </Col>
        <Col className={styles.col}>
          <div className={styles.addressDiv}>
            <h3 className={styles.title}>Fraternia Zakonna</h3>
            <a href='tel:+48 739 985 627' className={styles.tel}>+48 739 985 627</a>
            <br/>
            <a href='mailto:kontakt@fraternia-zakonna.pl' className={styles.mail}>kontakt@fraternia-zakonna.pl</a>
            <p className={styles.address}>
            ul. Kościuszki 1
              <br/>
            44-240 Żory
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
