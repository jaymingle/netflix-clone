import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <header className="banner" style={{
            backgroundImage: `url("https://cdn.freebiesupply.com/logos/large/2x/netflix-logo-png-transparent.png")`,
            backgroundSize: 'cover',
            backgroundPosition: "center center"
        }}>
            {/*<img src="https://wallpapercave.com/wp/wp1917118.jpg" alt="Netflix Banner Image" className=""/>*/}
        </header>
    );
};

export default Banner;
