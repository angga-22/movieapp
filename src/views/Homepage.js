import React from 'react';
import MainHeader from '../components/MainHeader';
import MovieSlide from '../components/MovieSlide';
import MovieList from '../components/movie-list/MovieList';

export default () => {

    return (
        <>
            <MainHeader />
            <MovieSlide />
            <MovieList />
        </>
    )
}