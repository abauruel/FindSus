import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: transparent;
`;

export const Footer = styled.View`
  background: transparent;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Image = styled.View`
  background: #0c5dab;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 30px;
  padding-right: 30px;
`;
export const List = styled.View`
  flex: 1;
  background: #0c5dab;
  height: 180px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding-right: 20px;
`;

export const ItemLista = styled.Text`
  font-weight: bold;
  color: #fff;
  margin: 0 5px;
  font-size: 16px;
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
export const ListaResultados = styled.View`
  background: #ccc;
`;
export const ViewFooter = styled.View`
  margin-bottom: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
export const ImageTipoEstabelecimento = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background: #0c5dab;
  margin: 20px 10px;
  box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
`;

export const ConteudoEstabelecimentos = styled.View`
  flex-direction: column;
  width: 180px;
  flex-wrap: wrap;
  margin: 15px 10px;
`;
export const ViewIcone = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ViewUnidadeSelecionada = styled.View`
  background: rgba(12, 93, 171, 0.6);
  margin: 10px;
  height: 70px;
  border-radius: 5px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TextUnidadeSelecionada = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
`;
