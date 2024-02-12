import React from 'react';
import './SignUpScreen.css'

const SignUpScreen = () => {

    const registerHandler = e => {
        e.preventDefault();
        alert('Registered')
    }

    const signInHandler = e => {
        e.preventDefault();
        alert('Signing in')
    }

    return (
        <div className="signupScreen">
            <h1>Sign In</h1>
            <form onSubmit={signInHandler} className="signupScreen_form">
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <button type="submit">Sign In</button>
            </form>
            <h4> <span className="signupScreen_grey">New to Netflix?</span> <span className="signupScreen_link" onClick={registerHandler}> Sign up now. </span></h4>
        </div>
    );
};

export default SignUpScreen;
