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
            name: "Produto - Modelo",
            value: "R$ 0,01",
            imageUrl: 'https://picsum.photos/200/200'
        }],
    }

    selecionaProduto = (id) => {
        const adicionaProduto = this.state.produtos.filter((produto) => {
            if(id === produto.id) {
                return true
            } else {
                return false
            }
        })
        localStorage.setItem("produto", JSON.stringify(adicionaProduto))
    }

    popularProdutos = () => {
        let novaLista = this.state.produtos
        for(let i = 0; this.state.produtos.length < 8; i++) {
            const novoProduto = {
                id: i,
                name: `Produto - ${i+1}`,
                value: `R$ ${i * 3}`,
                imageUrl: `https://picsum.photos/200/200?id/${i}`
            }
            novaLista.push(novoProduto)
        }
    }

    render () {
        this.popularProdutos()
        const listaProdutos = this.state.produtos

        return  <GridProdutos>
                    {listaProdutos.map((produto) => {
                        return  <div>
                                    <img src={produto.imageUrl} alt="imagem genérica" />
                                    <h4>{produto.name}</h4>
                                    <h4>{produto.value}</h4>
                                    <button onClick={() => this.selecionaProduto(produto.id)}>adicionar ao carrinho</button>
                                </div>
                    })}
                </GridProdutos>
    }
}
