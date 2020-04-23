import React from 'react';

export class Produtos extends React.Component {
    state = {
        produtos: [{
            id: Date.now(),
            name: "Produto - Modelo",
            value: "R$ 0,01",
            imageUrl: 'https://picsum.photos/200/200'
        }],
    }

    popularProdutos = () => {
        let novaLista = this.state.produtos
        for(let i = 0; i < 7; i++) {
            const novoProduto = {
                id: Date.now(),
                name: `Produto - ${i+1}`,
                value: `R$ ${i + 10}`,
                imageUrl: `https://picsum.photos/200/200?id/${i}`
            }
            novaLista.push(novoProduto)
        }
    }

    render () {
        this.popularProdutos()
        const listaProdutos = this.state.produtos

        return  <div>
                    {listaProdutos.map((produto) => {
                        return  <div>
                                    <img src={produto.imageUrl} alt="imagem genérica" />
                                    <h4>{produto.name}</h4>
                                    <h4>{produto.value}</h4>
                                    <button>add ao carrinho</button>
                                </div>
                    })}
                </div>
    }
}
