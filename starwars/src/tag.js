import React from "react"
import {Nam,Bir,Ahref} from './cards'

const Tag = props => {
    return (  
(props.dat.substring(0,8) ===  'https://')
?
<Bir><Ahref href={props.dat} alt={'Star Wars Character'}>{props.dat}</Ahref></Bir>
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

