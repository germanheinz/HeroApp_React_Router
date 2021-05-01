import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const LoginScreen = ({ history }) => {
    

    const { dispatch } = useContext( AuthContext )
    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleLogin = () => {
        dispatch({ 
            type: types.login,
            payload: {
                name: 'Germán'
            }
        });
        history.replace(lastPath);
    }

    return (
        <div>
            <h2>Login</h2>

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
