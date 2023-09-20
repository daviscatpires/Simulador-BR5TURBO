// src/App.tsx
import React from 'react';
import './App.css';
import Planilha from './Components/Planilha/Planilha';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #000; /* Fundo preto */
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom right, #000, #ffd700); /* Gradiente de dourado para preto */
  }
`;

const Header = styled.header`
  background: #000; /* Gradiente dourado */
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Sombra leve */
`;

const HeaderTitle = styled.h1`
  background: linear-gradient(135deg, #ffd700, #ffcc00); /* Texto em degradê dourado */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5); /* Adiciona um efeito de sombra brilhante */
  font-size: 40px;
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: #000; /* Gradiente de dourado para preto */
  border: 1px solid #ffcc00; /* Borda dourada */
  border-radius: 16px; /* Borda arredondada */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Sombra leve */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <HeaderTitle>BR5 TURBO</HeaderTitle>
      </Header>
      <AppContainer>
        <Planilha />
      </AppContainer>
    </>
  );
}

export default App;
