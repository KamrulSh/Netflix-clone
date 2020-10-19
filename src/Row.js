import { useEffect, useState } from "react";
import React from "react";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
    const [movies, setmovies] = useState([]);

    // a snippet of code which runs based on a specific condition

    useEffect(() => {
        // if [], then rum once and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setmovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            {/* container - poster */}
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        className="row__poster"
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
