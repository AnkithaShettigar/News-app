import React from 'react';
import './Heading.css';

const Heading = ({ title }) => {
  return (
    <div>
      <div className="heading">
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default Heading;
