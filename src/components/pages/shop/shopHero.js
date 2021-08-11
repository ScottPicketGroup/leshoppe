import React, {useEffect, useState, useRef, useLayoutEffect, useContext} from 'react'
import styled from 'styled-components'
import landingSqaure from '../../../images/placeholders/contactHero.jpg'
import BackgroundLogo from '../reusable/background-logo/BackgroundLogo'
const ShopHero = ({imageHeight}) => {
   

    const [size, setSize] = useState([0, 0])
let imgContainer = useRef(null)


 function useWindowSize() {
  ;
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

  useWindowSize()
    return (
       
        <HeroContainer >
 
        <BackgroundLogo imageHeight={imageHeight} />
            <ImgSqaure height={imageHeight}
            ref={el => imgContainer = el}
            src={landingSqaure} alt='man in a butchers apron'/>
        </HeroContainer>
   
    )
}

export default ShopHero

export const HeroContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
margin-bottom: 3.5rem;

`
export const ImgSqaure = styled.img`
width: 33%;
height: 33%;
align-self: flex-end;
visibility: hidden;
  @media only screen and (max-width: 450px) {
    width: 50%;
    height: 100%;
    display: none;
  }
`

