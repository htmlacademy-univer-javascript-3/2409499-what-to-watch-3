import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectFilms = (state: State) => state[NameSpace.Data].films;
export const selectPromo = (state: State) => state[NameSpace.Data].promo;
export const selectGenre = (state: State) => state[NameSpace.Data].genre;
export const selectIsLoading = (state: State) => state[NameSpace.Data].isLoading || state[NameSpace.Film].isLoading;
export const selectError = (state: State) => state[NameSpace.Data].error || state[NameSpace.Film].isLoading;
export const selectFavoriteFilms = (state: State) => state[NameSpace.Data].favoriteFilms;
export const selectFavoriteFilmsCount = (state: State) => state[NameSpace.Data].favoriteFilmsCount;
