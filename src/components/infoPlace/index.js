import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  BoxInfoPlace, BoxInfoPlaceDetail, BoxIcon, IconPlace, Content,
} from './style';

const infoPlace = ({ title, description, icon }) => (
  <Content>
    <BoxIcon>
      <IconPlace>
        <Icon name={icon} size={20} color="#000" style={{ marginTop: 5 }} />
      </IconPlace>
    </BoxIcon>

    <BoxInfoPlace>
      <BoxInfoPlaceDetail>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </BoxInfoPlaceDetail>
    </BoxInfoPlace>
  </Content>
);

export default infoPlace;
