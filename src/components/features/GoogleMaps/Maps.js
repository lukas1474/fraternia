/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';
import styles from './Maps.module.scss';

import {Card} from 'react-bootstrap';

const Maps = () => {
  const ref =useRef();

  useEffect(() => {
    const myLatLng = { lat: 50.04497, lng: 18.69550 };

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: myLatLng,
    });

    new google.maps.Marker({
      position: myLatLng,
      map,
      title: 'Fraternia Zakonna',
    });
  });

  return (
    <Card className={styles.mapCard} ref={ref} id='map'/>
  );
};

export default Maps;
