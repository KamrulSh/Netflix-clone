import { useEffect, useState } from "react";
import React from "react";
import axios from "./axios";
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setmovies] = useState([]);

    // a snippet of code which runs based on a specific condition

    useEffect(() => {
        // if [], then rum once and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //console.log(request);
            setmovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    //console.log(movies);

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            {/* container - poster */}
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
