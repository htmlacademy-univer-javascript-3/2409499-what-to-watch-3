import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilms, setFilmsCount, setFilms, setActiveFilm, setLoading, getGenres } from './action';
import { Film } from '../types/types';

export type State = {
  genre: string;
  allGenres: string[];
  films: Film[];
  filmsCount: number;
  isLoading: boolean;
  filteredFilms: Film[];
  activeFilm: Film | null;
};

const initialState: State = {
  genre: 'All genres',
  allGenres: ['All genres'],
  films: [],
  filmsCount: 8,
  isLoading: false,
  filteredFilms: [],
  activeFilm: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilms, (state) => {
      state.filteredFilms = state.films.filter((film) => state.genre === 'All genres' || film.genre === state.genre);
    })
    .addCase(setFilmsCount, (state, action) => {
      state.filmsCount = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setActiveFilm, (state, action) => {
      state.activeFilm = action.payload;
    })
    .addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(getGenres, (state) => {
      state.allGenres = ['All genres'].concat(Array.from(new Set(state.films.map((film) => film.genre))));
    });
});
