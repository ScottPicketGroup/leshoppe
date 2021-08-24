import React, {useEffect} from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import {P} from '../../../../../styled-components/GlobalStyles'
import BeverageSlider from './BevRecommendations'
const RecommendationsModal = ({product}) => {
    const [bevRecommendations, setBevRecommendations] = React.useState([])
    const [foodRecommendations, setFoodRecommendations] = React.useState([])
    const data = useStaticQuery(graphql`
    query reco {
      allShopifyProduct {
        edges {
          node {
            handle
            description
            availableForSale
            tags
            productType
            title
            variants {
              priceV2 {
                amount
                currencyCode
              }
              title
            }
            images {
              localFile {
                id
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
            }
          }
        }
      }
    }
    
   `)
  
  useEffect(() => {
    const bevRecommendationsList = []
    const foodRecommendationsList = []
    data.allShopifyProduct.edges.map((recommendation, i )=> {
     
      if (recommendation.node.productType === "Wine" || recommendation.node.productType === "Beer" || recommendation.node.productType === "Soda" ) bevRecommendationsList.push(recommendation)
      else if (recommendation.node.productType === "Catering" || recommendation.node.productType === "cheese-platter" || recommendation.node.productType === "Soda" ) foodRecommendationsList.push(recommendation)
      setBevRecommendations(bevRecommendationsList)
      setFoodRecommendations(foodRecommendationsList)
    })
  }, [product, data])
console.log(bevRecommendations, foodRecommendations)
    return (
        <ModdalContainer>
           <ModalWrapper>
               <P bc1>Make it a party</P>
               <SectionWrapper>
                   <BeverageSlider products={bevRecommendations} />
               </SectionWrapper>
               <SectionWrapper>
                   1 2 3 4
               </SectionWrapper>
           </ModalWrapper>
        </ModdalContainer>
    )
}

export default RecommendationsModal

export const ModdalContainer = styled.div`
height: 100vh;
width: 100vw;
background: white;
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
`

export const ModalWrapper = styled.div`
height: 90%;
width: 90%;

margin-top: 4rem;
padding: 10vh 0;


`

export const SectionWrapper = styled.div`
height: 50%;
width: 100%;
padding 0 2rem; 

:first-child{
    margin-bottom: 1rem;
}
`