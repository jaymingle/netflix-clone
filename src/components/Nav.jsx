import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './Nav.css'

const Nav = () => {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    // handling a scroll background color change
    const handleScroll = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <img onClick={() => navigate('/')} className="nav_logo" src="https://pngimg.com/uploads/netflix/netflix_PNG17.png" alt="Netflix logo"/>
                <img onClick={() => navigate('/profile')} className="nav_avatar" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.webp" alt="User Avatar"/>
            </div>
        </div>
    );
};

export default Nav;
