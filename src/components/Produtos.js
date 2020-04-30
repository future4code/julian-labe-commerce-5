import React from 'react';
import styled from 'styled-components';

const ContainerIndividual = styled.div`
border-radius: 10px 0px 10px 0px;
background-color: powderblue;
padding: 5px 10px;
`
export class Produtos extends React.Component {

    render () {

        return  <div>
                    <img src={this.props.imageUrl}/>
                    <h4>{this.props.name}</h4>
                    <h4>{this.props.value}</h4>
                    <button onClick={this.props.aoClicar}>add ao carrinho</button>
                </div>
    }
}
