import React, {useState, useEffect} from 'react';
import "./Row.css"
import axios from '../axios'
import requests from "../Requests";
const Row = ({title, fetchUrl, isLargeRow = false}) => {

    const [movies, setMovies] = useState([])

    const baseURL = "https://image.tmdb.org/t/p/original"

    useEffect(() =>{

        const fetchData = async() => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }

        fetchData()

    }, [fetchUrl])

    console.log(movies)


    return (
        <div className="row">
            <h2 className="row-title">{title}</h2>
            {movies.map(movie => (
                <img className={`row_poster ${isLargeRow && "row_posterLarge" }`} key={movie.id} src={`${baseURL}${isLargeRow ? movie?.poster_path : movie.backdrop_path}`} alt={movie?.name}/>
            ))}
        </div>
    );
};

export default Row;
