import React from 'react';
import { Home } from './components/Home'

import './App.css';
import Carrinho from './components/Carrinho.component';
import Filtro from './components/Filtro.component';
import styled from 'styled-components';
import BotaoCarrinho from './icones/add_shopping_cart-black-18dp.svg'
const MainContainer = styled.div`
display: grid;
grid-template-columns: ${(props) => props.carrinhoAberto ? "1fr 3fr 1fr" : "1fr 3fr"};
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
const PlaceHolder = styled.img`
display: none;
`
const IconeAtivaCarrinho = styled.img`
width: 60%;
`
class App extends React.Component {

  constructor(){
    super();

    this.state = {
      exibirCarrinho: false
    }
  }

  mostrarCarrinho = (e) =>{
    e.preventDefault();
    this.setState({exibirCarrinho: !this.state.exibirCarrinho});
  }

  render(){
    let cart;
    if(this.state.exibirCarrinho){
      cart = <Carrinho/>;
    }else{
      cart = <PlaceHolder/>
    }
  return (
    <MainContainer carrinhoAberto={this.state.exibirCarrinho}>
      <Filtro />
      <Home />
      {/* <Carrinho /> */}
      {cart}
    <BCarrinhoEstilizado onMouseDown={this.mostrarCarrinho}><IconeAtivaCarrinho src={BotaoCarrinho} /></BCarrinhoEstilizado>
    </MainContainer>
  );
  }
}

export default App;
