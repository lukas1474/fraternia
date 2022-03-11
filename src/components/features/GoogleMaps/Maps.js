/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';
import styles from './Maps.module.scss';

import {Row, Col, Container, Card} from 'react-bootstrap';

const Maps = () => {
  const ref =useRef();

  useEffect(() => {
    const myLatLng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng,
    });

    new google.maps.Marker({
      position: myLatLng,
      map,
      title: 'Hello World!',
    });
  });

  return (
    <Card className={styles.mapDiv} ref={ref} id='map'/>
  );
};

export default Maps;
