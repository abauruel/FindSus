import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ViewFooter = styled.View`
  width: ${(props) => props.width - 40};
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  max-height: 200;

`;

export const ContainerP = styled(LinearGradient).attrs({
  colors: ['#1BABE3', '#4CC4D1'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  margin-bottom: 55px;
  height: 100px;
  border-radius: 8px;
`;

export const ContainerPT = styled.View`
  top: 60px;
  background: #fff;
  border-radius: 8px;
  margin: 15px;
  elevation: 4;
  height: 90px;
`;

export const ConteudoEstabelecimentos = styled.View`
  background: #fff;
  border-radius: 10px;
  border-width: 1;
  border-color: #ddd;
  margin-bottom: 15;
  justify-content: center;
  max-height: 200;

  display: flex;

  margin-left: 20px;
  margin-right: 20px;
  elevation: 3;
`;
