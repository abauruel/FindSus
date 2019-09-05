import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: #0c5dab;
`;

export const List = styled.View`
  flex: 1;
  height: 180px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding-right: 20px;
`;

export const LinearColorList = styled(LinearGradient).attrs({
  colors: ['#1BABE3', '#4CC4D1'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding-right: 20px;
  padding-bottom: 20px;
`;

export const ItemLista = styled.Text`
  font-weight: bold;
  color: #fff;
  margin: 0 5px;
  font-size: 12px;
`;
export const IconDescription = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ContainerButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ViewFooter = styled.View`
  margin-bottom: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 4px;
`;

export const ConteudoEstabelecimentos = styled.View`
  background: #fff;
  border-radius: 10px;
  border-width: 1;
  border-color: #ddd;
  margin-bottom: 15;
  justify-content: center;
  max-height: 200;
  width: ${(props) => props.width - 40};

  display: flex;

  margin-left: 20px;
  margin-right: 20px;
  elevation: 3;
`;
export const ConteudoEstabelecimentosDetalhes = styled.View`
  flex-direction: row;
  padding: 10px;
`;
export const ConteudoIcone = styled.View`
  padding: 10px;
  background: #1babe3;
  border-radius: 4px;
`;
export const ConteudoEndereco = styled.View``;

export const BtnLinear = styled(LinearGradient).attrs({
  colors: ['#1BABE3', '#4CC4D1'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  margin: 20px;
  height: 40px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  elevation: 3;
`;

export const TextUnidadeSelecionada = styled.Text`
  color: #fff;
  margin-left: 20px;
  padding: 10px;
  font-size: 12px;
`;

export const ViewLoading = styled.View`
  background: rgba(12, 93, 171, 0.5);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContainerP = styled(LinearGradient).attrs({
  colors: ['#1BABE3', '#4CC4D1'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  margin: 20px;
  height: 100px;
  border-radius: 8px;
`;

export const ContainerPT = styled.View`
  top: 90px;
  background: #fff;
  border-radius: 8px;
  margin: 30px;
  elevation: 4;
  height: 90px;
`;
export const LinearColor = styled(LinearGradient).attrs({
  colors: ['#FFF', '#FFF', 'rgba(255,255,255,0)', 'rgba(255,255,255,0.0)'],
  locations: [0.35, 0.65, 1, 1],
  start: { x: 1, y: 0 },
  end: { x: 1, y: 1 },
})`
  border-radius: 8px;
  margin-top: 10px;
`;
