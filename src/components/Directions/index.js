import React from 'react';

import MapDirections from 'react-native-maps-directions';

// import { Container } from './styles';

const Directions = ({ destination, origin, onReady }) => (
  <MapDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyAdCEJkWFiDinIzKRjv_9dXS_J7M0aQYI8"
    strokeWidth={3}
    strokeColor="#1BABE3"
  />
);

export default Directions;
