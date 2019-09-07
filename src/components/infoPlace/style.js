import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const IconPlace = styled.View`
  display: flex;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  justify-content: center;
  align-items: center;
  background: #fff;

  width: 50px;
  height: 30px;

  border-top-width: 1px;
  border-top-color: #ddd;

  border-left-width: 1px;
  border-left-color: #ddd;

  border-right-width: 1px;
  border-right-color: #ddd;
`;

export const BoxInfoPlace = styled.View`
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 200px;
  background: #fff;

  border-radius: 5px;

  shadow-color: #0000;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-radius: 10;
  elevation: 3;
`;

export const BoxIcon = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxInfoPlaceDetail = styled.View`
  flex: 1;
  flex-direction: column;
  margin: 10px 10px;
`;

export const Content = styled.View``;

export const LinearColor = styled(LinearGradient).attrs({
  colors: ['#FFF', 'rgba(237,237,237,0)'],
  start: { x: 1, y: 0 },
  end: { x: 1, y: 1 },
})`
  border-radius: 8px;
  margin: 20px;
`;
