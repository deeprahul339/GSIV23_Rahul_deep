import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MOVIE_LIST, UsersStateType, UserType } from '../types';

// const usersInitialState: UsersStateType = {
//   user: {
//     data: null,
//     isLoading: false,
//     errors: '',
//   },
// };

// export const movieListSlice = createSlice({
//   name: MOVIE_LIST,
//   initialState: usersInitialState,
//   reducers: {
//     getUserAction: (
//       state: UsersStateType,
//       { payload: id }: PayloadAction<string>
//     ) => {
//       state.user.isLoading = true;
//       state.user.errors = '';
//     },
//     getUserSuccessAction: (
//       state: UsersStateType,
//       { payload: user }: PayloadAction<UserType>
//     ) => {
//       state.user.isLoading = false;
//       state.user.data = user;
//     },
//     getUserErrorAction: (
//       state: UsersStateType,
//       { payload: error }: PayloadAction<string>
//     ) => {
//       state.user.isLoading = false;
//       state.user.errors = error;
//     },
//   },
// });
// export const { getUserAction, getUserSuccessAction, getUserErrorAction } =
//   movieListSlice.actions;

// export default movieListSlice.reducer;

const moviesListSlice = createSlice({
  name: MOVIE_LIST,
  initialState: {
    query: '',
    moviesData: { moviesList: [], total_pages: 0, total_results: 0 },
    loading: false,
    error: null,
  },
  reducers: {
    fetchMoviesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess: (state, action) => {
      const { results, total_pages, total_results } = action.payload;
      state.loading = false;
      state.moviesData.moviesList = results;
      state.moviesData.total_pages = total_pages;
      state.moviesData.total_results = total_results;
    },
    fetchMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    searchMoviesStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    searchMoviesSuccess: (state, action) => {
      state.loading = false;
      const { results, total_pages, total_results } = action.payload;
      state.loading = false;
      state.moviesData.moviesList = results;
      state.moviesData.total_pages = total_pages;
      state.moviesData.total_results = total_results;
    },
    searchMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setQuery: (state, action) => {
      console.log('qu', action.payload);
      state.query = action.payload;
    },
  },
});
export const {
  searchMoviesStart,
  searchMoviesSuccess,
  searchMoviesFailure,
  setQuery,
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesFailure,
} = moviesListSlice.actions;

export default moviesListSlice.reducer;
