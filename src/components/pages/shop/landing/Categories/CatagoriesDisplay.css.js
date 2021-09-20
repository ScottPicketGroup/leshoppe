import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { P } from "../../../../styled-components/GlobalStyles"

export const CatagoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 90vh;
  margin-top: 10rem;
`
export const CatagoryCardContainer = styled(Link)`
  width: 32%;
  height: 100%;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5.5rem;
  :hover {
    transition: transform 0.3s ease-in-out;
    transform: scale(1.02);
  }
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
    font-size: 0.75rem;
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 54px;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
  }
`

export const CatagoryLink = styled.button`
  width: 200px;
  padding: 12px;
  background: transparent;
  color: #153e35;
  border: 1px solid #153e35;
  transition: all .2s ease-in-out;
  ${CatagoryCardContainer}:hover & {
    background: #153e35;
    color: white;
  }
  @media screen and (max-width: 450px) {
    margin-bottom: 6rem;
  }
`
