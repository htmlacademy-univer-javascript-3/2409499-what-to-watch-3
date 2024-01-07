import {AxiosError, AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state';
import { State } from '../types/state';
import { Film, UserAuth, Comment, AuthData, ErrorDetails, User } from '../types/types';
import { removeToken, setToken } from '../services/token';

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film[]>('/films');
    return data;
  },
);

export const fetchFilmByID = createAsyncThunk<Film, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilmByID',
  async (id: string, {extra: api}) => {
    const {data} = await api.get<Film>(`/films/${id}`);
    return data;
  },
);

export const loginGet = createAsyncThunk<UserAuth, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ErrorDetails | undefined;
}>(
  'loginGet',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<UserAuth>('/login');
      return data;
    } catch (err) {
      const error = err as AxiosError<ErrorDetails>;
      throw rejectWithValue(error.response?.data);
    }
  }
);

export const loginPost = createAsyncThunk<User, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ErrorDetails | undefined;
}>(
  'loginPost',
  async (info, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<UserAuth>('/login', info);
      setToken(data.token);
      return data;
    } catch (err) {
      const error = err as AxiosError<ErrorDetails>;
      throw rejectWithValue(error.response?.data);
    }
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {extra: api}) => {
    await api.delete('/logout');
    removeToken();
  }
);

export const fetchPromo = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchPromo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film>('/promo');
    return data;
  },
);

export const fetchComments = createAsyncThunk<Comment[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`/comments/${id}`);
    return data;
  }
);

export const fetchSimilarFilms = createAsyncThunk<Film[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSimilarFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<Film[]>(`/films/${id}/similar`);
    return data;
  }
);

export const commentPost = createAsyncThunk<void, {filmId: string; commentRequest:{comment: string; rating: number}}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'commentPost',
  async ({filmId, commentRequest}, {extra: api}) => {
    await api.post(`/comments/${filmId}`, commentRequest);
  }
);

export const fetchFavoriteFilms = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavoriteFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film[]>('/favorite');
    return data;
  }
);

export const setFavorite = createAsyncThunk<Film, {status: boolean; filmId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  '/favorite/id/status',
  async ({status, filmId}, {extra: api}) => {
    const {data} = await api.post<Film>(`/favorite/${filmId}/${status ? 1 : 0}`);
    return data;
  },
);
