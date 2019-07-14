import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;
export const Content = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.Image`
  width: 160px;
  height: 120px;
  margin-top: 20px;
`;
export const TxtLogin = styled.TextInput`
  height: 45px;
  width: 250px;
  margin-top: 20px;
  padding-left: 6;
  font-size: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #0c5dab;
  color: #0c5dab;
`;
export const Buttonlogin = styled.TouchableOpacity`
  margin-top: 20px;
  height: 45px;
  width: 250px;
  border-radius: 3px;
  background: #0c5dab;

  justify-content: center;
  align-items: center;
`;
export const Textbutton = styled.Text`
  color: #fff;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
`;

export const ContainerOr = styled.View`
  flex-direction: row;
`;
export const Or = styled.Text`
  margin-top: 20px;
  color: #0c5dab;
`;

export const ContainerButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;
export const TextFacebookButton = styled.Text`
  margin-top: 3px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
export const IconFacebook = styled(Icon).attrs({
  name: 'facebook-square',
  color: '#fff',
  size: 30,
})``;

export const IconGoogle = styled(Icon).attrs({
  name: 'google',
  color: '#fff',
  size: 30,
})``;
