import React from "react"
import styled from "styled-components"
import { P } from "../../../../../../styled-components/GlobalStyles"
const Video = ({
  videoSrc,
  videoTitle,
  zIndex,
  transform,
  slideLive,
  description,
  setDescription,
  ...props
}) => (
  <div className="video">
    <VideoComponent
      src="https://www.youtube.com/embed/watch?v=BXdhI_Qpt-k"
      title="W3Schools Free Online Web Tutorials"
    ></VideoComponent>

    {slideLive === zIndex -1 ? <P bc2>{videoTitle}</P> : null}
  </div>
)
export default Video

export const VideoComponent = styled.iframe`
  width: 60vw;
  height: 42.12rem;
  z-index: ${props => props.zIndex};
  transform: ${props => props.transform};
`
