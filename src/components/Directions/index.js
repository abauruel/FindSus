import React from 'react';

import MapDirections from 'react-native-maps-directions';

// import { Container } from './styles';

const Directions = ({ destination, origin, onReady }) => (
  <MapDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey=""
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
