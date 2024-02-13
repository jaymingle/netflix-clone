import React, {useState} from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";
import './SignUpScreen.css'


const SignUpScreen = () => {

    const [usermail, setUsermail] = useState('')
    const [userpassword, setUserpassword] = useState('')

    const registerInHandler = e => {
        e.preventDefault();

        if(userpassword.length <= 5){
            alert('Password must be at least 6 characters')
            return
        }

        createUserWithEmailAndPassword(auth, usermail,userpassword)
            .then( (authUser) => console.log(authUser) )
            .catch( e => console.error(e))

        setUsermail('')
        setUserpassword('')
    }

    const signInHandler = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, usermail, userpassword)
            .then( (authUser) => console.log('Logged In', authUser))
            .catch( e => console.error(e))
    }

    return (
        <div className="signupScreen">
            <h1>Sign In</h1>
            <form onSubmit={registerInHandler} className="signupScreen_form">
                <input type="email" onChange={e => setUsermail(e.target.value)} value={usermail} placeholder="Email" required/>
                <input type="password" onChange={e => setUserpassword(e.target.value)} value={userpassword} placeholder="Password" required/>
                <button type="submit">Sign In</button>
            </form>
            <h4> <span className="signupScreen_grey">New to Netflix?</span> <span className="signupScreen_link" onClick={signInHandler}> Sign up now. </span></h4>
        </div>
    );
};

export default SignUpScreen;
