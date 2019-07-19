import React from "react"
import {Expl,Ahref} from './cards'

const Tag = props => {
    return (  
!(props.dat < 'httpx' && props.dat > 'https')
?
<Expl>{props.dat}</Expl>
:
<Ahref href={props.dat} alt={'Star Wars Character'}>{props.dat}</Ahref>

         )

}

export default Tag

