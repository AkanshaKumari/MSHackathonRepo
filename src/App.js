import React, { useEffect, useState } from "react";
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
import './App.css';

const APIURL = "https://imdb-api.com/API/Search/k_79pw46rj"
//const APIURL = "http://www.omdbapi.com?apikey=70b59460"

const App = () =>{
    const [movieName, setMovieName] = useState("");
    const [movies, setMovies] = useState([]);

    const SearchMovies = async (title)=>{
        //const response = await fetch(`${APIURL}/${title}`);
        const response = await fetch(`${APIURL}/${title}`);
        const data = await response.json();

        setMovies(data.results);
    };

    useEffect(()=>{
        SearchMovies('Inception2010');
        
    },[]);

    return(
        <div className="app">

            <h1>Movies/TV shows</h1>
            <div className="search">
                <input 
                placeholder="Enter movie/series name" 
                value={movieName} 
                onChange={(e)=>{setMovieName(e.target.value)}}/>
                <img src={SearchIcon} alt="search" onClick={() => {SearchMovies(movieName)}}/>
            </div>
            { 
                movies.length > 0 ?
                (
                <div className="container">
                    {movies.map((movie)=>
                    (
                    <MovieCard movie={movie}></MovieCard>
                    )
                    )}
               </div>
                ):
                (
                    <div className="empty">
                        <h1>No results found</h1>
                    </div>
                )
            }
        </div>
    );
};

export default App;