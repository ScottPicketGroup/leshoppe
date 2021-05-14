import React from "react"

import styled from "styled-components"

const Instagram = ({menu}) => {
  return (
    <SocialsLink
    menu={menu}
      href="https://www.instagram.com/leshoppe.chancerylane"
      target="blank"
      style={{
        position: `relative`,
        height: `100%`,

        paddingRight: `1rem`,
      }}
    >
      <svg
        id="CL_LS_IG_Static"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 42 42"
      >
        <path
          id="Path_11773"
          data-name="Path 11773"
          d="M21,42A21,21,0,1,1,42,21,21.024,21.024,0,0,1,21,42ZM21,1.614A19.386,19.386,0,1,0,40.386,21,19.407,19.407,0,0,0,21,1.614Z"
        
        />
        <g id="Group_2417" transform="translate(9.582 9.676)">
          <path
            id="Exclusion_34"
            d="M3644.967-60.259h-9.192A6.782,6.782,0,0,1,3629-67.034v-9.192A6.782,6.782,0,0,1,3635.775-83h9.192a6.782,6.782,0,0,1,6.775,6.775v9.192A6.782,6.782,0,0,1,3644.967-60.259Zm-9.192-20.454a4.492,4.492,0,0,0-4.487,4.487v9.192a4.492,4.492,0,0,0,4.487,4.487h9.192a4.492,4.492,0,0,0,4.487-4.487v-9.192a4.492,4.492,0,0,0-4.487-4.487Zm4.6,14.965a5.882,5.882,0,0,1-5.882-5.882,5.882,5.882,0,0,1,5.882-5.882,5.882,5.882,0,0,1,5.882,5.882h0a5.888,5.888,0,0,1-5.886,5.88Zm0-9.475a3.594,3.594,0,0,0-3.594,3.594,3.594,3.594,0,0,0,3.594,3.594,3.594,3.594,0,0,0,3.594-3.594h0a3.6,3.6,0,0,0-3.6-3.6Z"
            transform="translate(-3629 83.001)"
            
          />
          <circle
            id="Oval-path"
            cx="1.409"
            cy="1.409"
            r="1.409"
            transform="translate(15.858 4.123)"
            
          />
        </g>
      </svg>
    </SocialsLink>
  )
}

export default Instagram

export const SocialsLink = styled.a`
svg {
  fill: #153e35;
  @media screen and (max-width: 450px) {
  fill: ${props => props.menu ? "#FDF9EE" : ""};
}
}

:hover {
  opacity: 75%;
}
`