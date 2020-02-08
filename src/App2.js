import './config/reactotronConfig';
import React from 'react';

import {Container} from './styles/global';
import MapArea from './components/Map';

export default function src() {
  return (
    <Container>
      <MapArea />
    </Container>
  );
}
