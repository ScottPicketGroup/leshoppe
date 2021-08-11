import React, {useState} from 'react'
import styled from 'styled-components'
const CheckBox = ({selected, id}) => {
    const [checked, setChecked] = useState(false)
console.log(selected, id)

    const handleChecked = e => {
        setChecked(!checked)
       
    }
    return (
        <label>
        <Checkbox
          checked={checked}
          onChange={handleChecked}
          selected={selected} id={id}
        />
       
      </label>
    )
}
const Checkbox = ({ className, checked, selected, id, ...props }) => (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox selected={selected} id={id}>
     
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
  
  background: ${props => props.id === props.selected ? '#153E35' : '#FDF9EE'};
  border: 1px solid black;
  border-radius: 1px;
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