import React from "react"
import styled from 'styled-components'
import Tag from "./tag";

export const Ahref = styled.a`

  margin-bottom: 20px;
  display: block;
  width: 100%;
`;

export const Expl = styled.div`
font-family: 'Indie Flower', cursive;

  margin: 1px;
  display: block;
  width: 100%;
`;

export const Style = styled.div`

display: flex;
marginTop: 10px;

`;

export const H1Style = styled.h1`
font-family: 'Roboto', sans-serif;

justifyContent: center;
margin: 2x  0px;

`;

export const H2Style = styled.h2`
font-family: 'Bangers', cursive;
x
justifyContent: center;
margin: 10px;

`;

export default props => {
return (
props.data.map(nam => <Tag dat={nam}></Tag>)    
)  
}
