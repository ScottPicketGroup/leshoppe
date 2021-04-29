import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

import { UnderlineLink } from "../../styled-components/GlobalStyles"
const Menu = () => {
  return (
    <>
      <PopOuBackground>
        <MenuContainer>
        <MenuHeader></MenuHeader> 
          <MenuLinksContainer>
             
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/">Contact</MenuLink>
            <MenuLink to="">-</MenuLink>
            <MenuLink href="http://www.chancerylane.com.au" target="blank">
              Visit Chancery Lane
            </MenuLink>
          </MenuLinksContainer>
        </MenuContainer>
      </PopOuBackground>
    </>
  )
}

export default Menu

export const PopOuBackground = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 60%);
  z-index: 100;
  display: none;
`
export const MenuContainer = styled.div`
  display: flex;
  height: auto;
  height: 100vh;
  width: 37rem;
  padding: 0 5.25rem;
  
 
  position: absolute;
  border: 1px solid black;
  top: 0;
  right: 0;
  z-index: 150;
  background: white;
  flex-direction: column;
`

export const MenuHeader = styled.div`
width: 100%;
height: 5rem;
background: blue;
`
export const MenuLinksContainer = styled.div`
  display: flex;
  
  flex-direction: column;
`

export const MenuLink = styled(Link)`
  padding: 1.75rem 0 0 0;
  text-decoration: none;
`
