import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#216CBC', '#216CBC'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.Image`
  width: 200px;
  height: 200px;

  border-radius: 3px;
`;
