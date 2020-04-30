import React from "react";
import styled from 'styled-components';

const MenuFiltro = styled.form`
display: flex;
flex-direction: column;
`
const InputEstilizado  = styled.input`
border: none;
border-bottom: 1px solid black;
padding: 7px 5px;
outline: none;
max-width: 50%;
`
const LabelEstilizada  = styled.label`
margin-top: 10px;
`

export default class Filtro extends React.Component {
  render() {
    return (
      <MenuFiltro>
        <h1>Filtros:</h1>
        <LabelEstilizada>Valor mínimo:</LabelEstilizada>
        <InputEstilizado />
        <LabelEstilizada>Valor máximo:</LabelEstilizada>
        <InputEstilizado />
        <LabelEstilizada>Buscar produto:</LabelEstilizada>
        <InputEstilizado />
      </MenuFiltro>
    );
  }
}
