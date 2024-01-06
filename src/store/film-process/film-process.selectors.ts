import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const selectFilm = (state: State) => state[NameSpace.Film].film;
export const selectSimilarFilms = (state: State) => state[NameSpace.Film].similarFilms;
export const selectComments = (state: State) => state[NameSpace.Film].comments;
