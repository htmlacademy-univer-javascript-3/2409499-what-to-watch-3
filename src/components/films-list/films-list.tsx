import FilmCard from '../film-card/film-card';
import { Film } from '../../mocks/films';
// import {useState} from 'react';

export type FilmListProps = {
  films: Film[];
}

function WrapFilm(film: Film): JSX.Element {
  return (
    <FilmCard film={film} key={film.id}/>
  );
}

function FilmsList({ films }: FilmListProps): JSX.Element {
  // const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="catalog__films-list">
      {films.map(WrapFilm)}
    </div>
  );
}

export default FilmsList;
