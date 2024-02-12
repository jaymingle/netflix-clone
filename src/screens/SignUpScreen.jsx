import React from 'react';
import './SignUpScreen.css'

const SignUpScreen = () => {

    const formSubmitHandler = () => {

    }

    return (
        <div className="signupScreen">
            <form onSubmit={formSubmitHandler}></form>
            <h1>Sign Up</h1>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button type="submit">Sign In</button>
        </div>
    );
};

export default SignUpScreen;
