import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import { useMemo } from 'react';
import { selectFilms, selectGenre } from '../../store/data-process/data-process.selectors';
import { changeGenre } from '../../store/data-process/data-process';

function GenreList(): JSX.Element {
  const dispatch = useDispatch();
  const films = useAppSelector(selectFilms);

  const genres = useMemo(() => ['All genres'].concat(Array.from(new Set(films.map((film) => film.genre))).slice(0, 9)), [films]);
  const activeGenre = useAppSelector(selectGenre);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className={`catalog__genres-item ${genre === activeGenre ? 'catalog__genres-item--active' : ''}`} key={genre}>
          <button style={{ backgroundColor: 'transparent', border: 0 }} className='catalog__genres-link'
            onClick={() => dispatch(changeGenre(genre))}
          >
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
