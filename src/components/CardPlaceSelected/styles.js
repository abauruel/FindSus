import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const LinearColor = styled(LinearGradient).attrs({
  colors: ['#FFF', 'rgba(255,255,255,0.0)'],
  locations: [0.75, 1],

  start: {x: 1, y: 0},
  end: {x: 1, y: 1},
})`
  border-radius: 8px;
  margin-top: 0px;
`;

export const Card = styled.View`
  flex-direction: 'row';
  padding-left: 20;
  padding-top: 10;
`;
export const Cardicon = styled(Icon)``;
export const CardContent = styled.View`
  margin-right: 30;
`;
export const Name = styled.Text`
  font-size: 18;
  font-weight: 'bold';
  max-width: 290;
`;

export const ContainerContent = styled.View`
  flex-direction: 'row';
`;
export const ContainerDistance = styled.View`
  flex-direction: 'row';
  justify-content: 'flex-start';
  align-items: 'center';
  padding-top: 5;
`;

export const TitleDistance = styled.Text`
  margin-right: 20;
`;

export const ContainerButton = styled.View`
  justify-content: 'center';
`;
export const ButtonRedirect = styled.TouchableOpacity`
  background: '#1BABE3';
  elevation: 3;
  border-radius: 100;
  padding: 20;
`;
export const TextButtonredirect = styled.Text`
  color: #fff;
`;
