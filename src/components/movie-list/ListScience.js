import React from 'react';
import MainHeader from '../MainHeader';
import MovieSlide from '../MovieSlide';
import MovieList from './MovieList';

export default () => {

    return (
        <>
            <MainHeader />
            <MovieSlide />
            <MovieList />
            <div>
                <h1>science</h1>
            </div>
        </>
    )
}