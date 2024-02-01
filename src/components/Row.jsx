import React, {useState, useEffect} from 'react';
import "./Row.css"
const Row = ({title, fetchUrl, isLargeRow}) => {

    const [movies, setMovies] = useState('')

    useEffect(() =>{

        

    }, [])



    return (
        <div className="row">
            <h2 className="row-title">{title}</h2>
        </div>
    );
};

export default Row;
