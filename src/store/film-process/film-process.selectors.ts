import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const selectFilm = (state: State) => state[NameSpace.Films].film;
export const selectSimilarFilms = (state: State) => state[NameSpace.Films].similarFilms;
export const selectComments = (state: State) => state[NameSpace.Films].comments;
