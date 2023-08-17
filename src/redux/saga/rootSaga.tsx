import { all, fork } from 'redux-saga/effects';
import { watchGetMoviesData, watchSearchMovies } from './movieList';

const rootSaga = function* () {
  yield all([fork(watchGetMoviesData), fork(watchSearchMovies)]);
};

export default rootSaga;
