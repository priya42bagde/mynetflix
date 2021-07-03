import React, { useState, useEffect } from 'react'
import "./Banner.css"
import requests from './Request';
import Axios from "./Axios"

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await Axios.get(requests.fetchNetFlixOriginals) // adding 2 url i.e, axios+request
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length) ])
            return request;
        }
        fetchData();
    }, [])

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: "center center"}}>
            <div className="banner__contents">
                <h1 className="banner__title"> {movie?.title || movie.name || movie?.orignal_name}</h1>
                <div className="banner__Buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 200)}</h1>
            </div>
            <div className="banner__fadebottom"></div>
        </div>
    )
}

export default Banner
