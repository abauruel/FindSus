import React, { Component } from 'react';

import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LoginButton } from 'react-native-fbsdk';

import firebase from 'react-native-firebase';

import { facebookLogin, googleLogin } from '../../services/auth';

import {
  Container,
  Content,
  Logo,
  TxtLogin,
  Buttonlogin,
  Textbutton,
  Or,
  ContainerOr,
  IconFacebook,
  ContainerButton,
  TextFacebookButton,
  ContainerInput,
  ButtonloginGoogle,
  GoogleIcon,
  TextbuttonGoogle,
  BtnLinear,
  ButtonFacebook,
} from './styles';

import logo from '../../assets/logoSus2.png';
import google from '../../assets/googleIcon.png';

export default class Screen extends Component {
  state = {
    error: null,
    loading: false,
    login: null,
    password: null,
    isAuthenticated: false,
  };

  componentDidMount() {
    const { navigation } = this.props;
    // setTimeout(() => navigation.navigate('Login'), 3000);
  }

  handleLogin = async () => {
    const { navigation } = this.props;
    const { login, password } = this.state;

    try {
      // const user = await firebase.auth().signInWithEmailAndPassword(login, password);
      // this.setState({ isAuthenticated: true });
      navigation.navigate('Home');
    } catch (err) {
      console.tron.log(err);
    }
  };

  handleLoginWithFacebook = async () => {
    const response = await facebookLogin();

    if (response.error) {
      this.setState({ error: response.error });
      console.log(reponse.error);
    }
  };

  handleLoginWithGoogle = async () => {
    const response = await googleLogin();
  };

  render() {
    return (
      <Container>
        <Content>
          <Logo source={logo} />
          <ContainerInput>
            <Icon name="user" size={14} color="#0c5dab" style={{ padding: 10 }} />
            <TxtLogin
              placeholder="usuário"
              onChangeText={login => this.setState({ login })}
              value={this.state.loginText}
            />
          </ContainerInput>
          <ContainerInput>
            <Icon name="key" size={14} color="#0c5dab" style={{ padding: 10 }} />
            <TxtLogin
              placeholder="senha"
              secureTextEntry
              onChangeText={password => this.setState({ password })}
            />
          </ContainerInput>
          <Buttonlogin onPress={this.handleLogin}>
            <BtnLinear>
              <Textbutton> Login </Textbutton>
            </BtnLinear>
          </Buttonlogin>

          <ButtonloginGoogle onPress={this.handleLoginWithGoogle}>
            <ContainerButton>
              <GoogleIcon source={google} />
              <TextbuttonGoogle>Login com google </TextbuttonGoogle>
            </ContainerButton>
          </ButtonloginGoogle>

          <ContainerOr>
            <Or> ou </Or>
          </ContainerOr>

          <ButtonFacebook onPress={this.handleLoginWithFacebook}>
            <ContainerButton>
              <IconFacebook />
              <TextFacebookButton>Login com facebook</TextFacebookButton>
            </ContainerButton>
          </ButtonFacebook>
        </Content>
      </Container>
    );
  }
}
