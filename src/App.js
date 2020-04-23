import React from 'react';
import { Home } from './components/Home'

import './App.css';
import Carrinho from './components/Carrinho.component';

function App() {
  return (
    <div>
      <Carrinho total={123} />
      <div className="App">
      <Home />
    </div>
  );
}

export default App;
