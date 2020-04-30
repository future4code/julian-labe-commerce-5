import React from 'react';
import { Home } from './components/Home'

import './App.css';
import Carrinho from './components/Carrinho.component';
import Filtro from './components/Filtro.component';
import styled from 'styled-components';
import BotaoCarrinho from './icones/add_shopping_cart-black-18dp.svg'

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      
    }
  }

  render(){
    
  return (
    <Home />
  );
  }
}

export default App;
