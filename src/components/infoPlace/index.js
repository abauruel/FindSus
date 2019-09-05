import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  BoxInfoPlace, BoxInfoPlaceDetail, BoxIcon, IconPlace, Content,LinearColor
} from './style';

const infoPlace = ({
  title, description, icon, duration, distance,
}) => (
  <Content>
    <BoxIcon>
      <IconPlace>
        <Icon name={icon} size={20} color="#000" style={{ marginTop: 5 }} />
      </IconPlace>
    </BoxIcon>

    <BoxInfoPlace>
      <BoxInfoPlaceDetail>
        <Text style={{ fontSize: 12, marginTop: 10 }}>{title}</Text>
        <Text style={{ fontSize: 12 }}>{description}</Text>
        <Text style={{ fontSize: 12 }}>{`Aprox. ${duration}min`}</Text>
        <Text style={{ fontSize: 12, marginBottom: 10 }}>{`${distance}Km`}</Text>
      </BoxInfoPlaceDetail>
    </BoxInfoPlace>
  </Content>


);

export default infoPlace;
