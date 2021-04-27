import React, { useState, useRef, useEffect } from "react"
import { Logo } from "../../styled-components/ComingSoonComponents"
import gsap from 'gsap'
import { TweenLite, Power3 } from "gsap";

gsap.registerPlugin()

const Instagram = () => {
  const [hovered, setHovered] = useState(false)
  let icon = useRef(null)
  let iconHover = useRef(null)

  useEffect(() => {
    if (hovered) {
    TweenLite.to(icon, .5, {
      opacity: 0
     })
     TweenLite.to(iconHover, .5, {
      opacity: 1
     })
   
    }
    else {
    TweenLite.to(icon, .5, {
      opacity: 1
     })
     TweenLite.to(iconHover, .5, {
      opacity: 0
     })
    }

  }, [hovered])
  
 


  // const fadeOutHovered = () => {
  //   setHovered(false)
  //   console.log('joveredout')
    
  // }

  return (
    <div 
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    style={{
      position: `relative`,
      height: `100%`,

      paddingRight: `1rem`

    }}
    >

    
      
         <div ref={el => (iconHover = el)}
         style={{
           position: `absolute`
         }}
         >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          
          
        >
          <g
            id="Group_6251"
            data-name="Group 6251"
            transform="translate(-1440 -803)"
          >
            <g
              id="Ellipse_1"
              data-name="Ellipse 1"
              transform="translate(1440 803)"
              fill="#153e35"
              stroke="#153e35"
              stroke-width="2"
            >
              <circle cx="21" cy="21" r="21" stroke="none" />
              <circle cx="21" cy="21" r="20" fill="none" />
            </g>
            <circle
              id="Oval-path"
              cx="1.409"
              cy="1.409"
              r="1.409"
              transform="translate(1465.44 816.799)"
              fill="#fdf9ee"
            />
            <g
              id="Rectangle_5838"
              data-name="Rectangle 5838"
              transform="translate(1450 813)"
              fill="none"
              stroke="#fff"
              stroke-width="2.5"
            >
              <rect width="22.5" height="22" rx="6" stroke="none" />
              <rect
                x="1.25"
                y="1.25"
                width="20"
                height="19.5"
                rx="4.75"
                fill="none"
              />
            </g>
            <g
              id="Ellipse_2"
              data-name="Ellipse 2"
              transform="translate(1456 819)"
              fill="none"
              stroke="#fdf9ee"
              stroke-width="2"
            >
              <circle cx="5.5" cy="5.5" r="5.5" stroke="none" />
              <circle cx="5.5" cy="5.5" r="4.5" fill="none" />
            </g>
          </g>
        </svg>
        </div>
   
        <div ref={el => (icon = el)}
        >
  <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          
          stroke="white"
        >
          <g
            id="Group_6250"
            data-name="Group 6250"
            transform="translate(-1440 -803)"
          >
            <circle
              id="Oval-path"
              cx="1.409"
              cy="1.409"
              r="1.409"
              transform="translate(1465.44 816.799)"
              fill="#153e35"
            />
            <g
              id="Ellipse_1"
              data-name="Ellipse 1"
              transform="translate(1440 803)"
              fill="none"
              stroke="#153e35"
              stroke-width="2"
            >
              <circle cx="21" cy="21" r="21" stroke="none" />
              <circle cx="21" cy="21" r="20" fill="none" />
            </g>
            <g
              id="Rectangle_5838"
              data-name="Rectangle 5838"
              transform="translate(1450 813)"
              fill="none"
              stroke="#153e35"
              stroke-width="2.5"
            >
              <rect width="22.5" height="22" rx="6" stroke="none" />
              <rect
                x="1.25"
                y="1.25"
                width="20"
                height="19.5"
                rx="4.75"
                fill="none"
              />
            </g>
            <g
              id="Ellipse_2"
              data-name="Ellipse 2"
              transform="translate(1456 819)"
              fill="none"
              stroke="#153e35"
              stroke-width="2"
            >
              <circle cx="5.5" cy="5.5" r="5.5" stroke="none" />
              <circle cx="5.5" cy="5.5" r="4.5" fill="none" />
            </g>
          </g>
        </svg>
        </div>
    

        
      
        </div>
  )
}

export default Instagram
