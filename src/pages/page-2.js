import React, {useState, useEffect, useRef} from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
import SEO from "../components/seo"
import Landing from "../components/pages/landing/landing"
import GlobalStateProvider from "../components/context/GlobalStateProvider"

import SliderTest from '../components/pages/reusable/sliderTest'
import Carousel from "../components/pages/landing/sections/menu-board/slider/Carousel"
let images = [1, 2, 3 , 4, 5];
const SecondPage = (menuOpen,setMenuOpen) => {
 let slides = useRef(null)
  var stuff = ["b", "c"]
  const [position, setPosition] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesArr, setImagesArr] = useState(images)
  const [posZero, setPosZero] = useState(1);

  

  const right = () => {
    setPosition( pos => pos + 1)
    const nextCurrentSlide = currentSlide + 1
    setCurrentSlide(nextCurrentSlide)
    const [bottom, ...restImagesArr] = imagesArr;
    
    setImagesArr([bottom, ...restImagesArr, imagesArr[currentSlide]])

    const nextPosition = posZero < 6 ? posZero + 1 : 1
    setPosZero(nextPosition)

  
   

  }


  

return (

  
  <GlobalStateProvider>
  <Layout>
    <SEO title="Home" />

<Carousel />
  </Layout>
  </GlobalStateProvider>

)}

export default SecondPage


