import React from 'react';
import Discover from './Discover/Discover';
import Hero from './Hero/Hero';
import Homes from './mainContent/Homes/Homes';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Homes />
      <Discover />
    </div>
  );
};

export default Homepage;
