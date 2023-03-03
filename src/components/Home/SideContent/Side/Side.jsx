import React from 'react';
import Slider from 'react-slick';
import { gallery } from '../../../../dummyData';
import Heading from '../../../common/Heading/Heading';
import SocialMedia from '../Social/SocialMedia';
import Tpost from '../Tpost/Tpost';

const Side = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const category = [
    'world',
    'travel',
    'sport',
    'fun',
    'health',
    'fashion',
    'business',
    'technology',
  ];
  return (
    <div>
      <Heading title="Stay Connected" />
      <SocialMedia />
      <Heading title="Subscribe" />
      <section className="subscribe">
        <h1 className="title">Subscribe to our New Stories</h1>
        <form action="">
          <input type="text" placeholder="Email Address..." />
          <button>
            <i className="fa fa-paper-plane"></i> Submit
          </button>
        </form>
      </section>
      <section className="banner">
        <img src="./images/sidebar-banner-new.jpg" className="banimg" alt="" />
      </section>
      <Tpost />

      <section className="categorys">
        <Heading title="Categorys" />
        {category.map((val) => {
          return (
            <div className="category category1">
              <span>{val}</span>
            </div>
          );
        })}
      </section>

      <section className="gallery">
        <Heading title="Gallery" />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
            );
          })}
        </Slider>
      </section>
    </div>
  );
};

export default Side;
