import React from 'react';
import Side from '../../SideContent/Side/Side';
import Life from '../Life/Life';
import Music from '../Musics/Music';
import Popular from '../Popular/Popular';
import Ppost from '../Ppost/Ppost';
import './Home.css';

const Homes = () => {
  return (
    <div>
      <main>
        <div className="container">
          <section className="mainContent">
            <Popular />
            <Ppost />
            <Life />
            <Music />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Homes;
