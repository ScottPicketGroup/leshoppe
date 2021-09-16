import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import { color, font, padding } from "./variables"
import TTNormsProRegular from "../../fonts/font.woff"
import TTNormsProRegular2 from "../../fonts/font.woff2"
import TTNormsProNormal from "../../fonts/normalFont.woff"
import TTNormsProNormal2 from "../../fonts/normalFont.woff2"
import TTNormsProThin from "../../fonts/thinFont.woff"
import TTNormsProThin2 from "../../fonts/thinFont.woff2"
import TTNormsProMedium from "../../fonts/mediumFont.woff"
import TTNormsProMedium2 from "../../fonts/mediumFont.woff2"
import landing from "../../images/logos/landing.png"
const { cream, green, error } = color
const {
  h1,
  h2,
  h3,
  bc1,
  bc2,
  bc3,
  pullQuotes,
  formLabels,
  formFieldDesc,
  button,
  menu,
} = font
const { menuPadding } = padding
export const GlobalStyle = createGlobalStyle`

* { 
    margin:0; 
    padding:0; 
    box-sizing:border-box;   
    
}
@font-face {
  font-family: 'ttNormsProRegular';
        src: local('TTNormsPro'), local('TTNormsPro'),
        url(${TTNormsProRegular2}) format('woff2'),
        url(${TTNormsProRegular}) format('woff');
      
    }
    @font-face{
    font-family: 'ttNormsProNormal';
        src: local('TTNormsProNormal'), local('TTNormsProNormal'),
        url(${TTNormsProNormal2}) format('woff2'),
        url(${TTNormsProNormal}) format('woff');
      
    }
    @font-face {
        font-family: 'ttNormsProThin';
        src: local('TTNormsProThin'), local('TTNormsProThin'),
        url(${TTNormsProThin2}) format('woff2'),
        url(${TTNormsProThin}) format('woff');
    }
    @font-face {
        font-family: 'ttNormsProMedium';
        src: local('TTNormsProMedium'), local('TTNormsProMedium'),
        url(${TTNormsProMedium2}) format('woff2'),
        url(${TTNormsProMedium}) format('woff');
    }


  body {
   font-family: ttNormsProNormal;
    background: ${cream};
    color: ${green}; 
    letter-spacing: 0.02rem;
    h1 {
      margin-top: ${props => props.marginTop ? props.marginTop : ''};
        font-size: ${h1.fontSize};
        line-height: ${h1.lineHeight};
        letter-spacing: ${h1.letterSpacing};
        font-weight: ${h1.fontWeight};
        @media screen and (max-width: 450px) {
          font-size: 1.25rem !important;
} 
    } 
    h2 {
      font-size: ${h2.fontSize};
        line-height: ${h2.lineHeight};
        letter-spacing: ${h2.letterSpacing};
        @media screen and (max-width: 450px) {
          font-size: 1rem;
}
    }
    h3 {
      font-size: ${h3.fontSize};
        line-height: ${h3.lineHeight};
        letter-spacing: ${h3.letterSpacing};
        text-transform: ${h3.textTransformation};
    }
    
    a {
        font-size: 1.25rem;
        font-weight: regular;
        color: #153E35;
        text-decoration: none;
    }
    @media screen and (max-width: 450px) {
          h1 {
            font-size: 1.5rem;
          } 
          h2 a {
            font-size: .75rem !important;
          }
          p {
            font-size: 1rem !important;
          }
    
  }
  }
`
export const ComingSoonMenu = styled.h1`
  font-size: 1.25rem;
`
export const PageBackground = styled.div`
  display: ${props => (props.display === true ? "flex" : "none")};
  position: fixed;
  min-height: 100%;
  width: 62%;
  margin-right: ${props => `${props.height + 56}px`};
  opacity: ${props => (props.fade > 20 ? "55%" : "100%")};
  background-image: url(${landing});
  background-repeat: no-repeat;
  background-color: ${cream};
  background-position: 96% 23.5vw;
  background-size: 30%;
  top: 0;
  z-index: 100;
  @media screen and (min-width: 900px) and (max-width: 1440px) {
    background-position: 96% 23.5vh;
  }
  @media screen and (max-width: 450px) {
    display: none;
  }
`
export const Page = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`
export const Section1 = styled.div`
  width: 99vw;
  position: relative;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: ${padding.page.vertical} ${padding.page.horizontal} 0
    ${padding.page.horizontal};
  z-index: 2;
  overflow-x: hidden;
  background: transperant;
  @media screen and (max-width: 450px) {
  
    padding: 0 1.15rem;
  }
`
export const Section2 = styled.div`
  width: 99vw;
  position: relative;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 7.25rem ${padding.page.horizontal} 0
    ${padding.page.horizontal};
  z-index: 2;
  overflow-x: hidden;
  background: transperant;
  @media screen and (max-width: 450px) {
  
    padding: 0 1.15rem;
  }
`
export const MenuButton = styled.button`
  border: none;
  font-size: ${menu.size};
  padding: ${padding.menuPadding.vertical} ${padding.menuPadding.horizontal};
  line-height: ${menu.lineHeight};
  letter-spacing: ${menu.letterSpacing};
  text-transform: ${menu.textTransformation};
  :hover {
    color: rgb(21, 62, 53, 75%);
  }
`

export const Button = styled.button`
  border: 1px solid ${green};
  border-radius: 1px;
  padding: ${padding.menuPadding.vertical} ${padding.menuPadding.horizontal};
  font-size: ${button.size};
  line-height: ${button.lineHeight};
  letter-spacing: ${button.letterSpacing};
  text-transform: ${button.textTransformation};
  font-family: ttNormsProNormal;
  :hover {
    color: ${cream};
    background-color: ${green};
  }
`
export const P = styled.p`
  color: ${props =>
    props.error
      ? `${error}`
      : props.light
      ? `${cream}`
      : props.dark
      ? `${green}`
      : null};
  font-size: ${props =>
    props.bc1
      ? `${bc1.size}`
      : props.bc2
      ? `${bc2.size}`
      : props.bc3
      ? `${bc3.size}`
      : props.menu
      ? ``
      : null};
  line-height: ${props =>
    props.bc1
      ? `${bc1.lineHeight}`
      : props.bc2
      ? `${bc2.lineHeight}`
      : props.bc3
      ? `${bc3.lineHeight}`
      : null};
  padding-top: ${props => props.padding};
  opacity: ${props => (props.fFD ? `${formFieldDesc.opacity}` : "1")};
`
export const UnderlineLink = styled.a`
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  display: table;
  :hover {
    font-size: 130%;
  }
  /* ::before {
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
  transform: translateX(-100px);
} */
`

export const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;

  align-items: center;
  padding: 3.37rem 0rem 0 0;
  @media screen and (max-width: 450px) {
    align-items: flex-end;
  }
`
