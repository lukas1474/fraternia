import React from 'react';
import styles from './MainView.module.scss';

import {Row, Col, Container} from 'react-bootstrap';

import GoogleMapsWrapper from '../../features/GoogleMapsWrapper/GoogleMapsWrapper';

const MainView = () => {
  return (
    <div>
      <Container className={styles.container}>
        <div className={styles.textDiv}>
          <Row>
            <p className={styles.text}>
              Fraternia Zakonna oferuje wyroby sezonowe, unikatowe, nietuzinkowe. Tworzone są one ze starannością i miłością do bliźniego z najwyższej jakości składników.
              Wyroby znajdujące się we Fraterni są ręcznie wytwarzane przez zakonników w większości według dawnych receptur.
            </p>
          </Row>
          <Row>
            <div>
              <h2>Znajdziesz u nas między innymi:</h2>
            </div>
            <Col md={4}>
              <ul>
                <li>Przetwory warzywne, owocowe i mięsne</li>
                <li>Oleje i octy</li>
              </ul>
            </Col>
            <Col md={4}>
              <ul>
                <li>Nalewki</li>
                <li>Soki i syropy</li>
                <li>Produkty ziołowe</li>
              </ul>
            </Col>
            <Col md={4}>
              <ul>
                <li>Wyroby pszczele</li>
                <li>Naturalne kosmetyki</li>
                <li>Rękodzieło</li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className={styles.hoursDiv}>
          <Row>
            <h2 className={styles.hoursTitle}>Godziny otwarcia</h2>
          </Row>
          <Row>
            <Col>
              <p>Poniedziałek:</p>
              <p>Wtorek:</p>
              <p>Środa:</p>
              <p>Czwartek:</p>
              <p>Piątek:</p>
              <p>Sobota:</p>
              <p>Niedziela:</p>
            </Col>
            <Col>
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
        <Container>
          <GoogleMapsWrapper />
        </Container>
        <h2 className={styles.inProgress}>Strona w budowie</h2>
      </Container>
    </div>
  );
};

export default MainView;
