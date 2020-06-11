import React from 'react';
import { Carousel } from 'antd';
import '../styles/homepage/homepage.scss';

export default () => {

    return (
        <Carousel autoplay className="movie-slider">
            <div className="movie-slider__poster">
                <img src="/images/joker.jpg"  />
            </div>
            <div className="movie-slider__poster">
                <img src="/images/gundala.jpg"  />
            </div>
            <div className="movie-slider__poster">
                <img src="/images/poster-avengers.jpg" />
            </div>
            <div className="movie-slider__poster">
                <img src="/images/saint-seiya-banner.png"/>
            </div>
        </Carousel>
    )
}