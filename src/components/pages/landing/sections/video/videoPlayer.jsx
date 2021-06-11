
import React, {useState, useRef, useEffect} from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import {gsap, TweenLite} from 'gsap'
import video from '../../../../../images/introVideo.mp4'
const VideoPlayer = ({url}) => {
  const [sound, setSound] = React.useState(true)
  const [opacity, setOpacity] = React.useState(`100%`)
  const [playing, setPlaying] = React.useState(false)
  let player = useRef(null)

  
  useEffect(() => {
    TweenLite.fromTo(player, .5, {
      autoAlpha: 0,
      backgroundColor: `black`,
      delay: 1
    }, {
      autoAlpha: 1,
      delay: 1
     
    })
    setPlaying(true)
  },[])

  console.log(player)
      return (
        <ImgLandscape >
          <Video autoPlay='autoplay'>
          <source src={video} type="video/mp4" />
          </Video>
        <Background ref={el => (player = el)}/>
          { !sound ? (
                <Mute
                onClick={() => setSound(true)}
                >
                  Mute
                  </Mute>
          )
            :
            (
                <Mute
                onClick={() => setSound(false)}
                >
               
               
                
                  Unmute
                  </Mute>
            )
        }
     
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
position: relative;
`
export const Background = styled.div`

`

  export const ImgLandscape = styled.div`
  width: 57%;
  transition: opacity 2s ease;
  aspect-ratio: 16/9;
  @media screen and (max-width: 450px) {
    width: 100%;
    align-self: flex-end;
    
  }
  :hover {
      pointer-events: none;
  }
`