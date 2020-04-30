import React from 'react';
import { Produtos } from './Produtos'




import Carrinho from './Carrinho.component';
import Filtro from './Filtro.component';

import BotaoCarrinho from '../icones/add_shopping_cart-black-18dp.svg'






import styled from 'styled-components';

const GridProdutos = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 10px;
padding: 20px;
`

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

export class Home extends React.Component {
    state = {
        produtos: [{
            id: 1,
            name: "Aerolitos do Chapolin",
            value: 120342.01,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: 2,
            name: "Meteorito Lovebackin Sevendays",
            value: 10200.02,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: 3,
            name: "Meterorito de Grayskull",
            value: 22134.23,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: 4,
            name: "Aerolito Filosofal",
            value: 9234.23,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: 5,
            name: "Aerolito Aerodactyl",
            value: 6534.23,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: 6,
            name: "Meterorito Checkmate",
            value: 4534.65,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: 7,
            name: "Aerolitos Kabuto",
            value: 2334.23,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: 8,
            name: "Aerolitos XPTO",
            value: 2334.23,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: 9,
            name: "Aerolitos XPTO",
            value: 2334.23,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: 10,
            name: "Aerolitos XPTO",
            value: 2334.23,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: 11,
            name: "Pedra da lua",
            value: 2334.23,
            imageUrl: 'https://picsum.photos/200/200'
        }
    ],
        produtosNoCarrinho: [],
        exibirCarrinho: false
    }

    selecionaProduto = (id, name, value, imageUrl) => {
        const produtoAdicionado = {
                id: id,
                name: name,
                value: value,
                quantidade: 1,
                imageUrl: imageUrl
            }
        const novoProdutoNocarrinho = [produtoAdicionado,...this.state.produtosNoCarrinho]
        this.setState({produtosNoCarrinho: novoProdutoNocarrinho})
    }

/**
     popularProdutos = () => {
         let novaLista = this.state.produtos
        for(let i = 0; this.state.produtos.length < 8; i++) {
            const novoProduto = {
                id: i+1,
                name: `Aerolitos XPTO${i+1}`,
                value: `${i + 2335.50}`,
                imageUrl: `https://picsum.photos/200/200?id/${i}`
            }
            novaLista.push(novoProduto)
            this.setState({produtos: novaLista})
        }
    }
 */

    mostrarCarrinho = (e) =>{
        e.preventDefault();
        this.setState({exibirCarrinho: !this.state.exibirCarrinho});
    }

    render () {

        let cart;
        if(this.state.exibirCarrinho){
        cart = <Carrinho/>;
        }else{
        cart = <PlaceHolder/>
        }

        const listaDeProdutos = this.state.produtosNoCarrinho
        .map((produto) => {
        return <li>[{produto.quantidade}]{produto.name} - {produto.value}</li>
        })

//      this.popularProdutos();
        const listaDeProdutosExibidos = this.state.produtos
        .map((produto) => {
            return  <Produtos   
                        aoClicar={() => this.selecionaProduto(produto.id, produto.name, produto.value, produto.imageUrl)}
                        imageUrl={produto.imageUrl}
                        name={produto.name}
                        value={produto.value}
                    />
        })

        return  <div>                    
                    <MainContainer carrinhoAberto={this.state.exibirCarrinho}>
                        <Filtro />
                        <GridProdutos>
                            {listaDeProdutosExibidos}
                        </GridProdutos>
                        <div>
                            <h1>Carrinho</h1>
                            <lu>{listaDeProdutos}</lu>
                            {cart}
                        </div>
                        
                        <BCarrinhoEstilizado onMouseDown={this.mostrarCarrinho}><IconeAtivaCarrinho src={BotaoCarrinho} /></BCarrinhoEstilizado>
                    </MainContainer>
                </div>
    }
}