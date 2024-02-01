import React, {useState, useEffect} from 'react';
import './Banner.css'

const Banner = () => {

    const api_key = import.meta.env.IMBD_API_KEY

    useEffect(() =>{
        fetchData()
    }, [])

    //error handling function when fetching data
    const handleError = e => {
        throw new Error('Error fetching data: ', e)
    }

    //fetching data from imdb api function
    const fetchData = async() => {
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/11?api_key=c42c8f59d63952f7b8466fd374ff1dfb`)
            const data = await response.json()
            console.log(data);
        }catch(err){
            handleError(err)
        }
    }

    //Truncate a description text
    const truncateDescription = (string, n) => {
        return string?.length > n - 1 ? string.substring(0, n - 1) + '...' : string
    }

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
                <h1 className="banner_description">
                    {truncateDescription(`
                        This is a test description. This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    This is a test description.This is a test description.This is a test description.
                    `, 150)}
                </h1>
            </div>
            <div className="banner-fadeBottom"/>
        </header>
    );
};

export default Banner;
