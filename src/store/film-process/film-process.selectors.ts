import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const selectFilm = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].film;
export const selectSimilarFilms = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].similarFilms;
export const selectComments = (state: Pick<State, NameSpace.Film>) => state[NameSpace.Film].comments;
