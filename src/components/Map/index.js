import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapStyle from '../../styles/mapStyle.json';

import PlaceCardSelected from '../CardPlaceSelected';

// import { Container } from './styles';
import pinuser from '../../assets/pinUser.png';
import pinPlace from '../../assets/pinPlace.png';

import {getPixelSize} from '../../utils/Size';

import Directions from '../Directions';

export default function Map() {
  const initialState = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [position, setPosition] = useState(initialState);
  const [estabelecimentos, setEstabelecimenos] = useState([]);
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');
  const [calloutSelect, setcalloutSelect] = useState('');

  function getPosition() {
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        setPosition({
          ...position,
          latitude,
          longitude,
        });
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }
  useEffect(() => {
    getPosition();
  }, []);

  return position.latitude ? (
    <MapView
      style={{flex: 1}}
      ref={map => (this.mapView = map)}
      showsUserLocation={Platform.OS === 'android'}
      initialRegion={position}
      customMapStyle={MapStyle}>
      {estabelecimentos && [
        <Marker
          key="user"
          coordinate={{
            latitude: position.latitude,
            longitude: position.longitude,
          }}
          image={pinuser}
        />,
        estabelecimentos.map(place => (
          <Marker
            ref={mark => (place.mark = mark)}
            anchor={{x: 0, y: 0}}
            key={place.nome}
            coordinate={
              (LatLng = {
                latitude: Number(place.latitude),
                longitude: Number(place.longitude),
              })
            }
            pinColor="blue"
            image={pinPlace}>
            {destination && (
              <Directions
                origin={position}
                destination={destination}
                onReady={route => {
                  this.mapView.fitToCoordinates(route.coordinates, {
                    edgePadding: {
                      right: getPixelSize(50),
                      left: getPixelSize(50),
                      top: getPixelSize(200),
                      bottom: getPixelSize(250),
                    },
                  });
                  setDuration(parseFloat(route.duration.toFixed(2)));
                  setDistance(parseFloat(route.distance.toFixed(2)));
                }}
              />
            )}
          </Marker>
        )),
      ]}
    </MapView>
  ) : null;

  <PlaceCardSelected
    estabelecimentos={estabelecimentos}
    calloutSelect={calloutSelect}
    distance={distance}
    position={position}
  />;
}
