import React from 'react'

export const LoginScreen = ({ history }) => {
    
    const handleLogin = () => {
        history.replace('/');
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
