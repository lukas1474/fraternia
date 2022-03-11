import React from 'react';
import styles from './GoogleMapsWrapper.module.scss';

import { Wrapper } from '@googlemaps/react-wrapper';
import {Row, Col, Container} from 'react-bootstrap';

import Maps from '../GoogleMaps/Maps';

const GoogleMapsWrapper = () => {
  return (
    <Wrapper apiKey={''}>
      <Maps />
    </Wrapper>
  );
};

export default GoogleMapsWrapper;
