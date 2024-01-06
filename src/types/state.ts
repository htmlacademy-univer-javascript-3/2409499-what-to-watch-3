import { SerializedError } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Comment, ErrorDetails, Film, Promo, User } from './types';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authStatus: AuthorizationStatus;
  user: User | null;
  error: ErrorDetails | null;
};

export type FilmProcess = {
  film: Film | null;
  similarFilms: Film[];
  comments: Comment[];
  isLoading: boolean;
  error: SerializedError | null;
}

export type DataProcess = {
  films: Film[];
  promo: Promo | null;
  genre: string;
  isLoading: boolean;
  error: SerializedError | null;
}
