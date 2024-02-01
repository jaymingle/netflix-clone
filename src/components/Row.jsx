import React, {useState, useEffect} from 'react';
import "./Row.css"
import axios from '../axios'
import requests from "../Requests";
const Row = ({title, fetchUrl, isLargeRow}) => {

    const [movies, setMovies] = useState([])

    useEffect(() =>{

        const fetchData = async() => {
            const request = await axios.get(fetchUrl)
            // console.log(request)
            setMovies(
                request.data.results
            )
            console.log(movies)
            return request;
        }

        fetchData()

    }, [])



    return (
        <div className="row">
            <h2 className="row-title">{title}</h2>

        </div>
    );
};

export default Row;
