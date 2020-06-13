import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainHeader from '../MainHeader';
import MovieSlide from '../MovieSlide';
import MovieList from './MovieList';
import Footer from '../Footer';

export default (props) => {
    const movies = useSelector(state => state.movies.movies)

    return (
        <>
            <MainHeader />
            <MovieSlide />
            <MovieList />
            <div>
                <h1>Movie List</h1>
                {movies.map(movie =>
                    <Link to={`/${movie.title}`}>
                        <div key={movie.id} className="card">
                            <img src={movie.image} alt={movie.id} />
                            <h3>{movie.title}</h3>
                        </div>
                    </Link>
                )}
            </div>
            <Footer />
        </>
    )
}