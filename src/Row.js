import { useEffect, useState } from "react";
import React from "react";
import axios from "./axios";
import "./Row.css";


const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setmovies] = useState([]);

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

    let handleClick = (movie) => {
        console.log(
            movie?.id,
            movie?.name || movie?.title,
            base_url + movie?.backdrop_path
        );
        return movie?.id;
    };

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            {/* container - poster */}
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${
                            isLargeRow && "row__posterLarge"
                        }`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                ))}
            </div>

            {/* movie details */}
            {/* <MovieDetails /> */}
            <h1>{console.log(movies.id)}</h1>
        </div>
    );
}

export default Row;
