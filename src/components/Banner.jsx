import React, {useState, useEffect} from 'react';
import './Banner.css'
import axios from "../axios"
import requests from "../Requests";

const Banner = () => {

    // const API_KEY = import.meta.env.VITE_IMBD_API_KEY
    const [movie, setMovie] = useState([])

    useEffect(() =>{

        //fetching data from imdb api function
        const fetchData = async() => {
            try{
                const request = await axios.get(requests.fetchNetflixOriginals)
                setMovie(
                    //selecting random movie out of the movie list
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length - 1)
                        ]
                );
                return request;

            }catch(err){
                handleError(err)
            }
        }
        fetchData()
    }, [])

    //error handling function when fetching data
    const handleError = e => {
        throw new Error('Error fetching data: ', e)
    }

    //Using fetch to get the Data
    // const fetchData = async() => {
    //     try{
    //         // const response = await fetch(`https://api.themoviedb.org/3/movie/11?api_key=${API_KEY}`)
    //         const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    //         const data = await response.json()
    //         console.log(data);
    //     }catch(err){
    //         handleError(err)
    //     }
    // }

    //Truncate a description text
    const truncateDescription = (string, n) => {
        return string?.length > n - 1 ? string.substring(0, n - 1) + '...' : string
    }

    return (
        <header className="banner" style={{
            // backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: "center center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncateDescription(`${movie?.overview}`, 150)}
                </h1>
            </div>
            <div className="banner-fadeBottom"/>
        </header>
    );
};

export default Banner;
