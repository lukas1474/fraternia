import React from 'react';
import styles from './MainView.module.scss';

import {Row, Col, Container} from 'react-bootstrap';

const MainView = () => {
  return (
    <div>
      <Container className={styles.container}>
        <div className={styles.textDiv}>
          <p className={styles.text}>
            Fraternia Zakonna jest miejscem gdzie oferowane są wyroby zakonne.
            Wszystkie wyroby znajdujące się we fraterni są wytwarzane ręcznie przez zakonników z najwyższej jakości składników pochodzących z własnych upraw i hodowli, bądź od lokalnych rolników.
            Całość dochodu pochodzącego z wyrobów zakonnych przekazywana jest na rzecz Zakonu i służy do finansowania jego codziennej pracy.
          </p>
        </div>
        <div className={styles.hoursDiv}>
          <Row>
            <h2 className={styles.hours}>Godziny otwarcia</h2>
          </Row>
          <Row className={styles.row}>
            <Col className={styles.col}>
              <p>Poniedziałek:</p>
              <p>Wtorek:</p>
              <p>Środa:</p>
              <p>Czwartek:</p>
              <p>Piątek:</p>
              <p>Sobota:</p>
              <p>Niedziela:</p>
            </Col>
            <Col className={styles.col}>
              <p>08:30-14:00</p>
              <p>14:30-17:30</p>
              <p>14:30-17:30</p>
              <p>08:30-14:00</p>
              <p>08.30-14:00</p>
              <p>nieczynne</p>
              <p>nieczynne</p>
            </Col>
          </Row>
        </div>
        <h2 className={styles.inProgress}>Strona w budowie</h2>
      </Container>
    </div>
  );
};

export default MainView;
