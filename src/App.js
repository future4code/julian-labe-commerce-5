import React from 'react';
import { Home } from './components/Home'

import './App.css';
import Carrinho from './components/Carrinho.component';
import Filtro from './components/Filtro.component';
import styled from 'styled-components';
import BotaoCarrinho from './icones/add_shopping_cart-black-18dp.svg'
const MainContainer = styled.div`
display: grid;
grid-template-columns: 1fr 4fr;
padding: 20px;
`
const BCarrinhoEstilizado = styled.button`
position: fixed;
bottom: 40px;
right: 40px;
border-radius: 100%;
height: 100px;
width: 100px;
outline: none;
border: none;
`
const IconeAtivaCarrinho = styled.img`
width: 60%;
`
function App() {
  return (
    <MainContainer>
      <Filtro />
      <Home />
    <BCarrinhoEstilizado><IconeAtivaCarrinho src={BotaoCarrinho} /></BCarrinhoEstilizado>
    </MainContainer>
  );
}

export default App;
