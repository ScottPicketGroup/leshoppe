import React from "react"
import styled from "styled-components"

import ReactHtmlParser, {
  convertNodeToElement,
} from "react-html-parser"

const ContentContainer = ({ descriptionHtml }) => {
  const extra = "..."
  const html = descriptionHtml.slice(0, 150) + extra

  function transform(node, index) {
    if (node.type === "tag" && node.name === "em") {
      node.name = "text"
      return convertNodeToElement(node, index, transform)
    }

    if (node.type === "tag" && node.name === "h4") {
      return (
        <h4 key={index}
          style={{
            marginBottom: `1rem`,
          }}
        ></h4>
      )
    }
  }

  const options = {
    decodeEntities: true,
    transform,
  }

  return (
    <ContentContainerWrapper>
      {" "}
      {ReactHtmlParser(html, options)} <br />
    </ContentContainerWrapper>
  )
}

export default ContentContainer

export const ContentContainerWrapper = styled.div``
