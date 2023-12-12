import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('changeGenre');
export const getFilms = createAction('getFilms');
export const setFilmsCount = createAction<number>('setFilmsCount');
