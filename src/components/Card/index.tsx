import React from 'react';

import './styles.css';

const Card = () => {
  return (
    <div className="card-parent-container">
      <div className="card-image-container"></div>
      <div className="card-title-rating">
        <p className="card-title">title</p>
        <p className="card-rating">rating</p>
      </div>
      <p className="card-desc">description</p>
    </div>
  );
};

export default Card;
