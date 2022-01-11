import React from 'react';

import {Row, Col, Container} from 'react-bootstrap'

import styles from "./App.module.scss";
import '../src/styles/bootstrap.scss'

const App = () => {
  return (
    <header>
      <Container className={styles.container}>
        <Row className={styles.row1}>
          <img src="/images/Logo2V3.svg" alt="fraternia" />
          <h3 className={styles.title}>Fraternia Kalatrawensów w Żorach</h3>
          <a href='tel:+48 739 985 627' className={styles.tel}>+48 739 985 627</a>
          <a href='mailto:kontakt@fraternia-zakonna.pl' className={styles.mail}>kontakt@fraternia-zakonna.pl</a>
          <p>
            ul. Kościuszki 1
            <br/>
            44-240 Żory
          </p>
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
        <h2>Strona w budowie</h2>
      </Container>
    </header>
  );
}

export default App;
