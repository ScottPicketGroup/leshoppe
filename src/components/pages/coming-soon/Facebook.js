import React, { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { TweenLite, Power3 } from "gsap"

gsap.registerPlugin()

const Facebook = () => {
  const [hovered, setHovered] = useState(false)
  let icon = useRef(null)
  let iconHover = useRef(null)

  useEffect(() => {
    if (hovered) {
      TweenLite.to(icon, 0.5, {
        opacity: 0,
      })
      TweenLite.to(iconHover, 0.5, {
        opacity: 1,
      })
    } else {
      TweenLite.to(icon, 0.5, {
        opacity: 1,
      })
      TweenLite.to(iconHover, 0.5, {
        opacity: 0,
      })
    }
  }, [hovered])

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: `relative`,
        height: `100%`,
      }}
    >
      <div
        ref={el => (iconHover = el)}
        style={{
          position: `absolute`,
        }}>
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
          </g>
          <path
            id="Facebook-2"
            d="M-3601.238,62.67h-4.729V52.6h-2.364V48.713h2.364V46.384c0-3.165,1.333-5.049,5.126-5.049h3.156v3.882h-1.972c-1.476,0-1.574.542-1.574,1.555l-.006,1.941h3.574l-.419,3.882h-3.156Z"
            transform="translate(3624.331 -31.335)"
            fill="#fdf9ee"
          />
        </svg>
      </div>

      <div ref={el => (icon = el)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="41.998"
          viewBox="0 0 42 41.998"
        >
          <g id="Group_6024" transform="translate(3630 -25)">
            <path
              id="Path_11774"
              data-name="Path 11774"
              d="M-3609,67a21.023,21.023,0,0,1-21-21,21.023,21.023,0,0,1,21-21,21.023,21.023,0,0,1,21,21A21.023,21.023,0,0,1-3609,67Zm0-40.443A19.466,19.466,0,0,0-3628.445,46,19.466,19.466,0,0,0-3609,65.443,19.466,19.466,0,0,0-3589.555,46,19.466,19.466,0,0,0-3609,26.555Z"
              fill="#153e35"
            />
            <path
              id="Facebook-2"
              d="M-3601.238,62.67h-4.729V52.6h-2.364V48.713h2.364V46.384c0-3.165,1.333-5.049,5.126-5.049h3.156v3.882h-1.972c-1.476,0-1.574.542-1.574,1.555l-.006,1.941h3.574l-.419,3.882h-3.156Z"
              transform="translate(-6.003 -6.003)"
              fill="#153e35"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Facebook
