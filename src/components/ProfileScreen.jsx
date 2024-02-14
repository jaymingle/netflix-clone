import React from 'react';
import Nav from "./Nav.jsx";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice.js";
import {auth} from "../../firebase";
import './ProfileScreen.css'

const ProfileScreen = () => {
    const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile Image"/>
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">

                            <button onClick={() => auth.signOut()} className="profileScreen_signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;
