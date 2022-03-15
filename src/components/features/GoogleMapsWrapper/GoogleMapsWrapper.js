import React from 'react';

import { Wrapper } from '@googlemaps/react-wrapper';
import { MAPS_API_KEY } from '../../../data/api.config';

import Maps from '../GoogleMaps/Maps';

const GoogleMapsWrapper = () => {
  return (
    <Wrapper apiKey={MAPS_API_KEY}>
      <Maps />
    </Wrapper>
  );
};

export default GoogleMapsWrapper;
