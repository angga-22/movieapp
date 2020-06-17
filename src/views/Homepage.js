import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMovies } from '../store/actions/movies';
import MovieSlide from '../components/MovieSlide';
import "../assets/styles/homepage/homepage.scss";

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}

const Homepage = (props) => {
    console.log(props, "myPROPS")
    //get movies
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);
    useEffect(() => {
        dispatch(fetchAllMovies());
    }, []);
    console.log("ui", movies);

    return (
        <>
            <MovieSlide />
            <div className='movie-list'>
                <div className='movie-list__title'>
                    <h1>FIND YOUR FAVORITE MOVIE!</h1>
                </div>
                <Tabs defaultActiveKey="1" onChange={callback} size="large">
                    <TabPane key="1" className="movie-list__movie">
                        {movies && movies.map(movie =>
                            <Link to={`/${movie.id}`}>
                                <div key={movie.id} className="movie-list__movie__card">
                                    <img src={movie.poster} alt={movie.id} />
                                    <h1>{movie.title}</h1>
                                </div>
                            </Link>
                        )}
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
}

export default Homepage;