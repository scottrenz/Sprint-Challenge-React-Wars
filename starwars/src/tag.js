import React from "react"
import {Nam,Bir,Ahref,Pro} from './cards'

const Tag = props => {
    return (  
(props.dat.substring(0,8) ===  'https://')
?
<Pro><Ahref href={props.dat} alt={'Star Wars Character'}>{props.dat}</Ahref></Pro>
:
(
(props.ix % 3 === 0)
?
<Nam>{props.dat}</Nam>
:
<Bir>{props.dat}</Bir>
))
}

export default Tag

