import { useEffect, useState } from "react";
import React from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setmovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

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

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    // clicked item name's trailer is searched in youtube and return url if found
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
            console.log(trailerUrl);
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                    console.log(movie?.name, url);
                })
                .catch((error) => console.log(error));
        }
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
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
