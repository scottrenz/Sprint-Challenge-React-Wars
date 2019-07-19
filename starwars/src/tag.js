import React from "react"
// import styled from 'styled-components'
import {Expl,Ahref} from './cards'
// const Img = styled.img`

//   display: flex;
//   width: 50%;
// `;

const Tag = props => {
    // console.log('tag props',props)
    return (  
!(props.dat < 'httpx' && props.dat > 'https')
?
<Expl>{props.dat}</Expl>
:
<Ahref href={props.dat} alt={'Star Wars Character'}>{props.dat}</Ahref>

         )
        //   <button
//     style={{ gridArea: cn(props.number) }}
//     onClick={() => props.setDisplay(
//       props.display === 0 ?
//         props.number
//         :
//         `${props.display}${props.number}`
//     )}>{props.number}</button>
}

export default Tag

