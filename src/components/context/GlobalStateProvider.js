import React from 'react'
import useGlobalState from './UseGloabalState'
import Context from './Context'

const GlobalStateProvider = ( {children} ) => {
    return (
        <Context.Provider value={useGlobalState()}> {children} </Context.Provider>
    )
}

export default GlobalStateProvider