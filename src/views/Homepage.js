import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMovies } from '../store/actions/movies';
import MainHeader from '../components/MainHeader';
import MovieSlide from '../components/MovieSlide';
import Footer from '../components/Footer';
import "../assets/styles/homepage/homepage.scss";
import useModal from '../components/modal/useModal';
import Modal from '../components/modal/Modal';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";


const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}

const Homepage = (props) => {
    console.log(props, "myPROPS")
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies, []) || [];
    // const movies_action = useSelector(state => state.movies_action.movies_action)
    const { isShowing, toggle } = useModal();

    useEffect(() => {
        dispatch(fetchAllMovies());
    }, []);
    console.log(movies);
    return (
        <>
            <MainHeader />
            <div className="homepage-modal">
                <button className="button-default" onClick={toggle}>SIGN IN</button>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />
            </div>
            <MovieSlide />
            <div className='movie-list'>
                <div className='movie-list__title'>
                    <h1>Browse by Category</h1>
                </div>
                <Tabs defaultActiveKey="1" onChange={callback} size="large">
                    <TabPane tab="All" key="1" className="movie-list__movie">
                        {movies.results && movies.results.map(movie =>
                            <Link to={`/${movie.title}`}>
                                <div key={movie.id} className="movie-list__movie__card">
                                    <img src={movie.poster} alt={movie.id} />
                                    <h1>{movie.title}</h1>
                                </div>
                            </Link>
                        )}
                    </TabPane>
                    <TabPane tab="Actions" key="2" className="movie-list__movie">
                        {/* {movies_action.map(movie =>
                            <Link to={`/${movie.title}`}>
                                <div key={movie.id} className="movie-list__movie__card">
                                    <img src={movie.image} alt={movie.id} />
                                    <h1>{movie.title}</h1>
                                </div>
                            </Link>
                        )} */}
                    </TabPane>
                    <TabPane tab="Adventure" key="3" className="movie-list__movie">
                        <h1>Adventure</h1>
                    </TabPane>
                    <TabPane tab="Science Fiction" key="4" className="movie-list__movie">
                        <h1>Science Fiction</h1>
                    </TabPane>
                    <TabPane tab="Comedy" key="5" className="movie-list__movie">
                        <h1>Comedy</h1>
                    </TabPane>
                </Tabs>
            </div>
            <Footer />
        </>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         homePayload: state.Homepage
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         getMovies
//     }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
export default Homepage;