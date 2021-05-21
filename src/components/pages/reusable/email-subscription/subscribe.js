import React, { useState } from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState(false)
  const [signUp, setSignup] = useState(true)
  const [thankyou, setThankyou] = useState(false)

  const handleChange = event => {
    setEmail(event.target.value)
    !email.includes(".") || !email.includes("@")
      ? setEmailErr(true)
      : setEmailErr(false)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if ((email && email.includes(".")) || email.includes("@")) {
      var myHeaders = new Headers()
      myHeaders.append(
        "Authorization",
        "Bearer 25183d2e-1266-4207-a9d3-a5d9422d94b0"
      )
      myHeaders.append("Timestamp", "1619765391")
      myHeaders.append("Content-Type", "application/json")

      var raw = JSON.stringify({
        data: {
          email: email,
        },
      })

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }

      fetch("https://api.sproutsend.com/contacts?", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .then(setSignup(false))
        .then(setThankyou(true))

        .catch(error => console.log("error", error))
    } else {
      setEmailErr(true)
    }
  }

  return (
    <SubContainer>
      {signUp ? (
        <SignUp onSubmit={handleSubmit}>
          <Label>EMAIL ADDRESS</Label>
          <form>
            <Input
              placeholder="Please enter your email address"
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
              err={emailErr}
            />
           
            <SignUpSubmit err={emailErr} type="submit">
              SUBSCRIBE
            </SignUpSubmit>
          </form>
        </SignUp>
      ) : (
        <>
          <P bc2>Thank you</P>
          <P bc2>You are now signed up to our mailing list.</P>
        </>
      )}
    </SubContainer>
  )
}

export default Subscribe

const SubContainer = styled.div`
  width: 100%;

  overflow: visible;
  margin-top: 1rem;
  p {
    font-size: 1rem;
  }
`

const SignUp = styled.div`
  font-size: 0.75rem;
`
const Label = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 450px) {
    font-size: 0.75rem !important;
  
  }
`
const Input = styled.input`
  width: 95%;
  height: 2rem;
  background: #fdf9ee;
  border: none;
  padding: 1.5rem 0;
  font-size: 0.75rem;
  line-height: none;
  border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "#153e35")};
  ::placeholder {
    
    font-size: 1rem;
    margin-bottom: 10rem;
    color: ${props => props.err ? '#CB0000' : 'rgba(21, 62, 53, 50%)'};
    @media screen and (max-width: 450px) {
      font-size: 0.75rem;
    }
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
  @media screen and (max-width: 450px) {
    padding: .75rem 0;
  }
`

const SignUpSubmit = styled.button`
  background: none;

  padding: 0.5rem 2rem;
  border: 1px solid ${props => (props.err ? "#CB0000" : "#153e35")};
  color: ${props => (props.err ? "#CB0000" : "#153e35")};
  margin-top: 1.75rem;
  font-size: 120%;
  transition: all 0.2s ease;
  :hover {
    opacity: ${props => (props.err ? "1" : ".75")};
   
    color: ${props => (props.err ? "#CB0000" : "#FDF9EE")}; 
  }
  @media screen and (max-width: 450px) {
    font-size: 0.75rem !important;
    padding: 0.5rem 1.6rem;
  }
  p {
    font-family: tTNormsPro;
  }
`
