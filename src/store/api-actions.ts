import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { setActiveFilm, setAuthStatus, setComments, setFilms, setLoading, setPromo, setSimilarFilms, setUser } from './action';
import { AppDispatch } from '../types/state';
import { State } from './reducer';
import { Film, Promo, UserAuth, Comment, AuthData } from '../types/types';
import { AuthorizationStatus } from '../const';
import { removeToken, setToken } from '../services/token';

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
    try {
      const {data} = await api.get<UserAuth>('/login');
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
      dispatch(setUser(data));
      setToken(data.token);
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginPost = createAsyncThunk<void, AuthData, {
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

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete('/logout');
    removeToken();
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  }
);

export const fetchPromo = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoading(true));
    const {data} = await api.get<Promo>('/promo');
    dispatch(setLoading(false));
    dispatch(setPromo(data));
  }
);

export const fetchComments = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (id, {dispatch, extra:api}) => {
    dispatch(setLoading(true));
    const {data} = await api.get<Comment[]>(`/comments/${id}`);
    dispatch(setLoading(false));
    dispatch(setComments(data));
  }
);

export const fetchSimilarFilms = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSimilarFilms',
  async (id, {dispatch, extra:api}) => {
    dispatch(setLoading(true));
    const {data} = await api.get<Film[]>(`/films/${id}/similar`);
    dispatch(setLoading(false));
    dispatch(setSimilarFilms(data));
  }
);

export const commentPost = createAsyncThunk<void, {filmId: string; commentRequest:{comment: string; rating: number}}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'commentPost',
  async ({filmId, commentRequest}, {extra:api}) => {
    await api.post(`/comments/${filmId}`, commentRequest);
  }
);
