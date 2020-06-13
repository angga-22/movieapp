import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
export default (props) => {
    const movies = useSelector(state => state.movies.movies)

    return (
        <>
            <div className='movie-list'>
                <div className='movie-list__title'>
                    <h1>Browse by category</h1>
                </div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="All" key="1">
                        {movies.map(movie =>
                            <Link to={`/${movie.id}`}>
                                <div key={movie.id} className="card">
                                    <img src={movie.image} alt={movie.id} />
                                    <h3>{movie.title}</h3>
                                </div>
                            </Link>
                        )}
                    </TabPane>
                    <TabPane tab="Actions" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Adventure" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="Science Fiction" key="4">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Comedy" key="5">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
                {/* <div className='movie-list__linkto'>
                    <Link to='/:movies' style={{ fontSize: '20px', color: '#432A1C', paddingLeft: 20 }}>All</Link>
                    <Link to='/actions' style={{ fontSize: '20px', color: '#432A1C', paddingLeft: 20 }}>Actions</Link>
                    <Link to='/adventure' style={{ fontSize: '20px', color: '#432A1C', paddingLeft: 20 }}>Adventure</Link>
                    <Link to='/science' style={{ fontSize: '20px', color: '#432A1C', paddingLeft: 20 }}>Science Fiction</Link>
                    <Link to='/comedy' style={{ fontSize: '20px', color: '#432A1C', paddingLeft: 20 }}>Comedy</Link>
                </div> */}
            </div>
        </>
    )
}