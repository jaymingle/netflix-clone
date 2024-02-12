import React, {useState} from 'react';
import './SignUpScreen.css'
import {auth} from "../../firebase";

const SignUpScreen = () => {

    const [usermail, setUsermail] = useState('')
    const [userpassword, setUserpassword] = useState('')

    const registerHandler = e => {
        e.preventDefault();
        alert('Registered')
    }

    const signInHandler = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(usermail,userpassword)
            .then( (authUser) => console.log(authUser) )
            .catch( e => console.error(e))

    }

    return (
        <div className="signupScreen">
            <h1>Sign In</h1>
            <form onSubmit={signInHandler} className="signupScreen_form">
                <input type="email" onChange={e => setUsermail(e.target.value)} value={usermail} placeholder="Email" required/>
                <input type="password" onChange={e => setUserpassword(e.target.value)} value={userpassword} placeholder="Password" required/>
                <button type="submit">Sign In</button>
            </form>
            <h4> <span className="signupScreen_grey">New to Netflix?</span> <span className="signupScreen_link" onClick={registerHandler}> Sign up now. </span></h4>
        </div>
    );
};

export default SignUpScreen;
