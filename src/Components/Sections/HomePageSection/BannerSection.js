import React from 'react';
import Slider from "react-slick";
import sliderfirst from '../../../Images/sliderfirst.jpeg';
import sliderthird from '../../../Images/sliderthird.jpeg'


const BannerSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="bannerSecStart">
            <Slider {...settings}>
                <div>
                    <img src={sliderfirst} />
                </div>
                <div>
                <img src={sliderthird} />
                </div>
                <div>
                <img src={sliderfirst} />
                </div>
                <div>
                <img src={sliderthird} />
                </div>

            </Slider>
        </div>
    );
}

export default BannerSection