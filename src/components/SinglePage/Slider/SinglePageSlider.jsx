import React from 'react';
import Slider from 'react-slick';
import { popular } from '../../../dummyData';
import './SinglePageSlider.css';

const SinglePageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="singlePopular">
        <Slider {...settings}>
          {popular.map((val) => {
            return (
              <div className="items">
                <div className="boxz">
                  <div className="images ">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="category category1">
                      <span>{val.catgeory}</span>
                    </div>
                  </div>
                  <div className="text ">
                    <h1 className="title">{val.title}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </div>
  );
};

export default SinglePageSlider;
