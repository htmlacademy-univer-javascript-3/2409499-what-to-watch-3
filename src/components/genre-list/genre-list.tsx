import { Film } from '../../mocks/films';
import { useDispatch } from 'react-redux';
import { changeGenre } from '../../store/action';

type GenreListProps = {
  films: Film[];
  activeGenre: string;
}

function GenreList({films, activeGenre}: GenreListProps): JSX.Element {
  const genres = ['All genres'].concat(Array.from(new Set(films.map((film) => film.details.genre))));
  const dispatch = useDispatch();

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li className={`catalog__genres-item ${genre === activeGenre ? 'catalog__genres-item--active' : ''}`} key={genre}>
          <button className='catalog__genres-link' onClick={() => dispatch(changeGenre(genre))}>
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;