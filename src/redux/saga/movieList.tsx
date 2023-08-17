import { PayloadAction } from '@reduxjs/toolkit';

import { put, takeLatest, call } from 'redux-saga/effects';
import { UserType, GET_MOVIES_LIST } from '../types';

import {
  fetchMoviesSuccess,
  fetchMoviesStart,
  fetchMoviesFailure,
  searchMoviesSuccess,
  searchMoviesStart,
  searchMoviesFailure,
} from '../slice/movieList';

// Generator function
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: '',
  },
};

interface response {
  id: number;
}
interface IPerformanceData {
  name: string;
}
interface ResponseData {
  id: number;
  json: () => void;
  // Define other properties of the response data
}

const getMovieList = async () => {
  return await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    options
  ).then((data) => {
    return data.json().then((value) => {
      return value;
    });
  });
};
const getMovieSearchList = async (query: string) => {
  return await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  ).then((data) => {
    return data.json().then((value) => {
      return value;
    });
  });
};

function* fetchMoviesSaga() {
  try {
    const response: ResponseData = yield call(getMovieList);
    console.log('res', response);
    yield put(fetchMoviesSuccess(response));
  } catch (error: any) {
    console.log('error', error);
    yield put(fetchMoviesFailure(error.message));
  }
}

function* fetchMovieSearchSaga(action: any) {
  console.log('action', action.payload);
  try {
    // const response: ResponseData = yield call(getMovieSearchList(action));
    // yield put(searchMoviesSuccess(response));
  } catch (error: any) {
    yield put(searchMoviesFailure(error.message));
  }
}

export function* watchSearchMovies() {
  yield takeLatest(searchMoviesStart, fetchMovieSearchSaga);
}

// Generator function
export function* watchGetMoviesData() {
  yield takeLatest(fetchMoviesStart, fetchMoviesSaga);
}
