import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { setActiveFilm, setAuthStatus, setFilms, setLoading, setUser } from './action';
import { AppDispatch } from '../hooks/hooks';
import { State } from './reducer';
import { Film, UserAuth } from '../types/types';
import { AuthorizationStatus } from '../const';
import { setToken } from '../services/token';

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

export const loginGet = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loginGet',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<UserAuth>('/login');
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
    dispatch(setUser(data));
    setToken(data.token);
  }
);

export const loginPost = createAsyncThunk<void, {email: string; password: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loginPost',
  async (info, {dispatch, extra: api}) => {
    const {data} = await api.post<UserAuth>('/login', info);
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
    dispatch(setUser(data));
    setToken(data.token);
  }
);
