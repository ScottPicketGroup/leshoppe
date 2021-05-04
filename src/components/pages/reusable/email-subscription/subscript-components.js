import React from 'react'
import styled from 'styled-components'

export const SubContainer = styled.div`
  width: 100%;

  overflow: visible;
  margin-top: 1rem;
  p {
    font-size: 1rem;
  }
`

export const SignUp = styled.form`
  font-size: 0.75rem;
display: flex;
  
`
export const Input = styled.input `
  width: 100%;
  height: 2rem;
  background: #fdf9ee;
  border: none;
  padding: 1.5rem 0;
  font-size: 0.75rem;
  line-height: none;
  border-bottom: 1px solid ${props => props.err ? 'red' : '#153e35'};
  ::placeholder {
    color: darkgrey;
    font-size: 1rem;
    margin-bottom: 10rem;
  }
  :focus {
    outline: none;
    background: #fdf9ee;

    height: 3rem;
    font-size: 150%;
  }
  :valid {
    font-size: 1rem;
  }
  ::-moz-focus-outer {
    color: white;
  }
`

export const InputMessage = styled.textarea `
  width: 100%;
  height: 10rem;
  background: #fdf9ee;
  border: none;
  padding: 1.5rem 0;
  font-size: 0.75rem;
  line-height: none;
  border-bottom: 1px solid ${props => props.err ? 'red' : '#153e35'};
  overflow: hidden;
  
  ::placeholder {
    opacity: 75%;
    font-size: 1rem;
    margin-bottom: 10rem;
  }
  :focus {
    outline: none;
    background: #fdf9ee;
    
    height: 3rem;
    font-size: 150%;
  }
  :valid {
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  ::-moz-focus-outer {
    color: white;
  }
`

export const SignUpSubmit = styled.button`
  background: none;

  padding: 0.5rem 2rem;
  border: 1px solid ${props => props.err ? 'red' : '#153e35'};
  color: ${props => props.err ? 'red' : '#153e35'};
  margin-top: 1.75rem;
  font-size: 120%;
  transition: all 0.2s ease;
  :hover {
    background: ${props => props.err ? 'red' : '#153e35'};
    color: ${props => props.err ? 'white' : 'white'};
  }
`
