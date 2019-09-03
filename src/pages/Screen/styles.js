import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: #fff;
`;
export const Content = styled.View`
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.Image`
  width: 120px;
  height: 90px;
  margin: 20px;
`;

export const ContainerInput = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 20px 20px 0;
  padding: 5px;
`;
export const ViewInputIcon = styled.View`
  padding: 6px;
`;

export const TxtLogin = styled.TextInput.attrs({
  placeholderTextColor: '#ddd',
})`
  height: 45px;
  width: 220px;
  font-size: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #0c5dab;
  color: #0c5dab;
`;

export const BtnLinear = styled(LinearGradient).attrs({
  colors: ['#1BABE3', '#4CC4D1'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  height: 45px;
  width: 250px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ContainerButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Buttonlogin = styled.TouchableOpacity`
  margin-top: 20px;
  height: 45px;
  width: 250px;
  border-radius: 8px;
`;

export const Textbutton = styled.Text`
  color: #fff;
  padding: 10px;
  font-weight: bold;
  font-family: Helvetica-Normal;
`;

export const ContainerOr = styled.View`
  flex-direction: row;
`;
export const Or = styled.Text`
  margin: 10px;
  color: #0c5dab;
`;

export const ButtonloginGoogle = styled.TouchableOpacity`
  margin-top: 20px;
  height: 45px;
  width: 250px;
  border-radius: 8px;
  border: 1px solid #929497;
`;
export const GoogleIcon = styled.Image`
  height: 20px;
  width: 20px;
  margin: 10px 10px 10px 20px;
`;
export const TextbuttonGoogle = styled.Text`
  color: #999;
  padding: 10px;
  font-weight: bold;
  font-family: Helvetica-Normal;
`;

export const ButtonFacebook = styled.TouchableOpacity`
  margin: 10px;
  height: 45px;
  width: 250px;
  border-radius: 8px;
  background: #3b5998;
`;
export const IconFacebook = styled(Icon).attrs({
  name: 'facebook',
  color: '#FFF',
  size: 25,
})`
  margin: 7px 20px;
`;

export const TextFacebookButton = styled.Text`
  font-weight: bold;
  color: #fff;
  margin: 10px 1px;
  font-family: Helvetica-Normal;
`;
