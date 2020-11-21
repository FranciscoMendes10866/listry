import { createContext, useReducer } from 'react'

import auth from './reducers/auth'
import addresses from './reducers/addresses'
import authInitialState from './initialStates/auth'
import addressesInitialState from './initialStates/addresses'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState, () => {
        const localToken = localStorage.getItem('token')
        return localToken ? { auth: { token: JSON.parse(localToken) } } : { auth: { token: null } }
    })
    const [addressesState, addressesDispatch] = useReducer(addresses, addressesInitialState, () => {
        const localList = localStorage.getItem('list')
        return localList ? { addresses: { list: JSON.parse(localList) } } : { addresses: { list: [] } }
    })
    return (
        <GlobalContext.Provider
            value={{
                authState,
                authDispatch,
                addressesState,
                addressesDispatch
            }}>
            { children}
        </GlobalContext.Provider>
    )
}
