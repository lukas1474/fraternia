import React from 'react';

import {Row, Col} from 'react-bootstrap'

import styles from "./App.module.scss";
import '../src/styles/bootstrap.scss'

const App = () => {
  return (
    <div className="container">
      <header>
         <img src="/images/LOGO.svg" alt="fraternia" />
         <a href='tel:+48 739 985 627'>+48 739 985 627</a>
         <a href='mailto:kontakt@fraternia-zakonna.pl'>kontakt@fraternia-zakonna.pl</a>
         <br />
         <p>ul. Kościuszki 1</p>
         <p>44-240 Żory</p>
         <br />
         <h2 className={styles.hours}>Godziny otwarcia</h2>
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
         <br/>
         <h2>Strona w budowie</h2>
      </header>
    </div>
  );
}

export default App;
