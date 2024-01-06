import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { ErrorDetails, Film, User } from './types';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authStatus: AuthorizationStatus;
  user: User | null;
  error: ErrorDetails | null;
};

export type FilmProcess = {
  films: Film[];
  activeFilm: Film | null;
  promoFilm: Film | null;
  similarFilms: Film[];
  isLoading: boolean;
  hasError: boolean;
}
