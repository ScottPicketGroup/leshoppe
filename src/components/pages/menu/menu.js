  import React from "react"
  import styled from "styled-components"

  import { Link } from "gatsby"

  import { P, UnderlineLink } from "../../styled-components/GlobalStyles"

  import leShoppe from '../../../images/logos/leshoppe.svg'
  import meat from '../../../images/placeholders/homeLandscapeMeat.jpg'
import { Socials } from "../../styled-components/ComingSoonComponents"
import Facebook from "../coming-soon/Facebook"
import Instagram from "../coming-soon/Instagram"
  const Menu = ({menuOpen, setMenuOpen}) => {
    console.log(`menuOpen`, menuOpen)
    return (
      <>
        <PopOuBackground display={menuOpen}>
          <MenuContainer display={menuOpen}>
          <MenuHeader>
            <LogoBox><img src={leShoppe} alt="leshoppe logo" /></LogoBox>
            
            <P bc2 onClick={() => setMenuOpen(false)}>X CLOSE</P>
          </MenuHeader> 
            <MenuLinksContainer>
              
              <MenuLink to="/page-2" onClick={() => setMenuOpen(false)}>Home</MenuLink>
              <MenuLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</MenuLink>
              <MenuLink to="">-</MenuLink>
              <MenuLink href="http://www.chancerylane.com.au" target="blank">
                Visit Chancery Lane
              </MenuLink>

              <ImgBox> 
              <img src={meat} alt="meat picture" width="100%"/>
              </ImgBox>
              <Socials>
                <Facebook/>
                <Instagram/>
              </Socials>
            </MenuLinksContainer>
          </MenuContainer>
        </PopOuBackground>
      </>
    )
  }

  export default Menu

  export const PopOuBackground = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 60%);
    z-index: 100;
    transition: transform .4s ease-out;
    transform: ${props => props.display ? "translateX(0vh)" : "translateX(100vw)" };

  `
  export const MenuContainer = styled.div`
    display: flex;
    height: auto;
    height: 100vh;
    width: 37rem;
    padding: 2rem 5.25rem;
    position: absolute;
    right: ${props => props.display ? "0vw" : "-50vw" };
    z-index: 150;
    background: white;
    flex-direction: column;
    transition: right .275s ease-out;
    transition-delay:  .35s;
    background: #FDF9EE;

  `

  export const MenuHeader = styled.div`
  width: 70%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `
  export const MenuLinksContainer = styled.div`
    display: flex;
    
    flex-direction: column;
  `

  export const MenuLink = styled(Link)`
    padding: 1.75rem 0 0 0;
    text-decoration: none;
  `
export const LogoBox = styled.div`

width: 30%;
`

export const ImgBox = styled.div`
width: 70%;
margin-top: 2rem;
margin-bottom: 2rem;
`