import React, {useState} from 'react'
import styled from 'styled-components'
const CheckBox = () => {
    const [checked, setChecked] = useState(false)

    const handleChecked = e => {
        setChecked(!checked)
        console.log(checked)
    }
    return (
        <label>
        <Checkbox
          checked={checked}
          onChange={handleChecked}
        />
       
      </label>
    )
}
const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        {checked ? (
            <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        ): null}
      </StyledCheckbox>
    </CheckboxContainer>
  )

export default CheckBox

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 24px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  
  background: ${props => props.checked ? '#FDF9EE' : '#FDF9EE'};
  border: 1px solid black;
  border-radius: 3px;
  transition: all 150ms;
  
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`
const Icon = styled.svg`
  fill: none;
  stroke: #153E35;
  stroke-width: 2px;
`