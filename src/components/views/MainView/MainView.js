import React from 'react';
import styles from './MainView.module.scss';

import {Row, Col} from 'react-bootstrap';

import GoogleMapsWrapper from '../../features/GoogleMapsWrapper/GoogleMapsWrapper';

const MainView = () => {
  return (
    <div className={styles.container}>
      <section className={styles.textSection}>
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
      </section>
      <section className={styles.hoursSection}>
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
            <p>14:30-17:00</p>
            <p>14:30-17:00</p>
            <p>14:30-17:00</p>
            <p>09:00-14:00</p>
            <p>09:00-14:00</p>
            <p>nieczynne</p>
            <p>nieczynne</p>
          </Col>
        </Row>
      </section>
      <section className={styles.mapSection}>
        <GoogleMapsWrapper />
      </section>
    </div>
  );
};

export default MainView;
