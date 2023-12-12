import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilms } from './action';
import { Film, films } from '../mocks/films';

export type State = {
  genre: string;
  films: Film[];
};

const initialState: State = {
  genre: 'All genres',
  films: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilms, (state) => {
      state.films = films.filter((film) => state.genre === 'All genres' || film.details.genre === state.genre);
    });
});
