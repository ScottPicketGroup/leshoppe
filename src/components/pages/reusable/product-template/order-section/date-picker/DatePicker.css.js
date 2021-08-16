import styled from 'styled-components'

const DatePickerWrapper = styled.div`
float: left;
    position: relative;
    -moz-user-select: none; 
    user-select: none;  
* {
  
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;  
}
`

const MDPInput = styled.div`
float: left;

overflow: hidden;

postion: relative;
input:focus{
    outline: none;
}
`

const Input = styled.input`
width: 125%;
background: #f5f5f5;
border: none;
height: 35px;
text-align: center;
text-transform: uppercase;
letter-spacing: 2px;
font-size: 11px;
cursor: pointer;
user-select: none;
visibility: hidden;
`
const DateLabel = styled.div`
display: flex;
  flex-direction: column;
  width: 48%;

  height: 1.9rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1px;
  border: 1px solid #153e35;
  color: #153e35;
  @media screen and (max-width: 450px) {
    width: 100%;
    margin-bottom: 1.5rem;
    height: 2.25rem;
}
cursor: pointer;
position: absolute;
top: 0;
left: 0;

`

const CalanaderWrapper = styled.div`
float: left;
position: absolute;
left: 50%;

background: #fff;
box-shadow: 10px 10px 40px rgba(0,0,0,0.2);
width: 75%;
height: auto;
overflow: hidden;

z-index: 2;
`

export {DatePickerWrapper, DateLabel,  MDPInput, Input, CalanaderWrapper}