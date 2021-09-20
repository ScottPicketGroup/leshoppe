import React, { useState, useRef } from "react"
import styled from "styled-components"
import { P } from "../../../../../styled-components/GlobalStyles"
import DropdownArrow from "./DropdownArrow"

const SortDropDown = ({ sortBy, setSortBy }) => {
  const [setActive, setActiveState] = useState(true)
  const [setHeight, setHeightState] = useState("0px")

  const content = useRef(null)

  const toggleAccordion = () => {
    setActiveState(!setActive)
    setHeightState(setActive ? `${content.current.scrollHeight}px` : "0px")
  }

  return (
    <DropDownWrapper>
      <MenuWrapper onClick={toggleAccordion}>
        <Item>
          <P bc3>Sort by {sortBy.title} </P>
          <DropdownArrow open={setActive} />
        </Item>
        <DropDownContainer ref={content} style={{ maxHeight: `${setHeight}` }}>
          <Item>
            <P bc3 onClick={() => setSortBy({ id: 0, title: "a-z" })}>
              A-Z
            </P>
          </Item>
          <Item>
            <P bc3 onClick={() => setSortBy({ id: 1, title: "z-a" })}>
              Z-A
            </P>
          </Item>
          <Item>
            <P
              bc3
              onClick={() =>
                setSortBy({ id: 2, title: "price lowest to heightest" })
              }
            >
              Price - Lowest to heighest
            </P>
          </Item>
          <Item>
            <P
              bc3
              onClick={() =>
                setSortBy({ id: 3, title: "price heighest to lowest" })
              }
            >
              Price - Heighest to lowest
            </P>
          </Item>
        </DropDownContainer>
      </MenuWrapper>
    </DropDownWrapper>
  )
}

export default SortDropDown

export const DropDownWrapper = styled.div`
  width: 100%;
  justify-self: flex-end;
`
export const MenuWrapper = styled.div`
  width: 25%;
  justify-self: flex-end;
  float: right;
  margin-bottom: 1.5rem;
`
export const DropDownContainer = styled.div`
  overflow: hidden;
  transition: max-height 0.5s ease;
`

export const Item = styled.div`
  height: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
