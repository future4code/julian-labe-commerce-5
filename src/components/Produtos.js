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

    render () {

        return  <GridProdutos>
                    <div>
                        <img src={this.props.imageUrl}/>
                        <h4>{this.props.name}</h4>
                        <h4>{this.props.value}</h4>
                        <button onClick={this.props.aoClicar}>add ao carrinho</button>
                    </div> 
                </GridProdutos>
    }
}
