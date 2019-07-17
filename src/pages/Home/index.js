import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import api from '../../services/api';

import MapStyle from '../../styles/mapStyle.json';

import {
  Container,
  Footer,
  Image,
  List,
  ItemLista,
  ContainerButton,
  IconDescription,
} from './styles';
import FooterAppImage from '../../assets/bottom.png';

const PLACE = 'res1:EstabelecimentoSaude';

export default class Home extends Component {
  state = {
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0143,
      longitudeDelta: 0.0134,
    },
    estabelecimentos: [],
    visibleList: false,
    footerVisible: true,
    tipoUnidades: [
      { cod: '01', descricao: 'POSTO DE SAÚDE', icone: 'clinic-medical' },
      { cod: '02', descricao: 'CENTRO DE SAUDE/UNIDADE BASICA', icone: 'clinic-medical' },

      { cod: '20', descricao: 'PRONTO SOCORRO GERAL', icone: 'hospital-alt' },
      {
        cod: '73',
        descricao: 'PRONTO ATENDIMENTO',
        icone: 'hospital',
      },
    ],
    unidadeSelecionada: {
      cod: null,
      descricao: null,
    },
  };

  async componentDidMount() {
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    const tiposUnidades = this.state.tipoUnidades.filter(item => item.cod !== '73');
    this.setState({
      tipoUnidades: [
        ...tiposUnidades,
        {
          cod: '73',
          descricao: 'PRONTO ATENDIMENTO',
          icone: 'hospital-alt',
          checked: true,
        },
      ],
    });
    if (permission === 'granted') {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          this.setState({
            region: {
              latitude,
              longitude,
            },
          });
        },
        () => {}, // erro
        {
          timeout: 2000,
          enableHighAccuracy: true,
          maximumAge: 1000,
        },
      );
    }
  }

  handleclick = async () => {
    const { estabelecimentos, resposta, region } = this.state;
    console.tron.log('clicado');

    api.createRequest({
      'est:requestLocalizarEstabelecimentoSaude': {
        'fil:FiltroLocalizacaoEstabelecimentoSaude': {
          'loc:Localizacao': {
            'loc:longitude': region.longitude,
            'loc:latitude': region.latitude,
          },
          'tip:tipoUnidade': {
            'tip:codigo': this.state.unidadeSelecionada.cod,
            'tip:descricao': this.state.unidadeSelecionada.descricao,
          },
          'pag:Paginacao': {
            'pag:posicaoRegistroInicio': '01',
            'pag:quantidadeRegistrosPorPagina': '10',
          },
        },
      },
    });
    const est = await api.sendRequest();

    const listaPlace = JSON.stringify(
      est['soap11:Envelope']['soap11:Body'][0]['est:responseLocalizarEstabelecimentoSaude'][0][
        'res:ResultadosLocalizacaoEstabelecimentoSaude'
      ][0]['res1:ResultadoLocalizacaoEstabelecimentoSaude'],
    );

    JSON.parse(listaPlace).map((place) => {
      this.setState({
        estabelecimentos: [
          ...this.state.estabelecimentos,
          {
            nome: place[PLACE][0]['dad:nomeFantasia'][0]['ns7:Nome'][0]._,
            longitude: place[PLACE][0]['dad:Localizacao'][0]['ns30:longitude'][0]._,
            latitude: place[PLACE][0]['dad:Localizacao'][0]['ns30:latitude'][0]._,
          },
        ],
      });
    });
    console.tron.log(this.state.estabelecimentos);
    return null;
  };

  handleList = () => {
    switch (this.state.visibleList) {
      case false:
        this.setState({ visibleList: true, footerVisible: false });
        break;
      case true:
        this.setState({ visibleList: false });
        break;
      default:
        this.state.visibleList;
    }
  };

  handleSelectedItem = (item) => {
    this.setState({
      unidadeSelecionada: {
        cod: item.cod,
        descricao: item.descricao,
      },
    });

    const _TiposEstabelecimentos = this.state.tipoUnidades.filter(id => id.cod !== item.cod);
    _TiposEstabelecimentos.forEach((element) => {
      delete element.checked;
    });

    this.setState({
      visibleList: false,
      footerVisible: true,
      tipoUnidades: [
        ..._TiposEstabelecimentos,
        {
          cod: item.cod,
          descricao: item.descricao,
          icone: item.icone,
          checked: true,
        },
      ],
    });
  };

  render() {
    const { latitude, longitude } = this.state.region;

    return (
      <Container>
        <Animated.View />
        <MapView
          ref={map => (this.mapView = map)}
          region={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          loadingEnabled
          style={styles.mapView}
          customMapStyle={MapStyle}
        >
          {this.state.estabelecimentos.length > 0 ? (
            this.state.estabelecimentos.map(place => (
              <Marker
                key={place.nome}
                coordinate={
                  (LatLng = {
                    latitude: Number(place.latitude),
                    longitude: Number(place.longitude),
                  })
                }
                title={place.nome}
                description={place.nome}
              />
            ))
          ) : (
            <Marker
              coordinate={{
                latitude: -22.9144,
                longitude: -43.1813,
              }}
              title="Hello"
            />
          )}
        </MapView>
        {this.state.visibleList ? (
          <List>
            <View style={{ marginTop: 5 }}>
              <FlatList
                data={this.state.tipoUnidades}
                keyExtractor={item => String(item.cod)}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => this.handleSelectedItem(item)}
                    style={styles.buttonLista}
                  >
                    <ContainerButton>
                      <IconDescription>
                        <Icon name={item.icone} size={18} color="#FFF" style={{ padding: 5 }} />
                        <ItemLista>{item.descricao}</ItemLista>
                      </IconDescription>
                      <View>
                        {item.checked ? (
                          <Icon name="check-circle" size={15} color="#FFF" />
                        ) : (
                          <Icon name="circle" size={15} color="#FFF" />
                        )}
                      </View>
                    </ContainerButton>
                  </TouchableOpacity>
                )}
              />
            </View>
          </List>
        ) : null}

        <Footer>
          {this.state.footerVisible && (
            <Image source={FooterAppImage}>
              <TouchableOpacity onPress={this.handleList}>
                <Icon name="list-ul" size={30} color="#FFF" />
              </TouchableOpacity>

              <ScrollView style={styles.placeContainer} horizontal>
                {this.state.estabelecimentos.map(place => (
                  <View key={place.nome} style={styles.place}>
                    <Text>{place.nome}</Text>
                    <Text>{place.latitude}</Text>
                    <Text>{place.longitude}</Text>
                  </View>
                ))}
              </ScrollView>
              <View>
                <TouchableOpacity onPress={this.handleclick}>
                  <Icon name="search-location" size={40} color="#fff" />
                </TouchableOpacity>
              </View>
            </Image>
          )}
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: '#0c5dab',
  },

  buttonLista: {
    marginHorizontal: 20,
    marginTop: 10,
  },

  mapView: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  place: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    marginBottom: 10,
    marginHorizontal: 20,
    maxHeight: 200,
    width: 200,
  },
});
