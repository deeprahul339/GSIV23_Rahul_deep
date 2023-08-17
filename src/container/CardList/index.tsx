import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesStart } from '../../redux/slice/movieList';

import { MoviesData, data2 } from '../constants';

import Card from '../../components/Card';

import './styles.css';

const CardList = () => {
  const dispatch = useDispatch();
  const moviesData = useSelector((state: any) => state.users.moviesData);
  const { moviesList, total_pages, total_results } = moviesData;
  console.log('up', moviesList);
  useEffect(() => {
    dispatch(fetchMoviesStart());
  }, [dispatch]);

  return (
    <div className="cardList-parent-Container">
      <div className="cardList-card">
        {moviesList.map((movie: any) => (
          <Card
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average}
            description={movie.overview}
            image={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
