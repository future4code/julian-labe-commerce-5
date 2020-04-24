import React from 'react';
import { Produtos } from './Produtos'

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
            name: "Aerolitos XPTO",
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
            name: "Aerolitos XPTO",
            value: 2334.23,
            imageUrl: 'https://picsum.photos/200/200'
        }
    ],
        produtosNoCarrinho: []
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

    render () {

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
                    {listaDeProdutosExibidos}
                    {listaDeProdutos}
                </div>
    }
}