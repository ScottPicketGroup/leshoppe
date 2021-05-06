import React, {useRef, useEffect} from 'react'
import { gsap, Power0 } from "gsap"
import styled from 'styled-components'
const DropdownArrow = ({open}) => {



  let arrow = useRef(null)
    return (
      <div ref={el => (arrow = el)}>
        <SVG xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 28.871 15.849" open={open}>
        <path id="Path_11619" data-name="Path 11619" d="M13.728,0,0,13.729,13.728,27.457" transform="translate(0.707 14.435) rotate(-90)" fill="none" stroke="#153e35" stroke-width="2"/>
      </SVG>
      </div>
    )
}

export default DropdownArrow

export const SVG = styled.svg`
height: 1.7rem;
width: 0.85rem;
transition: transform .2s ease;
transform: ${props => props.open ? "rotate(180deg)" : null};
`