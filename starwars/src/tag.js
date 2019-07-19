import React from "react"
import {Expl,Ahref} from './cards'

const Tag = props => {
    return (  
(props.dat.substring(0,8) ===  'https://')
?
<Ahref href={props.dat} alt={'Star Wars Character'}>{props.dat}</Ahref>
:
<Expl>{props.dat}</Expl>)
}

export default Tag

