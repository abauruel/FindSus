import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  Fragment,
  ToastAndroid,
  NativeModules,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import KeepAwake from 'react-native-keep-awake'

import MapView, { Marker, Callout } from 'react-native-maps';

import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import InfoPlace from '../../components/infoPlace';
import Directions from '../../components/Directions';

import api from '../../services/api';

import MapStyle from '../../styles/mapStyle.json';

import {
  Container,
  List,
  ItemLista,
  ContainerButton,
  IconDescription,
  ViewFooter,
  ConteudoEstabelecimentos,
  TextUnidadeSelecionada,
  ViewLoading,
  BtnLinear,
  ConteudoEstabelecimentosDetalhes,
  ConteudoIcone,
  ConteudoEndereco,
  LinearColorList,
  ContainerP,
  ContainerPT,
  LinearColor,
} from './styles';



import pinuser from '../../assets/pinUser.png';
import pinPlace from '../../assets/pinPlace.png';
import ListPlaces from '../../components/ListPlaces';

const PLACE = 'res1:EstabelecimentoSaude';
const { width } = Dimensions.get('window');



export default class Home extends Component {
  state = {
    distance: null,
    duration:null,
    destination: null,
    loading: false,
    isMapReady: false,
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0143,
      longitudeDelta: 0.0134,
    },
    estabelecimentos: [],
    visibleList: false,
    footerVisible: true,
    exibirListadeResultados: false,
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
      icone: null,
    },
    calloutSelect:0
  };

  async componentDidMount() {
    const { tipoUnidades } = this.state;
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
      console.tron.log(permission)

    const tiposUnidades = tipoUnidades.filter(item => item.cod !== '73');
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
      unidadeSelecionada: {
        cod: '73',
        descricao: 'PRONTO ATENDIMENTO',
        icone: 'hospital-alt',
      },
    });
    if (permission === 'granted') {
      this.getCurrentPosition();
    }
  }

  handleclick = async () => {
    this.setState({ loading: true });

    Geolocation.getCurrentPosition(
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

    const { unidadeSelecionada, region, estabelecimentos } = this.state;


    api.createRequest({
      'est:requestLocalizarEstabelecimentoSaude': {
        'fil:FiltroLocalizacaoEstabelecimentoSaude': {
          'loc:Localizacao': {
            'loc:longitude': region.longitude,
            'loc:latitude': region.latitude,
          },
          'tip:tipoUnidade': {
            'tip:codigo': unidadeSelecionada.cod,
            'tip:descricao': unidadeSelecionada.descricao,
          },
          'pag:Paginacao': {
            'pag:posicaoRegistroInicio': '01',
            'pag:quantidadeRegistrosPorPagina': '10',
          },
        },
      },
    });
    const est = await api.sendRequest();

    if(!est){
      this.setState({ loading: false });
      ToastAndroid.show('Server is out', ToastAndroid.SHORT)

    }


    const listaPlace = JSON.stringify(
     est['soap:Envelope']['S:Body'][0]['est:responseLocalizarEstabelecimentoSaude'][0][
        'res:ResultadosLocalizacaoEstabelecimentoSaude'
      ][0]['res1:ResultadoLocalizacaoEstabelecimentoSaude'],
    );
    console.tron.log(listaPlace)
    JSON.parse(listaPlace).map((place) => {
      this.setState({
        estabelecimentos: [
          ...this.state.estabelecimentos,
          {
            codcnes: place[PLACE][0]['cod:CodigoCNES'][0]['ns2:codigo'][0]._,
            nome: place[PLACE][0]['dad:nomeFantasia'][0]['ns7:Nome'][0]._,
            logradouro: place[PLACE][0]['end:Endereco'][0]['ns11:nomeLogradouro'][0]._,
            numero: place[PLACE][0]['end:Endereco'][0]['ns11:numero'][0]._,
            bairro:
              place[PLACE][0]['end:Endereco'][0]['ns11:Bairro'][0]['ns13:descricaoBairro'][0],
            cep: place[PLACE][0]['end:Endereco'][0]['ns11:CEP'][0]['ns14:numeroCEP'][0],
            municipio:
              place[PLACE][0]['end:Endereco'][0]['ns11:Municipio'][0]['ns15:nomeMunicipio'][0],
            uf:
              place[PLACE][0]['end:Endereco'][0]['ns11:Municipio'][0]['ns15:UF'][0][
                'ns16:siglaUF'
              ][0],
            longitude: place[PLACE][0]['dad:Localizacao'][0]['ns30:longitude'][0]._,
            latitude: place[PLACE][0]['dad:Localizacao'][0]['ns30:latitude'][0]._,
            ultimaAtualizacao: place[PLACE][0]['dad:dataAtualizacao'][0]._,
          },
        ],
      });
    });

    this.setState({ loading: false });
    this.setState({exibirListadeResultados: true})
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
    this.setState({
      estabelecimentos: [],
    });
  };

  handleSelectedItem = (item) => {
    this.setState({
      unidadeSelecionada: {
        cod: item.cod,
        descricao: item.descricao,
        icone: item.icone,
      },
      estabelecimentos: [],
    });

    const _TiposEstabelecimentos = this.state.tipoUnidades.filter(id => id.cod !== item.cod);
    _TiposEstabelecimentos.forEach((element) => {
      delete element.checked;
    });

    this.setState({
      visibleList: false,

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

    this.handleViewListResults();
  };

  handleViewListResults = () => {
    switch (this.state.exibirListadeResultados) {
      case false:
        this.setState({ exibirListadeResultados: true });
        break;
      case true:
        this.setState({ exibirListadeResultados: false });
        break;
      default:
        break;
    }
  };

  onMapLayout = () => {
    this.setState({
      isMapReady: true,
    });
  };
  _mapReady = () => {
    this.state.estabelecimentos >0 &&(
    this.state.estabelecimentos[0].mark.showCallout())
  }

  getCurrentPosition =  async () => {





    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          },
        });
        this.mapView.animateCamera(
          {
            center: {
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
            },
          },
          2000,
        );
        setTimeout(() => {
          console.tron.log(`latitude ${this.state.region.latitude}`);
        },1000)



      },
      (error) => {
        console.tron.log(error);
      },{enableHighAccuracy: false, timeout: 2000}

    );
  };

  render() {
    const {
      region,
      estabelecimentos,
      loading,
      unidadeSelecionada,
      exibirListadeResultados,
    } = this.state;

    return (

      <Container>
        <MapView
          ref={map => (this.mapView = map)}
          initialRegion={{
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          showsMyLocationButton
          loadingEnabled
          style={styles.mapView}
          onLayout={this.onMapLayout}
          onMapReady={this._mapReady}
          customMapStyle={MapStyle}
        >
          {estabelecimentos.length > 0 ? (
            [
              <Marker
                key="user"
                coordinate={{
                  latitude: region.latitude,
                  longitude: region.longitude,
                }}
                image={pinuser}
              />,
              estabelecimentos.map(place => (
                <Marker
                  ref={mark => (place.mark = mark)}
                  anchor={{ x: 0, y: 0 }}
                  key={place.nome}
                  coordinate={
                    (LatLng = {
                      latitude: Number(place.latitude),
                      longitude: Number(place.longitude),
                    })
                  }
                  pinColor="blue"
                  image={pinPlace}
                >
                  <Callout tooltip>
                    <InfoPlace
                      title={place.nome}
                      description={place.logradouro}
                      icon={this.state.unidadeSelecionada.icone}
                      duration={this.state.duration}
                      distance={this.state.distance}

                    />

                  </Callout>
                </Marker>
              )),
            ]
          ) : (
            <Marker
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude,
              }}
              pinColor="blue"
              image={pinuser}
            />
          )}
          {/* {this.state.destination &&
            <Directions
              origin={region}
              destination={this.state.destination}
              onReady={(result)=>{
                this.setState({ duration: Math.floor(result.duration), distance: Math.floor(result.distance)})
              }}
            />
          } */}
        </MapView>

        {loading && (
          <ViewLoading>
            <ActivityIndicator size="large" color="#FFF" />
          </ViewLoading>
        )}


      {/** Informações de estabelecimentos selecionados*/}
      {estabelecimentos.length >0 && (

        <LinearColor>
        <View style={{flexDirection:"row",  paddingLeft: 20, paddingTop: 10}}>
          <Icon name="hospital-alt" size={30} color="#000" style={{margin: 15}}/>
          <View style={{ marginRight: 30 }}>
          <Text style={{fontSize:18, fontWeight:"bold"}}>{estabelecimentos[this.state.calloutSelect].nome}</Text>

          <Text>{estabelecimentos[this.state.calloutSelect].logradouro}</Text>
          <Text>{estabelecimentos[this.state.calloutSelect].bairro}</Text>
          <Text>{estabelecimentos[this.state.calloutSelect].numero}</Text>
          <Text>{estabelecimentos[this.state.calloutSelect].municipio} - {estabelecimentos[this.state.calloutSelect].uf}</Text>
          <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center", paddingTop:5}}>
            <Icon name="car" size={12} style={{marginRight:10}}/>
            <Text>20km</Text>
          </View>
          </View>
        </View>
        
      </LinearColor>

      )}

        {/** Pesquisa */}
        {unidadeSelecionada.cod && (
          !exibirListadeResultados && (
          <BtnLinear>
            <TouchableOpacity onPress={this.handleList}>
              <Icon name="list-ul" color="#FFF" size={18} style={{ marginLeft: 20 }} />
            </TouchableOpacity>
            <TextUnidadeSelecionada>{unidadeSelecionada.descricao}</TextUnidadeSelecionada>
            <TouchableOpacity onPress={this.handleclick}>
              <Icon name="search" color="#FFF" size={18} style={{ marginRight: 30 }} />
            </TouchableOpacity>
          </BtnLinear>)
        )}


        {/** botao centralizar localizacao */}
        <View style={{ flexDirection:"row", justifyContent:"flex-end" , position: "absolute",bottom: 0, bottom: 0,  left: 0,  right: 0, marginBottom: 240, padding:20}}>
          <TouchableOpacity onPress={this.getCurrentPosition} style={{backgroundColor:"#ddd", padding: 10, borderRadius: 50, width: 45, height:45}}>
            <Icon name="crosshairs" size={24} color="#000" style={{flexDirection: "column",justifyContent: "center", alignItems: "center"}}/>
          </TouchableOpacity>
        </View>

        {/** Limpar buscas */}
        {estabelecimentos.length > 0 && (
          <View style={{ flexDirection:"row", justifyContent:"flex-end" , position: "absolute",bottom: 0, bottom: 0,  left: 0,  right: 0, marginBottom: 180, padding:20}}>
            <TouchableOpacity onPress={()=>{this.setState({estabelecimentos:[], exibirListadeResultados: false, calloutSelect:0})}} style={{backgroundColor:"#ddd", padding: 10, borderRadius: 50, width: 45, height:45}}>
              <Icon name="eraser" size={24} color="#000" style={{flexDirection: "column",justifyContent: "center", alignItems: "center"}}/>
            </TouchableOpacity>
          </View>)}

        {/** Lista com resultados de pesquisa */}
        {exibirListadeResultados && (
          <ViewFooter>
            <ScrollView
              horizontal
              showHorizontalScrollIndicator={false}
              pagingEnabled
              onMomentumScrollEnd={(e) => {
                const scrolled = e.nativeEvent.contentOffset.x;
                const place = scrolled > 0 ? scrolled / Dimensions.get('window').width : 0;
                const { latitude, longitude, mark } = estabelecimentos[Math.round(place)];
                this.mapView.animateCamera(
                  {
                    center: {
                      latitude: Number(latitude),
                      longitude: Number(longitude),
                    },
                  },
                  1000,
                );
                setTimeout(() => {
                  mark.showCallout();
                }, 1000);
                this.setState({
                  destination: {latitude:Number(latitude), longitude:Number(longitude)},
                  calloutSelect: Math.round(place)
                })                
              }
            }
            >
              {
                estabelecimentos.map(place => (
                  <ListPlaces place={place} key={place.nome} width={width}/>
              ))}
            </ScrollView>
          </ViewFooter>
        )}

        {this.state.visibleList && (
          <List>
            <LinearColorList>
            <View style={{ marginTop: 5 }}>
              <FlatList
                data={this.state.tipoUnidades.sort((a, b) => a.cod < b.cod)}
                keyExtractor={item => String(item.cod)}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => this.handleSelectedItem(item)}
                    style={{marginHorizontal: 20, marginTop: 10}}
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
            </LinearColorList>
          </List>
        )}
        <KeepAwake/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    bottom: 0,
    left: 0,
    paddingLeft: 5,
    position: 'absolute',
    right: 0,
    top: 0,
  },

});
