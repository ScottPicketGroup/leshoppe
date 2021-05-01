import React, { useState } from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"

import {
  SignUp,
  Input,
  SignUpSubmit,
  InputMessage,
} from "../../reusable/email-subscription/subscript-components"
const ContactUsForm = () => {
  const [error, setError] = useState(false)
  const [inputs, setInputs] = useState({
    fName: "",
    sName: "",
    email: "",
    number: "",
    message: "",
    newsletter: false,
  })
  const [emailErr, setEmailErr] = useState(false)
  const [form, setForm] = useState(true)
  const [thankyou, setThankyou] = useState(false)
  const handleChange = e => {
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))

    !inputs.email.includes(".") || !inputs.email.includes("@")
      ? setEmailErr(true)
      : setEmailErr(false)
  }
  const handleSubmit = e => {
    e.preventDefault()
    // if (inputs.email.includes(".") || form.email.includes("@"))
    setThankyou(true)
    console.log(`thankyou`, thankyou)
    // else setError(true)
  }
  return (
    <ContactUsFormContainer>
        {!thankyou ? (
            <>
 <SignUp>
 <ContactDetailsContainer>
     <ContactFormRow>
     <InputContainer>
     <p>NAME</p>
     <Input
       placeholder="Please enter your first name"
       name="fName"
       type="text"
       value={inputs.fName}
       onChange={handleChange}
       err={emailErr}
     />
     {emailErr ? (
       <P error style={{ marginTop: `1rem` }}>
         Please enter your name
       </P>
     ) : null}
   </InputContainer>
   <InputContainer>
     <p>SURNAME</p>
     <Input
       placeholder="Please enter your surname address"
       name="sName"
       type="text"
       value={inputs.sName}
       onChange={handleChange}
       err={emailErr}
     />
     {emailErr ? (
       <P error style={{ marginTop: `1rem` }}>
         Please enter your surname
       </P>
     ) : null}
   </InputContainer>
     </ContactFormRow>
     <ContactFormRow>
     <InputContainer>
     <p>EMAIL ADDRESS</p>
     <Input
       placeholder="Please enter your email address"
       name="email"
       type="text"
       value={inputs.email}
       onChange={handleChange}
       err={emailErr}
     />
     {emailErr ? (
       <P error style={{ marginTop: `1rem` }}>
         Please enter a valid email address
       </P>
     ) : null}
   </InputContainer>
   <InputContainer>
     <p>CONTACT NUMBER</p>
     <Input
       placeholder="Please enter your email address"
       name="number"
       type="text"
       value={inputs.number}
       onChange={handleChange}
       err={emailErr}
     />
     {emailErr ? (
       <P error style={{ marginTop: `1rem` }}>
         Please enter a valid mobile number
       </P>
     ) : null}
   </InputContainer>
     </ContactFormRow>
   
 <ContactDetailsContainer>
 <InputContainer>
     <p>MESSAGE</p>
     <InputMessage
       placeholder="Please enter your email address"
       name="message"
       type="text"
       value={inputs.message}
       onChange={handleChange}
       err={emailErr}
       scroll="disable"
     />
     {emailErr ? (
       <P error style={{ marginTop: `1rem`}}>
         Please enter a message
       </P>
     ) : null}
   </InputContainer>
   <TixboxContainer>[ ]
       <P bc2 style={{width: `95%`}}>I would like to receive communications about Scott Pickett Group services, events and matters of relevant interest.</P>
   </TixboxContainer>
 </ContactDetailsContainer>
 </ContactDetailsContainer>

 
 
</SignUp>
<SignUpSubmit onClick={handleSubmit} err={emailErr} type="submit">
   SUBSCRIBE
 </SignUpSubmit>
 </>
        ):
        (
            <>
            <P bc1> Thank you for submitting your enquirey.</P>
            <P bc1> A member of our staff will be in contact shortly.</P>
            </>
        )
        }
     
    
    </ContactUsFormContainer>
  )
}

export default ContactUsForm

export const ContactUsFormContainer = styled.div`
  width: 55%;
  margin-bottom: 6.75rem;
`

export const ContactDetailsContainer = styled.div`
 display: flex;
 flex-direction: column;
  min-width: 100%;
  padding: 0;
`
export const ContactFormRow = styled.div`
min-width: 100%;
display: flex;
margin-bottom: 2.25rem;
`
export const InputContainer = styled.div`
  min-width: 48%;
  margin-right: 1rem;
`
export const TixboxContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 2.5rem;
margin-bottom: 3.5rem;
`