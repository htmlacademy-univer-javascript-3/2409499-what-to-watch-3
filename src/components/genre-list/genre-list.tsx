import { useDispatch } from 'react-redux';
import { changeGenre } from '../../store/action';
import { useAppSelector } from '../../hooks/hooks';
import { useMemo } from 'react';

function GenreList(): JSX.Element {
  const dispatch = useDispatch();
  const films = useAppSelector((state) => state.films);

  const genres = useMemo(() => ['All genres'].concat(Array.from(new Set(films.map((film) => film.genre)))), [films]);
  const activeGenre = useAppSelector((state) => state.genre);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className={`catalog__genres-item ${genre === activeGenre ? 'catalog__genres-item--active' : ''}`} key={genre}>
          <button style={{ backgroundColor: 'transparent', border: 0 }} className='catalog__genres-link'
            onClick={() => dispatch(changeGenre(genre))}>
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
