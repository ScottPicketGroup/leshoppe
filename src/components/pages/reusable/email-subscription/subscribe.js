import React, { useState } from "react"
import styled from "styled-components"
import font from '../../.././../fonts/TT-Norms-Pro.ttf'
const Subscribe = () => {
  const [email, setEmail] = useState("")
  const handleChange = event => {
    setEmail(event.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(email)
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         title: 'foo',
    //         body: email,
    //         userId: 1
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8'
    //     },
    // })
    // .then((response) => response.json())
    // .then((json) => console.log(json))
  }

  return (
    <SubContainer>
      <SignUp onSubmit={handleSubmit}>
      <p>EMAIL ADDRESS</p>
        
        <form>
          <input
            placeholder="Please enter your email address"
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
            required
          />
        </form>
        <SignUpSubmit type="submit">SUBSCRIBE</SignUpSubmit>
      </SignUp>
    </SubContainer>
  )
}

export default Subscribe

const SubContainer = styled.div`
  width: 100%;
 
  overflow: visible;
  margin-top: 1rem;
`

const SignUp = styled.div`
  font-size: 0.75rem;

  input {
    width: 95%;
    height: 2rem;
    background: #fdf9ee;
    border: none;
    padding: 1.5rem 0;
    font-size: 0.75rem;
    line-height: none;
    border-bottom: 1px solid #153e35;
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
  }
`
const SignUpSubmit = styled.button`
  background: none;

  padding: 0.5rem 2rem;
  border: 1px solid #153e35;
  margin-top: 1.75rem;
  font-size: 120%;
  transition: all 0.2s ease;
  :hover {
    background: #153e35;
    color: white;
  }
`
