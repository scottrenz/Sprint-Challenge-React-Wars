import React from "react"
import styled from 'styled-components'
// import App from "./App";
import Tag from "./tag";

  

// import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";
// import "semantic-ui/dist/semantic.min.css";


// const Div = styled.div`

//   display: block;
//   margin: 100px;
//   flexDiretion: column;
//   justifyContent: space-around;
// `;

// const Img = styled.img`

//   display: flex;
//   width: 50%;
// `;

// const Date = styled.div`

//   display: flex;
//   width: 10%;
// `;

export const Expl = styled.div`

  margin: 10px;
  display: block;
  width: 50%;
`;

export const Style = styled.div`

display: flex;
marginTop: 10px;

`;

export const H1Style = styled.h1`

justifyContent: center;
margin: 100px;

`;
// const Form = styled.form;

export default props => {
// console.log(props)
// let x;
// let tags = [];
// function getTags(val,ix,arr) {
// x = (ix % 3 === 2) ? '<img src="' + props.data[ix] + '" />' : '<div>' + props.data[ix] + '</div>'
// return x
// }

// for (let i=0;i<props.data.length;i++)
// tags.push((i % 3 === 2) ? '<img src="' + props.data[i] + '" />' : '<div>' + props.data[i] + '</div>' ) 
// let name = props.imgData[0]
//   let cHtml= (<Img alt='photo' src={props.src} />);
// return  <div>testing 1 2 3 </div>
return (
props.data.map(nam => <Tag dat={nam}></Tag>)    
    // tags.map( function getTags(val,ix,arr) {
    //     return  x })
// <div>{props.name}</div>
/* <Div >
 <Date >Star War Character born{props.date} </Date>
    {cHtml}
    <Expl className='display'>{props.expl}</Expl>

</Div> */
)  
}
