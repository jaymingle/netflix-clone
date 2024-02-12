import React from 'react';
import './SignUpScreen.css'

const SignUpScreen = () => {

    const formRegisterHandler = e => {
        e.preventDefault();

    }

    return (
        <div className="signupScreen">
            <h1>Sign In</h1>
            <form onSubmit={formRegisterHandler} className="signupScreen_form">
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <button type="submit">Sign In</button>
            </form>
            <h4> <span className="signupScreen_grey">New to Netflix?</span> <span className="signupScreen_link"> Sign up now. </span></h4>
        </div>
    );
};

export default SignUpScreen;
