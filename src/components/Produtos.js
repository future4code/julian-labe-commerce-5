import React from 'react';
import styled from 'styled-components';

const GridProdutos = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 10px;
padding: 20px;
`
const ContainerIndividual = styled.div`
border-radius: 10px 0px 10px 0px;
background-color: powderblue;
padding: 5px 10px;
`
export class Produtos extends React.Component {
    state = {
        produtos: [{
            id: Date.now(),
            name: "Aerolitos do Chapolin",
            value: 120342.01,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: Date.now(),
            name: "Meteorito Lovebackin Sevendays",
            value: 10200.02,
            imageUrl: 'https://picsum.photos/200/200'
        },{
            id: Date.now(),
            name: "Meterorito de Grayskull",
            value: 22134.23,
            imageUrl: 'https://picsum.photos/200/200'
        },{
            id: Date.now(),
            name: "Aerolito Filosofal",
            value: 9234.23,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: Date.now(),
            name: "Aerolito Aerodactyl",
            value: 6534.23,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: Date.now(),
            name: "Meterorito Checkmate",
            value: 4534.65,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: Date.now(),
            name: "Aerolitos XPTO",
            value: 2334.23,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: Date.now(),
            name: "Aerolitos XPTO",
            value: 2334.23,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: Date.now(),
            name: "Aerolitos XPTO",
            value: 2334.23,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: Date.now(),
            name: "Aerolitos XPTO",
            value: 2334.23,
            imageUrl: 'https://picsum.photos/200/200'
        },
        {
            id: Date.now(),
            name: "Aerolitos XPTO",
            value: 2334.23,
            imageUrl: 'https://picsum.photos/200/200'
        }
    ],
    }

    // popularProdutos = () => {
    //     let novaLista = this.state.produtos
    //     for(let i = 0; i < 7; i++) {
    //         const novoProduto = {
    //             id: Date.now(),
    //             name: `Produto - ${i+1}`,
    //             value: `R$ ${i + 10}`,
    //             imageUrl: `https://picsum.photos/200/200?id/${i}`
    //         }
    //         novaLista.push(novoProduto)
    //     }
    // }

    render () {
        const listaProdutos = this.state.produtos

        return  <GridProdutos>
                    {listaProdutos.map((produto) => {
                        return  <div>
                                    <img src={produto.imageUrl} alt="imagem genérica" />
                                    <h4>{produto.name}</h4>
                                    <h4>{produto.value}</h4>
                                    <button>add ao carrinho</button>
                                </div>
                    })}
                </GridProdutos>
    }
}
