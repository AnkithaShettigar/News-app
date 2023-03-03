import React from 'react';
import '../Side/Side.css';

const SocialMedia = () => {
  return (
    <div>
      <section className="social">
        <div className="socBox">
          <i class="fa-brands fa-facebook-f"></i>
          <span>17,740 Likes</span>
        </div>
        <div className="socBox">
          <i className="fab fa-pinterest"></i>
          <span>6,600 Fans</span>
        </div>
        <div className="socBox">
          <i className="fab fa-twitter"></i>
          <span>8,700 Follows</span>
        </div>
        <div className="socBox">
          <i className="fab fa-instagram"></i>
          <span>88,700 Followers</span>
        </div>
        <div className="socBox">
          <i className="fab fa-youtube"></i>
          <span>2,700 Subscribers</span>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;
