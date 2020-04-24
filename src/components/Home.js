import React from 'react';
import { Produtos } from './Produtos'

export class Home extends React.Component {
    state = {
        produtos: [],
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
        // const adicionaProduto = this.state.produtos.filter((produto) => {
            //     if(id === produto.id) {
                //         return true
                //     } else {
                    //         return false
                    //     }
                    // })
                    // localStorage.setItem("produto", JSON.stringify(adicionaProduto))
                }

    popularProdutos = () => {
        let novaLista = this.state.produtos
        for(let i = 0; this.state.produtos.length < 8; i++) {
            const novoProduto = {
                id: i+1,
                name: `Produto - ${i+1}`,
                value: `R$ ${i * 3}`,
                imageUrl: `https://picsum.photos/200/200?id/${i}`
            }
            novaLista.push(novoProduto)
            this.setState({produtos: novaLista})
        }
    }

// aoAdicionar={this.selecionaProduto}
                
    render () {

        const listaDeProdutos = this.state.produtosNoCarrinho
        .map((produto) => {
        return <li>[{produto.quantidade}]{produto.name} - {produto.value}</li>
        })

        this.popularProdutos();
        const listaDeProdutosExibidos = this.state.produtos
        .map((produto) => {
            return  <Produtos 
                        imageUrl={produto.imageUrl}
                        name={produto.name}
                        value={produto.value}
                    />
        })
        

        return   <div>
                    {listaDeProdutosExibidos}
                    {listaDeProdutos}
                </div>
    }
}