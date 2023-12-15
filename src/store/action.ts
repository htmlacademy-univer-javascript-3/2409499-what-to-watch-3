import { createAction } from '@reduxjs/toolkit';
import { Film, User } from '../types/types';
import { AuthorizationStatus } from '../const';

export const changeGenre = createAction<string>('changeGenre');
export const getFilms = createAction('getFilms');
export const setFilmsCount = createAction<number>('setFilmsCount');
export const setFilms = createAction<Film[]>('setFilms');
export const setLoading = createAction<boolean>('setLoading');
export const setActiveFilm = createAction<Film>('setActiveFilm');
export const getGenres = createAction('getGenres');
export const setAuthStatus = createAction<AuthorizationStatus>('setAuthStatus');
export const setUser = createAction<User | null>('setUser');
