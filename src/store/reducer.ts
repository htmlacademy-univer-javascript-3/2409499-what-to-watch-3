import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilms, setFilmsCount } from './action';
import { Film, films } from '../mocks/films';

export type State = {
  genre: string;
  films: Film[];
  filmsCount: number;
};

const initialState: State = {
  genre: 'All genres',
  films: [],
  filmsCount: 8
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilms, (state) => {
      state.films = films.filter((film) => state.genre === 'All genres' || film.details.genre === state.genre);
    })
    .addCase(setFilmsCount, (state, action) => {
      state.filmsCount = action.payload;
    });
});
