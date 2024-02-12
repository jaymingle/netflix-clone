import React from 'react';
import './SignUpScreen.css'

const SignUpScreen = () => {

    const formSubmitHandler = () => {

    }

    return (
        <div className="signupScreen">
            <h1>Sign In</h1>
            <form onSubmit={formSubmitHandler} className="signupScreen_form">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignUpScreen;
