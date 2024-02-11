import React, {useState} from 'react';
import "./LoginScreen.css"

const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false)

    const signInHandler = () => {
        setSignIn(value => !value)
    }

    console.log(signIn)

    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img className="loginScreen_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo"/>
                <button className="loginScreen_button" onClick={signInHandler}>Sign In</button>
                <div className="loginScreen_gradient"/>
            </div>
            {
                signIn && <div className="loginScreen_body">
                    <h1>Unlimited films, programmes and more.</h1>
                    <h2>Watch anywhere. cancel at anytime</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen_input">
                        <form>
                            <input type="email" placeholder="Email Address"/>
                            <button className="loginScreen_getStarted" onClick={signInHandler}>GET STARTED</button>
                        </form>
                    </div>
                </div>            <div className="loginScreen_body">
                <h1>Unlimited films, programmes and more.</h1>
                <h2>Watch anywhere. cancel at anytime</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="loginScreen_input">
                <form>
                <input type="email" placeholder="Email Address"/>
                <button className="loginScreen_getStarted" onClick={signInHandler}>GET STARTED</button>
</form>
</div>
</div>

            }

        </div>
    );
};

export default LoginScreen;
