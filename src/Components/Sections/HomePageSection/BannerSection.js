/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Slider from "react-slick";
import './home.css';
import sliderthird from '../../../Images/sliderthird.jpeg';

const BannerSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="bannerSecStart">
            <div className='slidersectiondiv'>
            <Slider {...settings}>
                <div>
                    <img src={sliderthird} alt='sliderfirst'/>
                </div>
                <div>
                <img src={sliderthird} alt='sliderthird'/>
                </div>
                <div>
                <img src={sliderthird} alt='sliderfirst'/>
                </div>

            </Slider>
            </div>
        </div>
    );
}

export default BannerSection