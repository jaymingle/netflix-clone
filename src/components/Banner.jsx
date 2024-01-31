import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <header className="banner" style={{
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
            backgroundSize: 'cover',
            backgroundPosition: "center center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">This is a test description</h1>
            </div>
            <div className="banner-fadeBottom"/>
        </header>
    );
};

export default Banner;
