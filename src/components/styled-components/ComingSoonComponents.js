import styled from "styled-components"

export const LandingPageContainer = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    align-items: start;
  }
`

export const LandingContentContainer = styled.div`
  width: 1200px;
  
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    width: 800px;
  }
  @media screen and (max-width: 600px) {
    width: 340px;
  }
`
export const LogoContainer = styled.div`
  width: 30.5rem;
  padding: 0.5rem 3.5rem 0 3.5rem;
  
  
  @media screen and (max-width: 1200px) {
    margin-top: 17rem;
    display: flex;
    justify-content: center;
    padding: 0;
  }
  @media screen and (max-width: 600px) {
    margin-top: 3.37rem;
  
    
  }
`
export const TextContainer = styled.div`
  width: 30rem;
  
  h1 {
      margin-bottom: 36px;
  }
  p {
      margin: 2.25;
  }
  @media screen and (max-width: 1200px) {
    margin-top: 3.37rem;
  }
  @media screen and (max-width: 600px) {
    margin-top: 3.37rem;
    h1 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    p {
       
        font-size: 1rem;
    }
}
`

export const Footer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 3.37rem 2rem 0 0;
`
export const ChanceryLink = styled.a`
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: all .3s ease-in-out ;
  :hover {
    font-size: 130%;
  }
::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #000;
  visibility: hidden;
  transform: translateX(-100px);
  transition: all 0.3s ease-in-out 0s;
}
:hover::before {
  visibility: visible;
  transform: translateX(0);
}
`

export const Socials = styled.div`
height: 42px;
display: flex;

`
