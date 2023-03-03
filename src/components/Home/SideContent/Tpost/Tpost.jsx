import React from 'react';
import './Tpost.css';
import Heading from '../../../common/Heading/Heading';
import { tpost } from '../../../../dummyData';

const Tpost = () => {
  return (
    <div>
      <section className="tpost">
        <Heading title="Tiktok Post" />
        {tpost.map((val) => {
          return (
            <div className="boxz flexSB">
              <div className="img ">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <h1 className="title">{val.title.slice(0, 35)}...</h1>
                <span>a year ago</span>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Tpost;
