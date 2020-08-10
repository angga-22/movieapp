import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs } from 'antd';
import { getMovieDetails } from '../store/actions/getmoviedet';
import '../assets/styles/moviedet.scss';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
const Moviedetail = (props) => {
    // const dispatch = useDispatch()
    // const movie = useSelector(state => state.getmoviedet.getmoviedet);
    // console.log(movie)

    // useEffect(() => {
    //     dispatch(getMovieDetails(id));
    // }, []);
    // console.log("ui", movie);
    return (
        <>
            <div className='movie-detail'>
                <Tabs defaultActiveKey="1" onChange={callback} size="large">
                    <TabPane tab='Overview' key='1'>
                        {/* <div key={movie.id} className="movie-list__movie__card"> */}
                        <p>Release Date :</p>
                        <p>Director: John doe </p>
                        <p>Production House: </p>
                        <p>Languages: english </p>
                        <p>Synopsis: </p>
                        {/* </div> */}
                    </TabPane>

                    <TabPane tab='Characters' key='2'>
                        <h1>Characters for this movie </h1>
                    </TabPane>

                    <TabPane tab='Review' key='3'>
                        <form>
                            <input
                                type='text'
                                name='text'
                                value=''
                                placeholder='leave your review here'
                            />
                            <button> Submit Review </button>
                        </form>
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
}

export default Moviedetail;