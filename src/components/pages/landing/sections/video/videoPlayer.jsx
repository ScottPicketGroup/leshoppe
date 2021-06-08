
import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import './vid.css'
const VideoPlayer = ({url}) => {
  const [sound, setSound] = React.useState(true)
  console.log(sound)
      return (
        <ImgLandscape >
          <ReactPlayer
            
            url='https://youtu.be/If-6TTEPwoo'
            width='100%'
            height= '100%'
            style={{
                aspectRatio: `16/9`, pointerEvents: `none`
            }}
            playing='true'
            muted={sound}
            controls='false'
            loop='true'
          />

          { !sound ? (
                <span 
                onClick={() => setSound(!sound)}
                style={{float: `right`}}>
                  Mute
                 </span>
          )
            :
            (
                <span 
                onClick={() => setSound(!sound)}
                style={{float: `right`}}
                >
                  Unmute
                 </span>
            )
        }
     
        </ImgLandscape>
      )
    
  }
  
  export default VideoPlayer



  export const ImgLandscape = styled.div`
  width: 57%;
  aspect-ratio: 16/9;
  @media screen and (max-width: 450px) {
    width: 75%;
    align-self: flex-end;
  }
  :hover {
      pointer-events: none;
  }
`