import styled from "styled-components"

export const LandingPageContainer = styled.div`
  height: 100%;
  margin-top: 10.5rem;
  width: 99vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  position: relative;

  @media screen and (max-width: 799px) {
    margin-top: 6.8rem;
    align-items: flex-start;
    height: 100vh;
  }
   
`

export const LandingContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    width: 800px;
    padding: 0 1.125rem;
  }
  @media screen and (max-width: 600px) {
    width: 340px;
  }
`
export const LogoContainer = styled.div`
  /* padding: 0.5rem 3.5rem 0 3.5rem; */
  margin-right: 9rem;

  @media screen and (max-width: 1200px) {
    display: flex;
 
   
    padding: 0;
  }
  @media screen and (max-width: 600px) {
    margin-top: 0;
    margin-right: 0;

  }
`
export const TextContainer = styled.div`
  width: 30rem;

  h1 {
    margin-bottom: 36px;
  }
 
  @media screen and (max-width: 1200px) {
    margin-top: 3.37rem;
  }
  @media screen and (max-width: 600px) {
    margin-top: 3.37rem;
    h1 {
      margin-bottom: 2rem;
      font-size: 2rem;
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
  @media screen and (max-width: 450px) {
  align-items: flex-end;
}
`
export const ChanceryLink = styled.a`
  text-decoration: none;
  
  :hover {
    opacity: 75%;
  }
  @media screen and (max-width: 450px) {
  font-size: .75rem;
  text-transform: uppercase;
}
`

export const Socials = styled.div`
  height: 42px;
  display: flex;
  margin-top: -0.5rem;
  @media screen and (max-width: 450px) {
    margin-top: -1rem;
  margin-right: -1rem;
  text-transform: uppercase;
}
`
