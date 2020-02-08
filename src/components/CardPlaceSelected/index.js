import React from 'react';
import {View, Text, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  LinearColor,
  Card,
  CardContent,
  Name,
  ContainerButton,
  ContainerContent,
  ContainerDistance,
  TitleDistance,
  ButtonRedirect,
  TextButtonredirect,
} from './styles';

export default function CardPlaceSelected({
  estabelecimentos,
  calloutSelect,
  distance,
  position: region,
}) {
  return (
    <LinearColor>
      <Card>
        <Icon name="hospital-alt" size={30} color="#000" style={{margin: 15}} />
        <CardContent>
          <Name>{estabelecimentos[calloutSelect].nome}</Name>
          <ContainerContent>
            <View>
              <Text>{estabelecimentos[calloutSelect].logradouro}</Text>
              <Text>{estabelecimentos[calloutSelect].bairro}</Text>
              <Text>{estabelecimentos[calloutSelect].numero}</Text>
              <Text>
                {estabelecimentos[calloutSelect].municipio}
                {estabelecimentos[calloutSelect].uf}
              </Text>
              <Text>{estabelecimentos[calloutSelect].cep}</Text>
              <ContainerDistance>
                {distance && (
                  <Icon name="car" size={12} style={{marginRight: 10}} />
                )}
                <TitleDistance>
                  {distance ? `${distance} km` : '-'}
                </TitleDistance>
              </ContainerDistance>
            </View>
            <ContainerButton>
              <ButtonRedirect
                onPress={() =>
                  Linking.openURL(
                    `geo:${region}?q=${estabelecimentos[calloutSelect].latitude},${estabelecimentos[calloutSelect].longitude}`,
                  )
                }>
                <TextButtonredirect> IR </TextButtonredirect>
              </ButtonRedirect>
            </ContainerButton>
          </ContainerContent>
        </CardContent>
      </Card>
    </LinearColor>
  );
}
