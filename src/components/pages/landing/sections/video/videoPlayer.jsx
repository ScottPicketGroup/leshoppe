
import React, {useState, useRef, useEffect} from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import {gsap, TweenLite} from 'gsap'
import './vid.css'
const VideoPlayer = ({url}) => {
  const [sound, setSound] = React.useState(true)
  const [opacity, setOpacity] = React.useState(`100%`)
  const [playing, setPlaying] = React.useState(false)
  let player = useRef(null)
  
  useEffect(() => {
    TweenLite.fromTo(player, 1, {
      autoAlpha: 0,
      delay: 1
    }, {
      autoAlpha: 1,
      delay: 1
     
    })
    setPlaying(true)
  },[])

  console.log(player)
      return (
        <ImgLandscape ref={el => (player = el)}>
          <ReactPlayerr
          
            opacity={opacity}
            url='https://youtu.be/If-6TTEPwoo'
            width='100%'
            height= '100%'
            style={{
                aspectRatio: `16/9`, pointerEvents: `none`
            }}
            playing={playing}
            muted={sound}
            onBufferEnd={() => setPlaying(true)}
            controls='false'
            loop='true'
          />

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

export const ReactPlayerr = styled(ReactPlayer) `

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