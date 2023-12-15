import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/types';

export const changeGenre = createAction<string>('changeGenre');
export const getFilms = createAction('getFilms');
export const setFilmsCount = createAction<number>('setFilmsCount');
export const setFilms = createAction<Film[]>('setFilms');
export const setLoading = createAction<boolean>('setLoading');
export const setActiveFilm = createAction<Film>('setActiveFilm');
export const getGenres = createAction('getGenres');
