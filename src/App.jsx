import React, {useEffect} from "react"
import './App.css'
import HomeScreen from "./screens/HomeScreen.jsx";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase.js";
import {useDispatch, useSelector} from "react-redux";
import {logout, login, selectUser} from "./features/userSlice";


function App() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {

        const auth = getAuth()

       const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            if(userAuth){
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email
                }))
                console.log("Logged In")
                console.log(userAuth)
            }else{
                console.log("Logged Out")
                dispatch(logout)
            }
        })

        return unsubscribe;

        // auth.onAuthStateChanged(userAuth => {
        //     if(userAuth){
        //         console.log("Logged In")
        //         console.log(userAuth)
        //     }else{
        //         console.log("Logged Out")
        //     }
        // })

    }, [])


  return (
    <div className="app">
        <BrowserRouter>

            {
                !user ? (
                    <LoginScreen/>
                    ) : (
                        <Routes>
                            <Route path="/" element={<HomeScreen/>}/>
                            {/*<Route path="test" element={<TheRouter/>}/>*/}
                        </Routes>
                    )

            }

        </BrowserRouter>

    </div>
  )
}

export default App
