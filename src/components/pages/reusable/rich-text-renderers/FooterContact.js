import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import { Button, P, Pintro, PintroLink } from "../../../styled-components/GlobalStyles"



const Renderer = ({ node, bc }) => {


  const Bold = ({ children }) => (
    <p style={{ fontFamily: `bold` }}>{children}</p>
  )

  const website_url = "https://"

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <Pintro bc3>{children}</Pintro>,
      // [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
      // [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      // [BLOCKS.HEADING_4]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.PARAGRAPH]: (node, children) => (
        < Pintro bc3 footer
        > {children}</Pintro> 
      ),

      
    },
   
  }

  return <>{node && renderRichText(node, options)}</>
  
}

export default Renderer
