import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import { Button, GoogleMapsLink, Heading, Pintro, PintroLink } from "../../../styled-components/GlobalStyles"



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
      [BLOCKS.HEADING_1]: (node, children) => <Heading>{children}</Heading>,
      // [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
      // [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      // [BLOCKS.HEADING_4]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.PARAGRAPH]: (node, children) => (
        < Pintro bc2 footer
        > {children}</Pintro> 
      ),
      // [INLINES.HYPERLINK]: ({ data }, children) => (
    
      //     <GoogleMapsLink
      //       style={{ fontFamily: `inherit`, display: 'inline-block',  }}
      //       href={`${
      //         data.uri.startsWith(website_url)
      //           ? data.uri
      //           : website_url + data.uri
      //       }`}
      //       target="_blanc"
      //       rel={`${
      //         data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
      //       }`}
      //     > 
      //      {children} 
      //     </GoogleMapsLink>
      
      // ),
      
    },
   
  }

  return <div style={{margin: '2rem 0'}}>{node && renderRichText(node, options)}</div>
  
}

export default Renderer
