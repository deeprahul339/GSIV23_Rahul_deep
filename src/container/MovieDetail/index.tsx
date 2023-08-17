import React from 'react';

import image from '../../assets/png/image-not-found.png';
import './styles.css';

const MovieDetail = () => {
  //   a. Movie Title
  // b. Rating (average vote)
  // c. Year of release
  // d. Length (HH:MM)
  // e. Director
  // f. Cast (Comma separated list of actors)
  // g. Description

  return (
    <div className="m-detail-parentContainer">
      <div>
        <img
          src={image}
          alt="movie-poster"
          height={100}
          width={100}
          className="m-detail-image"
        />
      </div>
      <div>
        <div className="m-detail-titleAndRating">
          <span>title</span>
          <span>(rating)</span>
        </div>
        <div className="m-detail-length">
          <span>Year</span>&nbsp;| &nbsp;<span>Length</span>&nbsp;|&nbsp;
          <span>Director</span>
        </div>
        <div>
          <span>Cast: Actor 1, actor 2</span>
        </div>
        <p>description:defwfmnwefn,wmenfm,wenf,enf,me</p>
      </div>
    </div>
  );
};

export default MovieDetail;
