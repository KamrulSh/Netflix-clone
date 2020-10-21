import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    //console.log(movie);

    function truncateString(str, num) {
        // just return str--don't truncate it.
        // Return str truncated with '...' concatenated to the end of str.
        return str?.length <= num ? str : str?.slice(0, num) + "...";
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.name || movie?.title || movie?.original_name}
                </h1>
                <h3 className="banner__rating">{movie?.vote_average}</h3>
                <h3 className="banner__release">{movie?.first_air_date}</h3>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h3 className="banner__description">
                    {truncateString(movie?.overview, 200)}
                </h3>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    );
}

export default Banner;
