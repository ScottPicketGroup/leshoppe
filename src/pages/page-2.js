import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
import SEO from "../components/seo"
import Landing from "../components/pages/landing/landing"
import GlobalStateProvider from "../components/context/GlobalStateProvider"
let images = [1,2,3,4,5];
const SecondPage = (menuOpen,setMenuOpen) => {
 
  var stuff = ["b", "c"]
  const [position, setPosition] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesArr, setImagesArr] = useState(images)


  const right = () => {
    setPosition( pos => pos + 1)
    const nextCurrentSlide = currentSlide + 1
    setCurrentSlide(nextCurrentSlide)
    const [bottom, ...restImagesArr] = imagesArr;
    setImagesArr([bottom, ...restImagesArr, imagesArr[currentSlide]])
    
    
   
  
  }
console.log(`images`, imagesArr)
return (
  <>
  
  <GlobalStateProvider>
  <Layout>
    <SEO title="Home" />

<Wrapper>
  {imagesArr.map((image, i) => (
    <Image ImgId={i} position={position} zIndex={i + 5} currentImage={images[currentSlide]} image={image}>
      ImageNum: {image} <br />
      position: {position}
    </Image>
  ))}
</Wrapper>
<h1>{currentSlide}</h1>
<button onClick={() => right(imagesArr[0])}>right</button>
<button onClick={() => setPosition(pos => pos - 1)}>left</button>
  </Layout>
  </GlobalStateProvider>
  </>
)}

export default SecondPage


export const Wrapper = styled.div`
height: 300px;
width: 100%;
background: green;
display: flex;
flex-direction: row;
margin-top: 6rem;
overflow: hidden;
`

export const Image = styled.div`
height: 200px;
width: 200px;
background: palegoldenrod;
margin-right: 10px;
color: black;
z-index: ${props => props.zIndex};
position: relative;
transition: ${({ currentImage, image }) => currentImage  === image ? `none` : `transform 1s ease`};
transform: ${({ currentImage, image, position }) => image  > position  ? `translateX(-${position * 210}px)` : ``} 
`
