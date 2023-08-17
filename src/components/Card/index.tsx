import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesStart } from '../../redux/slice/movieList';
import imageNotFound from '../../assets/png/image-not-found.png';

import './styles.css';

interface cardProps {
  id: number;
  title: string;
  rating: string;
  description: string;
  image: string;
}
const Card = (props: cardProps) => {
  const { id, title, rating, description, image } = props;
  return (
    <Link to={`/details/${id}`}>
      <div className="card-parent-container">
        <div className="card-image-container">
          <img
            src={
              image
                ? `https://www.themoviedb.org/t/p/w220_and_h330_face${image}`
                : imageNotFound
            }
            alt="movie-poster"
            width={200}
            height={200}
            className="card-poster"
          />
        </div>
        <div className="card-title-rating">
          <span className="card-title">{title}</span>
          <span className="card-rating">Rated: {rating}</span>
        </div>
        <p className="card-desc">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
