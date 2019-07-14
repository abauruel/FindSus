import React, { Component } from 'react';

import { Text } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

import { async } from 'rxjs/internal/scheduler/async';
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
  IconGoogle,
} from './styles';

import logo from '../../assets/logoSus2.png';

export default class Screen extends Component {
  state = {
    error: null,
    loading: false,
  };

  componentDidMount() {
    const { navigation } = this.props;
    // setTimeout(() => navigation.navigate('Login'), 3000);
  }

  handleLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
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
          <TxtLogin placeholder="username" />
          <TxtLogin placeholder="password" secureTextEntry />
          <Buttonlogin onPress={this.handleLogin}>
            <Textbutton> LOGIN </Textbutton>
          </Buttonlogin>
          <ContainerOr>
            <Or> ──────── ou ──────── </Or>
          </ContainerOr>

          <Buttonlogin onPress={this.handleLoginWithFacebook}>
            <ContainerButton>
              <IconFacebook />
              <TextFacebookButton>Login com facebook</TextFacebookButton>
            </ContainerButton>
          </Buttonlogin>
          <Buttonlogin onPress={this.handleLoginWithGoogle}>
            <ContainerButton>
              <IconGoogle />
              <TextFacebookButton>Login com google </TextFacebookButton>
            </ContainerButton>
          </Buttonlogin>
        </Content>
      </Container>
    );
  }
}
