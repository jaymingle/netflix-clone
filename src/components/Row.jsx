import React, {useState, useEffect} from 'react';
import "./Row.css"
import axios from '../axios'
import requests from "../Requests";
const Row = ({title, fetchUrl, isLargeRow = false}) => {

    const [movies, setMovies] = useState([])

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

            ))}
        </div>
    );
};

export default Row;
