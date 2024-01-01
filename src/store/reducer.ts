import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilms, setFilmsCount, setFilms, setActiveFilm, setLoading, getGenres, setAuthStatus, setUser, setPromo, setComments, setError } from './action';
import { Film, Promo, User, Comment } from '../types/types';
import { AuthorizationStatus } from '../const';

export type State = {
  genre: string;
  allGenres: string[];
  films: Film[];
  filmsCount: number;
  isLoading: boolean;
  filteredFilms: Film[];
  activeFilm: Film | null;
  authStatus: AuthorizationStatus;
  user: User | null;
  promoFilm: Promo | null;
  comments: Comment[];
  similarFilms: Film[];
  error: string | null;
};

const initialState: State = {
  genre: 'All genres',
  allGenres: ['All genres'],
  films: [],
  filmsCount: 8,
  isLoading: false,
  filteredFilms: [],
  activeFilm: null,
  authStatus: AuthorizationStatus.Unknown,
  user: null,
  promoFilm: null,
  comments: [],
  similarFilms: [],
  error: null,
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
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setPromo, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});