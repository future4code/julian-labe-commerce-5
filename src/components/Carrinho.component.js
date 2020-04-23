import React from 'react';
import AdicionaProduto from '../icones/add_shopping_cart-black-18dp.svg'

export default class Carrinho extends React.Component{
    state = {
        carrinhoDeCompras: [{
            id: '',
            name: '',
            value: '',
            imageUrl: ''
        }]
    }
      
    adicionaCarrinho = () => {   
        const produtoAdicionado = JSON.parse(localStorage.getItem("produto"))
        const carrinhoAtualizado = [...this.state.carrinhoDeCompras, produtoAdicionado[0]]
        this.setState({carrinhoDeCompras: carrinhoAtualizado})
    }
     
    render(){
        const listaDeProdutos = this.state.carrinhoDeCompras
        .map((produto) => {
            return <li>{produto.name} - {produto.value}</li>
        })

        return(
            
            <section>
                <ul>
                    {listaDeProdutos}
                </ul>
                <h1>Carrinho</h1>
                <p>Total: <strong>R${this.props.total}</strong></p>
                <img src={AdicionaProduto} alt={'imagem'} width='50px'/>
                <button onClick={this.adicionaCarrinho}>teste </button>
            </section>)
    }
}