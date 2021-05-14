  import React from "react"
  import styled from "styled-components"

  import { Link } from "gatsby"

  import { P, UnderlineLink } from "../../styled-components/GlobalStyles"

  import leShoppe from '../../../images/logos/leshoppe.svg'
  import meat from '../../../images/placeholders/homeLandscapeMeat.jpg'
import { Socials } from "../../styled-components/ComingSoonComponents"
import Facebook from "../coming-soon/Facebook"
import Instagram from "../coming-soon/Instagram"
import LeShoppeLogo from "./leShopeLogo"
  const Menu = ({menuOpen, setMenuOpen}) => {
  
    return (
      <>
        <PopOuBackground display={menuOpen}>
          <MenuContainer display={menuOpen}>
          <MenuHeader>
            <LogoBox><LeShoppeLogo/></LogoBox>
            
            <P bc2 onClick={() => setMenuOpen(false)}>X CLOSE</P>
          </MenuHeader> 
            <MenuLinksContainer>
              
              <MenuLink to="/page-2" onClick={() => setMenuOpen(false)}>Home</MenuLink>
              <MenuLink to="/shop" onClick={() => setMenuOpen(false)}>Shop</MenuLink>
              <MenuLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</MenuLink>
              <MenuLink to="">-</MenuLink>
              <MenuLink href="http://www.chancerylane.com.au" target="blank">
                Visit Chancery Lane
              </MenuLink>

              <ImgBox> 
              <img src={meat} alt="meat picture" width="100%"/>
              </ImgBox>
              <Socials style={{marginBottom: `56px`}}>
                <Facebook menu/>
                <Instagram menu/>
              </Socials >
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
    z-index: 400;
    transition: transform .4s ease-out;
    transform: ${props => props.display ? "translateX(0vh)" : "translateX(100vw)" };
    @media screen and (max-width: 450px) {
      width: 100vw;
      padding: 0;
      background: transparent;
}
  `
  export const MenuContainer = styled.div`
    
        height: 100vh;
    width: 29%;
    display: flex;
    align-items: center;
    position: absolute;
    right: ${props => props.display ? "0vw" : "-58vw" };
    z-index: 150;
    background: #153E35;
    flex-direction: column;
    transition: right .275s ease-out;
    transition-delay:  .35s;
    background: #FDF9EE;
    @media screen and (max-width: 450px) {
      width: 100vw;
      padding: 0 1rem;
      background: #153E35;
      align-content: space-between !important;
}
  `

  export const MenuHeader = styled.div`
  width: 75%;
  margin-top: 2.25rem;
   
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  @media screen and (max-width: 450px) {
    padding: 0 1rem;
    width: 100%;
   p{ color: #FDF9EE !important;}
 
}
  `
  export const MenuLinksContainer = styled.div`
    display: flex;
    height: 100%;
    width: 75%;
    flex-direction: column;
    justify-content: flex-end;
    @media screen and (max-width: 450px) {
      width: 100%;
      padding: 0 1rem;
      
}
  `

  export const MenuLink = styled(Link)`
    margin-bottom: 1.75rem;
    text-decoration: none;
    @media screen and (max-width: 450px) {
      color: #FDF9EE !important;
}
  `
export const LogoBox = styled.div`
height: 100%;
display: flex;
align-items: center;
width: 30%;
`

export const ImgBox = styled.div`
width: 100%;
margin-top: 2rem;
margin-bottom: 2rem;
display:flex;
@media screen and (max-width: 450px) {
height: 6rem;
img {
  display: none;
}
}

`