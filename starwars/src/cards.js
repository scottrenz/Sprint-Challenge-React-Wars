import React from "react"
import styled from 'styled-components'
import Tag from "./tag";

export const Ahref = styled.a`

  justifyContent: center;
`;

  export const Nam = styled.div`
  font-family: 'Indie Flower', cursive;
  border-left: 5px solid brown;
  border-right: 5px solid brown;
  border-top: 5px solid brown;
 min-width: 200px;  
  justifyContent: center;
    margin-left: 40%;
    margin-right: 40%;
    `;
  
    export const Bir = styled.div`
    font-family: 'Indie Flower', cursive;
    border-left: 5px solid brown;
    border-right: 5px solid brown;
    min-width: 200px;  
    justifyContent: center;
    margin-left: 40%;
    margin-right: 40%;
      `;
    
    export const Style = styled.div`

display: flex;
marginTop: 10px;

`;

export const H1Style = styled.h1`
font-family: 'Roboto', sans-serif;
border-top: 2.5px solid black;
border-bottom: 2.5px solid black;
border-left: 5px solid black;
border-right: 5px solid black;
min-width: 200px;  
justifyContent: center;
margin: 20px;
margin-left: 40%;
margin-right: 40%;

`;

export const H2Style = styled.h2`
font-family: 'Bangers', cursive;
min-width: 200px;  
justifyContent: center;
margin: 20px;
margin-left: 40%;
margin-right: 40%;

`;

export default props => {
return (
props.data.map((nam,ix) => <Tag ix={ix} dat={nam}></Tag>)    
)  
}
