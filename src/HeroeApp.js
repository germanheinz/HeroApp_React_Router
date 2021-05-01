import React, { useReducer } from 'react'
import { AuthContext } from './components/auth/AuthContext'
import { authReducer } from './components/auth/authReducer'
import { AppRouter } from './components/routers/AppRouter'


const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const HeroeApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    return (
    <AuthContext.Provider value={{ user, dispatch}}>
        <AppRouter />
    </AuthContext.Provider>
    )
}
