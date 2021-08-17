import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {P} from "../../../../styled-components/GlobalStyles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const CatagoriesDisplay = ({catagories, setCatagory, setMenuLabel, catagory}) => {

console.log(catagory)
    return (
        <CatagoryWrapper>
      {  catagories && catagories.map(catagory => (
      <>
         {catagory.image ? (
         <CatagoryCardContainer 
         onClick={() => setCatagory(catagory.title)}
         ><CatagoryLink >
             <GatsbyImage image={getImage(catagory.image.localFile.childImageSharp)}  /> 
           
             <P bc1>View all {catagory.handle}{catagory.handle.slice(-1) !== "s" ? (<span>s</span>) : null}</P>
             <P bc1>{catagory.description}</P>
             </CatagoryLink>
         </CatagoryCardContainer> ) : null}
      </>
      ))}
     
    
    
    </CatagoryWrapper>
    )
}

export default CatagoriesDisplay

export const CatagoryWrapper = styled.div`
display:flex;
flex-wrap: wrap;
`

export const CatagoryCardContainer = styled.div`
  width: 32%;
  height: 100%;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 13.5rem;
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 0;
}
`
export const CatagoryImage = styled(GatsbyImage)`
  margin-bottom: 1.75rem;
`
export const CatagoryCatagory = styled(P)`
  margin-bottom: 1.75rem;
  font-size: 1.25rem;
  @media screen and (max-width: 450px) {
    font-size: .75rem;
    margin-bottom: 1rem;
}
`
export const CatagoryTitle = styled(P)`
font-size: 1.25rem;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    margin-bottom: 1rem;
}
`
export const CatagoryPrice = styled(P)`
  margin-bottom: 1.75rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
}
`
export const CatagoryDescription = styled(P)`
  margin-bottom: 2.25rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
}
`

export const CatagoryLink = styled(Link)`
  :hover {
    opacity: 75%;
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 6rem;
}
`
