import { useReducer} from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "WINDOW":
      return {
        ...state,
        logoLimit: action.logoLimit,
      }

    default: {
      return state
    }
  }
}

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {})

  return { globalState, globalDispatch }
}

export default useGlobalState
