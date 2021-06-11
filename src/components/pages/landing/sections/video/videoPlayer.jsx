
import React, {useState, useRef, useEffect} from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import {gsap, TweenLite} from 'gsap'
import {P} from '../../../../styled-components/GlobalStyles'
import logo from '../../../../../images/logos/leshoppe.svg'
import video from '../../../../../images/introVideo.mp4'
const VideoPlayer = ({url}) => {
  const [sound, setSound] = React.useState(true)
  const [opacity, setOpacity] = React.useState(`100%`)
  const [playing, setPlaying] = React.useState(false)
  let player = useRef(null)
  let overlay = useRef(null)

  
  useEffect(() => {
    TweenLite.fromTo(overlay, .5, {
      autoAlpha: 1,
      
      delay: 1
    }, {
      autoAlpha: 0,
      delay: 2
     
    })
    setPlaying(true)
  },[])

  const controlMute = () => {
    player.muted = !player.muted
  }

  console.log(player)
      return (
        <ImgLandscape data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="500"
        data-sal-easing="ease">
        <Background ref={el => (overlay = el)}>
          <img src={logo} alt="le shoppe logo loading" />
          <P bc3 style={{color:`white`}}>Loading ...</P>
        </Background>
          <Video autoPlay muted loop ref={el => (player = el)}>
          <source src={video} type="video/mp4" />
          </Video>
        
          <button onClick={controlMute} >unmute</button>
     
        </ImgLandscape>
      )
    
  }
  
  export default VideoPlayer

  export const Mute = styled.button`
  height: 3rem;
  width: 5rem;
  border: none;
  background: transparent;
  float: right;
  `

export const Video = styled.video `
height: 100%;
width: 100%;

`
export const Background = styled.div`
position: absolute;
z-index: 2;
height: 100%;
width: 100%;
background: black;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transition: all 1s ease-ine;
img {
  opacity: 1;
  stroke: white;
  fill: white;
  z-index: 3;
  height: 35%;
  width: 35%;
}
`

  export const ImgLandscape = styled.div`
  width: 57%;
  transition: opacity 2s ease;
  aspect-ratio: 16/9;
  position: relative;
  @media screen and (max-width: 450px) {
    width: 100%;
    align-self: flex-end;
    
  }
  :hover {
      pointer-events: none;
  }
`