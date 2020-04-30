import React from 'react';
import AdicionaProduto from '../icones/add_shopping_cart-black-18dp.svg'

export default class Carrinho extends React.Component{

    render(){
        return(
        <section>
        <ul>
            {this.props.listaDeItens}
        </ul>
        <p>Total: <strong>R${this.props.total}</strong></p>
        <img src={AdicionaProduto} width='50px'/>
        </section>)
    }
}