import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  ViewFooter, ContainerPT, ContainerP, ConteudoEstabelecimentos,
} from './styles';

const ListPlaces = ({
  place: { nome }, width, duration, distance,
}) => (
  <ViewFooter width={Number(width)}>
    <ContainerPT>
      <View style={{ margin: 20 }}>
        <View
          style={{
             flexDirection: 'row',
             justifyContent: 'flex-start',
             alignItems: 'center',
             paddingBottom: 0,
           }}
        >
          <Icon name="map-marker-alt" size={12} color="#1BABE3" style={{ marginRight: 10 }} />
          <Text>Local atual</Text>
        </View>
        <View
          style={{
             flexDirection: 'row',
             justifyContent: 'flex-start',
             alignItems: 'center',
             paddingBottom: 5,
             maxWidth: 290,
             marginBottom: 10,
           }}
        >
          <Icon name="map-marker" size={12} color="#4CC4D1" style={{ marginRight: 10 }} />
          <Text>{nome}</Text>
        </View>
      </View>
    </ContainerPT>
    <ContainerP>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          margin: 10,
        }}
      >
        <View style={{ margin: 40 }}>
          <Text style={{ fontWeight: 'bold', color: '#FFF' }}>Distancia</Text>
          <Text style={{ color: '#FFF' }}>{distance ? `${distance} Km` : '-'}</Text>
        </View>
        <View style={{ margin: 40 }}>
          <Text style={{ fontWeight: 'bold', color: '#FFF' }}>Tempo Aprox.</Text>
          <Text style={{ color: '#FFF' }}>{duration ? `${duration} min` : '-'}</Text>
        </View>
      </View>
    </ContainerP>
  </ViewFooter>
);

export default ListPlaces;
