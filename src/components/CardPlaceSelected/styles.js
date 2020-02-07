import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const LinearColor = styled(LinearGradient).attrs({
  colors: ['#FFF', 'rgba(255,255,255,0.0)'],
  locations: [0.75, 1],

  start: {x: 1, y: 0},
  end: {x: 1, y: 1},
})`
  border-radius: 8px;
  margin-top: 0px;
`;
