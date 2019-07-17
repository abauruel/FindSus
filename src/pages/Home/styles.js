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

export const Image = styled.ImageBackground`
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
