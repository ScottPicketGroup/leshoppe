import React, { useState } from "react";
import styled from 'styled-components'
import { P } from '../../../../styled-components/GlobalStyles'

const ViewMore = ({ children }) => {
  const text = children ? children : "";
  const [isViewMore, setIsViewMore] = useState(true);
  const toggleViewMore = () => {
    setIsViewMore(!isViewMore);
  };
  return (
    <TextContainer>
      {isViewMore ? text.slice(0, 250) : text}
      <ViewMoreButton onClick={toggleViewMore}>
        {isViewMore ? "...view more" : " view less"}
      </ViewMoreButton>
    </TextContainer>
  );
};

export default ViewMore

export const TextContainer = styled(P)`
  display: inline;
  width: 100%;

`

export const ViewMoreButton = styled.span`
  color: rgb(192,192,192);
  cursor: pointer;
`