import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { setActiveFilm, setFilms, setLoading } from './action';
import { AppDispatch } from '../hooks/hooks';
import { State } from './reducer';
import { Film } from '../types/types';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoading(true));
    const {data} = await api.get<Film[]>('/films');
    dispatch(setLoading(false));
    dispatch(setFilms(data));
  },
);

export const fetchFilmByID = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilmByID',
  async (id, {dispatch, extra: api}) => {
    dispatch(setLoading(true));
    const {data} = await api.get<Film>(`/films/${id}`);
    dispatch(setLoading(false));
    dispatch(setActiveFilm(data));
  },
);
