import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { BoxInfoPlace, BoxInfoPlaceDetail } from './style';

const infoPlace = ({ title, description, icon }) => (
  <BoxInfoPlace>
    <View>
      <Icon name={icon} size={20} color="#FFF" />
    </View>
    <BoxInfoPlaceDetail>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </BoxInfoPlaceDetail>
  </BoxInfoPlace>
);

export default infoPlace;
