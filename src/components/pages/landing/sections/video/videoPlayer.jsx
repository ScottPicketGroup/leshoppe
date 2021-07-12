
import React, {useRef} from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import {gsap, TweenLite} from 'gsap'
import {P} from '../../../../styled-components/GlobalStyles'
import logo from '../../../../../images/logos/leshoppe.svg'
import video from '../../../../../images/introVideo.mp4'
const VideoPlayer = ({url}) => {
  const [sound, setSound] = React.useState(true)
  const [playing, setPlaying] = React.useState(false)
  let player = useRef(null)
  let overlay = useRef(null)

  
  // useEffect(() => {
  //   TweenLite.fromTo(overlay, 1, {
  //     autoAlpha: 1,
      
  //     delay: 1
  //   }, {
  //     autoAlpha: 0,
      
     
  //   })
  //   setPlaying(true)
  // },[])

  const controlMute = () => {
    player.muted = !player.muted
  }

  console.log(player)
      return (<>
        <ImgLandscape data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="500"
        data-sal-easing="ease">
        <Background ref={el => (overlay = el)} onClick={controlMute}>
        Click anywhere on the video to play audio
        </Background>
        {/* <MuteButton onClick={controlMute} ><MuteCaption bc2>Click anywhere to play audio</MuteCaption></MuteButton> */}
          <Video autoPlay muted loop ref={el => (player = el)}>
          <source src={video} type="video/mp4" />
          
          </Video>
        
     
        </ImgLandscape>
        
       
        </>
      )
    
  }
  
  export default VideoPlayer



export const Video = styled.video `
min-height: 99%;
width: 100%;
position: relative;
aspect-ratio: 16/9;
`

export const MuteButton = styled.div`
position: absolute;
z-index: 300;
height: 99%;
width: 100%;
background: black;

opacity: 0;
color: #FDF9EE;
display: flex;
justify-content: flex-end;
align-items: flex-start;
padding: 1rem;
transition: opacity .4s ease-in-out;


`

export const MuteCaption = styled(P)`
position: absolute;
opacity: 1;
z-index: 1000;
background: white;
height: 3rem;
width:3rem;
`

export const Background = styled.div`
position: absolute;
z-index: 100;
height: 100%;
width: 100%;
background: black;
opacity: 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
transition: opacity .3s ease-in;
color: white;
:hover {
     opacity: .3;
  }
`

  export const ImgLandscape = styled.div`
  width: 57%;
  transition: opacity 2s ease;
  aspect-ratio: 16/9;
  position: relative;
  @media screen and (max-width: 450px) {
   display: none;
    
  }

`
