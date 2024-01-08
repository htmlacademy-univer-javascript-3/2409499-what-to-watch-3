import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectFilms = (state: Pick<State, NameSpace.Data>) => state[NameSpace.Data].films;
export const selectPromo = (state: Pick<State, NameSpace.Data>) => state[NameSpace.Data].promo;
export const selectGenre = (state: Pick<State, NameSpace.Data>) => state[NameSpace.Data].genre;
export const selectIsLoading = (state: Omit<State, NameSpace.User>) => state[NameSpace.Data].isLoading || state[NameSpace.Film].isLoading;
export const selectError = (state: Omit<State, NameSpace.User>) => state[NameSpace.Data].error || state[NameSpace.Film].isLoading;
export const selectFavoriteFilms = (state: Pick<State, NameSpace.Data>) => state[NameSpace.Data].favoriteFilms;
export const selectFavoriteFilmsCount = (state: Pick<State, NameSpace.Data>) => state[NameSpace.Data].favoriteFilmsCount;
