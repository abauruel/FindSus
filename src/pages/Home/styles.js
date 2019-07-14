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
