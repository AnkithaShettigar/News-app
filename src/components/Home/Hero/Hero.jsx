import React, { useState } from 'react';
import { hero } from '../../../dummyData';
import Card from './Card';
import './Hero.css';

const Hero = () => {
  const [items, setItems] = useState(hero);
  console.log(setItems);
  return (
    <div>
      <section className="hero">
        <div className="container">
          {items.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Hero;
