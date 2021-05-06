import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import { P } from '../../../../../../styled-components/GlobalStyles'
import { TweenLite, Power3, gsap } from "gsap"
gsap.registerPlugin()

const Title = ({imgTitle}) => {
let title = useRef(null)
    useEffect(() => {
      console.log('poo')
        gsap.fromTo(title, 1, {
         opacity: 0
       },
       {
           opacity: 1,
           delay: 1
       })
    }, [])
    return (
       <TitleEl 
       ref={el => (title = el)}
       >{imgTitle}</TitleEl>
    )
}

export default Title


export const TitleEl = styled(P)`


`