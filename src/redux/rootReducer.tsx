import { UsersStateType } from './types';
import moviesListSlice from './slice/movieList';

export type StateType = {
  users: UsersStateType;
};

const rootReducers = {
  users: moviesListSlice,
};

export default rootReducers;
