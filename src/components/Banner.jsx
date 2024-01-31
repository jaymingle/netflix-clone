import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <header className="banner" style={{
            backgroundImage: `url("https://cdn.freebiesupply.com/logos/large/2x/netflix-logo-png-transparent.png")`,
            backgroundSize: 'cover',
            backgroundPosition: "center center"
        }}>
            <div className="banner-contents">
                <h1 className="banner-title">Movie Name</h1>
                <div className="banner_buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>

            </div>
        </header>
    );
};

export default Banner;
