import FilmCard from '../film-card/film-card';
import { Film } from '../../types/types';
import { useState } from 'react';

export type FilmListProps = {
  films: Film[];
}

function FilmsList({ films }: FilmListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Film | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          film={film} key={film.id} isHovered={activeCard?.id === film.id}
          onMouseEnter={() => setActiveCard(film)}
          onMouseLeave={() => setActiveCard(null)}
        />
      ))}
    </div>
  );
}

export default FilmsList;
