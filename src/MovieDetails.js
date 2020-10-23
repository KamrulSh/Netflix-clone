import React from "react";

const base_url = "https://image.tmdb.org/t/p/original";

function MovieDetails({ movie }) {
    console.log(movie.name);
    return (
        <header
            className="movieDetails"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${movie.url})`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie.name}
                </h1>
                <h3 className="banner__rating">{movie?.vote_average}</h3>
                <h3 className="banner__release">{movie?.first_air_date}</h3>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h3 className="banner__description">{movie?.overview}</h3>
            </div>
        </header>
    );
}

export default MovieDetails;
