import React from 'react';
import { Link } from 'react-router-dom';

export default () => {

    return (
        <>
            <div className='movie-list'>
                <div className='movie-list__title'>
                    <h1>Browse by category</h1>
                </div>
                <div className='movie-list__linkto'>
                    <Link to='/all' style={{ color: '#f2dfd0' }}>All</Link>
                    <Link to='/actions' style={{ color: '#f2dfd0', paddingLeft: 12 }}>Actions</Link>
                    <Link to='/adventure'>Adventure</Link>
                    <Link to='/science'>Science Fiction</Link>
                    <Link to='/comedy'>Comedy</Link>
                </div>
            </div>
        </>
    )
}