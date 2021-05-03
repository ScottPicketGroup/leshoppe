import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import { color, font, padding } from "./variables"
import TTNormsProNormal from '../../fonts/font.woff'
import TTNormsProNormal2 from '../../fonts/font.woff2'
import landing from '../../images/logos/landing.png'
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
const {
  menuPadding
} = padding
export const GlobalStyle = createGlobalStyle`

* { 
    margin:0; 
    padding:0; 
    box-sizing:border-box;   
}
@font-face {
  font-family: 'ttNormsPro';
        src: local('TTNormsPro'), local('TTNormsPro'),
        url(${TTNormsProNormal2}) format('woff2'),
        url(${TTNormsProNormal}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

  body {
   font-family: ttNormsPro;
    background: ${cream};
    color: ${green}; 
    letter-spacing: 0.02rem;
    h1 {
        font-size: ${h1.fontSize};
        line-height: ${h1.lineHeight};
        letter-spacing: ${h1.letterSpacing};
        font-weight: ${h1.fontWeight}
    } 
    h2 {
      font-size: ${h2.fontSize};
        line-height: ${h2.lineHeight};
        letter-spacing: ${h2.letterSpacing};
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
    }
  }
`

export const PageBackground = styled.div`
position: fixed;
min-height: 100%;
width: 100vw;
opacity: ${props => props.fade > 20 ? "55%" : "100%"};
background-image: url(${landing});
background-repeat: no-repeat;
background-color: ${cream};
background-position: 40% 58%;
background-size: 30rem;
top: 0;
z-index: 1;
`
export const Page = styled.div`
width: 100%;
`

export const Section1 = styled.div`
min-height: 100%;
width: 99vw;
position: absolute;
padding: ${padding.page.vertical} ${padding.page.horizontal};
z-index: 2;
overflow-x: hidden;
background: transperant;
`
export const MenuButton = styled.button`
  border: none;
  font-size: ${menu.size};
  padding: ${padding.menuPadding.vertical} ${padding.menuPadding.horizontal} ;
  line-height: ${menu.lineHeight}  ;
  letter-spacing:  ${menu.letterSpacing};
  text-transform: ${menu.textTransformation};
  :hover {
         color: rgb(21,62,53, 75%);
        }
`

export const Button = styled.button`
        border: 1px solid ${green};
        border-radius: 1px;
        padding: ${padding.menuPadding.vertical} ${padding.menuPadding.horizontal} ;
        font-size: ${button.size} ;
        line-height: ${button.lineHeight};
        letter-spacing: ${button.letterSpacing};
        text-transform: ${button.textTransformation};
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
`
export const UnderlineLink = styled.a`
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: inline-block;
  transition: all .3s ease-in-out ;
  display:table;
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