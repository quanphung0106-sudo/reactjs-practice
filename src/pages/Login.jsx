import React from 'react';


const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className='logo'>Chat App</span>
                <span className="title">Login</span>
                <form action="">
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <button>Sign in</button>
                </form>
                <p>You don't have an account?</p>
            </div>
        </div>
    )
}

export default Login