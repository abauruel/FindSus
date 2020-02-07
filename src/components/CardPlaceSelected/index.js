import React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {LinearColor} from './styles';

export default function CardPlaceSelected({
  estabelecimentos,
  calloutSelect,
  distance,
  position: region,
}) {
  return (
    <LinearColor>
      <View style={{flexDirection: 'row', paddingLeft: 20, paddingTop: 10}}>
        <Icon name="hospital-alt" size={30} color="#000" style={{margin: 15}} />
        <View style={{marginRight: 30}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', maxWidth: 290}}>
            {estabelecimentos[calloutSelect].nome}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text>{estabelecimentos[calloutSelect].logradouro}</Text>
              <Text>{estabelecimentos[calloutSelect].bairro}</Text>
              <Text>{estabelecimentos[calloutSelect].numero}</Text>
              <Text>
                {estabelecimentos[calloutSelect].municipio}
                {estabelecimentos[calloutSelect].uf}
              </Text>
              <Text>{estabelecimentos[calloutSelect].cep}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  paddingTop: 5,
                }}>
                {distance && (
                  <Icon name="car" size={12} style={{marginRight: 10}} />
                )}
                <Text style={{marginRight: 20}}>
                  {distance ? `${distance} km` : '-'}
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#1BABE3',
                  elevation: 3,
                  borderRadius: 100,
                  padding: 20,
                }}
                onPress={() =>
                  Linking.openURL(
                    `geo:${region}?q=${estabelecimentos[calloutSelect].latitude},${estabelecimentos[calloutSelect].longitude}`,
                  )
                }>
                <Text style={{color: '#FFF'}}> IR </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </LinearColor>
  );
}
