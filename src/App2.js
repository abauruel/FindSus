import './config/reactotronConfig';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Text} from 'react-native';
import {Container} from './styles/global';
import MapArea from './components/Map';

export default function src() {
  return (
    <Container>
      <MapArea />
    </Container>
  );
}
