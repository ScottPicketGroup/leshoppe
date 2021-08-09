import React from "react"
const ComponentName = ({selected, setSelected, limit}) => {
console.log(selected)
  const forward = () => {
  if(selected === limit -1) setSelected(0)
  else setSelected(selected + 1)
  }

  const back = () => {
    if(selected === 0) return
    else setSelected(selected - 1)
    }
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="117.002"
        height="35"
        viewBox="0 0 117.002 42"
      >
        <g
          id="Group_6039"
          data-name="Group 6039"
          transform="translate(-1628 -1107)"
        >
          <g id="CL_LS_Arrow_Left" transform="translate(1628 1107)"
          onClick={back}
          >
            <path
              id="Path_11620"
              data-name="Path 11620"
              d="M21,29.653,12.348,21,21,12.346Z"
              fill="#153e35"
            />
            <path
              id="Path_11621"
              data-name="Path 11621"
              d="M21,38.941,3.059,21,21,3.059V0L0,21,21,42Z"
              fill="#153e35"
            />
          </g>
          <g id="CL_LS_Arrow_Right" transform="translate(1724 1107)" 
          onClick={forward}
          >
            <path
              id="Path_11622"
              data-name="Path 11622"
              d="M0,12.347,8.653,21,0,29.654Z"
              fill="#153e35"
            />
            <path
              id="Path_11623"
              data-name="Path 11623"
              d="M0,3.059,17.943,21,0,38.941V42L21,21,0,0Z"
              fill="#153e35"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ComponentName
