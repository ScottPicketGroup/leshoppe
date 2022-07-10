import React, { useRef } from "react"
import styled from "styled-components"
import { P } from "../../../../styled-components/GlobalStyles"
import video from "../../../../../images/introVideo.mp4"
const VideoPlayer = ({ introVideo }) => {
  let player = useRef(null)
  let overlay = useRef(null)

  const controlMute = ({video}) => {
    player.muted = !player.muted
  }
console.log('introVideo', introVideo.file.fileName)
  return (
    <>
      <ImgLandscape
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <Background ref={el => (overlay = el)} onClick={controlMute}>
          Click anywhere on the video to play audio
        </Background>
        {/* <MuteButton onClick={controlMute} ><MuteCaption bc2>Click anywhere to play audio</MuteCaption></MuteButton> */}
        <Video autoPlay muted loop ref={el => (player = el)}>
          <source src={introVideo.file.url} type="video/mp4" />
        </Video>
      </ImgLandscape>
    </>
  )
}

export default VideoPlayer

export const Video = styled.video`
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
  color: #fdf9ee;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1rem;
  transition: opacity 0.4s ease-in-out;
`

export const MuteCaption = styled(P)`
  position: absolute;
  opacity: 1;
  z-index: 1000;
  background: white;
  height: 3rem;
  width: 3rem;
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
  transition: opacity 0.3s ease-in;
  color: white;
  :hover {
    opacity: 0.3;
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
