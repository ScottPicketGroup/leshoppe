import React from 'react'
import styled from 'styled-components'

import { graphql } from "gatsby"

const MenuBoard = ({data}) => {
    console.log(data)
    return (
        <MenuBoardPageContainer>
            <h1>Menu Board</h1>
            
           
            <MenuImageSliderContainer/>
         
        </MenuBoardPageContainer>
    )
}

export default MenuBoard

// export const one = graphql`
//   query MyQuery {
//     allContentfulSlider {
//       edges {
//         node {
//           id
//           mediaMany {
//             fluid {
//               ...GatsbyContentfulFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const MenuBoardPageContainer = styled.div`
h1 {
    margin-bottom: 2.25rem;
}
margin-bottom: 13.5rem;
`

export const MenuImageSliderContainer = styled.div`
width: 96vw;
height: 42.12rem;
padding: 0;
background: palegreen;

`